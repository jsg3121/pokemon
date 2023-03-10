#!/bin/bash

echo "server build..."
yarn build
echo
echo
echo
echo "기존 이미지 삭제합니다"
rm -rf ./build/app/src/assets
echo "삭제 완료"

echo "이미지 추가중..."
cp -r ./src/assets ./build/app/src

echo "finish!!"
