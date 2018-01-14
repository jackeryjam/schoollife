# parse

git init
​
git remote add -f origin https://github.com/jackeryjam/schoollife.git

git config core.sparsecheckout true

echo server_config >> .git/info/sparse-checkout
echo server_config/boot_service.sh >> .git/info/sparse-checkout
echo server_config/nginx.conf >> .git/info/sparse-checkout

git pull origin master

# 将nginx设置为开机自启
chkconfig nginx on
chkconfig httpd on

# 要在nginx的配置文件的server改成下面部分
# import config
include /home/schoolife/server_config/nginx.conf;

# 将boot_service.sh设置为开机启动的脚本
chmod +x /home/schoolife/server_config/boot_service.sh

chmod +x /etc/rc.d/rc.local

echo /home/schoolife/server_config/boot_service.sh >> /etc/rc.d/rc.local
