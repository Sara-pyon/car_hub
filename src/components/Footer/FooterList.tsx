import { Box, Heading, Text } from '@chakra-ui/react';
import { FaChevronRight } from "react-icons/fa6";
import styles from'./Footer.module.css'
import { useState } from 'react';


interface Props{
  title: string;
  list: string[]
}

const FooterList = ({title,list}:Props) => {
  const [toggled, setToggled] = useState(false);
  const toggleList = toggled? styles.footerMenuList : 
                              [styles.footerMenuList, styles.showList].join(' ');
  const toggleChevron = toggled? styles.footerChevron : 
                              [styles.footerChevron, styles.showChevron].join(' ');

  return (
    <Box className={styles.footerMenu}>
      <div className={styles.footerMenuHeader}>
        <Heading fontSize='xm' textTransform='uppercase' color='second'>
          {title}
        </Heading>
        <FaChevronRight className={toggleChevron}
          onClick={() => setToggled(!toggled)}/>
      </div>
      <div className={toggleList}>
        {list.map(item => <Text key={item} color='second'>{item}</Text>)}
      </div>
    </Box>
  )
}

export default FooterList