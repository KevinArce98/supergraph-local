import { RemoteGraphQLDataSource } from '@apollo/gateway';

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }: any) {
    if (context.token) {
      request.http.headers.set('Authorization', `Bearer ${context.token}`);
    }
  }
}

export default AuthenticatedDataSource;
