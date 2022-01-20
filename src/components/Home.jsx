import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {

    const state = useSelector(state => state.sections)
    console.log(state)
    const sections = state["sections"]

    return (
        <Fragment>
        <nav>
        {sections ? <ul>
            {sections.map((section => {
                return <button className='button-movie'><Link to={`/section/${section}`} >{section}</Link>                    </button>
            }))}
        </ul> : ""}
        {state.isLoading ? <h2>Loading...</h2> : "" }
        {state.error ? <h2>Error</h2> : ""} 
        </nav>
        </Fragment>
    )
}

export default Home