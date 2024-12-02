#!/bin/bash

#Production
git reset --hard
git chckout master
git pull origin master
npm i 
npm run build
pm2 start process.config.js --env production