# 💰 Sistema de Gestión de Bienes (Standalone)

Este repositorio corresponde a una versión autocontenida del sistema de gestión de bienes del sitio web interno de la _[Universidad del Bío Bío](https://ubiobio.cl/w/)_. Esto corresponde a una parte del proyecto de _[Transformación Digital](https://rogandven.github.io/projectwebsite/)_, el cual consiste en modernizar los módulos web asociados a la intranet de la institución. Esta versión **especial** del código fuente está disponible para todos bajo la licencia estándar [GPLv2](https://github.com/rogandven/gestion-de-bienes-standalone/blob/main/LICENSE).

## 🌐 Stack Tecnológico

El proyecto utiliza _[Docker](https://github.com/docker/cli)_ y _[Docker Compose](https://github.com/docker/compose)_ para separar los módulos en diferentes contenedores aislados similares a sistemas operativos, con un código específicamente diseñado en torno a su uso. **A menos que se modifique el código directamente, no es posible arrancar este proyecto sin utilizar estas dependencias.**

### 🐋 Stack Tecnológico por Contenedor

* **db** _(Base de Datos)_
    * Ubuntu 20.04
        * Microsoft SQL Server 2019
* **backend**
    * Debian 12.5 
        * Apache HTTP Server 2.4.68
        * PHP 8.3.33
            * Microsoft Drivers 5.13.3 for PHP for SQL Server
* **frontend**
    * Debian 12.15 _(build-stage)_
        * Node.js 26.0.0
            * React 19.2.8 
            * TypeScript 6.0.2        
            * Vite 8.2.2
    * Debian 11 _(runtime-stage)_
        * Apache HTTP Server 2.4.68
        * PHP 8.2

## 🪾 Flujo de Trabajo

Este proyecto utiliza una versión ligeramente modificada del conocido método de ramificación _[GitFlow](https://about.gitlab.com/blog/what-is-gitflow/)_. La principal diferencia radica en que la rama que se fusiona con la rama `develop` se elimina una vez que se acepta la solicitud de fusión.

## 💻 Instrucciones de Instalación

1. Instalar [_Docker_](https://docs.docker.com/engine/install/) y [_Docker Compose_](https://docs.docker.com/engine/install/).
2. Clonar el repositorio:
```bat
git clone https://github.com/rogandven/gestion-de-bienes-standalone.git
```
3. Entrar a la carpeta raíz del repositorio.
4. Crear un archivo llamado `.env` con la siguiente sintaxis:
```py
DATABASE_IP='1.0.0.1' # Debe mantenerse igual
BACKEND_IP='1.0.0.2' # Debe mantenerse igual
FRONTEND_IP='1.0.0.3' # Debe mantenerse igual

MSSQL_PORT=54321 # Puede ser cualquier número
MSSQL_PASSWORD=ContraseniaSuperSegura # Puede ser cualquier cosa mientras siga las políticas de Microsoft

BACKEND_PORT=8080 # Puede ser cualquier número
FRONTEND_PORT=8090 # Puede ser cualquier número
```
5. Correr el comando de construcción:
```bat
docker compose up -d --build
```
6. Para iniciar sin volver a construír una nueva versión, correr el siguiente comando:
```bat
docker compose up -d
```

## 🪪 Licencia

Licenciado bajo la licencia [GPL](LICENSE).