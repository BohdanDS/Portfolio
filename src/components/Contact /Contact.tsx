import React from 'react';
import style from './Contact.module.css'
import BlockHeader from "../common/blockHeader/BlockHeader";


const Contact = () => {
    return (
        <div className={style.contactBlock} id='contact'>
            <div className={style.contactContainer}>
                <form>
                    <BlockHeader title={'Contact Me'} description={`Let's get in touch`}/>
                    <label>Your Name</label>
                    <input/>
                    <label>Subject</label>
                    <input/>
                    <label>Your Email</label>
                    <input/>
                    <label>Message</label>
                    <textarea className={style.textArea}/>
                    <div>
                        <button className={style.submitButton}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;