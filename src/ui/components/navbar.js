import React from "react";

function Navbar (props) {
    const name = props.children;
    return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{name}</a>
        </div>
    </nav>
    )
}

export default Navbar;