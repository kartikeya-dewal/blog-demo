FROM nginx
RUN apt-get update -q && apt-get dist-upgrade -y && apt-get clean && apt-get autoclean && apt-get install openssl -y
ENV WWW_PATH /usr/share/www/html
RUN mkdir -p $WWW_PATH && chown nginx:nginx $WWW_PATH
# To build the image with arg password => 'docker build -t --build-arg PASSWORD=pass123 .'
ARG PASSWORD=pass
# Hashing the password
RUN printf "test:$(openssl passwd -1 $PASSWORD)\n" >> $WWW_PATH/.htpasswd
RUN rm /etc/nginx/conf.d/default.conf
COPY etc/nginx/conf.d/main.conf /etc/nginx/conf.d/
COPY usr/share/www/html /usr/share/www/html/
