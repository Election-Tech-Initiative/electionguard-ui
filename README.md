![Microsoft Defending Democracy Program: ElectionGuard UI](https://www.electionguard.vote/images/electionguard-banner.svg)

# 🗳 ElectionGuard UI

[![Azure_Deploy_Workflow](https://github.com/microsoft/electionguard-ui/actions/workflows/azure_deploy.yml/badge.svg)](https://github.com/microsoft/electionguard-ui/actions/workflows/azure_deploy.yml) [![license](https://img.shields.io/github/license/microsoft/electionguard)](https://github.com/microsoft/electionguard-ui/blob/main/LICENSE)

This repository is a "reference implementation" of ElectionGuard UI written using Typescript and Lerna. This is a Monorepo using Lerna which has multiple packages. These packages can be compiled and released separately. The websites and the compoent library use ReactComponents of this library can also be used to construct frontend implementations that need to talk to the [ElectionGuard server API](https://github.com/microsoft/electionguard-api-python).

## 📁 In This Repository

| File/folder          | Description                           |
| -------------------- | ------------------------------------- |
| `docs`               | Documentation for using the library   |
| `packages`           | Monorepo packages for this project    |
| `package/admin-app`  | sample UI for an admin website        |
| `package/api-client` | library for connecting to api backend |
| `package/library`    | library for sample UI components      |
| `package/result-app` | sample UI for election result website |
| `CONTRIBUTING.md`    | Guidelines for contributing           |
| `README.md`          | This README file                      |
| `LICENSE`            | The license for ElectionGuard-Python. |

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

## 🚀 Quick Start

In the project directory, you can run:

Using [**make**](https://www.gnu.org/software/make/manual/make.html), the entire [GitHub Action workflow][pull request workflow] can be run with one command:

```
make
```

Installs lerna and does a bootstrap for the projects.
You might need to enter your admin credentials when this runs.

```
make install
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
make test
```

Builds the app for production to the `build` folder for each package.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
make build
```

Runs linting on all of the packages can be run by executing:

```
make lint
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
make start
```

Runs the app in the storybook mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
make storybook
```

A local docker image will be created to run the admin website instead of running it directly like the 'make start' comand above.

```
make docker-dev-app
```

A local docker image will be created to run the storybook website instead of running it directly like the 'make storybook' comand above.

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

Electionguard would love for you to ask questions out in the open using GitHub Issues. If you really want to email the ElectionGuard team, reach out at electionguard@microsoft.com.

## License

This repository is licensed under the [MIT License](https://github.com/microsoft/electionguard-ui/blob/main/LICENSE)

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
