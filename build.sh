#!/bin/bash
yarn build
git add .
git commit -m $2 
yarn push origin $1:master