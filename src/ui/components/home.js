import React from "react";
import {Link} from "react-router-dom";

function Home(props){
    return (
        <>
            <div className="container">
                <Link to="add" className="btn btn-primary mt-2 ">Add contact</Link>
            </div>
        </>
    )
}

export default Home;