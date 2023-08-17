FROM node:alpine

<<<<<<< HEAD
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
=======

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
>>>>>>> main
