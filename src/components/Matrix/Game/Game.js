import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  fullHeight: {
    height: "calc(100vh)",
  }
}))

export function Game (props) {

  const classes = useStyles();  
  return (
    <Container fixed >
      <img className={classes.fullHeight} src="https://lh3.googleusercontent.com/Q2pE7BbwYPNn_jt9_Fng7jzkwxcbEAmk6wJ4EH8UgkKLKiSASIDumXk0Q1VwsZn89kABNnfuzN-M9xkgM9TvYwhPeEDqxHeZKAYP0T32jsZvAAFH3bqCH6_UkAAPNgVqA0frMRtXNfC1YyBzpPjfk2IMHFDJzq0rjLNLjt2wwCr50cK4pBiIuBsNt3ysvNskGItOQduspOIiu3ZW_pK_WhMGZaNylZfzvG_8GKYTrnHFiVCusmIu54NUwTT56Gk48Jpid7E3-6lDpNd2zQRSyh4NM8wiKvO6nsMDxThjrM2Poj1Vji4Q-JdzNlYaYwhXIwzx3zaDUfoRWSY_ZyQPoCpWcS_jSxjB-EEJru2aGxsUNYOmqYzjW0-AmUl3vQ2DvvehQV4flcY0DSQu34U8Fo2ATIGWAPmr1o_zxJA6KgxVKJeXJADQAXbJXi3Ii2JaCLJjI5eIHxKTW8KYyCEuTOEt7E4dEPmCCdSVEGqJC68CNDK405eqHWhF88onm0eObztW7MWbG62V99hITmowwHXI2DAm7cxJWnGZkIi1GZ26_IJ04wgkan1yvQPxnY4q2UnxcjBtAauGLs1LjwV6c1CWcgJIzE8M8bbZCFdLPzgcw4jnvNV9XKbrjjGqaIzzv8e0AI_q_on6as3RLmXu1tm2NhDctfdHuoJECqDM_zhoFDwIHcaSwebm_43bmDMl9DNLlo2cWep8QgiU6pAu4Gg50suMlz5nzg4jYniYil8bgktM6A"></img>
    </Container>
  )

}