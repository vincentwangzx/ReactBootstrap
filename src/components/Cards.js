import React from 'react';
import  CardItems  from './CardItems';
import './Cards.css';

export const Cards = () => {
    return (
        <div className='cards'>
            <h1>Choose your preferred delivery service</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems 
                        src='images/img-1.jpg' text='Express Delivery 
                        (within 60 mins)' path='/delivery'
                        />
                        <CardItems 
                        src='images/img-2.jpg' text='Delicate Pastries
                        (chilled items)' path='/delivery'
                        />
                        <CardItems 
                        src='images/img-3.jpg' text='E-Commerce 
                        (next day)' path='/delivery'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
};


