FROM node:22.14.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

RUN mkdir -p dist/images && cp -r src/images/* dist/images/


FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# انسخ ناتج البناء للـnginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
