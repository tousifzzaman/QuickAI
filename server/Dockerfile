FROM node:18-alpine
WORKDIR /app
copy package*.json ./
RUN npm install
copy . .
EXPOSE 3000
CMD ["node","server.js"]