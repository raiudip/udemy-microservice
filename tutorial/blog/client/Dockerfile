FROM node:alpine

<<<<<<< HEAD
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run", "dev"]
=======

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8081
CMD [ "npm", "run", "dev" ]
>>>>>>> main
