import React from "react";
import useGlobalHook from "use-global-hook"
import * as actions from "../actions"

const initialState = {

  level: {
    cover: '',
    title: 'Add a title',
    pix: []
  },
  matrix: []
}

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
