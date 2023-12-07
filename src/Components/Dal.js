import Card from "react-bootstrap/Card";
import classes from "./Dal.module.css";
function Dal() {
  let menuItems = [
    {
      id: 1,
      itemName: "DAL FRY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://shwetainthekitchen.com/wp-content/uploads/2021/12/Dal-Fry-Recipe.jpg",
      itemPrice: 200,
    },
    {
      id: 2,
      itemName: "DAL TADKA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://vegecravings.com/wp-content/uploads/2018/01/Dal-Tadka-Recipe-Step-By-Step-Instructions.jpg",
      itemPrice: 220,
    },
    {
      id: 3,
      itemName: "DAL TADKA(DESI GHEE)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://img.freepik.com/premium-photo/dal-fry-with-desi-ghee-clarified-butter-most-popular-healthy-main-cource-recipe-indian-subcontinent_466689-2851.jpg",
      itemPrice: 240,
    },
    {
      id: 4,
      itemName: "DAL PANEER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/60100461.cms?imgsize=486598&width=800&height=800",
      itemPrice: 250,
    },
    {
      id: 5,
      itemName: "DAL MAKHANI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3.jpg",
      itemPrice: 250,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>DAL</u></p>
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

export default Dal;
