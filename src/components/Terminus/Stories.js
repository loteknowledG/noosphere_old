import * as React from 'react'
import useGlobal from '../../store'
import { Box, SimpleGrid } from "@chakra-ui/react"

export function Stories(props) {
  const [globalState, globalActions] = useGlobal()
  if (globalState.matrix.length > 0) {
    return (
      <SimpleGrid columns={{sm: 2, md: 3}} spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    )
  } else {
    return(null)
  }
}
export default Stories