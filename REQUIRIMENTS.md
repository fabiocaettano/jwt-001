# TerraForm


## Repositório

``` bash
apt get update
apt install git -y
apt install curl -y
apt install htop
```

## Projeto

```
git clone https://github.com/fabiocaettano/jwt-001.git

git config --global user.email "seuEmailDoGit"

git config --global user.name "seuUsuarioDoGit"

```

## Docker

``` bash
apt-get update
apt install apt-transport-https ca-certificates 
apt install curl -y
apt install gnupg2 -y
apt install software-properties-common -y
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
apt update
apt-cache policy docker-ce
apt install docker-ce -y
```

## Docker-Compose

```
curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

## Node

``` bash
wget https://nodejs.org/dist/v14.21.1/node-v14.21.1-linux-x64.tar.xz

mkdir -p /usr/local/lib/nodejs

VERSION=v14.21.1

DISTRO=linux-x64

tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 

chmod +x /usr/local/lib/nodejs


export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH

. ~/.profile

```

## Dependências

```
cd jwt-001/src
npm install
```

## Variaveis de ambinete

```
cd jwt-001/src
touch .env
```

Conteudo do arquivo .env:
``` vim
MYSQL_DATABASE=
MYSQL_ROOT_PASSWORD=
HOST_DB=
MYSQL_USER=
```

## Container Banco de Dados

``` bash
$ cd jwt-001

$ docker-compose up -d --build

$ docker-compose ps

$ docker container ls

$ docker exec idDoContainerMysql /bin/bash

bash#  mysql -u root -p

mysql > show databases

mysql > use node-app

mysql > CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  email varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  password varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  last_login date,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
 ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 mysql > show tables;

 mysql > desc users;

 mysql > exit;

 bash# exit

 $
```
## Container APP

```
$ docker container ls

$ docker logs idContainerApp

```