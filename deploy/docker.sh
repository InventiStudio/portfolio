#!/bin/bash

# Config
source deploy/config.env

# Parameters
WHERE="$1"
ACTION="$2"

# Helpers
RUN () {
  CMD="$1"
  if [[ $WHERE == 'local'  ]]; then eval $CMD; fi
  if [[ $WHERE == 'remote' ]]; then ssh $DEPLOY_HOST "cd $DEPLOY_SOURCE_DIR; $CMD"; fi
}

# Actions
if [[ -z $ACTION ]] || [[ $ACTION == 'stop' ]];   then RUN "docker rm      -f ${DEPLOY_NAME}" ; fi
if [[ -z $ACTION ]] || [[ $ACTION == 'remove' ]]; then RUN "docker rmi        ${DEPLOY_NAME}" ; fi
if [[ -z $ACTION ]] || [[ $ACTION == 'build' ]];  then RUN "docker build   -t ${DEPLOY_NAME} --build-arg DEPLOY_PORT=${DEPLOY_PORT} ." ; fi
if [[ -z $ACTION ]] || [[ $ACTION == 'run' ]];    then RUN "docker run --name ${DEPLOY_NAME} -p ${DEPLOY_PORT}:${DEPLOY_PORT} -d ${DEPLOY_NAME}" ; fi
