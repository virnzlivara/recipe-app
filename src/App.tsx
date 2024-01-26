 
import { useContext, useEffect } from 'react';
import './App.css'; 
import NavBar from './component/navbar/NavBar';
import RecipeList from './component/recipe/List/List'; 
import { getRecipes } from './features/recipe/recipeSlice';
import Modal from './component/modal/Modal';
import { getSpecials } from './features/specials/specialSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';  

function App() {  
  const recipeSelector = useAppSelector((state) => state.recipe)
  const dispatch = useAppDispatch()
   

  useEffect(()=> { 
    dispatch(getRecipes());
    dispatch(getSpecials());
  }, [])


  return ( 
    <div className="App">
      <Modal/>
      <div className='topImage lg:height-80'></div> 
      <NavBar/>
      <RecipeList items={recipeSelector} /> 
      
      <footer className='mt-5 p-5 bg-slate-700 text-white font-bold'>Just Cook | The Best Recipe &copy;  2012 - 2022</footer>
    </div>
  );
}

export default App;
