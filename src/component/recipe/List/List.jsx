
import { useState } from 'react';
import Item from '../Item/Item';

const List = ({items}) => {
    return ( 
        <ul className='lg:mt-10 lg:mx-28 m-5'>
         
            {items && items?.data?.map((item, index) => {
              return (
                <Item key={item.uuid} item={item} index={index}></Item> 
              );
            })}
        </ul>
             
        
    );
}

export default List; 