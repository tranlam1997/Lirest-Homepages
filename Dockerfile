FROM node:16-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store pnpm install --no-optional

COPY . .
RUN pnpm build

FROM nginx:stable-alpine as production-stage

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

RUN mkdir /etc/nginx/certs
COPY /certs /etc/nginx/certs

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
