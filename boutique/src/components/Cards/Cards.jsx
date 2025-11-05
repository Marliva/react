import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css"

export default function Cards(props) {
  console.table(props);
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
          <Button size="large">Buy</Button>
          Quantité : {props.costume.qte}
        </CardActions>
      </Card>
    </div>
  );
}
