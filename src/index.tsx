 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { RecipeProvider } from './context/RecipeContext';
import { SpecialProvider } from './context/SpecialContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/home/home';
import RecipePage from './page/recipes/recipe';
import AboutPage from './page/about/about';
 

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/home",
        element: <HomePage/>,
      },
      {
        path: "/recipe",
        element: <RecipePage/>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      }
    ]
  }
])


root.render(
  <RecipeProvider> 
    <SpecialProvider>
      {/* <App />  */}
      <RouterProvider router={router}/>
    </SpecialProvider>
  </RecipeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
