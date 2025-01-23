import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Gitinfo, { getGitinfo } from './components/Gitinfo/Gitinfo.jsx'
import Workshop from './components/Workshops/Workshop.jsx'
import WorkshopInfo from './components/WorkshopInfo/WorkshopInfo.jsx'
import Login from './components/Login/Login.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path:'contact',
//         element: <Contact />
//       }
//     ],
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route path="Gitinfo" element={<Gitinfo />} loader={getGitinfo} />
        <Route path='Workshop' element={<Workshop />} />
        <Route path='Workshop/WorkshopInfo' element={<WorkshopInfo />} />
        <Route path='Login' element={<Login/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
