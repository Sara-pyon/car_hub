import { Card, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useFavoriteCarStore from "../store/favoriteStore";
import { IoHeart } from 'react-icons/io5'

const FavoriteCarsList = () => {
    const {favoriteCars,removeFavorite} = useFavoriteCarStore();

    if(favoriteCars.length === 0) return (
      <div className="container section">
        <Text>No favorite Cars</Text>
      </div>
    )

  return (
    <div className="container section">
        <SimpleGrid columns={3}
        columnGap={2} rowGap={3}>
            {favoriteCars.map(car =>
                <Card maxW='300px' padding={5} bg='bgPrimary' 
                display='flex' flexDirection='row'
                alignItems='center' justifyContent='space-between'>
                    <Heading fontSize='xl'>{car.model}</Heading>
                    <IoHeart size={20} cursor='pointer' color='deepPink'
                    onClick={() => {
                        removeFavorite(car?.model);
                        }}/>
                </Card>)}
        </SimpleGrid>
    </div>
  )
}

export default FavoriteCarsList