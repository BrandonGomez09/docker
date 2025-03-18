# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del backend al contenedor
COPY . .

# Instala las dependencias del backend
RUN npm install

# Expón el puerto 3000 para que la API sea accesible
EXPOSE 3000

# Inicia la API
CMD ["node", "server.js"]
