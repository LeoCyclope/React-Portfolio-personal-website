import { useState } from 'react';
import axios from "axios";




const FileUpload = () => {

  const [file, setFile] = useState(null);
  const [tempUrl, setTempUrl] = useState(null);

  

  const handleFile = (e) => {
      const fileTemp = e.target.files[0];
      setFile(fileTemp);
      console.log("File Changed");
  }

 // function to handle the submit of a file using fetch API

 const handleSubmit = (e) => {
  e.preventDefault();

  //check the size file of the file input
  if (file.size >= 5000000) {
    alert("File size is too big, must be less than 5MB !");
    setTempUrl(null);
    return;
  }

  

  //$env:PORT=3005

  //Need to enable the right binary media types in the API Gateway and the right content type in the header
  //Need to enable CORS in the API Gateway as well (see https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html)

  const url = 'https://j3ldftlf7j.execute-api.eu-west-1.amazonaws.com/test2/test';
  //const url = 'http://127.0.0.1:3000/hello';

  var config = {
    method: 'POST',
    url: url,
    headers: { 
      'Content-Type': file.type, //Need to set the right content type in the header dynamically
    },
    data : file
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    setTempUrl(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  

}


  return ( 
  <div className="file-upload">
      <form onSubmit = {handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleFile}/>
        <button type="submit">Upload</button>

      </form>
      {file &&
        <div className="image" >
            
            <img style={{ height: 500 }} src={URL.createObjectURL(file)} alt="Init  of the Process"/>
          </div>
      } 
      {tempUrl &&
        <div className="image" >
            <img style={{ height: 500 }} src={tempUrl} alt="Result of the Process"/>
            <a href={tempUrl}>Click Here to Download</a>
        </div>
      }

  </div>

   );
}

export default FileUpload;