 
import { useEffect } from 'react';
import './App.css'; 
import NavBar from './component/navbar/NavBar';
import List from './component/recipe/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from './features/recipe/recipeSlice';
import Modal from './component/modal/Modal';
import { getSpecials } from './features/specials/specialSlice';

function App() {
  const dispatch = useDispatch();
  const recipeSelector = useSelector(state=>state?.recipe);
  useEffect(()=> { 
    dispatch(getRecipes());
    dispatch(getSpecials());
  }, [])



  return (
    <div className="App">
      <Modal/>
      <div className='topImage lg:height-80'></div> 
      <NavBar/>
      <List items={recipeSelector} />
      
      <footer className='mt-5 p-5 bg-slate-700 text-white font-bold'>Just Cook | The Best Recipe &copy;  2012 - 2022</footer>
    </div>
  );
}

export default App;
