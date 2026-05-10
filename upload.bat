@echo off
echo =======================================================
echo Preparing to upload LogisticsCore to GitHub...
echo =======================================================

echo.
echo [1/5] Initializing Git repository...
git init

echo.
echo [2/5] Adding files...
git add .

echo.
echo [3/5] Committing changes...
git commit -m "Initial commit: LogisticsCore Landing Page & Configuration"

echo.
echo [4/5] Setting main branch...
git branch -M main

echo.
echo [5/5] Connecting to GitHub and pushing...
git remote add origin https://github.com/Code-By-Nithin/logistics-core.git
git push -u origin main

echo.
echo =======================================================
echo If the push was successful, you can now host it!
echo Run 'npm install gh-pages --save-dev' then 'npm run deploy'
echo =======================================================
pause
