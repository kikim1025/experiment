import React from 'react';
import TabMain from './tab-main/TabMain';
import TabProjects from './tab-projects/TabProjects';
import TabContact from './tab-contact/TabContact';
import TabMenu from './tabmenu/TabMenu';
import { TAB_MAIN, TAB_PROJECTS, TAB_CONTACT } from '../../constants/constants';

// Presentational helper function to selectively present tabs
// Refreshes tabs each time in current specification
const tabSelector = (currTab) => {
    switch (currTab) {
        case TAB_MAIN:
            return <TabMain />
        case TAB_PROJECTS:
            return <TabProjects />
        case TAB_CONTACT:
            return <TabContact />
        default:
            return <div>ERROR RETRIEVING TAB DATA</div>
    };
};

const Tab = (props) => (
    <div id='tab-box'>
        <main>
            {
                tabSelector(props.currTab)
            }
        </main>
        <TabMenu currTab={props.currTab} changeTab={props.changeTab} />
    </div>
);

export default Tab;