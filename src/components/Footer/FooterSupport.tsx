import { Box, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react"
import FooterIcon from "./FooterIcon"
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";


const FooterSupport = () => {
  return (
            <Box textAlign='center' paddingBottom={10}>
                <Flex flexDirection='column' rowGap={1} paddingBottom={10}>
                    <Heading fontSize='3xl'>
                        Need support? We're here to help.
                    </Heading>
                    <Text fontSize='0.9rem'>
                        Mon-Fri: 8AM-8PM AEDT, Sat-Sun: 9AM-6PM AEDT
                    </Text>
                </Flex>
                <SimpleGrid columns={{base:1, sm:2, md:3}} 
                    justifyItems='center'
                    rowGap={5}>
                    <FooterIcon icon={<IoMailOutline size={30} />} 
                        title="Email"
                        link="hello@carma.com.au"/>
                    <FooterIcon icon={<FiPhone size={28} />} 
                        title="Call us"
                        link="02 8319 3210"/>
                    <FooterIcon icon={<HiOutlineChatBubbleBottomCenterText size={30} />} 
                        title="Text"
                        link="0437 871 436"/>
                </SimpleGrid>
            </Box>
  )
}

export default FooterSupport