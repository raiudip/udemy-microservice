FROM node:alpine

# Environment
ENV CI=true
ENV WDS_SCOKET_PORT=0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "dev" ]