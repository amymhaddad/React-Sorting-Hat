import React from 'react';
import './welcome.css'

class DisplayHouseInformation extends React.Component{

    render() {
        return (
            <div className="welcome-container">
                <div className="intro-welcome">
                    <h1>Welcome to {this.props.name}! </h1>
                    <p>Here, you'll learn some interesting facts about your house.</p>
                </div>

                <div className="facts">
                    Your house is old. It's {this.props.age} years old to be precise!
                </div>

                <div className="facts">
                    But that means your house also has a rich history. Let's learn more about it:
                    {this.props.history}
                </div>

                <div className="facts">
                    There have also been some very famous people who've lived in this house, like:
                        {this.props.famousPeople.map(person => (
                             <ul className="names">
                                <li>{person}</li>
                            </ul>
                        ))}        
                </div>
            </div>
        )
    }
}
export default DisplayHouseInformation;