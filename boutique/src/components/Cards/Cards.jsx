import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Cards(props) {
  console.table(props);
  return (
    <Card sx={{ maxWidth: "24%", marginTop: "1rem", backgroundColor: "#92BF45" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={props.costume.url}
      />
      <CardContent sx={{display:"flex"}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.costume.name}
          {props.costume.price} $
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.costume.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        Quantité : {props.costume.qte}
      </CardActions>
    </Card>
  );
}
