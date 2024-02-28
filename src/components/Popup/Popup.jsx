import React, { useState } from 'react';
import './Popup.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

function Popup() {
    const [isOpen, setIsOpen] = useState(true);

    const close = () => {
        setIsOpen(false); // Update the state to close the pop-up
    };

    return (
        isOpen ? (
            <div className='popup'>
                <IoMdCloseCircleOutline className='close' onClick={close} />
                <div className='register'>
                    <h1>Register</h1>
                </div>
                <div>
                    <div className='name style'>
                        <h4>Name</h4>
                        <input className='input' type="text" />
                    </div>
                    <div className='email style'>
                        <h4>Enter email</h4>
                        <input className='input' type="email" />
                    </div>
                    <div className='number style'>
                        <h4>Phone Number</h4>
                        <input className='input' type="text" />
                    </div>
                    <div className='class style'>
                        <h4>Class</h4>
                        <input className='input' type="text" />
                    </div>
                </div>
                <div>
                    <button className='submitpopup' onClick={close}>Submit</button>
                </div>
            </div>
        ) : (
            <div></div>
        )
    );
}

export default Popup;
