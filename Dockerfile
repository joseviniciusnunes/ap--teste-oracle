FROM node:14-buster-slim

ENV NODE_ENV=production
ENV LD_LIBRARY_PATH=/app/oracle
ENV ORACLE_HOME=/app/oracle

#Credenciais do oracle
ENV ORACLE_HOST=172.21.138.34
ENV ORACLE_PORT=49161
ENV ORACLE_USER=system
ENV ORACLE_PASSWORD=oracle
ENV ORACLE_SID=XE
ENV ORACLE_SCHEMA=HR

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install libaio1 -y && apt-get install unzip -y

ADD https://download.oracle.com/otn_software/linux/instantclient/instantclient-basic-linuxx64.zip driver_oracle.zip

RUN unzip driver_oracle.zip && rm driver_oracle.zip && mv instantclient_21_1 oracle

RUN yarn install && yarn build

CMD ["yarn", "start:prod"]