var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
var uri = 'mysql://root:RNJf9A7Org@rm-wz9qj6860qz4f20vs.mysql.rds.aliyuncs.com:3306/schoollife';
const MySQL = require('parse-server-mysql-adapter');
const mysql = new MySQL(uri);

var api = new ParseServer({
  databaseAdapter: mysql.getAdapter(),
  appId: 'schoollife',
  masterKey: 'cxXqDzC3PI1awc1Xv8wX', // Keep this key secret!
  serverURL: 'http://localhost:1337/parse', // Don't forget to change to https if needed
});

app.use('/parse', api);
app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});

var ParseDashboard = require('parse-dashboard');

var dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: "http://schoolife.zhitantech.com/parse",
      appId: 'schoollife',
      masterKey: 'cxXqDzC3PI1awc1Xv8wX', // Keep this key secret!
      appName: "schoollife"
    }
  ],
  users: [
    {
      user:"root",
      pass:"test"
    }
  ],
  useEncryptedPasswords: true 
});

app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(4040);