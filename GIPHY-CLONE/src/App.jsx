import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './layouts/Layout';
import Categories from './pages/Categories';
import Search from './pages/Search';
import Gif from './pages/Single-gif';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import GifProvider from './context/gif-context';

//home
//categories
//search
//single gif
//favourites

const router = createBrowserRouter([
  {
    element:  <Layout />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:category',
        element: <Categories />
      },
      {
        path: '/search/:query',
        element: <Search />
      },
      {
        path: '/:type/:slug',
        element: <Gif />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
  
    ]
  }
])

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
)
}

export default App
