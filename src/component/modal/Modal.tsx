import classNames from 'classnames';
import React, { Component, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../recipe/Item/Item';
import { clearSelectedRecipe } from '../../features/recipe/recipeSlice';
import DetailedItem from '../recipe/Item/DetailedItem';
import RecipeContext from '../../context/RecipeContext'; 


const Modal = () => { 
    // const recipe = useSelector(state=>state.recipe);
    const recipeContext = useContext(RecipeContext)
    const withSelectedRecipe = recipeContext.selected !== null;
    console.log("recipe", recipeContext)
    console.log("withSelectedRecipe", withSelectedRecipe)
    // const dispatch = useDispatch();
    const closeRecipeModal = () => { 
        // dispatch(clearSelectedRecipe())
        recipeContext.clearSelectedRecipe();
    }
 
     
    return ( 
        
            <div 
                className={classNames({
                    "lg:fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full": true,
                    "lg:hidden": !withSelectedRecipe,
                    "lg:z-50": true
                })}
                id="modal">
                {
                    withSelectedRecipe &&  <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                    <span className='flex justify-end' onClick={()=>closeRecipeModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                    </span>
                    <div>
                        <DetailedItem item={recipeContext.selected}/>
                    </div>
                
                    
        
                </div>
                }
        
            </div> 
    );
} 

export default Modal;