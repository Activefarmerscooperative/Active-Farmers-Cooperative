import { Icon } from '@iconify/react';

const ContactUs = () => {
  

    return (
        <div className="contact"  id="contact">
            <div className="d-flex flex-column align-items-center justify-content-between ">
                <h2 className='mt-5 pt-5'>Contact Us</h2>
                <div className="d-flex align-items-center justify-content-between contact-list">
                    <div className="box">
                        <h3 ><Icon icon="mdi:email" className='fa-icon'/> Email</h3>
                        <p>
                            <a href="mailto:activefarmersinfo@gmail.com" >
                            
                            activefarmersinfo@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="box">
                        <h3 ><Icon icon="ic:baseline-call" className="fa-icon" /> Phone</h3>
                        <p>
                            <a href="tel:+09024392982">09024392982</a>
                            <br />
                            <a href="tel:+08142736998">08142736998</a>
                        </p>
                    </div>
                    <div className="box">
                        <h3 ><Icon icon="mdi:map-marker-radius" className="fa-icon" /> Address</h3>
                        <p>
                            No 16 Oka Oko close Garki 2, Abuja Nigeria
                        </p>
                    </div>
                </div>
                <div className=" contact-list-mobile">
                    <div>
                        <h3 ><Icon icon="mdi:email"className="fa-icon" /> Email</h3>
                        <p>
                          <a href="mailto:activefarmersinfo@gmail.com" >
                            activefarmersinfo@gmail.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3> <Icon icon="ic:baseline-call" className="fa-icon" /> Phone</h3>
                        <p>
                            <a href="tel:+09024392982">09024392982</a>
                            <br />
                            <a href="tel:+08142736998">08142736998</a>
                        </p>
                    </div>
                    <div>
                    <h3><Icon icon="mdi:map-marker-radius" className="fa-icon"/> Address</h3>
                        <p>
                            No 16 Oka Oko close Garki 2, Abuja Nigeria
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;