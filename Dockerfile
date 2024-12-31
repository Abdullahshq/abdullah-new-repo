# Use an official Nginx image
FROM nginx:alpine

# Copy website files to Nginx's default directory
COPY website /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
