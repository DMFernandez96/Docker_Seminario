FROM node:latest

RUN npm i -g @nestjs/cli

COPY . /myapp/

WORKDIR /myapp

RUN npm install

ENTRYPOINT npm run start:dev
