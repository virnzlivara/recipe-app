
import Item from '../Item/Item';
import { IREcipeData, IRecipe } from '../../../features/recipe/recipeSlice';


interface List {
  items: IRecipe;
}
 

const RecipeList = ({items} : List) => { 
    return ( 
        <ul className='lg:mt-10 lg:mx-28 m-5'>
         
            {items && items?.data?.map((item: IREcipeData, index: number) => {
              return (
                <Item key={item.uuid} item={item} index={index}></Item> 
              );
            })}
        </ul>
             
        
    );
}

export default RecipeList; 