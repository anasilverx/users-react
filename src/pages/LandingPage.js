import React from "react";

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to Morti</h1>
            <p> Login to continue</p>
            <div className="button-span">
                <a href='/login'>
                    <button>Login</button>
                </a>
                <a href='/register'>
                    <button>Register</button>
                </a>
            </div>
        </div>
    )
}

export default LandingPage