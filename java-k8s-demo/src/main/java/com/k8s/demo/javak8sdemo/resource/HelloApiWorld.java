package com.k8s.demo.javak8sdemo.resource;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/java")
public class HelloApiWorld {
    
    String version = "v1";
    
    InetAddress host;
    String ip;
    String hostname;
    HostInfo greeting;

    @CrossOrigin(origins = "*")
    @GetMapping("/k8s")
    @ResponseBody
    public HostInfo hello () {

        try {
            host = InetAddress.getLocalHost();
            hostname = host.getHostName();
            ip = host.getHostAddress();

            this.greeting = new HostInfo(version, ip, hostname);

        } catch(UnknownHostException ex) {
            ex.printStackTrace();
        }

        return this.greeting;
        
    }
}


