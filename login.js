import {html,render} from '../node_modules/lit-html/lit-html.js';

let temp=()=>html`

    <!-- Login Page ( Only for guest users ) -->
    <section id="login">
        <form id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label id="em"></label>
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label id="pas"></label>
                <input type="submit" onclick="login(event)" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
    
`;

class login extends HTMLElement{
    connectedCallback(){
        this.render();

    }

    render(){
        render(temp(),this)
    }

}

export default login;