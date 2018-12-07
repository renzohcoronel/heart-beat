import { Injectable } from '@angular/core';


import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:5200';


@Injectable()
export class SocketIO {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(event,message: any): void {
        this.socket.emit(event, message);
    }

    public onMessage(qeuque:String): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on(qeuque, (data: any) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }

}

export enum Action {
    JOINED,
    LEFT,
    RENAME
}

// Socket.io events
export enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect'
}
