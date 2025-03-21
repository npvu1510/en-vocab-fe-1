# FROM node:latest AS builder

# WORKDIR /build

# COPY package.json package-lock.json ./

# RUN npm install

# COPY . .


# RUN npm run build


FROM node:23-alpine3.20

WORKDIR /app

COPY .next .next
COPY package.json package-lock.json ./
COPY public ./ 

RUN npm install --omit=dev
RUN rm -rf .next/static

EXPOSE 3000
CMD ["npm", "start"]
