FROM node:22.14.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /app/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]