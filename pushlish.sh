#!/bin/bash

yarn build
git add .
git commit -m $1
git checkout -b $2
git push origin $2
git push origin $2:master