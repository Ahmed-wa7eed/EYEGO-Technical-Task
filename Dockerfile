FROM node:18-alpine

WORKDIR /App

COPY package.json /App

RUN npm install

COPY . /App

EXPOSE 2000

CMD ["npm" , "start"]


