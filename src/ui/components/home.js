import React from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

function Home(props){
    
    let state = useSelector((state)=> state);
    const dispach = useDispatch();
    const deleteContact = (id) => {
        dispach({type: "DELETE", payload: id});
        toast.success("Mofaqiyatli O'chirildi.");
    }
    
    return (
        <>
            <div className="container">
                <Link to="add" className="btn btn-primary mt-2 ">Add contact</Link>
                
                <table className="table table-striped mt-5">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Number</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.map((contactData,index) => {
                               return (<tr key={contactData.id}>
                                  <th scope="row">{index}</th>
                                  <td>{contactData.name}</td>
                                  <td>{contactData.email}</td>
                                  <td>{contactData.number}</td>
                                  <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                      <Link to={`/edit/${contactData.id}`} className="btn btn-primary">Edit</Link>
                                      <button onClick={()=>{deleteContact(contactData.id)}} type="button" className="btn btn-danger">delete</button>
                                    </div>
                                  </td>
                                </tr>)
                        })}
                      </tbody>
                </table>
            </div>
        </>
    )
}

export default Home;