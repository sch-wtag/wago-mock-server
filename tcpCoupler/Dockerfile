FROM node:23-alpine

WORKDIR /usr/src/app/tcpCoupler

COPY . .

RUN npm install

EXPOSE 3001

CMD ["node", "server.js"]