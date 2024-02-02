import React from 'react'

export default function Videos() {
  return (<div>

<h1 style={{backgroundColor:"rgb(255, 195, 0)" ,textAlign:"center"}}>Destnation Videos</h1>

    
       < div className="d-flex justify-content-between  ms-3 me-3">
          <video src={"http://localhost:3001/images/istockphoto-1039030424-640_adpp_is.mp4"} width="480" height="300" controls="controls" autoPlay={true} loop />
          <video src={"http://localhost:3001/images/istockphoto-1290943171-640_adpp_is.mp4"} width="480" height="300" controls="loop" autoPlay={true} loop />
          <video src={"http://localhost:3001/images/istockphoto-1137626476-640_adpp_is.mp4"} width="480" height="300" controls="controls" autoPlay={true} loop/>
      </div>
      < div className="d-flex justify-content-evenly">
          <video src={"http://localhost:3001/images/istockphoto-1138976621-640_adpp_is.mp4"} width="700" height="500" controls="controls" autoPlay={true} loop />
          <video src={"http://localhost:3001/images/istockphoto-1463637070-640_adpp_is.mp4"} width="700" height="500" controls="controls" autoPlay={true} loop />

      </div>
      
    </div>
  )
}
