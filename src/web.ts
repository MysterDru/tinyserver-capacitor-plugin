import { WebPlugin } from '@capacitor/core';
import { TinyServerPluginPlugin, TinyServerUrl, TinyServerResponse, TinyServerOnRequestCallback } from './definitions';

class TinyServerUrlImp implements TinyServerUrl {
  private _url: string;
  get url(): string {
    return this._url;
  }

  setUrl(value: string) {
    this._url = value;
  }
}

export class TinyServerPluginWeb extends WebPlugin implements TinyServerPluginPlugin {
  constructor() {
    super({
      name: 'TinyServerPlugin',
      platforms: ['web']
    });
  }

  getURL(): Promise<TinyServerUrl> {
    console.log("TinyServer for web, getURL. Not supported on web platform");
    let r = new TinyServerUrlImp();
    r.setUrl(window.location.href);
    return Promise.resolve(r);
  }

  startServer(): Promise<any> {
    console.log("TinyServer for web, startServer. Not supported on web platform");
    return Promise.resolve();
  }

  onRequest(callback: TinyServerOnRequestCallback): string {
    console.log("TinyServer for web, onRequest. Not supported on web platform");
    console.log(callback);
    return "foobar";
  }

  sendResponse(response: TinyServerResponse) {
    console.log("TinyServer for web, sendResponse. Not supported on web platform");
    console.log(response);
  }
}

const TinyServerPlugin = new TinyServerPluginWeb();

export { TinyServerPlugin };
