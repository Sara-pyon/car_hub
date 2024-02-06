import { IoHeart, IoHeartOutline } from "react-icons/io5";
import useFavoriteCarStore from "../../store/favoriteStore";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const favoriteCars = useFavoriteCarStore(s => s.favoriteCars);
  const navigate = useNavigate();

  return (
    <div className="favorite" onClick={() => navigate('/favorite')}>
      {favoriteCars.length === 0 ?
        <IoHeartOutline fontSize={20} color="white" cursor='pointer'/>:
        <IoHeart fontSize={20} color="#e83657" cursor='pointer' />
      }
    </div>
  )
}

export default Favorite