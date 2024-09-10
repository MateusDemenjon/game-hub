import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"` //1024px
  }}
    templateColumns={{
      base: '1fr',
      lg: '280px 1fr'
    }}>
    <GridItem area='nav'>
      <NavBar onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })} />
    </GridItem>
    <Show above="lg">
      <GridItem area='aside' paddingX={5}>
        <GenreList selectedGenre={GameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <Box paddingLeft={2}>
        <GameHeading gameQuery={GameQuery} />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={GameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...GameQuery, platform })} />
          </Box>
          <SortSelector sortOrder={GameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...GameQuery, sortOrder })} />
        </Flex>
      </Box>
      <GameGrid gameQuery={GameQuery} />
    </GridItem>
  </Grid >
}

export default App
