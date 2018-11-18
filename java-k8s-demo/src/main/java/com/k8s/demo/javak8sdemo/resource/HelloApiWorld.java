package com.k8s.demo.javak8sdemo.resource;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/java")
public class HelloApiWorld {

    InetAddress ip;
    String hostname;
    HostInfo greeting;

    @GetMapping("/k8s")
    @ResponseBody
    public HostInfo hello () {

        try {
            ip = InetAddress.getLocalHost();
            hostname = ip.getHostName();
            this.greeting = new HostInfo(ip.toString(), hostname);

        } catch(UnknownHostException ex) {
            ex.printStackTrace();
        }

        return this.greeting;
        
    }
}


