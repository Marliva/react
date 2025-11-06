import {useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoutiqueContext from "../../context/BoutiqueContext";
import "./Cards.css"

export default function Cards(props) {
  const boutiqueContext = useContext(BoutiqueContext);
  // console.log(boutiqueContext);
  return (
    <div className="maCard">
      <Card
        sx={{
          maxWidth: "100%",
          marginTop: "1rem",
          backgroundColor: "#92BF45",
          minHeight:740,

        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="450"
          image={props.costume.url}
        />
        <CardContent sx={{  }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.costume.name}
          <Typography>
            {props.costume.price} $
          </Typography>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.costume.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          disabled={props.costume.qte === 0 ? true : false }
          size="large"
          onClick={()=>  boutiqueContext.addCart(props.costume.id)}>Buy</Button>
          Quantité : {props.costume.qte}
        </CardActions>
      </Card>
    </div>
  );
}
