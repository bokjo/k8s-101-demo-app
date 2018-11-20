package com.k8s.demo.javak8sdemo.resource;

public class HostInfo {
    
    private final String version;
    private final String ip;
    private final String hostname;

    public HostInfo(String version, String ip, String hostname) {
        this.version = version;
        this.ip = ip;
        this.hostname = hostname;
    }

    public String getIp() {
        return ip;
    }

    public String getHostname() {
        return hostname;
    }

    public String getVersion() {
        return version;
    }

}