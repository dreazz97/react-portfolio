import { createBrowserRouter } from 'react-router-dom'
import App from '../components/App'
import Home from '../components/pages/Home'
import ErrorPage from '../components/pages/ErrorPage'
import About from '../components/pages/About'
import Projects from '../components/pages/Projects'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
])

export default router