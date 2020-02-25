#! /usr/bin/env bash
if [ -z "$1" ]
  then
    echo "请输入您的豆瓣ID，例如 ./copy.sh ahbei"
    exit 1
fi

cp ./public/user."$1".book.collection.json ./docs/user."$1".book.collection.json
cp ./public/users.json ./docs/users.json

echo "备份成功，请提交"
