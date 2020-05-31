import React from 'react';
import './admin.css';

import AdminBody from '../AdminBody/adminBody'
import AdminNavBar from '../AdminNavBar/adminNavBar';
export default class AdminPanel extends React.Component {
    render() {
        return <>
            <AdminNavBar />
            <AdminBody />
        </>
    }
} 