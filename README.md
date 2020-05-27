# backborn_nodejs_mysql

## Usage

__You must 'config/database.js' file to match your database and write mysql query to 'app.js:11'.__

First, follow commands on this repository directory. This command install npm packages which is descripted in package.json file.

``` bash
$ npm install
```

If there is not mysql-server in your server or local machine, follow this command. __This document only describes the ubuntu environment.__

``` bash
# Install mysql

$ sudo apt-get update -y
$ sudo apt-get install -y mysql-server
```
``` bash
# Setup mysql

$ sudo ufw allow mysql  # Allow access to your mysql from outside.

$ sudo systemctl start mysql
$ sudo systemctl enable mysql # Register mysql as a startup program.

$ sudo mysql -u root -p

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<your password>'; # Allow access to your mysql from outside.
```

``` bash
# Running nodejs server

$ npm start
```

After that, connect http://localhost:8000/


## Reference

* Node.js(Express)와 MySQL 연동: https://poiemaweb.com/nodejs-mysql
* mysql 설치 와 기본 설정 (on Ubuntu): https://dejavuqa.tistory.com/317
* nodejs와 mysql 연동 에러: https://www.inflearn.com/questions/3637