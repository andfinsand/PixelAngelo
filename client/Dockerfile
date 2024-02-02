# Stage 1: Building the code
FROM node:14.17.3 AS builder

WORKDIR /app

COPY ./client/package.json ./client/package-lock.json* ./

RUN npm install

COPY ./client/ .

RUN npm run build

# Stage 2: Run the Next.js app in production mode
FROM node:14.17.3

WORKDIR /app

COPY --from=builder /app/next.config.js ./

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
