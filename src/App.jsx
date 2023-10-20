import {   useRoutes } from 'react-router-dom'
import './App.css'
import About from './About'
import History from './History'
import Footer from './Footer'


function App() {
  const router = useRoutes([
    {
      path:'/',
      element: <>Главная</>,
    },
    {
      path:'/about',
      element: <About/>,
    },
    {
      path:'/history',
      element: <History/>,
    },
    {
      path:'/footer',
      element: <Footer/>,
    }

   ])
 
  return router;
}

export default App
