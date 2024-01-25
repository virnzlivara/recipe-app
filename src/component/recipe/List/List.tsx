
import Item from '../Item/Item'; 


interface List {
  items: IRecipe;
}

export interface IRecipe {
  data : IREcipeData[],
  selected: any
}

export interface IREcipeData {
  uuid: string,
  title: string,
  description: string,
  images: IImages,

}

interface IImages {
  full: string,
  medium: string,
  small: string
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