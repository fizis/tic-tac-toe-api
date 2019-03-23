FROM node:10
WORKDIR /api
COPY . .
RUN npm install
EXPOSE 3333
CMD [ "npm", "start" ]