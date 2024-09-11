import { startServer } from './src/server';

(async () => {
    let port: number = 4000;
    if (process.env.PORT) {
        port = parseInt(process.env.PORT);
    }
    await startServer(port);
})();