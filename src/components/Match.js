import React from 'react'
import { useHistory } from 'react-router-dom';

function Match() {

    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();

        history.push('/your-match');
    }


    return (
        <div className="match-container">
            <button type="submit" className="button" onClick={(e) => handleClick(e)}> Start Matching </button>
        </div>
    )
}

export default Match
