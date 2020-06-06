import React from 'react';
import {Link} from "react-router-dom"

class HomePage extends React.Component {
    render() {
        return (
            <>
                <h1>What House Will You Live In?</h1>
                <Link to="/house">
                    <button>Sort House</button>
                </Link>
            </>
        )
    }
}

export default HomePage;