import { Button, Tab, Collapse, Tabs } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { navmenuAPI } from '../../api';
import './navmenu.scss';

function NavMenu() {
    const [open, setOpen] = useState(false);
    const [menuObj, setMenuObj] = useState(null);

    useEffect(() => {
        getNavmenuData();
    }, []);

    const getNavmenuData = async () => {
        let res = await navmenuAPI.fetchNavMenu();
        if (res.status === 200) {
            console.log('getNavmenuData', res.data.data['#items']);
            setMenuObj(res.data.data['#items']);
        } else {
            console.log('error', res);
        }
    };

    const renderSubmenu = (subMenuObj) => {
        return (
            <ul>
                {Object.keys(subMenuObj).map((key) => (
                    <li key={key}>
                        <h6>
                            <a href={`${subMenuObj[key].url}`}>{subMenuObj[key].title}</a>
                        </h6>
                    </li>
                ))}
            </ul>
        );
    };

    const getDefautKey = (obj) => {
        console.log('getDefautKey', Object.keys(obj));
        return Object.keys(obj)[0];
    };

    return (
        <>
            <Button
                className="menu-btn"
                onClick={() => setOpen(!open)}
                aria-controls="menu-tab-container"
                aria-expanded={open}
                variant="dark">
                Menu
            </Button>
            <Collapse in={open}>
                <div id="menu-tab-container">
                    {menuObj && (
                        <Tabs id="menu-tab" defaultActiveKey={getDefautKey(menuObj)}>
                            {Object.keys(menuObj).map((item, i) => {
                                return (
                                    <Tab
                                        key={i}
                                        eventKey={menuObj[item].title}
                                        title={menuObj[item].title}>
                                        {menuObj[item].below && renderSubmenu(menuObj[item].below)}
                                    </Tab>
                                );
                            })}
                        </Tabs>
                    )}
                </div>
            </Collapse>
        </>
    );
}

export default NavMenu;
