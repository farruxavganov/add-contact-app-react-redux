import React from "react";

function EditContact(props) {
    return (
        <div className="container">
            <h2 className="text-center my-2">Edit Contact</h2>
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
                    <div className="input-group d-inline">
                        <input type="submit" className="btn btn-block btn-dark" value="Update Student" />
                    </div>
                    <div className="input-group d-inline">
                        <input type="submit" className="btn btn-block btn-danger mx-2" value="Cancel" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditContact;