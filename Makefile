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