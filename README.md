# Blog Demo
## A sample blog application built on MEAN stack running inside docker containers.

After cloning the respository, run following commands to build the docker images:

>cd blog-demo</br>
>docker build -t db ./db</br>
>docker build -t app ./app</br>
>docker build -t webclient --build-arg PASSWORD=*\<password\>* ./webclient</br>

Official docker images used:</br>
db -> mongo</br>
app -> node</br>
webclient -> nginx</br>

To start the containers, run:</br>
>docker-compose up -d</br>

To stop the containers, run:</br>
>docker-compose stop

To stop and delete the containers, run:</br>
>docker-compose down

