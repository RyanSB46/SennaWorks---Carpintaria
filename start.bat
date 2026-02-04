@echo off
REM Adicionar Node.js ao PATH
set PATH=%PATH%;C:\Program Files\nodejs

REM Configurar Firefox como navegador padrão
set BROWSER="C:/Program Files/Mozilla Firefox/firefox.exe"

REM Mudar para a pasta do projeto
cd /d "C:\Users\ryans\Documents\Devs Work\meu-site-carpintaria\SennaWorks---Carpintaria"

REM Iniciar o servidor React
npm start

pause
