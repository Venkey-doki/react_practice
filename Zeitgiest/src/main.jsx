import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Workshop from './components/Workshop/Workshop'
import Login from './components/Login/Login'
import Events from './components/Events/Events'
import Gallery from './components/Gallery/Gallery'
import Contests from './components/Contest/Contest'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/Workshop' element={<Workshop />} />
      <Route path='/login' element={<Login />} />
      <Route path='/events' element={<Events />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Contests' element={<Contests />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
