import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';


class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {
           url: "https://guarded-cliffs-60992.herokuapp.com/logout",
           error: "",
           loggedin: "true",
        }

    }

    componentDidMount(){
        const url = 'https://guarded-cliffs-60992.herokuapp.com/logout/'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
              error  : data.error,
              loggedin: data.loggedin
            })
        });
    }

    render() {
        if(Cookies.get('loggedin') !== "false"){
            console.log("redirecting")
            window.location = "http://geektext00.web.app/books";
            Cookies.set('loggedin', 'false')
        }
         return (null);
  }
}

export default Logout;
