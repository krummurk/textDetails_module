FROM node:12.0.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
# COPY ./index.html /usr/src/app/
RUN npm install
EXPOSE 6200
CMD [ "npm", "start" ]
