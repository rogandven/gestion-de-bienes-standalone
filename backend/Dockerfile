FROM php:8.2-apache

# https://stackoverflow.com/questions/51933001/install-configure-sql-server-pdo-driver-for-php-docker-image#69644832
ENV ACCEPT_EULA=Y
USER root
WORKDIR /

COPY apt-key.sh /bin/
RUN mv /bin/apt-key.sh /bin/apt-key 

RUN (apt-get update && apt-get install -y gnupg2) && \
(curl https://packages.microsoft.com/keys/microsoft.asc > microsoft.asc) && \
(apt-key add microsoft.asc microsoft-prod) && \
(curl https://packages.microsoft.com/config/debian/$(grep VERSION_ID /etc/os-release | cut -d '"' -f 2 | cut -d '.' -f 1)/prod.list > /etc/apt/sources.list.d/mssql-release.list) && \
(ln -s /usr/share/keyrings/legacy.keyring.gpg /usr/share/keyrings/microsoft-prod.gpg) && \
(apt-get update) && \
(ACCEPT_EULA=Y apt-get -y --no-install-recommends install msodbcsql17 unixodbc-dev) && \
(pecl install sqlsrv) && \
(pecl install pdo_sqlsrv) && \
(docker-php-ext-enable sqlsrv pdo_sqlsrv)

COPY php/ /var/www/html/
EXPOSE 80
