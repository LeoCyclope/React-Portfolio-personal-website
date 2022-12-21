import React from 'react';
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Stack from '@mui/material/Stack';


export default function Publications() {
    return (
        <Box sx={{ flexGrow: 1, paddingTop: 5 }} display={'flex'} flexDirection={'column'} justifyContent={'left'} alignItems={'center'} textAlign={'left'} >
        
        <Stack spacing={2}
          justifyContent="left"
          alignItems="left">
                <h1 style={{fontSize: '2rem'}}>{"Journals"}</h1>
                 {info.publicationsJournal.map((project, index) => (
                     <Box key={index} >
                        <Box className={'publi-authors'}
                          alignItems={'left'} justifyContent={'left'} fontSize={'1.5rem'} py={'1rem'}>
                            {project.authors}
                        </Box>
                        <p style={{ fontWeight: 'bold' }} >{project.title}</p>
                        <p style={{ fontStyle: 'italic' }} >{project.journal_info}</p>
                     
                  </Box>
                     
                  ))}
              </Stack>


              <Stack spacing={2}
          justifyContent="left"
          alignItems="left"
          sx={{ paddingTop: 5 }}>
                <h1 style={{fontSize: '2rem'}}>{"Conferences"}</h1>
                 {info.publicationsConf.map((project, index) => (
                     <Box key={index} >
                        <Box className={'publi-authors'}
                          alignItems={'left'} justifyContent={'left'} fontSize={'1.5rem'} py={'1rem'}>
                            {project.authors}
                        </Box>
                        <p style={{ fontWeight: 'bold' }} >{project.title}</p>
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