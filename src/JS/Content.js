import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Prabhas Raju"
        subheader="Oct 23, 1979"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://static.abplive.com/wp-content/uploads/2020/05/07151927/Prabhas-Baahubali-Baahubali-The-Conclusion.jpg"
        alt="King Of Indian Cinema"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Prabhas is often referred as a "pan-Indian star".He is sometimes informally 
        referred to as "Darling"and was ranked second in Times' Most Desirable Men 
        for the year 2017,and twelfth in 2018.In 2021, he has been named the ‘Most
         Handsome Asian Male’ in the Fancy Odds annual list.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>𝑩𝑰𝑶𝑮𝑹𝑨𝑷𝑯𝒀</Typography>
          <Typography paragraph>
          Uppalapati Venkata Suryanarayana Prabhas Raju  
          </Typography>
          <Typography paragraph>
          Prabhas populoarly known as Rebal star is an Indian actor who predominantly works in Telugu cinema.
          One of the highest-paid actors in Indian cinema,Prabhas has featured in Forbes India's Celebrity 
          100 list since 2015 and has received seven Filmfare Awards nominations, a Nandi Award, and a SIIMA Award.
          
          </Typography>
          <Typography paragraph>
          Prabhas is the first South Indian actor to receive a wax sculpture at Madame Tussaud's wax museum.
          In addition to his film career, he is widely known for promoting various humanitarian and philanthropic 
          causes. He is the brand ambassador for the Mahindra TUV300.
          </Typography>
          <Typography>
           REBAL STAR <br></br>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}