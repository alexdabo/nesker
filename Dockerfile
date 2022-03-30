FROM node:16-alpine AS development

WORKDIR /api

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /api

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /api/dist ./dist

CMD ["node", "dist/main"]