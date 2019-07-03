import React from 'react';
import TabButton from './TabButton';
import { TAB_MAIN, TAB_PROJECTS, TAB_CONTACT} from '../../../constants/constants';

// Presentational helper function to change tabmenu
const tabMenuSelector = (currTab, changeTab) => {
    switch (currTab) {
        case TAB_MAIN:
            return  <nav id='tab-menu'>
                        <TabButton dir='left' name='Contact' des={TAB_CONTACT} changeTab={changeTab} />
                        <div id='tab-menu__currTab'>Main</div>
                        <TabButton dir='right' name='Projects' des={TAB_PROJECTS} changeTab={changeTab} />
                    </nav>
        case TAB_PROJECTS:
            return  <nav id='tab-menu'>
                        <TabButton dir='left' name='Main' des={TAB_MAIN} changeTab={changeTab} />
                        <div id='tab-menu__currTab'>Projects</div>
                        <TabButton dir='right' name='Contact' des={TAB_CONTACT} changeTab={changeTab} />
                    </nav>
        case TAB_CONTACT:
            return  <nav id='tab-menu'>
                        <TabButton dir='left' name='Projects' des={TAB_PROJECTS} changeTab={changeTab} />
                        <div id='tab-menu__currTab'>Contact</div>
                        <TabButton dir='right' name='Main' des={TAB_MAIN} changeTab={changeTab} />
                    </nav>
        default:
            return <div>ERROR RETRIEVING TAB DATA</div>
    };
};

const TabMenu = (props) => (
    <header>
        {
            tabMenuSelector(props.currTab, props.changeTab)
        }
    </header>
);

export default TabMenu;