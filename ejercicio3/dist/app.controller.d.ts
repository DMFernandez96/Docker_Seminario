import { Cache } from 'cache-manager';
export declare class AppController {
    private cacheManager;
    constructor(cacheManager: Cache);
    getCounter(): Promise<string>;
    incCounter(): Promise<string>;
    decCounter(): Promise<string>;
}
