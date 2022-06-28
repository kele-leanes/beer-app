
<h1 align="center">
  BeerApp
</h1>

<h4 align="center">An React Native app written in Typescript to see, share and add beer recipes.</h4>

<p align="left">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#dependencies">Dependencies</a> •
</p>

![screenshot](url)

## Key Features

* IOS and Android support
* Responsive design
* Backend integration
* Local notifications
* Unit tests

## How To Use

```bash
# Clone this repository
$ git clone git@github.com:kele-leanes/beer-app.git

# Install dependencies
$ yarn

# Install pods
$ cd ios && pod-install

# Run the app
$ yarn ios //or yarn android
```
You need this [repo](https://github.com/holdedlab/frontend-challenge) running locally to connect to the backend.

> **Note**
> (Only for Android)
> To start listen the default port (8080)
```
$ adb -s {deviceName} reverse tcp:8080 tcp:8080
```

## Dependencies

This software uses the following open source packages:

- [react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
- [react-navigation](https://reactnavigation.org/)
- [axios](https://github.com/axios/axios)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
