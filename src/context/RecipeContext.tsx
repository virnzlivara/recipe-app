 
 
import { createContext, useEffect, useState } from "react";

  

const RecipeContext = createContext({
    data: [],
    selected: null,
    setSelected : (data: any) => {},
    clearSelectedRecipe : () => {}
})
export default RecipeContext;

export const RecipeProvider = ({children}: any) => {
    const [data, setData] = useState<any>([]);
    const [selected, setSelected] = useState<any>(null);
    useEffect(()=> { 
      
        async function fetchData() {
            try {
              const data = await fetch("http://localhost:3001/recipes");
            
              const res = await data.json();
              setTimeout(() => {
                setData(res);
              }, 5000);
              
            } catch (error) {
            //   setError(error.message);
            }
          }
          fetchData();
         

         

         
      }, [])

    const clearSelectedRecipe = () => {
      setSelected(null)
    }
    
    return( 
        <RecipeContext.Provider value={{data, selected, setSelected, clearSelectedRecipe}}>
            {children}
        </RecipeContext.Provider>
    )
}

