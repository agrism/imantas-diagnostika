#!/bin/bash
set -e
echo "==> Deploying to hetzner-test server..."
ssh hetzner-test "/var/www/imantas-diagnostika.kilograms.lv/deploy.sh"
echo "==> Done!"
