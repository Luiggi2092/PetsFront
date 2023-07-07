import { useState } from "react"
import { useDispatch } from "react-redux"
import { GET_VACCINES } from "../../redux/actions"
import { useSelector } from "react-redux"
import { useEffect } from "react"


const VaccinesFilter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: GET_VACCINES });
    }, [])

    const vaccines = useSelector((state: any) => state.vaccines)
    
    useEffect(() => {
        console.log(vaccines);
    }, [vaccines]);
    
    const [vac, setVac] = useState("")

    const handlerVaccinesChange = (e: any) => {
        const selectedVaccines = e.target.value
        setVac(selectedVaccines)
    }
    
    return (
        <div>
            <h1>Filtro Vacunas</h1>
        </div>
    )

}

export default VaccinesFilter