import { NextPage } from 'next';
import React from 'react';
import SideBar from '../components/sidebar/Sidebar';

const BasicLayout: NextPage = ({ children }) => (
    <>
        <SideBar />
        {children}
    </>
)

export default BasicLayout;