import { Box, Heading, Text } from '@chakra-ui/react';
import { FaChevronRight } from "react-icons/fa6";
import styles from'./Footer.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


interface Props{
  title: string;
  list: string[];
  link: string;
}

const FooterList = ({title,list,link}:Props) => {
  const [toggled, setToggled] = useState(true);
  const toggleList = toggled? styles.footerMenuList : 
                              [styles.footerMenuList, styles.showList].join(' ');
  const toggleChevron = toggled? styles.footerChevron : 
                              [styles.footerChevron, styles.showChevron].join(' ');

  return (
    <Box className={styles.footerMenu}>
      <Box className={styles.footerMenuHeader}
        onClick={() => setToggled(!toggled)}
        cursor='pointer'>
        <Heading fontSize='xm' textTransform='uppercase' color='second'>
          {title}
        </Heading>
        <FaChevronRight className={toggleChevron}/>
      </Box>
      <div className={toggleList}>
        {list.map(item => 
        <Link to={`/cars/${link}/${item}`}>
        <Text key={item} color='second'>{item}</Text>
        </Link>
        )}
      </div>
    </Box>
  )
}

export default FooterList