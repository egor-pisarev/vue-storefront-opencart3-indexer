# Vue Storefront OpenCart Indexer

**To be used with the [Vue Storefront Connector Extension for OpenCart](https://github.com/butopea/vue-storefront-opencart-vsbridge).**

This script will import your data from OpenCart into Vue Storefront (ElasticSearch) via the VS Bridge extension.

**Installation:**

* Clone this repository
* `yarn install`
* Copy `config.json.example` as `config.json` and edit it to set your VS Bridge credentials, ElasticSearch index name, store ID, language ID, as well as endpoint URLs to match your domain. 

The `username` field should contain OpenCart API name and the `password` field should contain OpenCart API key. 

Note: You need to whitelist your IP address in OpenCart's admin panel.

**Usage:**

* Execute `./run.sh` or alternatively:

```shell
cd src
node index.js new
node index.js attributes
node index.js taxrules
node index.js categories
node index.js products
node index.js publish
```

**Development:**

We're currently in the early stages of getting all the features working and would love other OpenCart developers to join in with us on this project! 

If you found a bug or want to contribute toward making this extension better, please fork this repository, make your changes, and make a pull request.  

**Credits:**

Made with ❤ by [Butopêa](https://butopea.com)

Boilerplate script created by [DivanteLtd](https://github.com/DivanteLtd)

**Support:**

Please ask your questions regarding this extension on Vue Storefront's Slack https://vuestorefront.slack.com/ You can join via [this invitation link]().

**License:**

This script is completely free and released under the MIT License.
