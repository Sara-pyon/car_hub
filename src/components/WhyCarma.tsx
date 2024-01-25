import { Box, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import ContentCard from './ContentCard'
import { FaCarOn } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { GiCheckedShield } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";

const WhyCarma = () => {
  return (
    <Box bg='bgPrimary' paddingInline={5} paddingBlock={10}
        className="section container">
        <SimpleGrid columns={{base:1, md:2, lg:3}} 
            rowGap={20} columnGap={10}>
            <div>
                <Heading fontSize='3xl' paddingBottom={3}>Why Carma?</Heading>
                <Text fontSize='lg'>A better way to buy a pre-loved car-entirely online</Text>
            </div>
            <ContentCard icon={<FaCarOn color='deepPink' fontSize={40}/>} 
                heading='We buy the highest quality cars'
                text='We own every car we sell and our extensive range of
                quality pre-loved cars is meticulously selected by
                experts. From hatchbacks and hybrids to 4x4s and
                more, we’ve got Australia’s most popular models,
                competitively priced.'/>
            <ContentCard icon={<GrHostMaintenance color='deepPink' fontSize={35}/>}
                heading='The Carma touch'
                text='Every Carma car is shown the love it deserves –
                tested and Carma Checklist checked, PPSR
                screened, fine-tuned, reconditioned and certified
                awesome.'
            />
            <ContentCard icon={<GrHostMaintenance color='deepPink' fontSize={35}/>}
                heading='Aussie owned and operated'
                text='Australian owned and operated, our team is 100%
                onshore and experts in the local used car market.'
            />
            <ContentCard icon={<GiCheckedShield  color='deepPink' fontSize={37}/>}
                heading={`We've got you covered`}
                text='We may be an online retailer, but you can still pick up
                the phone and talk to a real person when you need to,
                before, during or after your purchase. We even
                include NRMA Roadside Assistance.'
            />
            <ContentCard icon={<CiCreditCard1  color='deepPink' fontSize={45}/>}
                heading='Pay your way'
                text='Not only are our cars great value, we also have
                flexible payment options to suit your needs. Finance
                through us or pay outright, our finance team are here
                to help.'
            />
        </SimpleGrid>
    </Box>
  )
}

export default WhyCarma