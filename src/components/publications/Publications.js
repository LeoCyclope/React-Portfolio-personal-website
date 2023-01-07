import React, { useEffect}  from 'react';
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Stack from '@mui/material/Stack';

export default function Publications() {

  useEffect(() => {
    document.title = "Leo Souquet | My Journals and Conferences Publications";  
  }, []);
  


    return (
        <Box sx={{ flexGrow: 1, paddingTop: 5 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'left'} >
        
        <Stack spacing={2}
          justifyContent="left"
          alignItems="left">
                <h1 style={{fontSize: '2rem'}}>{"Journals"}</h1>
                 {info.publicationsJournal.map((project, index) => (
                     <Box key={index} >
                        <Box className={'publi-authors'}
                          alignItems={'left'} justifyContent={'left'}  py={'0.5rem'}>
                            {project.authors}
                        </Box>
                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem'}}  >{project.title}</p>
                        <p style={{ fontStyle: 'italic' }} >{project.journal_info}</p>
                     
                  </Box>
                     
                  ))}

                <h1 style={{fontSize: '2rem', paddingTop: 10 }}>{"Conferences"}</h1>
                 {info.publicationsConf.map((project, index) => (
                     <Box key={index} >
                        <Box className={'publi-authors'}
                          alignItems={'left'} justifyContent={'left'}  py={'0.5rem'}>
                            {project.authors}
                        </Box>
                        <p style={{ fontWeight: 'bold',fontSize: '1.2rem' }} >{project.title}</p>
                        <p style={{ fontStyle: 'italic' }} >{project.journal_info}</p>
                     
                  </Box>
                     
                  ))}
              </Stack>



      </Box>
      
    );
};

/*
{info.publications.map((project, index) => (
    <Grid item xs={12} md={6} key={index}>
        <PublicationBlock live={project.live} source={project.source} title={project.title} />
    </Grid>
 ))}
 */