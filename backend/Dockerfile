FROM php:8.3-apache

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
rm /etc/apt/apt.conf.d/99myown

COPY php/ /var/www/html/
EXPOSE 80
