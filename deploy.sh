#!/bin/bash

ssh www@178.62.66.141 \
    "echo connected to 178.62.66.141 as www;
    cd /var/www/io-bot;
    pm2 stop io-bot
    git checkout master;
    git pull;
    npm i;
    pm2 start io-bot
    exit"

echo "Script finished"
