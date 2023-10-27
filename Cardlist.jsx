import React from 'react';
import Card from './Card'

import './Card.css'
import FreelancersList from './FreelancersList';

function cardComponent (staff, i){
    return  <Card
    key={staff.key}
    avatar={staff.avatar}
    name={staff.name}
    position={staff.position}
    rating={staff.rating}
    description={staff.description}

    />
}


const CardList = () => {

    return <div className="row">  
    {FreelancersList.map( (staff ) => 
    <Card
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
    rating = {staff.rating}
    description = {staff.description} 
    />
)}
    </div>
    

}

export default CardList