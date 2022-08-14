import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";

function AddContact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const state = useSelector((state)=> state);
    const dispatch = useDispatch();
    let history = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        let checkEmail = state.find(contact => contact.email === email);
        let checkNumber = state.find(contact => contact.number === number);
        console.log(number)
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
            id: Date.now(),
            name: name,
            email: email,
            number: number
        }
        
        dispatch({type: "SUBMIT", payload: newContact});
        toast.success("Yangi student mofaqiyatli qo'shildi.");
        history("/");


    }
    return (
        <div className="container">
            <h2 className="text-center my-2">Add Contact</h2>
            <div className="shadow col-md-6 mx-auto p-5">
                <form onSubmit={submit}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            placeholder="Name"
                            onChange={(e)=>setName(e.target.value)}    
                            className="form-control" 
                            value={name}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="email"
                            placeholder="Email"  
                            onChange={(e)=>setEmail(e.target.value)} 
                            className="form-control"    
                            value={email}  
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="number"
                            placeholder="Number"
                            onChange={(e)=>setNumber(e.target.value)} 
                            className="form-control" 
                            value={number}
                        />
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