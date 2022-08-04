import React, {Component} from "react";
import {Route,Routes} from "react-router-dom";
import Navbar from "./ui/components/navbar";
import Home from "./ui/components/home";
import Add from "./ui/components/add";
import Edit from "./ui/components/edit";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar>
                    Add contact
                </Navbar>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="add" element={<Add />} />
                    <Route path="edit/:id" element={<Edit />} />
                </Routes>
            </div>
        )
    }
}

export default App;