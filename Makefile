.PHONY: install build start storybook test

install:
	sudo npm install --global lerna
	lerna bootstrap

build:
	lerna run build

lint:
	lerna run lint

start:
	lerna run start

storybook:
	lerna run storybook

build-storybook:
	lerna run build-storybook

test:
	lerna run test

local:
	lerna run local

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