import { Box, Card, CardBody, Flex, Heading, Image, SimpleGrid, Text, Tooltip} from '@chakra-ui/react'
import carImage from '../images/104058_XC_02.jpg.png'
import { Cars } from '../hooks/use2018Cars'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import { CiCircleInfo } from "react-icons/ci";
import { useState } from 'react';

interface Props{
   car: Cars | undefined;
}

const CarCard = ({car}:Props) => {

  const [selectedFev, setSelectedFev] = useState<string>('');
  const onSelectFev = (model:string) => setSelectedFev(model);

  return (
    <Box >
      <Card borderRadius={10} width='300px' height='330px'
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
                  <IoHeartOutline size={20} cursor='pointer'/>
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