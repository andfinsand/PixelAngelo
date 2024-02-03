# Build frontend
FROM node:18.17.0 AS builder

WORKDIR /app

COPY ./client/package.json ./client/package-lock.json* ./

RUN npm install

COPY ./client/ .

RUN npm run build

# Run the Next.js app in production mode
FROM node:18.17.0

WORKDIR /app

COPY --from=builder /app/next.config.js ./

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
