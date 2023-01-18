import { Box, CardContent, CardMedia, Topography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { demoProfilePicture } from "../utils/constants";


const ChannelCard = ( {ChannelDetail} ) => (
  <Box sx={{ boxShadow: 'none', borderRadius: '20px'}}>
    <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection:'column', justifyContent:'center',textAlign:"center",color:"#fff"}}>
        <CardMedia image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture } alt={ChannelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '180px', width:'180px', mb: 2, border: '1px solid #e3e3e3'}} />
      </CardContent>
    </Link>
  </Box>
)
  
export default ChannelCard

