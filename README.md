# electron_ci_tests

Electron is a framework for creating desktop applications with all the emerging technologies including JavaScript, HTML and CSS. This repository contais a simple timer made using electron. It is possible to run this application using docker.

## How to use this repository

First, it is necessary to install docker and docker compose.

To install docker in ubuntu, you can do these steps:

* sudo apt install docker-ce
* sudo usermod -aG docker $(whoami)
* sudo apt install docker-compose

To run the application:
* docker-compose build
* docker-compose up

