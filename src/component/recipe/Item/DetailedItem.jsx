import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import './DetailedItem.css'; 
const DetailedItem = ({item}) => { 
  const specials = useSelector(state => state.special)
  console.log("Specials", specials)
  return (  
    <div className='m-5'>
        <div className={classnames({
        "flex mt-10": true,
        "gap-5 mb-5": true
        })}>
            <div className='recipe-image w-1/3'> 
            <img src={item.images.full} width={500} height={500}/> 
            </div>
            <div className='w-2/3 grid'>
            <div>
                <div className={classnames({
                "text-2xl font-bold": true, 
                "text-left": true,
                
                })}>{item.title} </div>
                <div 
                className={classnames({  
                "text-left": true,
                
                })}>{item.description}</div>
            </div>
            <div className='relative '>
                <div 
                className={classnames({ 
                    "absolute flex justify-between": true,
                    "left-0 bottom-0": true,
                    "gap-5": true
                    
                })} 
                >
                    <div className="flex">
                        <div className='font-bold'>Cooking Time :</div><div> {item.cookTime} </div>
                    </div>
                    <div className="flex">
                        <div className='font-bold'>Prep Time :</div><div> {item.prepTime} </div>
                    </div>
                    <div className="flex">
                        <div className='font-bold'>Servings :</div><div> {item.servings} </div>
                    </div>
                    
                </div>
            </div>
            </div> 
        </div>
        {/*  */}
        <div className='flex'>
            <div className='w-1/3 text-left'> 
                <div className='font-bold text-lg'>INGREDIENTS</div>
                <div className='ml-5'>
                    <ul className='list-disc'>
                    {

                        item?.ingredients?.map((ingredient)=>{
                            return (
                                <li > {ingredient.name}
                                   
                                    <ul className={`ml-5 list-circle`}>
                                    {
                                        specials?.data?.map(data=> {
                                          
                                            if (ingredient.uuid === data.ingredientId){
                                                return <li>{data?.title}</li>
                                            }
                                        })
                                    }
                                    </ul>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className='w-2/3 text-left'> 
                <div className='font-bold text-lg'>DIRECTIONS</div>
                <div className='ml-5'>
                    <ul className='list-disc'>
                    {

                        item?.directions?.map((direction)=>{
                            return (
                                <li > {direction.instructions}
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            </div>
            
        </div> 
        <div className='flex justify-end mt-10 gap-5 italic'>
        <div className="flex">
                <div className='font-bold '>Post Date :</div><div> {item.postDate} </div>
        </div>
        <div className="flex">
            <div className='font-bold'>Edit Date : </div><div> {item.editDate} </div>
        </div>
        </div>
    </div>
  );
}

export default DetailedItem;