import Card from "react-bootstrap/Card";
import classes from "./VarietyIceCreams.module.css";
function VarietyIceCreams() {
  let menuItems = [
    {
      id: 1,
      itemName: "GOLDEN CHERRY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://b.zmtcdn.com/data/pictures/1/19117051/083429d890b896abbb9e20eeadfe53fc.jpg",
      itemPrice: 220,
    },
    {
      id: 2,
      itemName: "RAJA-RANI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i0.wp.com/nasfoodcorner.com/wp-content/uploads/2023/10/Vanilla-Sundae-NFC-Web-Img-1.jpg",
      itemPrice: 220,
    },
    {
      id: 3,
      itemName: "SILVER QUEEN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.dotpe.in/longtail/store-items/2543105/8vzV0Aw0.jpeg",
      itemPrice: 220,
    },
    {
      id: 4,
      itemName: "HONEY MOON SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 220,
    },
    {
      id: 5,
      itemName: "PINEAPPLE MELBA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 220,
    },
    {
      id: 6,
      itemName: "BANANA SPLIT",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 7,
      itemName: "GOLDEN KING",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 8,
      itemName: "GADBAD SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 9,
      itemName: "MY FAVOURITE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 10,
      itemName: "HOT CHOCOLATE FUDGE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 11,
      itemName: "LOVER'S SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 12,
      itemName: "TRAFFICE JAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 13,
      itemName: "MADONNA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 14,
      itemName: "LITCHI WITH ICE CREAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 15,
      itemName: "DRUNKEN MONKEY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 15,
      itemName: "MY DARLING",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 16,
      itemName: "SGS SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 15,
      itemName: "BUTTER SCOTCH FUDGE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 16,
      itemName: "ANAMIKA SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 17,
      itemName: "NARGIS SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 250,
    },
    {
      id: 18,
      itemName: "WORLD-CUP SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 19,
      itemName: "KAJU PISTA SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 20,
      itemName: "BIRTH-DAY SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 300,
    },
    {
      id: 21,
      itemName: "LOVER'S PARADISE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/5c/2b/15/5c2b157fe90a2c1c3d7c0e29b08068b1.jpg",
      itemPrice: 320,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}>
        <u>VARIETY ICE CREAMS</u>
      </p>
      {menuItems.map((menuItems) => (
        <Card className={classes.input}>
          <Card.Img
            className={classes.image}
            variant="top"
            src={menuItems.itemImageUrl}
          />
          <Card.Body>
            <Card.Title>
              {menuItems.itemName} - ₹ {menuItems.itemPrice}/-
            </Card.Title>
            {/* <Card.Text>{menuItems.itemDescription}</Card.Text> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default VarietyIceCreams;
