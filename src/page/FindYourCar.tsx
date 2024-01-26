import { useParams } from 'react-router-dom'

const FindYourCar = () => {
    const {slug} = useParams();

  return (
    <div>FindYourCar</div>
  )
}

export default FindYourCar