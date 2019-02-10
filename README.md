# REACT REDUX TODO APP

### A simple todo app using React, Redux, and Material-UI

## START

Requires [Node.js](https://nodejs.org/en/download/)

```
$ cd app/
$ npm install
$ npm start
```

## RUN DOCKER

Requires [Docker Engine && Docker Compose](https://docs.docker.com/install/)

Build and start the containers

```
$ docker-compose up

  -d, --detach    Detached mode: Run containers in the background
```

## REFERENCE

Stop/remove the containers
```
$ docker-compose stop

$ docker-compose down

  --rmi all       Remove all images used by any service
  -v, volumes     Remove named volumes declared in the 'volumes' section of the Compose file  
```

Show running containers
```
$ docker ps
```

Once a container is running, we can execute a command inside that container
```
$ docker exec -it <CONTAINER ID/NAME> bin/bash
```
