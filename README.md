# Instastack - 12 factor app example

This project is a fork of samuxyz/instastack that complies with the [12 factors](https://12factor.net/).

The twelve-factor app is a methodology for writing applications where the goal is building software as a service (SaaS).

The main principles are:
 - Use declarative formats for setup automation, to minimize time and cost for new developers joining the project.
 - Have a clean contract with the underlying operating system, offering maximum portability between execution environments.
 - Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration.
 - Minimize divergence between development and production, enabling continuous deployment for maximum agility.
 - And can scale up without significant changes to tooling, architecture, or development practices.

# How to use this repo

The _master_ branch contains the app without any factor applied. Besides master, there are twelve branches, one for each factor. In the readme of each branch, you can find information about that particular factor and any setup needed to run the code.

## Prerequisites
 - node
 - yarn

## How to Run the app

1. Install the dependencies with 

```
yarn install
```

2. In /src/index.js add a Filestack API key

3. It is required you have imagemagick installed as a global package to test the _Dependencies_ factor

```
npm install -g imagemagick
```

4. Run the following command to start the app on the local environment

```
yarn dev
```
