# Cook.it

> A food recipe discovery web application

## About this Project

Cook.it is a single-purpose recipe discovery web application that generates recipes based on the ingredients available in your refrigerator and pantry. Users can discover, explore and learn recipes that make use of the available ingredients which would have potentially been thrown away.

### Built With

- [React](https://reactjs.org/)
- [Material UI (MUI) Component Library](https://mui.com/)

## Getting Started

### Prerequisites

Before you continue, ensure you have installed the following requirements:
- [npm](https://www.npmjs.com/)

### Setup

*Note:* On a Linux environment, run all docker and docker-compose commands as `sudo`

1. Install all dependencies
    ```sh
    $ cd cook-it
    $ npm i
    ```
2. Start the app by running this command in the `cook-it` directory
    ```
    $ npm run start
    ```

### Running the Tests

Run all tests with the following command in the `cook-it` directory
```
$ npm run test
```

## Deployment

Cook.it is deployed on AWS S3 for public use at the following link:
- http://cook-it.s3-website.us-east-2.amazonaws.com/

No account creation is required. User and food data are stored in your device's local storage.

## Acknowledgments

Cook.it is an educational non-profitable project submitted in partial fulfillment of the requirements of SOEN 357 at Concordia University. This web application is not hosted for commercial use, but rather for academic purposes.

### Libraries

This project uses the following libraries:
- [spoonacular API](https://spoonacular.com/food-api/)

## Team

- Jason Gerard [(@jason-gerard)](https://github.com/jason-gerard)
- David Lemme [(@David)](https://github.com/davrine)
- Lea Lakkis [(@lea)](https://github.com/lealakkis)
- Domenic Seccareccia [(@domsec)](https://github.com/domsec)