FROM node:18
#crear directorio de la aplicación
WORKDIR /usr/src/app
#instalar dependencias de node
COPY package.json /usr/src/app/
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm","start" ]