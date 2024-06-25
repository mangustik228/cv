
# Just my cv... 


server {
    listen 443 ssl;
    server_name mangust.ru;

    ssl_certificate /etc/letsencrypt/live/mangust.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mangust.ru/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location /resume {
        alias /home/bacek/dev/cv;
        autoindex on;
    }

    location / {
    }
}

sudo ln -s /etc/nginx/sites-available/mangust228.ru /etc/nginx/sites-enabled/