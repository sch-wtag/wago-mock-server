### Installation

If only you want to run this server locally on your machine (not docker container) then install the dependecies
```js
npm install
```

run the server
```js
node server.js
```

server will be running in `127.0.0.1:3001`

<a id="testing"></a>

### Testing procedure

1. install `netcat` using this command on your terminal
```
brew install netcat
```
2. This command will be used to establish connection along with sending buffer. Here we are sending `00 00 00 00 00 06 01 03 00 00 00 02` as buffer. `\x` will be added before each byte.
```
echo -ne '\x00\x00\x00\x00\x00\x06\x01\x03\x00\x00\x00\x02' | nc 127.0.0.1 3001 | xxd -p
```
3. After receiving the response connection will be closed automatically by netcat. So repeat 2nd step for sending data each time.
