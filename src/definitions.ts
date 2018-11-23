import {CallbackID } from '@capacitor/core';

declare global {
  interface PluginRegistry {
    TinyServerPlugin?: TinyServerPluginPlugin;
  }
}

export type TinyServerOnRequestCallback = (data: TinyServerRequest, err?: any) => void;

export interface TinyServerUrl {
  url: string;
}

export interface TinyServerRequest {
  requestId: string;
  body : string;
  headers: any;
  method: string;
  path: string;
  query: string;
}

export interface TinyServerResponse {
  requestId: string;
  status: number;
  body : string;
  headers: any;
}

export interface TinyServerPluginPlugin {
  getURL(): Promise<TinyServerUrl>;
  startServer(): Promise<any>;
  onRequest(callback: TinyServerOnRequestCallback): CallbackID;
  sendResponse(response: TinyServerResponse) : void;
}
