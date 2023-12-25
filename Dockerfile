FROM node:20.9

WORKDIR /social

COPY . /social

EXPOSE 3000

RUN npm install

CMD ["npm", "run", "start"]