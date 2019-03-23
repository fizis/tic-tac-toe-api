FROM node:10
WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . /api
EXPOSE 3333
CMD [ "npm", "start" ]