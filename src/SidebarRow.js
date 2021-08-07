import React from 'react';

//Import Components
import './Sidebar.css';
import './SidebarRow.css';
//Import from @material-ui/core or @material-ui/icons
import { Avatar } from '@material-ui/core'
function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
