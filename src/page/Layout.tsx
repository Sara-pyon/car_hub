import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { ScrollRestoration } from 'react-router-dom'



const Layout = () => {
  return (
    <>
    <Outlet />
    <Footer />
    <ScrollRestoration />
    </>
  )
}

export default Layout