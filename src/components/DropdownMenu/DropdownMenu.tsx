import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Menu, MenuProps } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Link from 'next/link';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      boxShadow:
        '0px 4px 10px -4px rgba(0,0,0,0.1)',
      backgroundColor: "#f6000075",
      backdropFilter: "blur(5px)",
      color: "#ffffff",
      '& .MuiMenu-list': {
        padding: '0',
        margin: '0',
        '& svg': {
            color: '#ffffff',
        }
      },
    },
  }));

export const DropdownMenu: React.FC<any> = ({
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
        <StyledMenu
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
                            <Link key={item.text} href={item.link}>
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
                            <MenuItem key={item.text} onClick={item.onClick}>
                                    {item.Icon ? 
                                        <ListItemIcon>
                                            <item.Icon fontSize="small"/>
                                        </ListItemIcon>
                                    : null}
                                    <ListItemText>{item.text}</ListItemText>
                            </MenuItem>
                        )
                    }
                })
            }
        </StyledMenu>
    </>
  );
}