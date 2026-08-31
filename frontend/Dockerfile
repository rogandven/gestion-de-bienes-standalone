

FROM node:26-bookworm AS build

ADD . /app
WORKDIR /app/node
RUN npm i && \
npm run build && \
mkdir /app/php/node -p && \
mv dist /app/php/node

FROM php:8.2-apache AS server 

ARG BACKEND_IP=${BACKEND_IP}
ENV BACKEND_IP=${BACKEND_IP}

COPY --from=build /app/php /var/www/html
RUN mv /var/www/html/node /var/www/node && \
mkdir -p /var/www/html/node/dist/assets/ && \
ln -s /var/www/node/dist/assets/* /var/www/html/node/dist/assets/

COPY createDotenv.sh /var/www/html/createDotenv.sh
WORKDIR /var/www/html/

RUN (chmod +x createDotenv.sh) && (mv createDotenv.sh createDotenv) && \
./createDotenv ${BACKEND_IP} && \
rm createDotenv

EXPOSE 80
