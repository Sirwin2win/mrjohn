import {useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getProductById } from '../features/detailReducer'
import { useParams } from 'react-router-dom'




const Detail = () => {
    const dispatch = useDispatch()
    const {data:product, isLoading,error} = useSelector((state)=>state.product)
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getProductById(id))
    },[dispatch,id])
  return (
    <div className="container">

   <div class="card" style={{width:"18rem"}}>
  <img src={product.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Detail