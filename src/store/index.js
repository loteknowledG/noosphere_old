import React from "react";
import useGlobalHook from "use-global-hook"
import * as actions from "../actions"

const initialState = {
  dialer: {
    title: '',
    actions: [{
      action: '',
      icon: ''
    }]
  },
  level: {
    agent: 'Add agent',
    title: 'Add title',
    key: '',
    cover: '',
    pix: [{
      key: '',
      src: ''
    }]
  },
  now: {    
    play: {
      agent: 'Add agent',      
      cover: '',      
      key: '',      
      pix: [{
        key: '',
        src: ''
      }],
      title: 'Add title',
    },
    player: {
      PPP: 0
    },
    tune: { 
      key: '',
      src: ''
    }
  },
  levelIdx: 0,
  matrix: [],
  PPP: 0,
  profileToken: {}
}

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
