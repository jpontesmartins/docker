FROM node
WORKDIR /app
COPY /app/package.json /app
RUN npm install
COPY . /
CMD ["npm","start"]