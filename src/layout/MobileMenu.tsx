import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';

export default function MobileMenu() {

    const [value, setValue] = React.useState(0);

    return (
            <AppBar className='fixed top-auto bottom-0 block sm:hidden'>
                <Toolbar className='p-0 '>
                    <Box sx={{ width: 600 }} component={'div'}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            className='bg-lightBlack'
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction className={`${value === 0 ? 'text-pureWhite' : 'text-greyText mb'}`} label="خانه" icon={<HomeIcon />} />
                            <BottomNavigationAction className={`${value === 1 ? 'text-pureWhite' : 'text-greyText mb'}`} label="نمونه کار" icon={<FavoriteIcon />} />
                            <BottomNavigationAction className={`${value === 2 ? 'text-pureWhite' : 'text-greyText mb'}`} label="ارتباط با ما" icon={<ContactPhoneIcon />} />
                            <BottomNavigationAction className={`${value === 3 ? 'text-pureWhite' : 'text-greyText mb'}`} label="درباره ما" icon={<InfoIcon />} />
                        </BottomNavigation>
                    </Box>
                </Toolbar>
            </AppBar>
    )
}
