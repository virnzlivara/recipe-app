import axios from "axios";

const getRecipes = async (params?: any) => {  
    const response = await axios(`http://localhost:3001/recipes`); 
    return response.data;
};


const recipeService = {
    getRecipes
  };
  
export default recipeService;