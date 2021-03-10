import React, { useGlobal, useState } from 'react';
import { Mattereal } from './Mattereal/';
import Hands from './Hands/Hands';
import streamSaver from 'streamsaver'
          /*-.    ,--,     .--.   _____  ,-..-. .-.,---.   
|\    /| / /\ \ .' .'     / /\ \ /___  / |(||  \| || .-'   
|(\  / |/ /__\ \|  |  __ / /__\ \   / /) (_)|   | || `-.   
(_)\/  ||  __  |\  \ ( _)|  __  |  / /(_)| || |\  || .-'   
| \  / || |  |)| \  `-) )| |  |)| / /___ | || | |)||  `--. 
| |\/| ||_|  (_) )\____/ |_|  (_)(_____/ `-'/(  (_)/( __.' 
'-'  '-'        (__)                       (__)   (_*/     
export function Magazine(props) {
    const [load, setLoad] = useState(["https://lh3.googleusercontent.com/GOYRlavWyXY9xemVNW4-7X2WisO_GNtWSpyENwYnPk3PwwnPXeM8nM-Vruo7sjaYOxGKDPzPiisoU2GV8EeulgtFXIvruPrRpBoIuYr94vDkrzn0BKHeKDNdwZ6saPLQkWuOJdvF-Kx-SDTuL0MOJ8FbwpQCkgaw9ZL6H9mwWl9b3mG8wRmRA6-0mIMST-7HmfDwx9Yn10IjNavYkg63yJoc4k6zl1gpnqh8sw4k8iJkZYUMaiYIYyjVVBOHz2FPYps95_usHa7w3GVML3nTADJ5eW9x867JbKNcPDxFwLLGOKo9ZJMFXDNtv3Em3-vP8YbeNney524HPHeK9iuhxf7zCpc_9i1Z760kOo4UCVLZrKuqP6qZ-akmOisdgZhahVRzGT_-8YFJIopnA2bd1iu98gLxezax9gpwQ6VBl0dIVmNkiP3cQzLHJr7DmdZUKkP3i-kX8-vB3La-Qqox_ZxoDhMk6jeuV-WaAvoNEQll8qHZqGmdAs8SJjHchMkvJJNEuCApi0FBXtw51PnSjnkDmJA5Ecs4vNVasN6RrV0_eQt1_bbt4RDp2mrh8SFZquFoAwJGmWQWeiS5rydU5yZwRSbQTBObKQWxpdhddh4m7CUlCbC1R6GEEzsSVAlvaYCdAwHb0B6FqRburzY-4qjT7NZHmfC43ZNYD0CIPPQFE119qq25fTPoVGphYu5-8F1ipXOGuNnx3y2TCcIi9eLAk3AlmfLRSuYY8VUadooqPJml-eZw-s0F"])
    const [store, setStore] = useState({})
    const [markers, setMarkers] = useState([])
    // const [level, setLevels] = useGlobal()
    const handleLoad = (load) => {
        setLoad(load)
    }    
    const handleTeacHer = (lession) => {
        setMarkers(lession.markers)
    }     
    return (
        <>
            <Hands handleLoad={handleLoad} handleTeacHer={handleTeacHer} /> 
            <Mattereal store={store} load={load} markers={markers} />
        </>
    );
}