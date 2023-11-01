#!/bin/bash

cd playwright-e2e && yarn install
cd ..
cd electron-app && yarn install
yarn build:win

