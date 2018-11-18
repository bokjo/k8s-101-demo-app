FROM node:10.13.0-slim

COPY package.json /app/package.json
COPY src/ /app/src

WORKDIR /app

RUN npm install --silent --progress=false --production

EXPOSE 3000

CMD ["npm", "start"]