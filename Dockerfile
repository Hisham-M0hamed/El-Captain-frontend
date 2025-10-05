# FROM node:22.14.0-alpine AS build

# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# FROM nginx:stable-alpine

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # 1. Copy static assets from `public` first.
# # The trailing slash ensures the CONTENTS of public are copied.
# COPY --from=build /app/public/ /usr/share/nginx/html/

# # 2. Copy the built application from `dist` second.
# # This will safely overwrite any placeholder files (like index.html) with the final app.
# COPY --from=build /app/dist/ /usr/share/nginx/html/

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


FROM node:22.14.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# ✅ فقط انسخ الـ dist
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]