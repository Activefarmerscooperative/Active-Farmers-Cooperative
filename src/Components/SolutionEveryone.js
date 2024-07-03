import lady from "../assets/lady.png";
import { Icon } from '@iconify/react';


const SolutionEveryone = () => {
   


    return (
        <div className="solution-two" id="impact">
            <div className="d-flex flex-column align-items-center justify-content-between solution-two-info mt-4 pt-5">
                <h2> Solution for Everyone</h2>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="image">
                        <img src={lady} alt="" />
                    </div>
                    <div className="text">
                        <div className="farmers">
                            <h4>Farmers</h4>
                            <p>Our web app offers farmers convenient access to capital, flexible loan options, and high-yield savings opportunities. With a streamlined application process, financial planning tools, and seamless integration, farmers can optimize their financial management, make informed decisions, and enhance their overall financial well-being.</p>
                            <a href='https://active-farmers-dashboard.netlify.app/' target="_blank" rel="noreferrer">
                                Register
                                <Icon icon="material-symbols:arrow-forward-ios-rounded"  className="arrow" />
                            </a>
                        </div>

                        <div className="farmers">
                            <h4>Non-Farmers</h4>
                            <p>Our loan and savings app benefits individuals and business owners by providing easy access to funds, flexible loan options, efficient savings features, financial planning tools, seamless integration, and time and cost savings. By leveraging our app, you can optimize your financial management, achieve financial goals, and enhance your overall financial well-being.</p>
                            <a href='https://active-farmers-dashboard.netlify.app/' target="_blank" rel="noreferrer">
                                Register
                                <Icon icon="material-symbols:arrow-forward-ios-rounded"  className="arrow" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default SolutionEveryone;