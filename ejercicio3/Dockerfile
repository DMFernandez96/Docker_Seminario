FROM node:latest

RUN npm i -g @nestjs/cli

COPY ./package.json ./

RUN npm install 

CMD npm run start:dev

WORKDIR /app/src
