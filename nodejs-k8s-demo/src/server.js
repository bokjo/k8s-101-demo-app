const express = require("express");
const os = require("os");
const dns = require("dns");

const port = 3000;
const app = express();
const version = "v1";

var ip;

const lookup = dns.lookup(os.hostname(), function(err, address, family) {
    ip = address;
});

app.use(function(req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/v1/api/nodejs/k8s", function(req, res) {     
    console.log("IP OUT: " + ip);
    res.json({
        "version": version,
        "ip": ip, 
        "hostname": os.hostname()
    })
})

app.listen(port, function(err){
    if (err) {
        console.log(err);
    }
})