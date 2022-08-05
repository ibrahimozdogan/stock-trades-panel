FROM node:16-alpine

WORKDIR /stock-trades-panel

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD [ "yarn", "start" ]
