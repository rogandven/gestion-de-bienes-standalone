FROM php:8.3-apache

ARG DATABASE_IP=${DATABASE_IP}
ARG MSSQL_PASSWORD=${MSSQL_PASSWORD}
ARG APP_HOST=${APP_HOST}
ARG FRONTEND_PORT=${FRONTEND_PORT}

ENV DATABASE_IP=${DATABASE_IP}
ENV MSSQL_PASSWORD=${MSSQL_PASSWORD}
ENV APP_HOST=${APP_HOST}
ENV FRONTEND_PORT=${FRONTEND_PORT}

# https://stackoverflow.com/questions/51933001/install-configure-sql-server-pdo-driver-for-php-docker-image#69644832
ENV ACCEPT_EULA=Y
USER root
WORKDIR /

# https://askubuntu.com/questions/74345/how-do-i-bypass-ignore-the-gpg-signature-checks-of-apt#74389
RUN echo 'APT::Get::AllowUnauthenticated "true";' > /etc/apt/apt.conf.d/99myown && \
echo "Acquire::Check-Valid-Until false;" >> /etc/apt/apt.conf.d/99myown  && \
apt-get update --allow-unauthenticated && apt-get install -y apt-transport-https --allow-unauthenticated && \
curl https://packages.microsoft.com/config/debian/$(grep VERSION_ID /etc/os-release | cut -d '"' -f 2 | cut -d '.' -f 1)/prod.list > /etc/apt/sources.list.d/mssql-release.list && \ 
sed 's@signed-by=/usr/share/keyrings/microsoft-prod.gpg@trusted=yes@g' /etc/apt/sources.list.d/mssql-release.list -i && \
apt-get update --allow-unauthenticated && \
apt-get -y --no-install-recommends install msodbcsql17 unixodbc-dev --allow-unauthenticated && \
pecl install sqlsrv && \
pecl install pdo_sqlsrv && \
docker-php-ext-enable sqlsrv pdo_sqlsrv && \
rm /etc/apt/apt.conf.d/99myown && rm /etc/apt/sources.list.d/mssql-release.list && a2enmod headers

COPY php/ /var/www/html/

COPY createDotenv.sh /var/www/html/createDotenv.sh
WORKDIR /var/www/html/

RUN (chmod +x createDotenv.sh) && (mv createDotenv.sh createDotenv) && \
./createDotenv ${DATABASE_IP} ${MSSQL_PASSWORD} && \
rm createDotenv

COPY enableCORS.sh /var/www/html/enableCORS.sh
RUN (chmod +x enableCORS.sh) && (mv enableCORS.sh enableCORS) && \
./enableCORS ${APP_HOST} ${FRONTEND_PORT} && \
rm enableCORS

EXPOSE 80

CMD php ./config/configBootstrap.php && rm ./php/config/configBootstrap.php -f && apache2-foreground
