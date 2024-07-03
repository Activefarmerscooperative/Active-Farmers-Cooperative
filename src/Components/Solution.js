// import a from "react-anchor-link-smooth-scroll";


const Solutions = () => {
  

    return (
        <div className="solution" id="solution">
            <div className="d-flex flex-column align-items-center justify-content-between pt-5">
                <h2 className="mt-5 pt-4">Our Solutions</h2>
                <div className="d-flex align-items-center justify-content-between solution-list">
                    <div className="box">
                        <h3><span>01 </span> {<hr />} Loan</h3>
                        <p>
                        Our website provides a diverse range of loans to meet your financial needs. With flexible terms, competitive rates, and a convenient online application process, we make it easy for you to access the funds you require. 
                        </p>
                    </div>
                    <div className="box">
                        <h3><span>02</span>{<hr />} Saving</h3>
                        <p>
                        Our web app offers a top-tier savings service designed to help you achieve your financial goals. With a focus on maximizing your savings and providing a seamless user experience, we aim to make saving money easier and more rewarding.
                        </p>
                    </div>
                    <div className="box">
                        <h3><span>03</span>{<hr />} Training</h3>
                        <p>
                        Our training service is specifically designed to empower farmers and entrepreneurs with the knowledge and skills necessary to succeed in their respective industries. We provide comprehensive and practical training programs that cater to the unique challenges and opportunities faced by individuals in agriculture and entrepreneurship.
                        </p>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between hr">
                    <hr /><hr /><hr />
                </div>

                <a href='https://active-farmers-dashboard.netlify.app/' target="_blank">
                    <button className="btn register">Register Now</button>
                </a>

            </div>
        </div>
    );
}

export default Solutions;