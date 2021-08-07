import React from 'react';

//Import Components
import './Sidebar.css';
import SidebarRow from './SidebarRow';

//Import from @material-ui/core or @material-ui/icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibaryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

//Context API
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Firends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibaryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} fontSize="large" title="marketplace" />
        </div>
    )
}

export default Sidebar;
