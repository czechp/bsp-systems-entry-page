FROM node as build
RUN apt-get update -y
RUN apt-get install curl -y
RUN apt-get install sudo -y
RUN apt-get install git -y
RUN mkdir ProjectPage
WORKDIR /ProjectPage
RUN git clone https://github.com/czechp/bsp-systems-entry-page.git .
RUN npm install
RUN npm run build


FROM nginx
RUN rm -Rf /usr/share/nginx/html/*
COPY --from=build /ProjectPage/build /usr/share/nginx/html
