import { Card, CardBody, Image } from '@chakra-ui/react'
import carImage from '../images/104058_XC_02.jpg.png'
import React from 'react'

const CarCard = () => {
  return (
    <Card>
        <Image src={carImage} alt='car image'/>
        <CardBody>
            
        </CardBody>
    </Card>
  )
}

export default CarCard