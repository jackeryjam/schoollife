# parse

git init
​
git remote add -f origin https://github.com/jackeryjam/schoollife.git

git config core.sparsecheckout true

echo parse >> .git/info/sparse-checkout

git pull origin master
