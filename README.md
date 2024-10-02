# App Runner NodeJS

A simple NodeJS application that implements a web server using Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install this project, follow these steps:

1. Clone the repository
2. Run `npm install` to install dependencies

## Usage

To start the server, run:

```
node index.js
```

The server will start on port 8080 by default.

## Features

- Express web server
- Random number generation
- Square number calculation

## API Endpoints

### GET /

Returns a welcome message.

### GET /random/:max

Generates a random integer between 0 and the specified max value (exclusive).

- Parameter: `max` (integer)
- Returns: A JSON object with the random number

### GET /square/:number

Calculates the square of the given number.

- Parameter: `number` (integer)
- Returns: A JSON object with the squared number

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the ISC License.