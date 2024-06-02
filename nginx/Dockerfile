## use the official nginx image
FROM nginx

## copy configuration file
COPY default.conf /etc/nginx/conf.d/default.conf

RUN nginx -t

# Expose port 443 
EXPOSE 443
