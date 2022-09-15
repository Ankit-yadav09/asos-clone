import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image,
    Button,
    IconButton,
  } from '@chakra-ui/react'
  import { AddIcon,EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
  import styles from './Styles/navbar.module.css'
import { useNavigate } from 'react-router-dom';
 
  export default function User(){
    const navigate=useNavigate();
    
    const handleSignIn=()=>{
        navigate ('/signin')
        }
    const handleLogin=()=>{
        navigate ('/login')
        }

    return (

<Menu>
  <MenuButton style={{width:"10px",Height:"10px"}}
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='solid'
  />
  <MenuList className={styles.usermenuList}>
    <MenuItem>
    <div className={styles.userInfo}>
        <a onClick={handleSignIn}>Sign Up </a>
        <p>|</p>
        <a onClick={handleLogin}>Login</a>

    </div>
    
    </MenuItem>
    <MenuItem icon={<AddIcon />}>
     <a>My Account</a> 
    </MenuItem>
    
    <MenuItem icon={<ExternalLinkIcon />} >
     <a>My Orders</a> 
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} >
      <a>Returns Information</a> 
    </MenuItem>
    <MenuItem icon={<EditIcon />} >
      <a>Contact Preferences</a> 
    </MenuItem>
  </MenuList>
</Menu>
  )
  
}  