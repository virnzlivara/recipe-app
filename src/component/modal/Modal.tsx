import classNames from 'classnames'; 
import { clearSelectedRecipe } from '../../features/recipe/recipeSlice';
import DetailedItem from '../recipe/Item/DetailedItem'; 
import { useAppDispatch, useAppSelector } from '../../app/hooks';


const Modal = () => { 
    const recipe = useAppSelector(state=>state.recipe); 
    const dispatch = useAppDispatch();
    const closeRecipeModal = () => { 
        dispatch(clearSelectedRecipe()) 
    }
    console.log("recipe", recipe)
     debugger
    return ( 
        
            <div 
                className={classNames({
                    "lg:fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full": true,
                    "lg:hidden": recipe.selected === null,
                    "lg:z-50": true
                })}
                id="modal">
                {
                    recipe.selected&&  <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                    <span className='flex justify-end' onClick={()=>closeRecipeModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                    </span>
                    <div>
                        <DetailedItem item={recipe.selected}/>
                    </div>
                
                    
        
                </div>
                }
        
            </div> 
    );
} 

export default Modal;