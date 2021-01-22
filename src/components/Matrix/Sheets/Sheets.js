import React, { useEffect, useState, useRef } from 'react'
import Papa from 'papaparse'

export function Sheets () {
  function init() {
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4E_6RnpLP1wWMjqcwsUvotNATB8Np3OntlXb7066ULcAHI9oqqRhucltFifPTYNd7DRNRE56oTdt/pub?output=csv', {
    download: true,
    header: true,
    complete: function(results) {
      var data = results.data
      console.log(data)
    }
    })
  }
  window.addEventListener('DOMContentLoaded', init)
  return (
    init()
  )
}
export default Sheets