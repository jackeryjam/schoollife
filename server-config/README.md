# parse

git init
​
git remote add -f origin https://github.com/jackeryjam/schoollife.git

git config core.sparsecheckout true

echo server-config >> .git/info/sparse-checkout
echo server-config/boot-service >> .git/info/sparse-checkout
echo server-config/nginx >> .git/info/sparse-checkout

git pull origin master
