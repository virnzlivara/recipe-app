// import { createContext, useContext } from "react";
 
import { createContext, useContext, useEffect, useState } from "react";

 
// export interface IRecipeContext {
//     data : IREcipeData[],
//     populateData : (data: any) => void;
//     selected: any
//   }

//   export interface IREcipe {
//     data : IREcipeData[],
//     selected: any
  
//   }
  
//   export interface IREcipeData {
//     uuid: string,
//     title: string,
//     description: string,
//     images: IImages,
  
//   }
  
//   interface IImages {
//     full: string,
//     medium: string,
//     small: string
//   }
   
//   const populateData = (data: IREcipeData) => {

//   }
//   const initialState : IRecipeContext = {
//     data: [],
//     selected: null
//   }; 
// const RecipeContext = createContext<IRecipeContext | null>(initialState); 

// export function useRecipeContext() {
//   const context = useContext(RecipeContext);
//   if (!context) {
//     throw new Error('Error!!')
//   }
//   return context;
// }

// export const RecipeProvider = RecipeContext.Provider;

 const RecipeContext = createContext({
    data: [],
    setSelected : (data: any) => {},
    clearSelectedRecipe : () => {},
    selected: null

})


export const RecipeProvider = ({children}: any) => {
    const [data, setData] = useState<any>([]);
    const [selected, setSelected] = useState<any>(null);
    useEffect(()=> { 

        async function fetchData() {
            try {
              const data = await fetch("http://localhost:3001/recipes");
              debugger
              const res = await data.json();
              setData(res);
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
export default RecipeContext;
