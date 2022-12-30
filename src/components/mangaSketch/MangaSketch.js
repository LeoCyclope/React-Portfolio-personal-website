import React from 'react';
import './FilesDragAndDrop.scss';
import { Box } from "@mui/material";
import { useState, useRef } from 'react';
import axios from "axios";
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
//https://github.com/sneas/img-comparison-slider/tree/master/packages/react

//Drag and drop Module Inspired from https://www.codemzy.com/blog/react-drag-drop-file-upload
import Grid from '@mui/material/Grid';

import sample1 from './sampleImgs/me.jpg';
import sample2 from './sampleImgs/my_image.jpg';

import { Link } from 'react-router-dom';


// drag drop file component
function DragDropFile() {
  // drag state
  const [dragActive, setDragActive] = useState(false);

  // ref
  const inputRef = useRef(null);

  // file state
  const [fileInput, setfileInput] = useState(null);

  const [fileOriginalInput, setfileOriginalInput] = useState(null);

  const [tempUrl, setTempUrl] = useState(null);

  const handleFiles = function (files) {

    setfileInput(files[0]);

    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name);
      console.log(files[i].size);
    }
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);

    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {

      handleFiles(e.target.files);

    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = (e) => {

    //Need to check this later
    /*
    if (fileInput) {
      handleSubmit(e);
    }
    else {
      inputRef.current.click();
    }
    */

  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");
    setTempUrl(null);

    //check the size file of the file input
    if (fileInput.size >= 5000000) {
      alert("File size is too big, must be less than 5MB !");
      setTempUrl(null);
      return;
    }

    setfileOriginalInput(fileInput);



    //$env:PORT=3005

    //Need to enable the right binary media types in the API Gateway and the right content type in the header
    //Need to enable CORS in the API Gateway as well (see https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html)

    const url = 'https://j3ldftlf7j.execute-api.eu-west-1.amazonaws.com/test2/test';
    //const url = 'http://127.0.0.1:3000/hello';

    var config = {
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': fileInput.type, //Need to set the right content type in the header dynamically
      },
      data: fileInput
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

    <Container maxWidth="lg">


      <Box sx={{ flexGrow: 1, paddingTop: 10 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} >

        <Grid container spacing={2} >
          <Grid item xs={5}>

            <ImgComparisonSlider>
              <img slot="first" src={sample1} />
              <img slot="second" src={sample2} />
            </ImgComparisonSlider>

          </Grid>
          <Grid item xs={7} >
            <Box sx={{ flexGrow: 1 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'left'} textAlign={'left'} >
              <h1 style={{ paddingBottom: 10 }}   >Convert your Image into Manga style sketch</h1>
              <i style={{ paddingBottom: 10 }} >This <b>Free</b> tool allows you to convert your image to a manga-style, pencil-style sketch image</i>

              <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={handleSubmit}>
                <input ref={inputRef} type="file" id="input-file-upload" /*multiple={true}*/ onChange={handleChange} accept="image/jpeg, image/jpg, image/png" />
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                  
                  {! fileInput && 
                    <div>
                    <p>Drag and drop your file here</p>
                    <div className="upload-button" onClick={onButtonClick}>Select a file</div>
                    </div>
                    
                  }
                  {fileInput && 
                  <div>
                    <p><b>Image Received</b></p>
                    <p>Drag if click if you want to change file</p>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                      Transform my image into MANGA!
                    </Button>
                    </div>
                  }
                    
                    

                  
                </label>
                {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}


              </form>

            </Box>
          </Grid>
          <Grid item xs={6}>

            {fileInput &&

              <Box sx={{ flexGrow: 1 }}    >
                <h2> Selected Input: </h2>
                <img src={URL.createObjectURL(fileInput)} alt="Input File of the Process" />

              </Box>
            }

          </Grid>
          <Grid item xs={6}>

            {tempUrl &&
              <Box >
              

                
                
                
                <ImgComparisonSlider>
                    <img style={{ maxHeight: '100% '}} slot="first" src={URL.createObjectURL(fileOriginalInput)} />
                    <img style={{ maxHeight: '100%' }} slot="second" src={tempUrl} />
                  </ImgComparisonSlider>
                  <Button variant='contained' component="label">
                <a href={tempUrl} target="__blank">Click Here to Download Image</a> 
                  </Button>
              
              </Box>
            }


          </Grid>
        </Grid>
      </Box>
    </Container>



  );
};
// for the download https://stackoverflow.com/questions/66811401/material-ui-how-to-download-a-file-when-clicking-a-button
export default DragDropFile;
