const express = require("express");
const os = require("os");
const dns = require("dns");

const port = 3000;
const app = express();

var ip;

const lookup = dns.lookup(os.hostname(), function(err, address, family) {
    ip = address;
});

app.get("/v1/api/nodejs/k8s", function(req, res) {     
    console.log("IP OUT: " + ip);
    res.json({
        "ip": ip, 
        "host": os.hostname()
    })
})

app.listen(port, function(err){
    if (err) {
        console.log(err);
    }
})