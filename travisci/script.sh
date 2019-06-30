#!/usr/bin/env bash

echo "preparing build on $TRAVIS_OS_NAME"

npm run clean:all

cd examples/systemjs
npm ci
cd ../..
cd examples/angular-cli
npm ci
cd ../..
cd examples/angular-cli-6
npm ci
cd ../..
cd examples/angular-cli-material
npm ci
cd ../..
cd examples/universal
npm ci
cd ../..

echo "npm run build library on $TRAVIS_OS_NAME"
npm run build:all

echo "building the main angular-cli example with ng-packagr on $TRAVIS_OS_NAME"
npm run build:main:dev
npm run build:main:prod

echo "building official angular-cli example on $TRAVIS_OS_NAME"
cd examples/angular-cli
npm run build:dev
npm run build:prod
cd ../..

echo "building official angular-cli-6 example on $TRAVIS_OS_NAME"
cd examples/angular-cli-6
npm run build:dev
npm run build:prod
cd ../..

echo "building official angular-cli-material example on $TRAVIS_OS_NAME"
cd examples/angular-cli-material
npm run build:dev
npm run build:prod
cd ../..

echo "building official universal example on $TRAVIS_OS_NAME"
cd examples/universal
npm run build:dev
npm run build:prod
npm run build:ssr
npm run build:prerender
cd ../..

echo "testing library on $TRAVIS_OS_NAME"
npm run test:ci
npm run e2e:ci
