import React from 'react';

const TeamCard = ({ imageSrc, name, position }) => {
    return (
            <div className="team-card-info mx-2">
                <img src={imageSrc} alt="Team member" className="team-card-image" />
                <h3 className="team-card-name">{name}</h3>
                <p className="team-card-position">{position}</p>
            </div>

    );
};

export default TeamCard;
