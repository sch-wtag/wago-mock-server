### Installation

If only you want to run this server locally on your machine (not docker container) then install the dependecies
```
npm install
```

run the server
```
node server.js
```

server will be running in `http://127.0.0.1:3002`

<a id="testing"></a>

### Testing procedure

1. Open postman client and in the URL bar add this url [http://user:user@127.0.0.1:3002/](http://user:user@127.0.0.1:3002/) and make a `GET` request. You can also hit this url in your browser.
2. Open postman client and in the URL bar add this url [http://user:user@127.0.0.1:3002/webserv/cplcfg/state.ssi](http://user:user@127.0.0.1:3002/webserv/cplcfg/state.ssi) and make a `GET` request. You can also hit this url in your browser.