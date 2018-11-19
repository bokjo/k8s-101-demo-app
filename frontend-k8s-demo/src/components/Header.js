import React from 'react';
import logo from '../images/kubernetes.svg' 
import '../App.css';

const Header = (props) => {
    return (
        <header className="App-header">
            <img src={logo} alt="K8s Logo" width="100px" height="100px"></img>
            <div>Kubernetes 101</div>
      </header>
    );
}

export default Header;