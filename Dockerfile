# 1️⃣ Define a imagem base com a versão LTS do Node.js
FROM node:lts

# 2️⃣ Define o diretório de trabalho dentro do container
WORKDIR /app

# 3️⃣ Copia o arquivo de dependências (package.json e package-lock.json) para o container
COPY package*.json ./

# 4️⃣ Instala as dependências da aplicação
RUN npm install

# 5️⃣ Copia todos os arquivos da aplicação para o diretório de trabalho do container
COPY . .

# 7️⃣ Comando para executar o código
CMD [ "npm", "start" ]
