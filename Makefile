.PHONY: all install build start test lint admin-app npm-version npm-publish docker-dev-app docker-dev-all

all: install lint build test

install:
	npm install
	npm run bootstrap

build:
	npm run build

start:
	npm run start

test:
	npm run test

lint:
	npm run lint

# Project
admin-app:
	npm run admin-app

# Packaging
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

docker-dev-all:
	@echo 🐳 Running app and storybook in Docker with live reload 🚀📚
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up --build