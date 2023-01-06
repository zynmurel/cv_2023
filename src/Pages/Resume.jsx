import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Infos from "./Components/Infos";
import Self from "./Components/Self";

const Resume = () => {
    return ( 
        <Paper className={'resume'}>
            <Self/>
            <Infos/>
        </Paper>
     );
}
 
export default Resume;