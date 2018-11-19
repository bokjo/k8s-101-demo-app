FROM node:10.13.0-slim

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
COPY src/ /app/src
COPY public/ /app/public

RUN npm install --silent --progress=false --production

EXPOSE 3000

CMD ["npm", "start"]