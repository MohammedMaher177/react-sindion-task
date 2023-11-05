FROM node:18.18.2

WORKDIR /app

COPY package.json package.json

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]

RUN yarn build

FROM httpd:alpine

WORKDIR /var/www/html

