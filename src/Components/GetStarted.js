// import jar from "../assets/jar.png";
// import a from "react-anchor-link-smooth-scroll";

const GetStarted = () => {
    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "300px"
    };
    const myCol = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        margin: "10px 0 200px 0"
    };

    return (
        <div className="getting-started" style={{ background: "#0D9068", padding: "50px" }} id="about">

            <div className="text" style={myCol}>
                <h2>Ready to get started?</h2>
                <p style={{
                    margin: "30px 0", color: "#ffffff", lineHight:"40px"
                }}>
                    Ready to take control of your financial future? Sign up for our web app today and unlock a world of financial possibilities! With our user-friendly interface, convenient access to funds, flexible loan options, and high-yield savings features, you'll be on your way to achieving your goals faster than ever. Join our growing community of satisfied users and experience the power of smart financial management. Don't wait, sign up now and start maximizing your financial potential!
                </p>

                <a href='https://active-farmers-dashboard.netlify.app/' target="_blank">
                    <button className="btn register" style={{ background: "#FB9129", color: "#FFFFFF", border: "none" }}>Register Now</button>
                </a>
            </div>
        </div>
    );
}

export default GetStarted;