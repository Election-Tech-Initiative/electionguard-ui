.PHONY: install build build-storybook start storybook test

install:
	yarn install

build:
	yarn build

build-storybook:
	yarn build-storybook

lint:
	yarn lint

start:
	yarn start

storybook:
	yarn storybook

test:
	yarn test
