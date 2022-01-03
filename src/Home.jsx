import cities from "./cities";
import { Link } from "react-router-dom";
const Home= props =>{
    return(
        <div className="Home">
            {
                cities.map(el=>{
                  return(
                    <Link to={`/cities/${el.Name}`}>
                    <div className="cities-Name">
                        <h1>{el.Name}</h1>
                   
                    </div>
                </Link>   
                  )  
                })
            }
            </div>
      
    )
}
export default Home;