import {ChatwebsocketApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ChatwebsocketApplication};
export * from './websocket.server';
export * from './decorators/websocket.decorator';
export * from './websocket-controller-factory';

export async function main(options: ApplicationConfig = {}) {
  const app = new ChatwebsocketApplication(options);
  await app.start();

  console.log('listening on %s', app.httpServer.url);

  return app;
}