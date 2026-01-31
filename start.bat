@echo off
REM Adicionar Node.js ao PATH
set PATH=%PATH%;C:\Program Files\nodejs

REM Mudar para a pasta do projeto
cd /d "C:\Users\ryans\Documents\Devs Work\meu-site-carpintaria"

REM Iniciar o servidor React
npm start

pause
