
export type Maybe<V> = V | null;

export interface Storage<K = any, V = any> {
    getItem(key: K): Maybe<V>;
    setItem(key: K, value: V): void;
    removeItem(key: K): void;
}
export interface StorageEvent<K = unknown, V = unknown> {
    key: K;
    value: Maybe<V>;
    storage: Storage<K>;
}
