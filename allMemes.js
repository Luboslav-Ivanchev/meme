import {html,render} from '../node_modules/lit-html/lit-html.js';

let template=()=>html`

    <section id="welcome">
        <div id="welcome-container">


            <div class="container signin">
                <p>You are not logged</p>
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>

            <div class="container signin">
                <p>You are not logged</p>
                <p>If you don't have an account<a href="/register">Sign up</a>.</p>
            </div>
           
            </div>
        </div>
    </section>


`;

class allMemes extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        render(template(),this)
    }

}

export default allMemes;