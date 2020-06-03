'use strict'
const unirest = require('unirest')

class VsBridgeApiClient {

    constructor(config) {
        this.config = config

        if (!config.vsbridge.url)
            throw Error('url is required config keys for Pimcore Api Client')

        this.baseUrl = `${config.url}vsbrdige/`
        this.token = '' // will be set after the authorization
        this.client = unirest
    }

    authWith(token) {
        this.token = token
    }
    _setupRequest(unirest) {
        return unirest.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    }
    _setupUrl(endpointUrl) {
        const url = endpointUrl + '?token=' + encodeURIComponent(this.token)
        console.log('Fetching data from', url);
        return url
    }
    post(endpointName) {
        return this._setupRequest(this.client.post(this._setupUrl(endpointName)))
    }

    get(endpointName) {
        return this._setupRequest(this.client.get(this._setupUrl(endpointName)))
    }

    put(endpointName) {
        return this._setupRequest(client.put(this._setupUrl(endpointName)))
    }

    delete(endpointName) {
        return this._setupRequest(client.delete(this._setupUrl(endpointName)))
    }

    auth(endpointName, username, key) {
        return this.client.post(endpointName).field('username', username).field('key', key)
    }

}
module.exports = VsBridgeApiClient
