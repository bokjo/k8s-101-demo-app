import React, { Component } from 'react';
import logo from '../images/nodejs.svg'


export default class NodeJS extends Component {

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
        
        fetch("http://localhost:1234/v1/api/nodejs/k8s")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({
                hostinfo: {
                    "version": "N/A",
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
                <img src={logo} alt="NodeJS Logo" width="100px" height="100px"></img>
                <p>NodeJS Svc</p>
                <p>Version: {this.state.hostinfo.version}</p>
                <p>IP: {this.state.hostinfo.ip}</p>
                <p>Hostname: {this.state.hostinfo.hostname}</p>
            </div>
        );
    }
}