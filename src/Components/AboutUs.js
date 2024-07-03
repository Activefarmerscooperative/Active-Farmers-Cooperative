// import jar from "../assets/jar.png";
import a from "react-anchor-link-smooth-scroll";

const AboutUs = () => {

    return (
        <div className="about-us" id="about">
            <div className="d-flex align-items-center justify-content-between about-us-info">
                <div className="image">
                    {/* <img src={jar} alt="" /> */}
                </div>
                <div className="d-flex flex-column justify-content-between text">
                    <h2 className="h2-1 mt-5 pt-3">About Us</h2>
                    <h2 className="h2-2 mt-5 pt-3">We exist for <span style={{ color: "#E98923" }}>you</span></h2>
                    <p style={{ color: "#FFFFFF" }}>
                        Active farmers cooperative offers a comprehensive loan service designed to meet the financial needs of our customers. We understand that obtaining the right loan can be a crucial step towards achieving your goals, whether it's venturing into farming business, starting a business, expanding an existing business, or funding other important endeavors. With our loan service, we strive to provide convenient and reliable solutions to help farmers individuals and businesses access the necessary funds.

                        {<br />}
                        We offer a wide range of loan options, flexible terms, competitive rates, a convenient online application process, quick approval and disbursement, transparent lending practices, and excellent customer service. We are dedicated to assisting our customers in achieving their financial goals and providing them with a reliable and hassle-free borrowing experience.
                    </p>

                    <a href='https://active-farmers-dashboard.netlify.app/register' target="_blank">
                        <button className="btn register">Register Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;