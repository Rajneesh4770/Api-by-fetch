import React,{useEffect,useState} from "react";
function Api(){

const[data,setData]=useState([ ])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/ablums/1/photos").then((result)=>{
        result.json().then((resp)=>{
            setData(resp)
        })
    })
},[])
console.warn(data)
return(
    <div className="Api">
    <h1>Get API</h1>
    <table border="1">
        <tr >
            <td>AlbumId</td>
            <td>Id</td>
            <td>Url</td>
            <td>ThumbnailUrl</td>
        </tr>
        {
            data.map((item)=>
            <tr>
            <td>{item.albumId}</td>
            <td>{item.id}</td>
            <td>{item.url}</td>
            <td>{item.thumbnailUrl}</td>
            </tr>
            )
        }
    </table>
    </div>
)
}
export default Api;