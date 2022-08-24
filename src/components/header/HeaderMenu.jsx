import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import profile from '../../assets/undraw_male_avatar_323b.svg'
export default function HeaderMenu() {
  return (
    <Menu>
      <MenuHandler>
        <IconButton className='hover:shadow-red-500 shadow-md '>
          <Avatar className="cursor-pointer shadow-2xl" src={profile} variant="circular" />
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          {/* <Link  to='/profile' className='flex items-center justify-center'> */}
            <FaUserCircle size={18} className="mr-3" />
            <Typography variant="body2" className="text-gray-600">
              Profile
            </Typography>
          {/* </Link> */}
        </MenuItem>
        <MenuItem>
          {/* <Link to='/settings' className='flex items-center justify-center'> */}
            <IoSettings className="text-gray-600 mr-1" size={18} />
            <Typography variant="body2" className="text-gray-600">
              Settings
            </Typography>
          {/* </Link> */}
        </MenuItem>
        <MenuItem>
          {/* <Link to='/' className='flex items-center justify-center' onClick={logout}> */}
            <IoLogOut size={20} className="mr-2" />
            <Typography variant="body2" className="text-gray-600">
              Logout
            </Typography>
      
        </MenuItem>
      </MenuList>
    </Menu>
  );
}