import FilterBySize from '../components/FilterByFuel'
import Finance from '../components/Finance'
import Header from '../components/Header/Header'
import NewCars from '../components/NewCars'
import Nrma from '../components/Nrma'
import Partners from '../components/Partners'
import WhyCarma from '../components/WhyCarma'

const HomePage = () => {
  return (
    <>
      <Header />
      <FilterBySize/>
      <WhyCarma />
      <NewCars />
      <Nrma />
      <Partners />
      <Finance />
    </>
  )
}

export default HomePage