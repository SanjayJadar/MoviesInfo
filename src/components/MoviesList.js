import React, {useState } from "react";  
import {Button, Modal} from 'react-bootstrap';

const MoviesList = ({original_title, poster_path, backdrop_path, release_date, vote_average, vote_count, overview}) => {

    const [modal, setModal] = useState(false);

    return ( 
        <div className="grid justify-center items-center"> 
            <img className="border-solid border-2 border-white" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} />
            <p className="text-white text-ellipsis overflow-hidden whitespace-nowrap pl-1 pr-1 pt-1">{original_title}</p> 
            <Button onClick={()=>setModal(true)}>Details</Button>
            <Modal show={modal}>
                    <Modal.Header><img className="pl-20" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${backdrop_path}`}/></Modal.Header>
                    <Modal.Body>
                        <p className="pl-5">Released : {release_date}</p>
                        <p className="pl-5">Rating : {vote_average}<span className="p-2 text-sm font-thin">({vote_count})</span></p> 
                    </Modal.Body>
                    <Modal.Footer>{overview}<Button onClick={()=>setModal(false)}>Close</Button></Modal.Footer>
            </Modal> 
        </div>
    )
}


export default MoviesList;  

 