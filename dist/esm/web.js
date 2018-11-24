import { WebPlugin } from '@capacitor/core';
class TinyServerUrlImp {
    get url() {
        return this._url;
    }
    setUrl(value) {
        this._url = value;
    }
}
export class TinyServerPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'TinyServerPlugin',
            platforms: ['web']
        });
    }
    getURL() {
        let r = new TinyServerUrlImp();
        r.setUrl(window.location.href);
        return Promise.resolve(r);
    }
    startServer() {
        return Promise.resolve();
    }
    onRequest(callback) {
        console.log(callback);
        return "foobar";
    }
    sendResponse(response) {
        console.log(response);
    }
}
const TinyServerPlugin = new TinyServerPluginWeb();
export { TinyServerPlugin };
//# sourceMappingURL=web.js.map