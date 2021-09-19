#################################################
# Build environment
#################################################
FROM node:12.16.3-alpine as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN apk add --no-cache git
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY .env ./
COPY . ./

# build app
RUN npm run build

##################################################
# Production environment
##################################################
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]