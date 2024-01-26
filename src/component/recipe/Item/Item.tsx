 
import classnames from 'classnames'; 
import { useAppDispatch } from '../../../app/hooks';
import { setSelectedRecipe } from '../../../features/recipe/recipeSlice'; 

const Item = ({item, index} : any) => {   
  const isEven = index%2 === 0;
  const dispatch = useAppDispatch(); 
  const viewRecipe = (item: any) => {
      dispatch(setSelectedRecipe(item)) 
  }
  return (  
    <li className={classnames({
      "lg:flex lg:mt-10 lg:gap-10": true,
      "lg:flex-row-reverse": !isEven
    })}>
        <div className='recipe-image lg:w-1/3'> 
          <img src={item.images.full} alt='recipe' /> 
        </div>
        <div className='lg:w-2/3 lg:grid'>
          <div>
            <div className={classnames({
              "text-2xl font-bold text-left my-3": true,
              "lg:text-right": !isEven,
              "lg:text-left": isEven,
              
            })}>{item.title} </div>
            <div 
            className={classnames({ 
              "text-left": true,
              "lg:text-right": !isEven,
              "lg:text-left": isEven,
              
            })}>{item.description}</div>
          </div>
          <div className='lg:relative text-left my-10 '>
            <button 
              className={classnames({ 
                "lg:absolute text-yellow-400 bg-slate-800 p-3 rounded-2xl font-bold": true,
                "lg:right-0 bottom-0": isEven,
                "left-0 bottom-0": !isEven,
                
              })}
              onClick={()=>viewRecipe(item)}
              >
              
            View Recipe
            </button>
        </div>
        </div>
        
      </li>
  );
} 

export default Item;