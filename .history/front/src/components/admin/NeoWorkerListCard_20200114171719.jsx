import React from 'react'
import './ListeNeoworker&Mission.css'
import {Link} from 'react-router-dom'


const NeoworkerListCard = ({list}) => {
return(
    <div className='neoworkerCard'>
        <div>
        <div>
            <h1 >{list.firstname} {list.lastname}</h1>
        </div>
        <div >
            <p>{list.tel}</p>
        </div>
        <div>
            <p>{list.status}</p>
        </div>
        <div>
            <p>{list.email}</p>
        </div>
        <div>            
            <p>{list.title}</p>
        </div>
        </div>
        <div className="neoworkerCard-btn-container">
            <Link to={`/admin/neoworker/${list.id}`}>
                <button className='button-card'> voir</button>
            </Link>
            <Link to={`/neoworker/editer/${list.id}`}>
                <button className='button-card'> editer</button>
            </Link>
            {/* <Link to=''>
                <button className='neoworkerCard-btn'> ignorer</button>
            </Link> */}
        </div>
    </div>
)
}

export default NeoworkerListCard