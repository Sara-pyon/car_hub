import { Box, Card, Skeleton } from '@chakra-ui/react'

const CarCardSkelton = () => {
  return (
    <Box>
        <Card borderRadius={10} width='300px' height='380px'
                overflow='hidden'>
            <Skeleton height='100%' />
        </Card>
    </Box>
  )
}

export default CarCardSkelton