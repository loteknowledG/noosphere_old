import React from "react";
import useGlobalHook from "use-global-hook"
import * as actions from "../actions"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  level: {
    key: uuidv4(),
    cover: '',
    title: 'Add a title',
    pix: [{
      key: uuidv4(),
      src: ''
    }]
  },
  levelIdx: 0,
  matrix: []  
}

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
