FROM mhart/alpine-node:8

ARG DEPLOY_PORT
ENV PORT $DEPLOY_PORT

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn add express compression sparkpost body-parser read-dir-files markdown-it gray-matter

EXPOSE ${PORT}

CMD ["node", "build/prod-server.js"]
