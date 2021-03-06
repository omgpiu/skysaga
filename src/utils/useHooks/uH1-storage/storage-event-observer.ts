import {Maybe,Storage} from './storage-interface';

export interface StorageEvent<K = unknown, V = unknown> {
    key: K;
    value: Maybe<V>;
    storage: Storage<K, V>;
}

export type StorageEventHandler = (event: StorageEvent) => void;

class StorageEventObserver {
    handlers = new Map();

    subscribe(handler: StorageEventHandler) {
        this.handlers.set(handler, handler);
    }

    unsubscribe(handler: StorageEventHandler) {
        this.handlers.delete(handler);
    }

    dispatch(data: StorageEvent<any, any>) {
        this.handlers.forEach((handler) => {
            handler(data);
        });
    }
}

export const storageEventObserver = new StorageEventObserver();
