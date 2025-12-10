# Dockerfile de producción con pnpm (para usar con Traefik)
FROM node:20-alpine

# Instalar pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instalar dependencias de producción
RUN pnpm install --frozen-lockfile --prod

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN pnpm build

# Exponer puertos 80 y 443 para Traefik
EXPOSE 80 443

# Usar vite preview para servir la build en puerto 80
CMD ["pnpm", "preview", "--host", "--port", "80"]
