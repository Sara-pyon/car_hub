import FavoriteCarsList from '../components/FavoriteCarsList'
import NavBar from '../components/NavBar/NavBar'

const FavoriteCars = () => {
  return (
    <>
    <NavBar background='first' location='finance' />
    <FavoriteCarsList />
    </>
  )
}

export default FavoriteCars