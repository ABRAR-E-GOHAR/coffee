import React from 'react';
import './adminUploadBtn.css';

export default class AdminBody extends React.Component {
    render() {
        return <div id='adminBodyContainer'>
            <div className="adminUpload-btn-wrapper">
                <button className="adminBodyBtn">Upload a file</button>
                <input type="file" name="myfile" id='adminUploadType' />
            </div>
        </div>
    }
}