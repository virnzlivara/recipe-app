import { useContext } from "react"; 
import RecipeList from "../../component/recipe/List/List";
import RecipeContext from "../../context/RecipeContext";

export default function HomePage() {
    const recipe = useContext(RecipeContext)
    return <> 
   
      {
        recipe.data.length > 1 ? <RecipeList items={recipe} /> : <p>Loading Data...</p>
      }
     
       
    </>
}