import React from "react";
import "../css/auth.css";
import Axios from "axios";

class SignUp extends React.Component {
    state = { user: {} };

    onSubmitClick = async (event) => {
        event.preventDefault();
        console.log(this.state.user);
        await Axios.post("http://localhost:5000/signup", this.state.user)
        .then((response) => {
            console.info(response);
        }).catch((error) => {
            console.error(error);
        });
    };

    render() {
        return (
        <div className = "body">
        <div className = {"section"}>
        <form>
            <h1 className = "heading">SignUp</h1>    
            <div className={"feild"}>
                <label className="labels">Name</label>
                <div>
                    <div className = {"field"}>
                        <input className="Inputs" type = {"text"} 
                        placeholder = {"Name"}
                        onChange = {(e) => {
                            this.setState({user:{...this.state.user, Name: e.target.value }})
                         }}
                        />
                    </div>                   
                         
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
                </div>
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

export default SignUp;