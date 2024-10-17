FROM ubuntu

RUN apt update

RUN apt install nginx -y

RUN service nginx start

WORKDIR /opt/app

ADD https://github.com/NomiRajpoot1/IAC-Website.git /opt/app

RUN cp -r . /var/www/html

ENTRYPOINT ["/usr/sbin/nginx"]

CMD ["-g", "daemon off;"]
