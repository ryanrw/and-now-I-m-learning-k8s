FROM node:alpine
ENV NPM_CONFIG_LOGLEVEL info

WORKDIR /var/app

COPY . /var/app

RUN yarn install

CMD ["yarn", "start"]

EXPOSE 8080