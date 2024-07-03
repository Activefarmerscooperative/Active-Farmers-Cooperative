import TeamCard from "../widget/ReusableTeamCard";
import umeh from '../assets/umeh.png'
import foga from '../assets/foga.png'
import debbie from '../assets/debbie.jpg'
import galion from '../assets/galion.png'

const Team = () => {
    return (
        <div className="team mt-5">
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <h2>Meet Our Team</h2>
                <p className="about-team">Lorem ipsum dolor sit amet consectetur. Turpis posuere donec ipsum lectus cursus. Pellentesque tellus ornare id neque. Rutrum fringilla molestie laoreet turp</p>
                <div className="team-card mt-4">
                    <TeamCard
                        imageSrc={galion}
                        name="Galion Parkuma"
                        position="Founder & Executive Director"
                    />
                    <TeamCard
                        imageSrc={debbie}
                        name="Kadwama Lazarus"
                        position="IT Lead & Product Designer"
                    />
                    <TeamCard
                        imageSrc={umeh}
                        name="Umeh Ogonna Maria"
                        position="Secretary & Project Manager"
                    />
                    <TeamCard
                        imageSrc={foga}
                        name="Foga maltida mmem"
                        position="Financial Secretary"
                    />
                </div>
            </div>
        </div>
    );
}

export default Team;