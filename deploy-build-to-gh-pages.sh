#!/usr/bin/env bash

echo 'App version number?'
read app_version

find ../timoncp.github.io -type f -name 'asset-manifest.json' -delete
find ../timoncp.github.io -type f -name 'favicon*.ico' -delete
find ../timoncp.github.io -type f -name 'index.html' -delete
find ../timoncp.github.io -type f -name 'manifest.json' -delete
find ../timoncp.github.io -type f -name 'precache-manifest.*.js' -delete
find ../timoncp.github.io -type f -name 'service-worker.js' -delete
find ../timoncp.github.io -type f -name '*.pdf' -delete

rm -rf ../timoncp.github.io/static

cd build && cp -r . ../../timoncp.github.io/


cd ../../timoncp.github.io
git add .
git commit -m "v$app_version"
git push

echo "App version $app_version deployed succesfully to github user pages"
