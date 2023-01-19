import { useState } from "react";
import RestuarantCard from "./RestuarantCard";
import config from "../config";
import "./Body.css";

//What is State
//What is React Hooks
//What is useState - /**A component need to remember things.
/* when components often need to change what is on the screen*/
const filterData = (input, restuarantes)=>{
    console.log("input - ",input)
    console.log("resturaant data before filter method - ",restuarantes)
    const data = restuarantes.filter((restuarant)=> (restuarant.data.name).toLowerCase().includes(input.toLowerCase()) );
    return data
}
const Body = () =>{
    const [searchInput, setSearchInput] = useState("");
    const [filterRestuarants, setfilterRestuarants] = useState(config.RestuarantList)
    const [restuarants, setRestuarants] = useState(config.RestuarantList);
    return(
        <>
        <div className="searchContainer">
            <input type="search" placeholder="search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>

            <button onClick={()=>{
                const data = filterData(searchInput, restuarants);
                console.log("return data from filter - ",data)
                setfilterRestuarants(data);

                //again set to orginal data as it was original data. because restuarants StateVariable has always be original data. So that If we cancel something out from the input 
                setRestuarants(restuarants);
            }}>Search</button>
        </div>
        <div className="restuarant-list">
            {
                filterRestuarants.map((restuarant)=>{
                    return <RestuarantCard {...restuarant.data} key={restuarant.data.id}/>
                })
            }
        </div>
        </>
    )
};
export default Body;