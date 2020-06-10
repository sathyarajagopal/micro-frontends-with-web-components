# Micro-frontends with Web Components

Using web components as a wrapper for both Angular and React components, I am going to show them working alongside each other in a single application. I will also pass data to both components from the parent container, and back again.

Follow the instructions below to build and serve micro-frontend components for Angular and React, and a wrapper application to compose them together and handle communication between them.

For a full walk-through visit [Create Micro-frontends using Web Components with support for Angular and React](https://medium.com/@kitson.mac/create-micro-frontends-using-web-components-with-support-for-angular-and-react-2d6db18f557a?source=friends_link&sk=642e86f203d58724d63d9d98aeb11476).

## Build and serve Angular component

```sh
cd micro-fe-ng
npm i
npm start
```
[http://localhost:5001/main.js](http://localhost:5001/main.js)

```html
<ng-el></ng-el>
```

## Build and serve React component

```sh
cd micro-fe-react
npm i
npm start
```
[http://localhost:5002](http://localhost:5002)


```html
<react-el></react-el>
```

## Build and serve wrapper

```sh
cd micro-fe-wrapper
npm i
npm start
```
[http://localhost:5000](http://localhost:5000)

## Nginx
- Download and extract NGINX binaries folder into C:\Users\SPR
- cd C:\Users\SPR\nginx-1.19.0
- Create "sites-enabled" and "sites-available" folders inside "C:\Users\SPR\nginx-1.19.0\conf" folder.
- Copy all the 3 site conf files into "conf/sites-available" folder.
- Run the below commands to symlink all the 3 virtual hosts config files.
```
mklink /h "conf/sites-enabled/micro-fe-wrapper.conf" "conf/sites-available/micro-fe-wrapper.conf"
mklink /h "conf/sites-enabled/micro-fe-ng.conf" "conf/sites-available/micro-fe-ng.conf"
mklink /h "conf/sites-enabled/micro-fe-react.conf" "conf/sites-available/micro-fe-react.conf"
```
- Run the below command to symlink virtual host directories to actual dist path
```
mklink /j html\micro-fe-wrapper C:\Data\Github\micro-frontends-with-web-components\micro-fe-wrapper
mklink /j html\micro-fe-ng C:\Data\Github\micro-frontends-with-web-components\micro-fe-ng\dist
mklink /j html\micro-fe-react C:\Data\Github\micro-frontends-with-web-components\micro-fe-react\dist
```