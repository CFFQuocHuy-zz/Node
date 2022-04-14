FROM node:13-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

# Development
CMD ["npm", "run", "watch"]
