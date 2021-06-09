FROM node:14.10
WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install

COPY . /app

RUN yarn build

RUN yarn build-storybook

RUN yarn global add serve

EXPOSE 4500
CMD ["serve", "-l", "4500", "-s", "build"]

