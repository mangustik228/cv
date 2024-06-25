
# Just my cv... 


server {
    listen 80;
    server_name mangust.ru;

    location /resume {
        alias /home/bacek/dev/cv;
        autoindex on;
    }

    location / {
    }
}