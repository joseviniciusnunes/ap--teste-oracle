FROM node:14-buster-slim

ENV LD_LIBRARY_PATH=/app/oracle
ENV ORACLE_HOME=/app/oracle

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install libaio1 -y && apt-get install unzip -y

ADD https://download.oracle.com/otn_software/linux/instantclient/instantclient-basic-linuxx64.zip driver_oracle.zip

RUN unzip driver_oracle.zip && rm driver_oracle.zip && mv instantclient_21_1 oracle

RUN yarn install && yarn build

CMD ["yarn", "start:prod"]