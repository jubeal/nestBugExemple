## Description

A Nest-Commander exemple wich purpose is to be taken as support for an issue.

## Installation

```bash
$ yarn install
```

## Running the app

main command

```bash
yarn nest-cli say --message "<YOUR_MESSAGE>"
yarn nest-cli-dev say --message "<YOUR_MESSAGE>"
```

working SubCommand

```bash
yarn nest-cli say blue --message-blue "<YOUR_MESSAGE>"
yarn nest-cli-dev say --message-blue "<YOUR_MESSAGE>"
```

not working SubCommand

```bash
yarn nest-cli say yellow --message "<YOUR_MESSAGE>"
yarn nest-cli-dev say yellow --message "<YOUR_MESSAGE>"
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
