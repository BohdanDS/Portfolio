import React from 'react';
import style from './Contact.module.css'


const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactContainer}>
                <form>
                    <h3>Contact Me</h3>
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