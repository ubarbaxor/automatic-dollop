from  node:alpine

run   npm i -g serve

workdir /usr/app

cmd serve -p 80 static
