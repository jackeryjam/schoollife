# !/bin/bash

# centos系统重装后先更新
yum -y update

# 安装nginx
yum install -y nginx

# git
yum install -y git

# node 
yum install -y nodejs
# cnpm
node install cnpm -g

