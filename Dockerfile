FROM ubuntu:20.04

RUN export DEBIAN_FRONTEND=noninteractive && \
apt-get update && apt-get install -y \
nodejs \
npm \
libgtk2.0-0 \ 
libxss1 \ 
libgconf-2-4 \
libnss3-dev \
libasound2 \
firefox -y && \
apt-get clean && \
rm -rf /var/lib/apt/lists/*

RUN useradd -rm -d /home/ubuntu -s /bin/bash -g root -G sudo -u 1000 ubuntu

USER ubuntu

COPY . /home/ubuntu

WORKDIR /home/ubuntu

RUN npm install

CMD npm start
