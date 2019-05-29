import {Socket} from 'socket.io';
import {ws} from '../decorators/websocket.decorator';
import { User } from '../models';

/**
 * A demo controller for websocket
 */
@ws('/Websocketbotohmega')
export class WebsocketbotohmegaController {
  constructor(
    @ws.socket() // Equivalent to `@inject('ws.socket')`
    private socket: Socket,
  ) {}

  /**
   * The method is invoked when a client connects to the server
   * @param socket
   */
  @ws.connect()
  connect(socket: Socket) {
    console.log('Client connected: %s', this.socket.id);
    socket.join('room 1');
  }

  /**
   * Register a handler for 'chat message' events
   * @param msg
   */
  @ws.subscribe('message')
  // @ws.emit('namespace' | 'requestor' | 'broadcast')
  handleChatMessage(msg: unknown) {
    console.log('Chat message: %s', msg);
    this.socket.nsp.emit('message', `[${this.socket.id}] ${msg}`);
  }

   /**
   * Register a handler for 'chat message' events
   * @param userinfo
   */
  @ws.subscribe('useronline')
  // @ws.emit('namespace' | 'requestor' | 'broadcast')
  handleUserInfo(userinfo: User) {
    console.log('User online: %s', userinfo);
    this.socket.nsp.emit('useronline', userinfo);
  }

  /**
   * Register a handler for all events
   * @param msg
   */
  @ws.subscribe(/.+/)
  logMessage(...args: unknown[]) {
    console.log('Message: %s', args);
  }

  /**
   * The method is invoked when a client disconnects from the server
   * @param socket
   */
  @ws.disconnect()
  disconnect() {
    console.log('Client disconnected: %s', this.socket.id);
  }
}