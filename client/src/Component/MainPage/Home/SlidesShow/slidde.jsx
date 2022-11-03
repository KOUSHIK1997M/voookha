import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './slideCart';



function Slides({items}){
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} title={item.title} description={item.description} images={item.images}/> )
            }
        </Carousel>
    )
}


export default Slides;