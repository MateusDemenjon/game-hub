import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"` //1024px
  }}>
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem area='aside'>a</GridItem>
    </Show>
    <GridItem area='main'></GridItem>
    <GameGrid />
  </Grid>
}

export default App
