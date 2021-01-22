import React from "react";
import useGlobalHook from "use-global-hook"
import * as actions from "../actions"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  dialer: {
    title: '',
    actions: [{
      action: '',
      icon: ''
    }]
  },
  level: {
    title: 'Add a title',
    key: uuidv4(),
    cover: '',
    pix: [{
      key: uuidv4(),
      src: ''
    }]
  },
  levelIdx: 0,
  matrix: [],
  PPP: 0,
  profileToken: {}
}

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
