import React, { useEffect, useState, useRef } from 'react'
import Peer from 'peerjs';

                                                            
                                      /*    ,,                                
   .M"""bgd                         `7MM    db                   mm           
  ,MI    "Y                           MM                         MM           
  `MMb.  `7M'   `MF'`7MMpMMMb.   ,M""bMM  `7MM  ,p6"bo   ,6"Yb.mmMMmm .gP"Ya  
    `YMMNq.VA   ,V    MM    MM ,AP    MM    MM 6M'  OO  8)   MM  MM  ,M'   Yb 
  .     `MM VA ,V     MM    MM 8MI    MM    MM 8M        ,pm9MM  MM  8M"""""" 
  Mb     dM  VVV      MM    MM `Mb    MM    MM YM.    , 8M   MM  MM  YM.    , 
  P"Ybmmd"   ,V     .JMML  JMML.`Wbmd"MML..JMML.YMbmd'  `Moo9^Yo.`Mbmo`Mbmmd' 
            ,V                                                                
         OO*/                                                                       
export function Syndicate(props) {
  // const peer = new Peer('receiver', { host: 'localhost', port: 9000, path: '/' })
  const peer = new Peer(''+Math.floor(Math.random()*2**18).toString(36).padStart(4,0), {
    host: 'https://0.peerjs.com',//location.hostname,
    debug: 1,
    port: 443,
    path: '/'
});
    peer.on('connection', (conn) => {
    conn.on('data', (data) => {
      console.log(data);
    })
  })
  

  const peer1 = new Peer('sender', { host: 'localhost', port: 9000, path: '/' })

  const conn = peer1.connect('receiver')

  conn.on('open', () => {
    conn.send('hi!')
  })
  return (
      null
  )
}

