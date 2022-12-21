import React from 'react';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import PublicationBlock from "./PublicationBlock";


export default function Publications() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.publications.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PublicationBlock live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};