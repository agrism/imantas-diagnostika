#!/bin/bash
set -e
cd /var/www/imantas-diagnostika.kilograms.lv
echo "==> Pulling latest changes from git..."
git pull origin main
echo "==> Installing dependencies..."
npm install
echo "==> Building production assets..."
npm run build
echo "==> Reloading Nginx..."
systemctl reload nginx
echo "==> Deployment successful!"
