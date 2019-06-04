FROM node:12.0.0
RUN mkdir -p /usr/src/app/db
WORKDIR /usr/src/app/db
COPY . /usr/src/app/db
RUN npm install mongoose
RUN npm install faker
CMD [ "node", "save2Mongoose.js" ]
