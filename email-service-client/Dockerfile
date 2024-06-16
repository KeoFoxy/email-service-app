# # Use the official Bun image as a base
# FROM jarredsumner/bun:latest

# WORKDIR /app

# # Copy the package.json and bun.lockb files
# COPY package.json bun.lockb ./

# # Install dependencies using Bun
# RUN bun install

# # Copy the rest of the application code
# COPY . .

# EXPOSE 8081

# ARG MODE=dev

# # Run the development server or build and preview for production
# CMD if [ "$MODE" = "production" ]; then bun run build && bun run preview; else bun run dev; fi
FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8081

ARG MODE=dev

# Run the development server or build and preview for production
CMD if [ "$MODE" = "production" ]; then npm run build && npm run preview; else npm run dev; fi
