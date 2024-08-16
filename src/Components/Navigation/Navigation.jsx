import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        console.log("logout")
        handleClose()
    }
    return (
        <div className="h-screen sticky top-0">
            <div>
                <div className="py-5">
                    <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" height={30} width={30} role="none" class="u01b__icon-home">
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                    </svg>
                </div>
                <div className="space-y-6">
                    {navigationMenu.map((item) =>
                        <div
                            className='cursor-pointer flex space-x-3 item-center'
                            onClick={() =>
                                item.title === "profile" ? navigate(`/profile/${5}`) : navigate(item.path)
                            }
                        >
                            {item.icon}
                            <p className='text-xl'>{item.title}</p>
                        </div>
                    )}
                </div>
                <div className="py-10">
                    <Button sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5" }} variant="contained">
                        Tweet
                    </Button>
                </div>
            </div>
            <div className="flex item-center justify-between">
                <div className="flex item-center space-x-3">
                    <Avatar
                        alt="username"
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                    />
                    <div>
                        <span>Code with zosh</span>
                        <span className="opacity-70">@CodeWithZosh</span>
                    </div>

                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreHorizIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>
        </div>
    )
}
export default Navigation