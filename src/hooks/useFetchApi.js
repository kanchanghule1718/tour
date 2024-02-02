import  { useEffect, useState } from 'react'

export const useFetch=(url)=> {
    let[data,setData]=useState(null)
    let[isLoading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch(url)    
        .then(res=>res.json())
        .then(data=>{
        setData(data)
        setLoading(false)
        })
        },[url])
  return (
    {data,isLoading}
  )
}
