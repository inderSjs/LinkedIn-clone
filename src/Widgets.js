import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight"></div>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("I love", "Machine Learning!")}
            {newsArticle("I love Java", "SpringBoot is the future")}
            {newsArticle("I love Programming so much", "Cloud is the future")}

            
            
        </div>
    )
}

export default Widgets
