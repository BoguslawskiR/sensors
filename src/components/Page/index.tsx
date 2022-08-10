import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Page = () => {
    const navigate = useNavigate();
    return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar sx={{ p: 2 }} position="fixed">
            <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                Sensors
            </Typography>
        </AppBar>
        <Box sx={{ mx: 'auto', p: 4, maxWidth: '1232px', width: 1, mt: '64px' }}>
            <Outlet />
        </Box>
    </Box>;
}

export default Page;