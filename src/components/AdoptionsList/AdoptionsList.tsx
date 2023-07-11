import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { adoptions } from '../../services/AdoptionsService'

const AdoptionsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    (async function () {
      const response = await adoptions.getAdoptions()
      dispatch((response.data))
      console.log(response.data)
    })();
  }, [dispatch]);

  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}

export default AdoptionsList
