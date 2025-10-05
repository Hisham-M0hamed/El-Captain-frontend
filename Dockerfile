# --- Stage 1: Build the React Application ---
# This stage uses a full Node.js environment to install dependencies and create a production build.
FROM node:22.14.0-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's build cache
COPY package*.json ./

# Install dependencies using npm ci for a clean, reproducible install
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Generate the production build of the React app
RUN npm run build

# --- Stage 2: Serve the Application with NGINX ---
# This stage uses a lightweight NGINX image to serve the static files created in the previous stage.
FROM nginx:stable-alpine

# Copy the custom NGINX configuration file
# We will create this file next.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the NGINX web server
EXPOSE 80

# The command to start the NGINX server
CMD ["nginx", "-g", "daemon off;"]