import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface Message {
    text: string;
    bg?: string;
}

interface WarnBarProps {
    messages: Message[];
}

const WarnBar: FC<WarnBarProps> = ({ messages }) => <Box sx={{ position: 'absolute', top: 64, width: 1, left: 0 }}>
    {messages.map((message) => <Box key={message.text} sx={{ backgroundColor: message.bg, p: 2 }}>
        <Typography>{message.text}</Typography>
    </Box>)}
</Box>

export default WarnBar;