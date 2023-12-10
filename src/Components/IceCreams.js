import Card from "react-bootstrap/Card";
import classes from "./IceCreams.module.css";
function IceCreams() {
  let menuItems = [
    {
      id: 1,
      itemName: "VANILLA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://everydaypie.com/wp-content/uploads/2023/06/Vanilla-Ice-Cream-1-4.jpg",
      itemPrice: 80,
    },
    {
      id: 2,
      itemName: "STRAWBERRY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://thesaltedpepper.com/wp-content/uploads/2020/08/Strawberry-Ice-cream-Blender-sq-1.jpg",
      itemPrice: 80,
    },
    {
      id: 3,
      itemName: "PISTA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/ready-mix/k/l/y/500-pista-icecream-mix-powder-1-baking-mix-neotea-original-imagkd9emsbrehgw.jpeg?q=90",
      itemPrice: 80,
    },
    {
      id: 4,
      itemName: "MANGO",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.recipetineats.com/wp-content/uploads/2017/02/Mango-Ice-Cream-7.jpg",
      itemPrice: 100,
    },
    {
      id: 5,
      itemName: "CHOCOLATE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.thespruceeats.com/thmb/T_Mru3-k0Zl9fqDaprCn2bjhek4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg",
      itemPrice: 100,
    },
    {
      id: 6,
      itemName: "KESAR PISTA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/photo/75760325.cms",
      itemPrice: 100,
    },
    {
      id: 7,
      itemName: "BUTTER SCOTCH",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://icecreamfromscratch.com/wp-content/uploads/2022/06/Butterscotch-Ice-Cream-1.2-735x1103.jpg",
      itemPrice: 100,
    },
    {
      id: 8,
      itemName: "BLACK CURRENT",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://leelalicious.com/wp-content/uploads/2016/11/Black-Currant-Ice-Cream-Cone.jpg",
      itemPrice: 100,
    },
    {
      id: 9,
      itemName: "KAJU DRAKSH",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://culinaryshades.com/wp-content/uploads/2023/02/Kaju-Drakash-ice-cream-v1-sqr.jpg",
      itemPrice: 100,
    },
    {
      id: 10,
      itemName: "ANJEER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://theicecreambakery.in/wp-content/uploads/2022/06/Anjeer.jpg",
      itemPrice: 120,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>ICE CREAMS</u></p>
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

export default IceCreams;
