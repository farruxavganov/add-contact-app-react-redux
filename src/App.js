import React, {Component} from "react";
import {Route,Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import store from "./store/store";
import Navbar from "./ui/components/navbar";
import Home from "./ui/components/home";
import Add from "./ui/components/add";
import Edit from "./ui/components/edit";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <ToastContainer />
                    <Navbar>
                        Add contact
                    </Navbar>
                    <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="add" element={<Add />} />
                        <Route path="edit/:id" element={<Edit />} />
                    </Routes>
                </div>
            </Provider>
        )
    }
}

export default App;