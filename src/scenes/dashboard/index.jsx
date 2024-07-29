import { Box } from "@mui/material";
import ProgressCircle from "../../components/ProgressCircle";

import Header from '../../components/Header'

const Dashboard = () => {

    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>

        <ProgressCircle/>
    </Box>
}

export default Dashboard; 