FROM hypriot/rpi-node
MAINTAINER Erik Thunberg <neme@whispered.se>

ADD . /app

WORKDIR /app

EXPOSE 8000

CMD ["node", "index.js"]
