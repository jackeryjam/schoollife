# parse

git init
​
git remote add -f origin https://github.com/jackeryjam/schoollife.git

git config core.sparsecheckout true

echo server_config >> .git/info/sparse-checkout
echo server_config/boot_service >> .git/info/sparse-checkout
echo server_config/nginx.conf >> .git/info/sparse-checkout

git pull origin master
