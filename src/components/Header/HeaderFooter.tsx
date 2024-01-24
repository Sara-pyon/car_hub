import { Box, SimpleGrid } from '@chakra-ui/react'
import { TbPentagonNumber7, TbReportSearch } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import IconText from './IconText';

const HeaderFooter = () => {
    const element = [
        {1: '7-day money-back promise.', 2:'Better than a test drive.', icon: <TbPentagonNumber7 />},
        {1: '3 month warranty.' , 2: 'Relax, your car is covered.', icon: <AiOutlineSafety />},
        {1: 'Carma Checklist certified.', 2: 'Examined by experts.', icon: <TbReportSearch />},
    ]
  return (
            <Box  bg="blackAlpha.600" paddingTop={5}>
                <SimpleGrid columns={{base:1, md: 2, lg: 3}} rowGap={2} className='container'>
                    {element.map((e,index) => <IconText key={index} element={e} />)}
                </SimpleGrid>
            </Box>
  )
}

export default HeaderFooter