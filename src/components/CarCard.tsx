import { Box, Card, CardBody, Flex, Heading, Image, Text, Tooltip} from '@chakra-ui/react'
import carImage from '../images/104058_XC_02.jpg.png'
import { Cars } from '../hooks/useCars'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import { CiCircleInfo } from "react-icons/ci";
import useFavoriteCarStore from '../store/favoriteStore';

interface Props{
   car: Cars | undefined;
   cardMaxW?: string;
   cardW?: string;
}

const CarCard = ({car,cardMaxW,cardW}:Props) => {

  const {favoriteCars,addFavorite,removeFavorite} = useFavoriteCarStore();

  if(!car) return null;

  return (
    <Box >
      <Card borderRadius={10} maxW={cardMaxW} width={cardW} height='380px'
            overflow='hidden'>
          <Image src={carImage} alt='car image'/>
          <CardBody>
              <Flex justifyContent='space-between'>
                <div>
                  <Heading textTransform='uppercase' fontSize='xl'>
                    {`${car?.year} ${car?.model}`}
                  </Heading>
                  <Text textTransform='uppercase'>
                    {car?.make}
                  </Text>
                  <Text>
                    {car?.transmission === 'a' ? 'Automatic' : 'Manual'}
                  </Text>
                </div>
                <Box paddingTop={1} marginLeft={1}>
                  {favoriteCars.find(c => c.model === car.model) ?
                  <IoHeart size={20} cursor='pointer' color='deepPink'
                                  onClick={() => removeFavorite(car?.model)}/> :
                  <IoHeartOutline size={20} cursor='pointer'
                                  onClick={() => addFavorite(car?.model)}/> 
                  }
                </Box>
              </Flex>
              <Flex alignItems='end'>
                <Heading fontSize='2xl' paddingTop={3}>
                  ${`${car?.city_mpg},000`}
                </Heading>
                <Box paddingBottom='5px' paddingLeft={2}>
                  <Tooltip label={`Drive Transmission: ${car?.drive.toLocaleUpperCase()}`} aria-label='A tooltip'>
                    <span>
                      <CiCircleInfo />
                    </span>
                  </Tooltip>
                </Box>
              </Flex>
          </CardBody>
      </Card>
    </Box>
  )
}

export default CarCard