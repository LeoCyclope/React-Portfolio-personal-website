import React, { useEffect}  from 'react';
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';



export default function Publications() {

  useEffect(() => {
    document.title = "Leo Souquet | My Resume";  
  }, []);
  


    return (
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, paddingTop: 5 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'left'} >
  
          <Grid container spacing={2}>
            <Grid item xs={4}>
                Work Experiences
                </Grid>
                <Grid item xs={8}>
            <Stack spacing={2}
          justifyContent="left"
          alignItems="left">
                
                 {info.WorkExperience.map((project, index) => (
                     <Box key={index} >
                        <Box className={'publi-authors'}
                          alignItems={'left'} justifyContent={'left'} fontSize={'1.5rem'}  fontWeight= {"bold"} >
                            {project.position} • {project.company} 
                            
                        </Box>
                        <Box py={'0.2rem'} fontStyle={'italic'}>  {project.dates} • {project.location}
                        </Box> 
                        <Box sx={{ flexGrow: 1, paddingTop: 1 }}>
                        <List>
                        {project.tasks.map( (task, index_task) => {
                          
                          const htmlString = task;
                            return <ListItem  key={index_task}   py={'0.2rem'} >
                              
                              <ListItemIcon>
                              ✔️
                              </ListItemIcon>
                              
                              <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
                              
                              
                              </ListItem >
                            
                        })}
                        </List>
                        </Box>
                        
                  </Box>
                     
                  ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

        </Container>
      
    );
};