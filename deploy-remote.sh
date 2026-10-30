#!/bin/bash
set -e
echo "==> Pushing local changes to GitHub..."
git push origin main
echo "==> Triggering deploy on hetzner-test server..."
ssh hetzner-test "/var/www/imantas-diagnostika.kilograms.lv/deploy.sh"
echo "==> Finished! Check https://imantas-diagnostika.kilograms.lv"
