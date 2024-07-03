import logo from '../assets/logol.png';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer>
            <div className="footer py-3">
                <div className='d-flex  justify-content-around mt-5'>
                    <div className='d-flex flex-column align-items-start social-links'>
                        <img src={logo} alt="" />
                        <div className="">
                            <p>connect with us</p>
                            <div>
                                <a href="https://www.linkedin.com/company/active-farmers-cooperative/about/?viewAsMember=true" target='_blank' className='social-icons'>
                                    <Icon icon="dashicons:linkedin" className='icon' />
                                </a>

                                <a href="" target='_blank' className='social-icons'>
                                    <Icon icon="bxl:instagram" className='icon' />
                                </a>
                                <a href="https://web.facebook.com/people/Active-Farmers-Cooperative/100086400404186/" target='_blank' className='social-icons'><Icon icon="ei:sc-facebook" className='icon' /></a>
                                <a href="" target='_blank' className='social-icons'><Icon icon="ant-design:twitter-outlined" className='icon' /></a>


                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around ul">
                        <ul className="">
                            <p className='ul-p'>Reach out</p>
                            <li>
                                <p><a href="tel:+09024392982">09024392982</a>
                                    <br />
                                    <a href="tel:+08143744273">08042736998</a></p>

                            </li>
                            <li>
                                <p>No 16 Oka Oko close {<br />} Garki 2, Abuja Nigeria</p>
                            </li>
                            <li>
                                <p><a href="mailto:activefarmersinfo@gmail.com" >
                                activefarmersinfo@gmail.com
                                </a></p>

                            </li>
                        </ul>
                        <ul>
                            <p className='ul-p'>Quick Links</p>
                            <li>About Us</li>
                            <li>Target</li>
                            <li>Solutions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>
                <p className="copyright">all rights reserved @activefarmerscooperative2023</p>
            </div>

        </footer>
    );
}

export default Footer;