import React from 'react'
import {Map , GoogleApiWrapper} from "google-maps-react"
import {useState} from "react"

function Component1(props) {
  const[latitude,setLatitude]=useState(26.846695)
  const[longitude,setLongitude]=useState(80.946167)

  const find_fun=()=>{
    setLatitude()
    setLongitude()
    var x = Number(document.getElementById('latitude_id').value)
    var y = Number(document.getElementById('longitude_id').value)
    setLatitude(x)
    setLongitude(y)
    console.log(typeof(latitude))
    console.log(typeof(longitude))


  }

 
  return (
    <div>
      <div id="main_inner_div">
        <div id="find_place">
          <input type="number" id="latitude_id" placeholder="latitude" autoFocus/>
          <input type="number" id="longitude_id" placeholder="longitude"/>
           <button onClick={find_fun}>Find</button>

        </div>
      </div>
      <Map
      google={props.google}
      style={{width:"100%" , height:"100%"}}
      zoom={8}
      center={
        {
          // lat:latitude===111?26.846695:latitude,
          // lng:longitude===111?80.946167:longitude
          lat:latitude,
          lng:longitude
        }
      }
      />
    </div>
  )
}
export default GoogleApiWrapper({
  apikey:"AIzaSyBIgkx2Nei1GMMXdhsFryFLS1Kmq412nqs"
})(Component1)
