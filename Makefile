.PHONY: install build start test lint storybook build-storybook docker-dev-app docker-dev-storybook docker-dev-all

install:
	npm install
	npm run bootstrap

build:
	npm run build

start:
	npm run start

start-with-storybook:
	npm run start-with-storybook

test:
	npm run test

lint:
	npm run lint

storybook:
	npm run storybook

build-storybook:
	npm run build-storybook

npm-version:
	npm run npm-version

npm-publish:
	npm run npm-publish




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