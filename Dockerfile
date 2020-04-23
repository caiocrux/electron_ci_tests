FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y libgtk2.0-0
RUN apt-get install -y libxss1 libgconf-2-4 libnss3-dev libasound2
RUN npm install electron@1.6.1 --save
RUN groupadd -g 1000 caio
RUN useradd -d /home/caio -s /bin/bash -m caio -u 1000 -g 1000
USER caio
ENV HOME /home/caio
#RUN mkdir app
COPY . /home/caio
WORKDIR /home/caio
RUN npm install
CMD npm start
