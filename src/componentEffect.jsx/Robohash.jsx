import { useState, useEffect } from "react";

export default function Robohash() {

    const [search , setSearch] = useState('')
    const [image , setImage] = useState('')

const handleChange =(e)=>{
    setSearch(e.target.value)
}

useEffect(()=>{
    const abortController = new AbortController();
    fetch(`https://robohash.org/${search}`, {
        signal: abortController.signal,
      })
    .then(res=>res)
    .then(data=>setImage(data.url))
    return()=>abortController.abort();
},[search])

  return (
    <div>
        <input type="text" onChange={(e)=>handleChange(e)} />
       <div> {image ?<img src={image} alt="image" /> : null }</div>
    </div>
  )
}
