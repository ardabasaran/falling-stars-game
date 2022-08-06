import { Grid, Paper, Box, Typography, Slider, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type ControlsProps = {
    initialSkySize: number;
    setSkySize: React.Dispatch<React.SetStateAction<number>>;
}

function Controls(props: ControlsProps) {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Paper elevation={5}>
                    <Box p = {2}>
                        <Typography variant="body1">Sky Size: {props.initialSkySize} </Typography>
                        <Slider
                            defaultValue={props.initialSkySize}
                            step={2}
                            marks
                            min={4}
                            max={24}
                            onChange={(_, val) => props.setSkySize(val as number)}
                        />
                        <Box mt = {2}>
                            <Button variant="contained" size="large" fullWidth>Start!</Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Accordion elevation={5}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Solution Found</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Test
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}

export default Controls