/// <reference path="wx.d.ts" />
/**
 * Created by axetroy on 17-6-23.
 */
import { EventEmitter } from 'events';
export declare class Http extends EventEmitter implements Http$ {
    private config;
    private ctx;
    private queue;
    private runningTask;
    private maxConcurrent;
    private requestInterceptor;
    private responseInterceptor;
    constructor(config?: HttpConfig$);
    create(config?: HttpConfig$): Http;
    private next();
    request(method: string, url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    head(url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    options(url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    get(url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    post(url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    put(url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    ['delete'](url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    trace(url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    connect(url: string, data?: Object | string, header?: HttpHeader$, dataType?: string): Promise<Response$>;
    setRequestInterceptor(interceptor: (config: HttpConfig$) => boolean): Http;
    setResponseInterceptor(interceptor: (config: HttpConfig$, response: Response$) => boolean): Http;
    clean(): void;
}
declare const _default: Http;
export default _default;
