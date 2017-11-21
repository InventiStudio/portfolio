#!/bin/bash

# Config
source deploy/config.env

# Silent fetch
git remote update > /dev/null

# Conditions
if [[ $(git rev-parse --abbrev-ref HEAD) != $DEPLOY_BRANCH ]]; then >&2 echo "🚫  You are not on deployment branch (${DEPLOY_BRANCH})."; exit 1; fi
if [[ $(git status -s) ]]; then >&2 echo "🚫  There cannot be uncommitted changes before deployment process."; exit 1; fi
# TODO: This doesn't check if there are any more changes on origin
# if [[ -z $(git status -uno | grep up-to-date) ]]; then >&2 echo "🚫  Your local branch is not up-to-date."; exit 1; fi

# Build app locally
yarn build

# Deploy
rsync -azP --delete --filter=":- .dockerignore" . $DEPLOY_HOST:$DEPLOY_SOURCE_DIR
ssh $DEPLOY_HOST "cd $DEPLOY_SOURCE_DIR; ./deploy/docker.sh local"
