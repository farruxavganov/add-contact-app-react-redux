import React from "react";

function AddContact(props) {
    return (
        <div className="container">
            <h2 className="text-center my-2">Add Contact</h2>
            <div className="shadow col-md-6 mx-auto p-5">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Name" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" placeholder="Number" className="form-control" />
                    </div>
                    <div className="input-group">
                        <input type="submit" className="btn btn-block btn-dark" value="Add Student" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddContact;