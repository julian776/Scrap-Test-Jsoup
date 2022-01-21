import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {

    const state = useSelector(state => state.sections)
    const sections = state["sections"]

    return (
        <Fragment>
        <div className='section-container'>
        <nav>
        {sections ? <ul>
            {sections.map((section => {
                return <li className='section-li'>
                    <button className='button-section'><Link to={`/section/${section}`} >{section}</Link></button>
                    </li>
            }))}
        </ul> : ""}
        {state.isLoading ? <h2>Loading...</h2> : "" }
        {state.error ? <h2>Error</h2> : ""} 
        </nav>
        </div>
        </Fragment>
    )
}

export default Home