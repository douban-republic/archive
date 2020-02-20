#! /usr/bin/env bash
git init
git config user.name "akira"
git config user.email "akira@douban.com"
git remote add git@me.github.com:douban-republic/archive.git
git add .
git commit -m 'fake initial commit'
git push -u origin master
