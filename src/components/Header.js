    import React, { Component } from "react";
    import FreBseAuth from "../Authentication/FreBseAuthentication"
    export class Header extends Component {

        render() {
            return (
    <div>
    <header className="hero">
                    <h1 className="App-title display-4 text-center">
                    Black Individuals
                    <br />
                    <small className="text-muted">Personal Blog </small>
                    </h1>
                    <FreBseAuth/>
    </header>
    </div>
                );
            }
        }
        export default Header;