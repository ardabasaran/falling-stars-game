import { Box, Grid } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export type SkyProps = {
    size: number;
}

function Sky(props: SkyProps) {
    let items: JSX.Element[] = []
    for (let i = 0; i < props.size; i++) {
        for (let j = 0; j < props.size; j++) {
            items.push(
                <Grid 
                    item 
                    width={1/props.size} 
                    height={1/props.size}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{border: 1}}
                >
                    <StarIcon sx={{ width: "80%", height:"80%", color: "gray" }}/>
                </Grid>
            )
        }
    }
    return (
        <Box paddingTop="100%" position="relative">
            <Grid
                container 
                spacing={0}
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                alignItems="center"
                justifyContent="center"
            >
                { items }
            </Grid>
        </Box>
    )
}

export default Sky