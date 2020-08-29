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
    const [load, setLoad] = useState(["https://lh3.googleusercontent.com/_1whFm6BwCQvIzSf-dn5oTmjz6QycDaLluhsBUSsUiwp84NnlflD_S4AVVt-CIQi2rWIHthJvqO-s8X2WA-bdBL2v5N1sxisI6-fDPvsPCZO9dxRc7scH-xBkKBIwIE6uRL6iOtxNHCqSaYUJomqf27rRFFEIEDune9pmBOwC1a6-77t9IWeIt7MM-SimbLChfTzJc9ILu6okMkHyeGyT8Q6vLUkVAx2HQq-Wtx_RAfz8uGV6C2Wx0qSA-lzyz4y0HB-vOWGC6HVXfE41iv1MgblqQg846WzEzK3JPRRSEWDXjHSPn8rQ7gHfQvkUd9ilzSrBJBpUnhPtg9_G94_VbZ4sNtcAQF85G0_k0vgAu3BDTbrU02lifxfXtwud19JdAfV4clVQUX2t4tTA_zdIqcxsbn1T-vWpfyN-E5gYk3VpSxTwJmh7_jZ_0mVEUtUZ8xup4Vdi9gFfidLmuEuJnt_JhyFqNp244CZHmQpTCZa4EgEwMZDH4w_6PMp7uz1aaXpMTHhlh0A6k-2I5acNvFxgsm6J3fIeUD_QRV4fKOKIiL0WH2wxrcaBZDMrMPUcHZmGp_zV5KTiSJ1gOozryZdzj3-GzH9KDTEGJpV4y1sTnkczjbCuCUGdrX-GrRPZCRzOYUl4n_0PDW7425ErbZ3IpVFgffN2qEMAg9gVYN_KZFqmF0-sVCgjep1lOjMhUwZKzmxyAnuGV42ZtL7EuwQhQ"])
    const [store, setStore] = useState({})
    const [markers, setMarkers] = useState([])
    const [level, setLevels] = useGlobal()
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