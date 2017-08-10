#!/bin/bash

yarn build
git add .
git commit -m $1
git push origin v0.0.1
git push origin v0.0.1:master