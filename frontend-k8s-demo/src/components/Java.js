import React, { Component } from 'react';
import logo from '../images/java.svg'


export default class Java extends Component {

    constructor() {
        super();

        this.state = {
            hostinfo: {
                "version": "N/A",
                "ip": "N/A",
                "hostname": "N/A"
            }
        }
    }

    componentWillMount() {
        //fetch("http://java.service.XXXXXXXXXXXXXXXXXXXX.westeurope.aksapp.io/v1/api/java/k8s") // Azure Hack
        fetch("http://java.service/v1/api/java/k8s")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({
                hostinfo: {
                    "version": data.version,
                    "ip": data.ip,
                    "hostname": data.hostname
                }
            });
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="flex-item">
               <img src={logo} alt="Java Logo" width="100px" height="100px"></img>
                <p>Java Svc</p>
                <p>Version: {this.state.hostinfo.version}</p>
                <p>IP: {this.state.hostinfo.ip}</p>
                <p>Hostname: {this.state.hostinfo.hostname}</p>
            </div>
        );
    }
}