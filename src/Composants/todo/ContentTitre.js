import React, {useContext} from 'react'
import {TitreContext} from '../../Context/TitreContext';

export default function Titre() {
const {titre} = useContext(TitreContext);

    return (
        <div>
            <h1>{titre}</h1>
        </div>
    )
}
