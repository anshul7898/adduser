import Card from "react-bootstrap/Card";
import classes from "./ColdBeverages.module.css";
function ColdBeverages() {
  let menuItems = [
    {
      id: 1,
      itemName: "PACKAGED DRINKING WATER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://ik.imagekit.io/dunzo/0d951f29472011ee877efb9d9f14a10e_VARIANT_5fec37f0c45745001c010170_1.JPG",
      itemPrice: 20,
    },
    {
      id: 2,
      itemName: "AERATED DRINKS",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2020/10/FP/GL/OA/521830/soft-drinks.jpg",
      itemPrice: 30,
    },
    {
      id: 3,
      itemName: "BUTTER MILK",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.ticklingpalates.com/wp-content/uploads/2022/04/spiced-buttermilk-recipe.jpg",
      itemPrice: 50,
    },
    {
      id: 4,
      itemName: "LASSI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg",
      itemPrice: 70,
    },
    {
      id: 5,
      itemName: "LASSI WITH ICE CREAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://tastedrecipes.com/wp-content/uploads/2022/07/Ice-Cream-Lassi-5.jpg",
      itemPrice: 100,
    },
    {
      id: 6,
      itemName: "KESAR LASSI WITH ICE CREAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://grycan.pl/wp-content/uploads/2019/02/1x1_0011_inspiracje_mango_lassli.jpg",
      itemPrice: 120,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>COLD BEVERAGES</u></p>
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

export default ColdBeverages;
