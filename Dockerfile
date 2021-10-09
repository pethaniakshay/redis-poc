FROM node:12

WORKDIR /opt/app

COPY package.json ./

RUN npm install

COPY . /opt/app

CMD ["node" ,"index.js"]
