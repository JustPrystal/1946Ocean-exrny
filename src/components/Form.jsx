/*global fbq*/

import { useState } from 'react';
import FormImage from '../assets/images/contact/contact-image-3.png';
import axios from 'axios';

const Form = () => {
    const [isFormSent, setFormSent] = useState(false);
    const formSubmit = async (e)=>{
        e.preventDefault();
        const tracking = await JSON.parse(localStorage.getItem("tracking"));
        const formData = new FormData(e.target);
        const { full_name, email, phone_number, layout, move_in_date, message} = Object.fromEntries(formData);
        const data = {
            full_name,
            phone_number,
            email,
            source: '1946ocean.com',
            layout,
            move_in_date,
            message,
            tracking,
        };
        axios.post('https://www.exrny.com/api/leads/', data).finally(() => {
            e.target.reset()
            setFormSent(true);
            fbq('trackCustom', 'contactFormSubmit');
        })
    }
    return (
        <section className="form-image">
           <div className="inner">
                <div className="content">
                    <div className="form">
                    <form
                        onSubmit={formSubmit}
                        id='main_form'
                    >
                    {
                    isFormSent
                        ? (
                        <div
                           className='thankyou'
                        >
                            <h2 data-aos="fade-left">
                                Thank you!
                            </h2>
                            <p data-aos="fade-left">
                                We’ll be in touch
                            </p>
                        </div>
                        )
                        : (
                            <>
                                <input class="form-control-input full-name" type="text" placeholder="Full Name" name="full_name" />
                                <input class="form-control-input email" type="email" placeholder="Email address" name="email" />
                                <input class="form-control-input phone" type="tel" placeholder="Phone number" name="phone_number" pattern="[0-9\-]*"/>
                                <div className="select-wrap">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"></path> </g></svg>
                                    <select class="form-control-input layout" name="layout">
                                        <option value="" disabled selected>Desired layout</option>
                                        <option value="0">1 Bed</option>
                                        <option value="1">2 Bed</option>
                                        <option value="2">3 Bed</option>
                                    </select>
                                </div>
                                <input class="form-control-input email" type="date" name="move_in_date" />
                                <textarea name="message" placeholder='Message' rows="2" />
                                <button type="submit" class="button submit" id="send">Send Message</button>
                            </>
                        )
                    }
                    </form>
                    </div>
                    <div className="text-button">
                        <p className="txt" data-aos="fade-left">
                            Looking for a link to apply?
                        </p>
                        <a href="https://www.exrny.com/apply?utm_source=https%3A%2F%2F1946ocean.com%2F&utm_medium=referral&utm_campaign=landing_pages" className="button"> 
                            Click here 
                        </a>
                    </div>
                </div>
                <div className="image-wrap">
                    <img src={FormImage} alt="form"/>
                </div>
           </div>
        </section>
    )
}

export default Form