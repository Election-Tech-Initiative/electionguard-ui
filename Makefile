.PHONY: all install build start test lint admin-app result-app storybook build-storybook start-with-storybook npm-version npm-publish docker-dev-app docker-dev-storybook docker-dev-all

all: install lint build test

install:
	yarn install
	yarn bootstrap

build:
	yarn build

start:
	yarn start

test:
	yarn test

lint:
	yarn lint


# Project
admin-app:
	yarn admin-app

result-app:
	yarn result-app


# Storybook
storybook:
	yarn storybook

build-storybook:
	yarn build-storybook

start-with-storybook:
	yarn start-with-storybook


# Packaging
npm-version:
	yarn npm-version

npm-publish:
	yarn npm-publish


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