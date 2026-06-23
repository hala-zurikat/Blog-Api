# 1. Base image (Node environment)
FROM node:20

# 2. Create app directory inside container
WORKDIR /app

# 3. Copy package files first (for caching optimization)
COPY package*.json ./

# 4. Install dependencies (production mode)
RUN npm install

# 5. Copy all project files
COPY . .

# 6. Expose port (Express default or your app port)
EXPOSE 3000

# 7. Start application
CMD ["node", "app.js"]