# Dockerfile
FROM node:20-alpine
WORKDIR /app
# ติดตั้ง deps ก่อน (แคชได้)
COPY package*.json ./
RUN npm install
# คัดลอกโค้ดแล้ว build
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm","run","dev","--","--host","0.0.0.0"]