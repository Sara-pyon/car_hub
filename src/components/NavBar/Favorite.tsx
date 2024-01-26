import { IoHeart, IoHeartOutline } from "react-icons/io5";
import useFavoriteCarStore from "../../store/favoriteStore";

const Favorite = () => {
  const favoriteCars = useFavoriteCarStore(s => s.favoriteCars);
  return (
    <div className="favorite">
      {favoriteCars.length === 0 ?
        <IoHeartOutline fontSize={20} color="white"/>:
        <IoHeart fontSize={20} color="#e83657" />
      }
    </div>
  )
}

export default Favorite