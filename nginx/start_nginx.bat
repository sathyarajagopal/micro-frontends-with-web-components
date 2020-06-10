@ECHO OFF
cd /users/spr/nginx-1.19.0
taskkill /f /IM nginx.exe
start nginx
EXIT