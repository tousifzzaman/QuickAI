# Stage 1: Build the application
FROM node:22-alpine AS build

# Define build arguments to receive environment variables
ARG VITE_API_URL
ARG VITE_CLERK_PUBLISHABLE_KEY
ARG VITE_GEMNI_API_KEY
ARG VITE_CLICKDROP_API_KEY
ARG VITE_CLOUDINARY_CLOUD_NAME
ARG VITE_CLOUDINARY_API_KEY

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80