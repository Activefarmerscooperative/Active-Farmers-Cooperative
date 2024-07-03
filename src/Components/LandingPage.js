import lady from "../assets/lady.png";



const LandingPage = () => {

    return (
        <div className="landing-page " id="home">
            <div className="d-flex align-items-center justify-content-between landingpage-content mt-5">
                <div className="text">
                    <h1>
                        New Ways to better <span style={{ color: "#FB9129", fontFamily: "MillikFont" }}>opportunities</span>
                    </h1>
                </div>
                <p>
                    Active farmers cooperative offers a comprehensive loan service designed to meet the financial needs of our customers.
                    With our loan service, we strive to provide convenient and reliable solutions to help individuals and businesses access the necessary funds.
                </p>
                <button className="btn">Register</button>
                <div className="image">
                    <img src={lady} alt="" />
                </div>
            </div>
        </div>

    );
}

export default LandingPage;