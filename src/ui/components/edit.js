import React, {useState,useEffect} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

function EditContact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    let history = useNavigate();
    
    let state = useSelector((state)=> state);
    const {id} = useParams();
    
    
    let result = state.find(contact=>(contact.id === parseInt(id) && contact));
    console.log(result, state, id)
    
    useEffect(()=>{
        if(result){
            setName(result.name);
            setEmail(result.email);
            setNumber(result.number);
        }
    },[result]);
    
    const updateSubmit = (e)=> {
        e.preventDefault();
        let checkEmail = state.find(contact => contact.id !== parseInt(id) && contact.email === email);
        let checkNumber = state.find(contact => contact.id !== parseInt(id) && contact.number === number);

        if(!name || !email || !number){
            return toast.error("Hamma joyni tuldiring!");       
        }
        
        if(checkEmail) {
            return toast.error("Bu emeil ro'yxatda bor iltmos boshqa kiriting!")
        }
        
        if(checkNumber) {
            return toast.error("Bu raqam ro'yxatda bor iltmos boshqa kiriting!")
        }
        
        let newContact = {
            id: result.id,
            name: name,
            email: email,
            number: number
        }
        
        dispatch({type: "UPDATE_SUBMIT", payload: newContact});
        toast.success("Contact yangilandi.");
        history("/");
    }
    
    return (
        <div className="container">
            <h2 className="text-center my-2">Edit Contact</h2>
            <div className="shadow col-md-6 mx-auto p-5">
                <form onSubmit={updateSubmit}>
                    <div className="input-group mb-3">
                        <input 
                            type="text"
                            onChange={(e)=>{setName(e.target.value)}}
                            placeholder="Name"
                            className="form-control" 
                            value={name}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="email" 
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="Email" 
                            className="form-control" 
                            value={email}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="number" 
                            onChange={(e)=>{setNumber(e.target.value)}}
                            placeholder="Number" 
                            className="form-control" 
                            value={number}
                        />
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