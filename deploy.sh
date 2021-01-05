#!/bin/bash

PATH=$PATH:/usr/bin

cd /home/pi/server/PortfolioAng/ || exit

git fetch --all

echo Fetching

git reset --hard origin/master

echo Resetting server

git pull

echo Pulling from master
