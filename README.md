# jwt-001
RestFul com NodeJs e Autenticação com JWT

## Preparar Ambiente


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