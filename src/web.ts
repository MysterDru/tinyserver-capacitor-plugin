import { WebPlugin } from '@capacitor/core';
import { TinyServerPluginPlugin, TinyServerUrl, TinyServerRequest, TinyServerResponse, TinyServerOnRequestCallback } from './definitions';

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
    let r = new TinyServerUrlImp();
    r.setUrl(window.location.href);
    return Promise.resolve(r);
  }

  startServer(): Promise<any> {
    return Promise.resolve();
  }

  onRequest(callback: TinyServerOnRequestCallback): string {
    return "foobar";
  }

  sendResponse(response: TinyServerResponse) {
    // nothing here
  }
}

const TinyServerPlugin = new TinyServerPluginWeb();

export { TinyServerPlugin };
