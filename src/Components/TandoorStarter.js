import Card from "react-bootstrap/Card";
import classes from "./TandoorStarter.module.css";
function TandoorStarter() {
  let menuItems = [
    {
      id: 1,
      itemName: "SGS CHEF SPL TIKKA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://carveyourcraving.com/wp-content/uploads/2021/10/paneer-tikka-skewers.jpg",
      itemPrice: 320,
    },
    {
      id: 2,
      itemName: "PANEER TIKKA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://myfoodstory.com/wp-content/uploads/2017/02/Oven-Baked-Tandoori-Paneer-Tikka-2.jpg",
      itemPrice: 300,
    },
    {
      id: 3,
      itemName: "PANEER MALAI TIKKA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://foodroot.in/wp-content/uploads/2019/07/Paneer-malai-Tikka.jpg",
      itemPrice: 300,
    },
    {
      id: 4,
      itemName: "PANEER PAHADI TIKKA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookwithmanali.com/wp-content/uploads/2021/06/Hariyali-Paneer-Tikka-500x500.jpg",
      itemPrice: 300,
    },
    {
      id: 5,
      itemName: "PANEER PLATTER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.redd.it/an0uohazunj71.jpg",
      itemPrice: 400,
    },
    {
      id: 6,
      itemName: "HARA BHARA KABAB",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.foodie-trail.com/wp-content/uploads/2022/03/IMG_8538-scaled.jpg",
      itemPrice: 300,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>TANDOOR STARTER</u></p>
      {menuItems.map((menuItems) => (
        <Card className={classes.input}>
          <Card.Img
            className={classes.image}
            variant="top"
            src={menuItems.itemImageUrl}
          />
          <Card.Body>
            <Card.Title>{menuItems.itemName} - ₹ {menuItems.itemPrice}/-</Card.Title>
            {/* <Card.Text>{menuItems.itemDescription}</Card.Text> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TandoorStarter;
