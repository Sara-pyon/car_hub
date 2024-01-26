import { Box,Flex,Text } from '@chakra-ui/react'

const FooterContent = () => {
  return (
    <Box width='100%'>
      <Flex paddingTop={10} textAlign='center'
            flexDirection='column' rowGap={5}
            width={{base:'90%', md:'80%'}} marginInline='auto'>
          <Text fontSize='xs' opacity='0.7'>
          Estimated repayment based on an average rate calculated across all fixed P&I used car loans offered by Carma preferred financiers to eligible applicants
          purchasing a vehicle aged 0-7 years from build date. The rate does not reflect any particular product or your situation and does not imply credit is available to
          you at this rate. Final rate and all applications subject to financier approval. Fees and charges apply. The direct debit frequency options available from
          financiers may differ.
          </Text >
          <Text fontSize='xs' opacity='0.7'>
          *within Greater Sydney
          </Text>
          <Text fontSize='xs' opacity='0.7'>
          NSW Motor Dealer’s Licence: MD087139 • NSW Motor Vehicle Repairer: MVRL59465
          </Text>
      </Flex>
    </Box>
  )
}

export default FooterContent