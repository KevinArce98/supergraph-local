import { ApolloServer } from '@apollo/server';
import express from 'express';
import http from 'http';
import responseCachePlugin from '@apollo/server-plugin-response-cache';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import bodyParser from 'body-parser';
import AuthenticatedDataSource from './authenticatedData';
import { getToken, getUserId } from './utils';

export const startServer = async (port: number) => {
  const app = express();
  const httpServer = http.createServer(app);

  const gateway = new ApolloGateway({
    buildService: ({ url }) => new AuthenticatedDataSource({ url }),
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: 'item', url: 'http://localhost:4003/graphql' },
        { name: 'location', url: 'http://localhost:4002/graphql' },
        { name: 'store', url: 'http://localhost:4001/graphql' },
        { name: 'price', url: 'http://localhost:4004/graphql' },
      ],
      subgraphHealthCheck: true,
    }),
  });

  const serverOptions = {
    rejectUnauthorized: false,
    plugins: [
      responseCachePlugin({
        sessionId: (requestContext) =>
          getUserId(
            requestContext.request.http?.headers.get('authorization') ?? ''
          ) || null,
      }),
    ],
  };

  const server = new ApolloServer({
    ...serverOptions,
    gateway,
  });

  await server.start();

  app.use(
    '/',
    cors({ origin: true, credentials: true }),
    bodyParser.json({ limit: '50mb' }),
    expressMiddleware(server, {
      context: async ({ req }) => {
        return {
          token: getToken(req.headers.authorization ?? '') ?? '',
        };
      },
    })
  );

  await new Promise((resolve) =>
    httpServer.listen({ port }, () => resolve(''))
  );
  console.log(`🚀 Server ready at http://localhost:${port}/`);
};
