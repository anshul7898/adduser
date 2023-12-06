import Card from "react-bootstrap/Card";
import classes from "./PaneerkaKhajana.module.css";
function PaneerkaKhajana() {
  let menuItems = [
    {
      id: 1,
      itemName: "SGS CHEF SPL.",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://images1.livehindustan.com/uploadimage/library/2022/06/08/16_9/16_9_1/paneer_recipe__1654678851.jpg",
      itemPrice: 400,
    },
    {
      id: 2,
      itemName: "PALAK PANEER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/53093667.cms?imgsize=325892&width=800&height=800",
      itemPrice: 350,
    },
    {
      id: 3,
      itemName: "MUTTER PANEER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg",
      itemPrice: 350,
    },
    {
      id: 4,
      itemName: "CHHOLE PANEER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://akm-img-a-in.tosshub.com/aajtak/images/story/202204/cholia_paneer-sixteen_nine.jpg?size=948:533",
      itemPrice: 350,
    },
    {
      id: 5,
      itemName: "PANEER BUTTER MASALA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg",
      itemPrice: 360,
    },
    {
        id: 6,
        itemName: "MALAI KOFTA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://thetableofspice.com/wp-content/uploads/2022/09/Malai-Kofta.jpg",
        itemPrice: 360,
      },
      {
        id: 7,
        itemName: "PANEER KOFTA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Cauliflower_Paneer_Kofta_Curry.jpg",
        itemPrice: 350,
      },
      {
        id: 8,
        itemName: "PANEER MAKKHANWALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/paneer-makhani.jpg",
        itemPrice: 350,
      },
      {
        id: 9,
        itemName: "PANEER TIKKA MASALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://kannanskitchen.com/wp-content/uploads/2023/01/DSC_4752.jpg",
        itemPrice: 360,
      },
      {
        id: 10,
        itemName: "PANEER TAKA-TAK",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://i.pinimg.com/564x/bd/34/d3/bd34d3af0eaacb5c8bc5a55320ee469f.jpg",
        itemPrice: 350,
      },
      {
        id: 11,
        itemName: "SHAHI PANEER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-1.jpg",
        itemPrice: 350,
      },
      {
        id: 12,
        itemName: "PANEER JAIPURI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.aapkisaheli.com/picture_image/jaipuri-tasty-cheese58297-paneer1.jpg",
        itemPrice: 350,
      },
      {
        id: 13,
        itemName: "PANEER BHURJI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://shwetainthekitchen.com/wp-content/uploads/2022/05/Paneer-Bhurji.jpg",
        itemPrice: 360,
      },
      {
        id: 14,
        itemName: "PANEER PASANDA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.whiskaffair.com/wp-content/uploads/2016/09/Paneer-Pasanda-5.jpg",
        itemPrice: 370,
      },
      {
        id: 15,
        itemName: "PANEER MUSSALAM",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://myheartbeets.com/wp-content/uploads/2021/11/paneer-musallam-recipe.jpg",
        itemPrice: 370,
      },
      {
        id: 16,
        itemName: "KADHAI PANEER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg",
        itemPrice: 350,
      },
      {
        id: 17,
        itemName: "PANEER GINDER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://foodoncall.co.in/wp-content/uploads/2017/09/paneer-ginger.jpg",
        itemPrice: 360,
      },
      {
        id: 18,
        itemName: "KAJU PANEER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://arpitasfoodpod.com/wp-content/uploads/2021/12/DB4B5F39-BCFC-489B-A98B-ED6EF4019C26.jpeg",
        itemPrice: 370,
      },
      {
        id: 19,
        itemName: "PANEER CHATPATA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://c.ndtvimg.com/paneer_625x300_1528793244164.jpg",
        itemPrice: 360,
      },
      {
        id: 20,
        itemName: "LACHHA PANEER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://i.imgur.com/U6hAfyj.jpg",
        itemPrice: 350,
      },
      {
        id: 21,
        itemName: "PANEER DO PYAZA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/paneer-do-pyaza.jpg",
        itemPrice: 360,
      },
      {
        id: 22,
        itemName: "PANEER LABABDAR",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.spiceupthecurry.com/wp-content/uploads/2022/09/paneer-lababdar-1.jpg",
        itemPrice: 390,
      },
      {
        id: 23,
        itemName: "PANEER LAJEEZ",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.kagomeindia.com/wp-content/uploads/Paneer-Handi-Lazeez_large.jpg",
        itemPrice: 390,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>Paneer Ka Khajana</u></p>
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

export default PaneerkaKhajana;
