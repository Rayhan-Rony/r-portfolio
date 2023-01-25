import React, { useRef } from 'react';
import './Contact.css'
import mail2 from '../../../Assets/Mailbox.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_klxx3to', 'template_hl1azan', form.current, 'FJ89ZE7crckVHK_5M')
            .then((result) => {
                e.target.reset()
                console.log(result.text);
                // console.log(e.target)
                alert('Message Send Successfull')
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='bg-gray-900 text-white' id='contact' >

            <div className='w-11/12 mx-auto py-6'>
                <h2 className='text-4xl font-bold text-center'>Contact Me</h2>
                <div className='flex justify-center align-middle c py-10'>
                    <div className='hidden lg:block flex-1'>
                        <img className='w-1/2 mx-auto' src={mail2} alt="" />
                    </div>
                    <div className='flex-1'>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center align-middle gap-4 lg:w-1/2 w-full mx-auto'>

                            <input className='p-2 rounded border-2 border-sky-400' type="text" name="user_name" placeholder='Name' required />

                            <input className='p-2 rounded border-2 border-sky-400 ' type="email" name="user_email" placeholder='Email' required />

                            <textarea className='p-2 rounded border-2 border-sky-400 text-black ' name="message" placeholder='Message' required />
                            <input className='border border-sky-400 p-2 rounded-full text-lg w-1/4 mx-auto hover:bg-sky-500' type="submit" value="Send" />
                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
    // ref={form} onSubmit={sendEmail}
};

export default Contact;