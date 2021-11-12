.PHONY: install build start test lint storybook build-storybook docker-dev-app docker-dev-storybook docker-dev-all

install:
	yarn install
	yarn bootstrap

build:
	yarn build

start:
	yarn start

start-with-storybook:
	yarn start-with-storybook

test:
	yarn test

lint:
	yarn lint

storybook:
	yarn storybook

build-storybook:
	yarn build-storybook

publish-npm:
	yarn publish-npm




# Docker
docker-dev-app:
	@echo 🐳 Running app in Docker with live reload 🚀
	# COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build --no-cache app
	# COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up app
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up --build app

docker-dev-storybook:
	@echo 🐳 Running storybook in Docker with live reload 📚
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up --build storybook

docker-dev-all:
	@echo 🐳 Running app and storybook in Docker with live reload 🚀📚
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up --build