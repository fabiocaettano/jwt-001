
# TerraForm


## Repositório
apt get update
apt install git -y
apt install curl -y
apt install htop


## Projeto

git clone

git config --global user.email "fabio.caettano74@gmail.com"

git config --global user.name "fabiocaettano"

## Docker

apt get update
apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
apt update
apt-cache policy docker-ce
apt install docker-ce


## Docker-Compose
curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

## Node
wget https://nodejs.org/dist/v14.21.1/node-v14.21.1-linux-x64.tar.xz

mkdir -p /usr/local/lib/nodejs

VERSION=v14.21.1

DISTRO=linux-x64

tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 

chmod +x /usr/local/lib/nodejs

export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH

. ~/.profile

## Criar Projeto

npm init -y

touch .gitignore

touch .dockerignore

touch server.js

## Dependências

npm install dot env nodemon express express-validator mysql body-parser jsonwebtoken bcryptjs cors --save

