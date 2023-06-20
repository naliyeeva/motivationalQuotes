import React from "react";
import '/styles/HomePage.scss';
import {Props} from "@/types";


const HomePage: React.FC<Props> = ({quote}) => {
    return (
        <div className='home-container'>
            <p className='quote-of-the-day'>Quote of the day:</p>
            <div className='quote-wrapper'>
                <h4 className='quote'>❝ {quote.text} ❞</h4>
            </div>
        </div>
    );
}

export default HomePage;