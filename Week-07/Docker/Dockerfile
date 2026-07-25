# Stage 1: Build the Angular application
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package files and install dependencies
COPY Week-06/Angular/student-course-portal/package*.json ./
RUN npm ci

# Copy the rest of the application files and build
COPY Week-06/Angular/student-course-portal/ ./
RUN npx ng build --configuration=production

# Stage 2: Serve the compiled application using Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist/student-course-portal /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
