 
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';  
import Modal from './component/modal/Modal';   
import NavBar from './component/navbar/NavBar';
import { Suspense } from 'react';


function App() {   
 

  return ( 
    <div className="App">
      <Modal/>
      <div className='topImage lg:height-80'></div> 
      <NavBar/> 
      <Suspense fallback={<p>Loading Data...</p>}>
       <Outlet/>
      </Suspense>
      <footer className='mt-5 p-5 bg-slate-700 text-white font-bold'>Just Cook | The Best Recipe &copy;  2012 - 2022</footer>
    </div>
  );
}

export default App;
