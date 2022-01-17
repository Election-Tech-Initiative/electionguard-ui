![Microsoft Defending Democracy Program: ElectionGuard UI](https://www.electionguard.vote/images/electionguard-banner.svg)

# 🗳 ElectionGuard UI API-Client

[![npm Deploy](https://github.com/microsoft/electionguard-ui/actions/workflows/npm_deploy.yml/badge.svg)](https://github.com/microsoft/electionguard-ui/actions/workflows/npm_deploy.yml) [![license](https://img.shields.io/github/license/microsoft/electionguard)](https://github.com/microsoft/electionguard-ui/blob/main/LICENSE)

This package is a Typescript interface to be able to construct frontend implementations that need to talk to the [ElectionGuard server API](https://github.com/microsoft/electionguard-api-python).

## ❓ What Is ElectionGuard?

ElectionGuard is an open source software development kit (SDK) that makes voting more secure, transparent and accessible. The ElectionGuard SDK leverages homomorphic encryption to ensure that votes recorded by electronic systems of any type remain encrypted, secure, and secret. Meanwhile, ElectionGuard also allows verifiable and accurate tallying of ballots by any 3rd party organization without compromising secrecy or security.

Learn More in the [ElectionGuard Repository](https://github.com/microsoft/electionguard)

## 🦸 How Can I use ElectionGuard?

ElectionGuard supports a variety of use cases. The Primary use case is to generate verifiable end-to-end (E2E) encrypted elections. The Electionguard process can also be used for other use cases such as privacy enhanced risk-limiting audits (RLAs).

## 💻 Requirements

-   [Node](https://www.nodejs.org) is used to simplify the commands and GitHub Actions. This approach is recommended to simplify the command line experience. This is built in for MacOS and

## 🚀 Quick Start

In a project directory, make sure it is setup for npm and then install the [ElectionGuard API-Client] package to the project using:

```
npm i @electionguard/api-client
```

This will now allow the frontend application to be able to communicate to the [ElectionGuard server API](https://github.com/microsoft/electionguard-api-python). The server can be run as a docker image locally or from any other machine on your network. Follow the instructions on the project to start the server locally for your testing. To start the image locally you can use the following command:

```
make docker-dev
```

In the local application environment variables will be used to determine the address for the Guardian and Mediator Services. There is also a variable that the api-client will use to determine if mock data should be used instead. The environment variables are shown below:

```
REACT_APP_MEDIATOR_SERVICE=http://localhost:8000
REACT_APP_GUARDIAN_SERVICE=http://localhost:8001
REACT_APP_MOCK_ENABLED=false
```

The API-Client will have all of the types available to be imported into your code. There are two primary methods that can be imported and called to connect to the Guardian or Mediator Services. These are getGuardianApiClient and getMediatorApiClient as shown in the import statement below:

```
import { getGuardianApiClient, getMediatorApiClient, } from '@electionguard/api-client';
```

If the env variable is set to use mock data, then there will not be a connection to the server addresses provided. Mock data will come back, but it will not include new data that you create, such as you will not be able to create an election and then get a list of elections to see that one. If you want to be able to use and save real data then the services will need to be running.

## Contributing

This project encourages community contributions for development, testing, documentation, code review, and performance analysis, etc. For more information on how to contribute, see [the contribution guidelines][contributing]

### Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

### Reporting Issues

Please report any bugs, feature requests, or enhancements using the [GitHub Issue Tracker](https://github.com/microsoft/electionguard-ui/issues). Please do not report any security vulnerabilities using the Issue Tracker. Instead, please report them to the Microsoft Security Response Center (MSRC) at [https://msrc.microsoft.com/create-report](https://msrc.microsoft.com/create-report). See the [Security Documentation][security] for more information.

### Have Questions?

Electionguard would love for you to ask questions out in the open using GitHub Issues. If you really want to email the ElectionGuard team, reach out at electionguard@microsoft.com.

## License

This package is licensed under the [MIT License](https://github.com/microsoft/electionguard-ui/blob/main/LICENSE)

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
