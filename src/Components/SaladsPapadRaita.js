import Card from "react-bootstrap/Card";
import classes from "./SaladsPapadRaita.module.css";
function SaladPapadRaita() {
  let menuItems = [
    {
      id: 1,
      itemName: "PAPAD ROSTED",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://as2.ftcdn.net/v2/jpg/02/15/10/75/1000_F_215107505_RUPGtL7wO9kNIf9UhqdYv8ua6gYCsY49.jpg",
      itemPrice: 30,
    },
    {
      id: 2,
      itemName: "PAPAD FIRED",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://flybuy.in/wp-content/uploads/2020/06/papapd-fry.png",
      itemPrice: 40,
    },
    {
      id: 3,
      itemName: "PAPAD MASALA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.whiskaffair.com/wp-content/uploads/2020/09/Masala-Papad-2-3.jpg",
      itemPrice: 50,
    },
    {
      id: 4,
      itemName: "MIX RAITA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.spiceupthecurry.com/wp-content/uploads/2022/03/vegetable-raita-1.jpg",
      itemPrice: 70,
    },
    {
      id: 5,
      itemName: "BOONDI RAITA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://traditionallymodernfood.com/wp-content/uploads/2021/05/boondi-raita-boondi-ka-raita-scaled.jpeg",
      itemPrice: 70,
    },
    {
      id: 6,
      itemName: "GREEN SALAD",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.kitchensanctuary.com/wp-content/uploads/2021/06/Simple-Green-Salad-with-Vinaigrette-Square-FS-3241.jpg",
      itemPrice: 80,
    },
    {
      id: 7,
      itemName: "PINAPPLE RAITA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.cdnparenting.com/articles/2020/02/26141033/590613056.webp",
      itemPrice: 100,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>SALADS-PAPAD-RAITA</u></p>
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

export default SaladPapadRaita;
