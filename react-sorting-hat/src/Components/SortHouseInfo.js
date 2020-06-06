import React from 'react';
import {houseFacts} from './houseData';
import DisplayHouseInformation from './DisplayHouseInformation'

class DisplayHouse extends React.Component {
    render() {
       let houseName = this.props.house;
       let houseInfo = houseFacts[houseName]
       let {name, history, age, famousPeople} = houseInfo

        return (
            <div>
                <DisplayHouseInformation 
                    key={name}
                    name = {name}
                    history={history}
                    age={age}
                    famousPeople={famousPeople}
                    />
            </div>
        )
    }
}

export default DisplayHouse;