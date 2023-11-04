import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Menu as MenuBase } from '@mui/material';
import { MouseEvent, useState } from 'react';
import Link from 'next/link';

export const Menu: React.FC<any> = ({
    menuItems,
    renderButton
    }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
        {renderButton({
            "aria-controls": open ? 'basic-menu' : undefined,
            "aria-haspopup":"true",
            "aria-expanded": open ? 'true' : undefined,
            onClick: handleClick,
        })}
        <MenuBase
            sx={{
                backdropFilter: "blur(10px)",
                backgroundColor: "#db4444a6"
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {   
                menuItems.map((item:any) => {
                    if (item.link) {
                        return (
                                <Link href={item.link}>
                            <MenuItem>
                                    {item.Icon ? 
                                        <ListItemIcon>
                                            <item.Icon fontSize="small" />
                                        </ListItemIcon>
                                    : null}
                                    <ListItemText>{item.text}</ListItemText>
                            </MenuItem>
                                </Link>
                        )
                    } else {
                        return (
                            <MenuItem onClick={item.onClick}>
                                    {item.Icon ? 
                                        <ListItemIcon>
                                            <item.Icon fontSize="small" />
                                        </ListItemIcon>
                                    : null}
                                    <ListItemText>{item.text}</ListItemText>
                            </MenuItem>
                        )
                    }
                })
            }
        </MenuBase>
    </>
  );
}
