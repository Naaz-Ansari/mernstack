import React from "react";
import "../css/auth.css";
import Axios from "axios";

class Login extends React.Component {
    state = { user: {} };

    onSubmitClick = async (event) => {
        event.preventDefault();
        await Axios.post("http://localhost:5000/login", this.state.user)
        .then((response) => {
            console.info(response);
        }).catch((error) => {
            console.error(error);
        });
    };

    render() {
        return (
            <div className="body">
            <div className = {"section"}>
            <form>
                <h1 className = "heading">Login</h1>
                        <label className="labels">Email</label>
                        <div className = {"field"}>
                            <input className="Inputs" type = {"email"} 
                            placeholder = {"Email *"}
                            onChange = {(e) => {
                            this.setState({user: {...this.state.user, email: e.target.value }})
                             }}
                            />
                        </div>
    
                        <label className="labels">Password</label>
                        <div className = {"field"}>
                            <input className="Inputs" type = {"password"} 
                            placeholder = {"password *"}
                            onChange = {(e) => {
                                this.setState({user:{...this.state.user, password: e.target.value }})
                             }}
                            />
                        </div>
    
            <button className = "SubmitButton"
            onClick={this.onSubmitClick}> 
             Submit</button>
        
        </form>
        </div>
        </div>
        )
    }
}

export default Login;