import Card from "react-bootstrap/Card";
import classes from "./Sundaes.module.css";
function Sundaes() {
  let menuItems = [
    {
      id: 1,
      itemName: "DOUBLE SUNDAE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://b.zmtcdn.com/data/pictures/1/19117051/083429d890b896abbb9e20eeadfe53fc.jpg",
      itemPrice: 170,
    },
    {
      id: 2,
      itemName: "VANILLA SUNDAE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i0.wp.com/nasfoodcorner.com/wp-content/uploads/2023/10/Vanilla-Sundae-NFC-Web-Img-1.jpg",
      itemPrice: 170,
    },
    {
      id: 3,
      itemName: "TRIPLE SUNDAE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.dotpe.in/longtail/store-items/2543105/8vzV0Aw0.jpeg",
      itemPrice: 200,
    },
    {
      id: 4,
      itemName: "CHOCOLATE SUNDAE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 200,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>SUNDAES</u></p>
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

export default Sundaes;
