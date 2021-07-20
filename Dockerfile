FROM node:14-buster-slim

ENV LD_LIBRARY_PATH=/app/oracle
ENV ORACLE_HOME=/app/oracle

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install libaio1 -y

RUN yarn install && yarn build

CMD ["yarn", "start:prod"]