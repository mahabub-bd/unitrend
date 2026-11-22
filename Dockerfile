# Stage 1: Build the application
FROM node:24-alpine AS builder

RUN npm install -g pnpm@9

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Generate the Prisma client (schema is not present during pnpm install)
RUN pnpm exec prisma generate

# Build the application
RUN pnpm build

# Stage 2: Production server
FROM node:24-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy built application from builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the Next.js port
EXPOSE 8000

# Start production server (pnpm is not installed in this stage)
CMD ["node_modules/next/dist/bin/next", "start", "-p", "8000"]
