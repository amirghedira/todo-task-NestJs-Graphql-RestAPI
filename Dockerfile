FROM node:14-alpine

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN rm -r /app/client
RUN npm run build
CMD [ "node", "dist/main.js" ]
EXPOSE 3000
