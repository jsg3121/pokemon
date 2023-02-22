#!/bin/bash

echo "server build..."
yarn build
echo
echo

echo "이미지 추가중..."
cp -r ./src/assets ./build/app/src

echo "finish!!
