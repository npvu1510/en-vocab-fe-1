FROM node:latest AS builder

WORKDIR /build

COPY package.json package-lock.json ./

RUN npm install

COPY . .


RUN npm run build


FROM node:23-alpine3.20

WORKDIR /app

COPY --from=builder /build/package.json .
COPY --from=builder /build/package-lock.json .
COPY --from=builder /build/.next .next
COPY --from=builder /build/public public

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]