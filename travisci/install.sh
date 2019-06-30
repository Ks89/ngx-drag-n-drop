#!/bin/bash

echo "Install - OS is $TRAVIS_OS_NAME"

echo "Installing dependencies"
if [[ $TRAVIS_OS_NAME = 'osx' ]]; then
    echo "Installing $TRAVIS_OS_NAME local dependencies"
    npm ci
else
    echo "Installing $TRAVIS_OS_NAME local dependencies"
    npm ci
fi
