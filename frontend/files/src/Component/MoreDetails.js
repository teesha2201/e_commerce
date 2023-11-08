import React,{useState,useEffect} from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";

function MoreDetails(){
    const {id} = useParams();
    const newid = parseInt(id)
    // const [moredetails,setMoreDetails] = useState({})
    const [moredetails,setMoreDetails] =useState([])
    const navigate = useNavigate();
    useEffect(()=>{
            axios.get('http://localhost:5005/api/beautyproduct/')
            .then((res)=>setMoreDetails(res.data))
            .catch((err)=>console.log(err))

    },[id] );
    return(
        <>
            {moredetails.filter((item)=>item.id===newid).map((item,index)=>{
                return(
                    <div key={index}>
                        <h1>More page</h1>
            <img src={item.image}  alt="Not Found"/>
            <button onClick={()=>navigate(-1)}>Go back</button>
                    </div>
                )
            })}
            
        </>
    )
}
export default MoreDetails