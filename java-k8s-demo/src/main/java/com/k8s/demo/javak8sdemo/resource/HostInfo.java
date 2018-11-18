package com.k8s.demo.javak8sdemo.resource;

public class HostInfo {

    private final String ip;
    private final String hostname;

    public HostInfo(String ip, String hostname) {
        this.ip = ip;
        this.hostname = hostname;
    }

    public String getIp() {
        return ip;
    }

    public String getHostname() {
        return hostname;
    }

}