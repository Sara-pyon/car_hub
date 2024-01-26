import { Box, Heading, Text } from '@chakra-ui/react';
import { FaChevronRight } from "react-icons/fa6";
import styles from './FilterItem.module.css'
import { ReactNode, useState } from 'react';

interface Props{
  icon: ReactNode;
  title: string;
  list: string[];
  selectedItem?: string;
  onSelect: (item:string) => void;
}

const FilterItem = ({title,list,icon,onSelect,selectedItem}:Props) => {
  const [toggled, setToggled] = useState(true);
  const toggleList = toggled? styles.menuList : 
                              [styles.menuList, styles.showList].join(' ');
  const toggleChevron = toggled? styles.Chevron : 
                              [styles.Chevron, styles.showChevron].join(' ');

  return (
    <Box className={styles.menu}>
      <Box className={styles.menuHeader}
        onClick={() => setToggled(!toggled)}
        cursor='pointer'>
        <Box className={styles.menuHeading}>
            <div>{icon}</div>
            <Heading fontSize='xm' color='second'>
              {title}
            </Heading>
        </Box>
        <FaChevronRight className={toggleChevron}/>
      </Box>
      <div className={toggleList}>
        {list.map(item => 
        <Text key={item} color='second'
        cursor='pointer'
        onClick={() => onSelect(item)}
        fontWeight={selectedItem === item ? 'bold':'normal'}
        >
          {item}
        </Text>
        )}
      </div>
    </Box>
  )
}

export default FilterItem