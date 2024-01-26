import { SimpleGrid } from '@chakra-ui/react';
import FooterList from './FooterList';


const FooterMenu = () => {
    const popularMakers = ['Toyota','Hyundai','Mitsubishi','Mazda','Kia','Ford','Subaru'];
    const about = ['How Carma works', 'Car financing', 'Checklist', 'Careers'];
    const support = ['Contact Us', 'FAQs'];
    const follow  = ['Facebook', 'Instagram'];


  return (
    <SimpleGrid columns={{base:1,md:2,lg:4}}
      rowGap={2} justifyContent={{base:'left',lg:'center'}}
      paddingBlock={10}
      borderBlock='2px solid #DCE4E9'>
    <FooterList list={popularMakers} title='Popular Makes' link='find' />
    <FooterList list={about} title='About us' link='about'/>
    <FooterList list={support} title='Support' link='support' />
    <FooterList list={follow} title='Follow us' link='follow' />
    </SimpleGrid>
  )
}

export default FooterMenu