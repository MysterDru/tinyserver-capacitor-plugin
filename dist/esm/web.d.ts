import { WebPlugin } from '@capacitor/core';
import { TinyServerPluginPlugin, TinyServerUrl, TinyServerResponse, TinyServerOnRequestCallback } from './definitions';
export declare class TinyServerPluginWeb extends WebPlugin implements TinyServerPluginPlugin {
    constructor();
    getURL(): Promise<TinyServerUrl>;
    startServer(): Promise<any>;
    onRequest(callback: TinyServerOnRequestCallback): string;
    sendResponse(response: TinyServerResponse): void;
}
declare const TinyServerPlugin: TinyServerPluginWeb;
export { TinyServerPlugin };
