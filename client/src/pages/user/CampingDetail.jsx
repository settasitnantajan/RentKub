import { readCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

function CampingDetail() {
    const [camping, setCamping] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetchCampingDetail(id)
    }, [])
    

    const fetchCampingDetail = async (id) => {
        try {
            const res = await readCamping(id)
            setCamping(res.data.result)
        } catch (error) {
            console.log(error)
        }
    };

    console.log('useState', camping)

  return (
    <div>CampingDetail</div>
  )
}
export default CampingDetail