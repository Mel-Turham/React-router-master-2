import { useOutletContext } from "react-router-dom"
const Pricing = () => {
  const {singleVan} = useOutletContext()
  return (
    <h4 className="host-van-price">
      ${singleVan.price} <span>/day</span>
    </h4>
  )
}
export default Pricing