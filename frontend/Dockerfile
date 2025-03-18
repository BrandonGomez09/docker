# Usa una imagen base de Nginx para servir archivos estáticos
FROM nginx:alpine

# Copia los archivos del frontend al contenedor
COPY . /usr/share/nginx/html

# Expón el puerto 80 para que Nginx sirva la aplicación
EXPOSE 80
