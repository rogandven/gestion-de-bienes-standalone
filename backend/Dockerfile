FROM php:8.2-apache

# https://github.com/ameinild/add-apt-key
RUN apt install curl -y && \
curl -L https://raw.githubusercontent.com/ameinild/add-apt-key/master/add-apt-key -o /usr/local/bin/add-apt-key && \
curl -L https://raw.githubusercontent.com/ameinild/add-apt-key/master/add-apt-key.conf -o /usr/local/etc/add-apt-key.conf && \
chmod a+rx /usr/local/bin/add-apt-key

# https://stackoverflow.com/questions/51933001/install-configure-sql-server-pdo-driver-for-php-docker-image#69644832
ENV ACCEPT_EULA=Y

WORKDIR /

RUN (apt-get update && apt-get install -y gnupg2) && \
(curl https://packages.microsoft.com/keys/microsoft.asc | add-apt-key - /usr/share) && \
(curl https://packages.microsoft.com/config/debian/$(grep VERSION_ID /etc/os-release | cut -d '"' -f 2 | cut -d '.' -f 1)/prod.list > /etc/apt/sources.list.d/mssql-release.list) && \
(apt-get update) && \
(ACCEPT_EULA=Y apt-get -y --no-install-recommends install msodbcsql17 unixodbc-dev) && \
(pecl install sqlsrv) && \
(pecl install pdo_sqlsrv) && \
(docker-php-ext-enable sqlsrv pdo_sqlsrv)

COPY php/ /var/www/html/
EXPOSE 80
