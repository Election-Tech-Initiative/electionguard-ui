![Microsoft Defending Democracy Program: ElectionGuard UI](https://www.electionguard.vote/images/electionguard-banner.svg)

# 🗳 ElectionGuard UI

[![Azure_Deploy_Workflow](https://github.com/microsoft/electionguard-ui/actions/workflows/azure_deploy.yml/badge.svg)](https://github.com/microsoft/electionguard-ui/actions/workflows/azure_deploy.yml) [![license](https://img.shields.io/github/license/microsoft/electionguard)](https://github.com/microsoft/electionguard-ui/blob/main/LICENSE)

This repository is a "reference implementation" of ElectionGuard UI written using Typescript and Lerna. This is a Monorepo using Lerna which has multiple packages. These packages can be compiled and released separately. The websites use React components. This library can also be used to construct frontend implementations that need to talk to the [ElectionGuard server API](https://github.com/microsoft/electionguard-api-python).

## 📁 In This Repository

| File/folder                                  | Description                           |
| -------------------------------------------- | ------------------------------------- |
| [`packages`](packages)                       | Monorepo packages for this project    |
| [`package/admin-app`](/packages/admin-app)   | sample UI for an admin website        |
| [`packages/api-client`](packages/api-client) | library for connecting to api backend |
| [`packages/result-app`](packages/result-app) | sample UI for election result website |
| [`CONTRIBUTING.md`](CONTRIBUTING.md)         | Guidelines for contributing           |
| [`README.md`](README.md)                     | This README file                      |
| [`LICENSE`](LICENSE)                         | The license for ElectionGuard-Python. |

## ❓ What Is ElectionGuard?

ElectionGuard is an open source software development kit (SDK) that makes voting more secure, transparent and accessible. The ElectionGuard SDK leverages homomorphic encryption to ensure that votes recorded by electronic systems of any type remain encrypted, secure, and secret. Meanwhile, ElectionGuard also allows verifiable and accurate tallying of ballots by any 3rd party organization without compromising secrecy or security.

Learn More in the [ElectionGuard Repository](https://github.com/microsoft/electionguard)

## 🦸 How Can I use ElectionGuard?

ElectionGuard supports a variety of use cases. The Primary use case is to generate verifiable end-to-end (E2E) encrypted elections. The Electionguard process can also be used for other use cases such as privacy enhanced risk-limiting audits (RLAs).

## 💻 Requirements

-   [Node](https://www.nodejs.org) is used to simplify the commands and GitHub Actions. This approach is recommended to simplify the command line experience. This is built in for MacOS and
-   [Yarn](https://www.yarnpkg.com) is used as the package manager instead of npm.
-   [Lerna](https://lerna.js.org) is used to create a monorepo and multiple projects inside of this single github repo. This allows for each small project to be built and deployed separately.
-   [GNU Make](https://www.gnu.org/software/make/manual/make.html) is used to simplify the commands and GitHub Actions. This approach is recommended to simplify the command line experience. This is built in for MacOS and Linux. For Windows, setup is simpler with [Chocolatey](https://chocolatey.org/install) and installing the provided [make package](https://chocolatey.org/packages/make). The other Windows option is [manually installing make](http://gnuwin32.sourceforge.net/packages/make.htm).

### Windows

This repository works fine in Windows, however it requires linux style line endings for ts and tsx files. The `.gitattributes` file should handle this, but if you need to replace all line endings manually, then in WSL:

-   `sudo apt install dos2unix`
-   `find packages/*/src -type f -iname '*.ts*' -exec dos2unix -k -s -o {} ';'`

## 🚀 Quick Start

### Basics

In the project directory, you can run:

Using [**make**](https://www.gnu.org/software/make/manual/make.html), the entire [GitHub Action workflow][pull request workflow] can be run with one command:

```
make
```

#### Install

Installs dependencies and does lerna bootstrap for the projects.

```
make install
```

#### Lint

Lints all of the packages.

```
make lint
```

#### Build

Builds the app for production to the `build` folder for each package.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
make build
```

#### Test

Launches the test runner in the interactive watch mode.

```
make test
```

### Development

#### Applications

Runs the apps in development mode. Open the Admin App at [http://localhost:3001](http://localhost:3001) or the Result App at [http://localhost:3002](http://localhost:3002) to view them in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```
make start
```

Runs only the admin application.

```
make admin-app
```

Runs only the result application.

```
make result-app
```

#### Storybook

Runs the app in the storybook mode. Open [http://localhost:6006](http://localhost:6006) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

```
make storybook
```

#### Docker

A local docker image will be created to run the admin website instead of running it directly like the 'make start' command above.

```
make docker-dev-app
```

A local docker image will be created to run the storybook website instead of running it directly like the 'make storybook' command above.

```
make docker-dev-storybook
```

## Contributing

This project encourages community contributions for development, testing, documentation, code review, and performance analysis, etc. For more information on how to contribute, see [the contribution guidelines][contributing]

### Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

### Reporting Issues

Please report any bugs, feature requests, or enhancements using the [GitHub Issue Tracker](https://github.com/microsoft/electionguard-ui/issues). Please do not report any security vulnerabilities using the Issue Tracker. Instead, please report them to the Microsoft Security Response Center (MSRC) at [https://msrc.microsoft.com/create-report](https://msrc.microsoft.com/create-report). See the [Security Documentation][security] for more information.

### Have Questions?

ElectionGuard would love for you to ask questions out in the open using GitHub Issues. If you really want to email the ElectionGuard team, reach out at electionguard@microsoft.com.

## License

This repository is licensed under the [MIT License](https://github.com/microsoft/electionguard-ui/blob/main/LICENSE)

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

<!--Links-->

[pull request workflow]: https://github.com/microsoft/electionguard-ui/blob/main/.github/workflows/pull_request.yml
