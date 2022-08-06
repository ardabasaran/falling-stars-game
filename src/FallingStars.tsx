import { Box, Grid, Paper } from "@mui/material";
import { useState } from "react";
import Sky from "./Sky";
import Controls from "./Controls";

function FallingStars() {
    const [skySize, setSkySize] = useState(16);

    return (
        <Box marginY = {{xs: 1, md: 3}} marginX = {{xs: 2, md: 4}}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={8}>
                    <Paper elevation={5}>
                        <Sky size={skySize} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Controls initialSkySize={skySize} setSkySize={setSkySize} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default FallingStars