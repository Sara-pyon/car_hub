import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import carImage from '../images/104058_XC_02.jpg.png'
import React from 'react'

interface Props{
    year: number;
    model: string;
}

const CarCard = () => {
  return (
    <Card>
        <Image src={carImage} alt='car image'/>
        <CardBody>
            <Heading></Heading>
        </CardBody>
    </Card>
  )
}

export default CarCard