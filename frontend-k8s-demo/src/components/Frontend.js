import React, { Component } from 'react';
import logo from '../images/react.svg';
import os from 'os';

export default class Frontend extends Component {
    
    constructor() {
        super();

        this.state = {
            hostinfo: {
                "version": "v1",
                "hostname": os.hostname()
            }
        }
    }

    render() {
        return (
            <div className="flex-item">
                <img src={logo} alt="React Logo" width="100px" height="100px"></img>
                <p>Web App</p>
                <p>Version: {this.state.hostinfo.version}</p>
                <p>IP: {this.state.hostinfo.ip}</p>
                <p>Hostname: {this.state.hostinfo.hostname}</p>
            </div>
        );
    }
}