FROM node:23-alpine

WORKDIR /usr/src/app/httpServer

COPY . .

RUN npm install

EXPOSE 3002

CMD ["node", "server.js"]