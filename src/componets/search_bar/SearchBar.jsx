import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import key from "../../key";

const API_options = key.geoDB;

const SearchBar=({onSearch})=>{
    const[search,setSearch]=useState(null);

    const loadData=async(input)=>{
        try{
            let res=await (await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${input}`,API_options)).json();
            return {
                options:res.data.map((ele)=>{
                    return{
                        label:`${ele.city} ${ele.countryCode}`,
                        value:`${ele.latitude} ${ele.longitude}`
                    }
                })
            }
        }
        catch(err){
            return {
                options:[{label:"Network Error",value:"0 0"}]
            }
        }
    }
    const change=(value)=>{
        // console.log(value);
        onSearch(value);
        setSearch(value)
    }
    return(
        <AsyncPaginate
            placeholder="search the city"
            debounceTimeout={1000}
            value={search}
            onChange={change}
            loadOptions={loadData}
        />

    )
}

export default SearchBar;