import Card from "react-bootstrap/Card";
import classes from "./SabjiMandi.module.css";
function SabjiMandi() {
  let menuItems = [
    {
      id: 1,
      itemName: "ALOO MATAR",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookwithmanali.com/wp-content/uploads/2016/08/Easy-Aloo-Matar.jpg",
      itemPrice: 260,
    },
    {
      id: 2,
      itemName: "ALOO GOBI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe.jpg",
      itemPrice: 260,
    },
    {
      id: 3,
      itemName: "ALOO PALAK",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.spiceupthecurry.com/wp-content/uploads/2022/05/aloo-palak-2.jpg",
      itemPrice: 260,
    },
    {
      id: 4,
      itemName: "ALOO METHI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Aloo-Methi.jpg",
      itemPrice: 260,
    },
    {
      id: 5,
      itemName: "ALOO JEERA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/04/jeera-aloo-recipe.jpg",
      itemPrice: 280,
    },
    {
        id: 6,
        itemName: "ALOO MASALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://feastwithsafiya.com/wp-content/uploads/2021/07/Masala-potato.jpg",
        itemPrice: 300,
      },
      {
        id: 7,
        itemName: "ALOO KASHMIRI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://somethingscookingwithalpa.com/wp-content/uploads/2017/11/KashmiriDumAloo_Wb.jpg",
        itemPrice: 300,
      },
      {
        id: 8,
        itemName: "ALOO DUM PUNJABI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.cookwithmanali.com/wp-content/uploads/2020/08/Punjabi-Dum-Aloo.jpg",
        itemPrice: 280,
      },
      {
        id: 9,
        itemName: "GOBI MUTTER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.livingsmartandhealthy.com/wp-content/uploads/2022/10/gobi-matar-masala5.jpg",
        itemPrice: 280,
      },
      {
        id: 10,
        itemName: "PALAK MUTTER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://southindianfoods.in/recipe_picture_enlarge/palak-matar.jpg",
        itemPrice: 280,
      },
      {
        id: 11,
        itemName: "CHOLLE MASALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.cookwithmanali.com/wp-content/uploads/2023/04/Punjabi-Chole-Masala.jpg",
        itemPrice: 280,
      },
      {
        id: 12,
        itemName: "GOBI MASALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://silkroadrecipes.com/wp-content/uploads/2021/12/Gobi-Masala-Cauliflower-Curry-square.jpg",
        itemPrice: 280,
      },
      {
        id: 13,
        itemName: "GREEN PEAS MASALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.foodie-trail.com/wp-content/uploads/2023/02/PHOTO-2023-02-10-08-35-18.jpg",
        itemPrice: 300,
      },
      {
        id: 14,
        itemName: "RANI PALAK",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JNpCPdeHWSlztNXT7gPhGiocg5_AGU8eAg&usqp=CAU",
        itemPrice: 300,
      },
      {
        id: 15,
        itemName: "MIX VEGETABLE",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://cookingfromheart.com/wp-content/uploads/2019/04/Restaurant-Style-Mixed-Veg-Gravy-1.jpg",
        itemPrice: 300,
      },
      {
        id: 16,
        itemName: "VEG KOLHAPURI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://myfoodstory.com/wp-content/uploads/2022/04/Veg-Kolhapuri-3.jpg",
        itemPrice: 300,
      },
      {
        id: 17,
        itemName: "VEG JAIPURI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.foodie-trail.com/wp-content/uploads/2022/12/PHOTO-2022-12-09-20-04-39_1.jpg",
        itemPrice: 300,
      },
      {
        id: 18,
        itemName: "VEG KOFTA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg",
        itemPrice: 300,
      },
      {
        id: 19,
        itemName: "VEG BULLET",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.masalakorb.com/wp-content/uploads/2017/07/Vegetable-Chop-Bengali-Style-How-to-make-Veg-Bullets-V3.jpg",
        itemPrice: 300,
      },
      {
        id: 20,
        itemName: "VEG MAKKHANWALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://hebbarskitchen.com/wp-content/uploads/2017/03/veg-makhanwala-recipe-vegetable-makhanwala-veg-makhani-recipe-1-1920x2558.jpeg.webp",
        itemPrice: 300,
      },
      {
        id: 21,
        itemName: "VEG JAFREZI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://mytastycurry.com/wp-content/uploads/2021/03/Vegetable-Jhalfrezi-Recipe.jpg",
        itemPrice: 320,
      },
      {
        id: 22,
        itemName: "VEG GULMOHAR",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://images.herzindagi.info/image/2021/Mar/edible-flower-recipes.jpg",
        itemPrice: 300,
      },
      {
        id: 23,
        itemName: "VEG SAOJI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.veganricha.com/wp-content/uploads/2011/06/june9-2B039.2.jpg",
        itemPrice: 320,
      },
      {
        id: 24,
        itemName: "VEG HILLTOP",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://b.zmtcdn.com/data/dish_photos/da2/a22b05b73179afe0cde3cd11ef053da2.jpg",
        itemPrice: 350,
      },
      {
        id: 25,
        itemName: "VEG MUMTAZ",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://epicureanalley.com/wp-content/uploads/2019/12/Veg-Mumtaz.jpg",
        itemPrice: 300,
      },
      {
        id: 26,
        itemName: "VEG KEEMA KASTURI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2013/04/veg-kheema-recipe.jpg",
        itemPrice: 300,
      },
      {
        id: 27,
        itemName: "VEG DO PYAZA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Paneer_Do_Pyaza.jpg",
        itemPrice: 350,
      },
      {
        id: 28,
        itemName: "VEG BEGAM BAHAR",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://skydecklounge.in/wp-content/uploads/2022/01/Paneer-Begum-Bahar.jpg",
        itemPrice: 300,
      },
      {
        id: 29,
        itemName: "HANDI VEG",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/pooja/Veg_Handi.jpg",
        itemPrice: 300,
      },
      {
        id: 30,
        itemName: "KADAI VEG",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://i.pinimg.com/1200x/dc/58/f1/dc58f12bb2bde6037f5dc88598917671.jpg",
        itemPrice: 350,
      },
      {
        id: 31,
        itemName: "KAJU CURRY",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://static.toiimg.com/photo/74221955.cms",
        itemPrice: 320,
      },
      {
        id: 32,
        itemName: "METHI MUTTER MALAI",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Best-Methi-Matar-Malai.jpg",
        itemPrice: 300,
      },
      {
        id: 33,
        itemName: "STUFFED CAPSICUM",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/stuffed-capsicum-stuffed-bell-pepper-recipe.jpg",
        itemPrice: 300,
      },
      {
        id: 34,
        itemName: "STUFFED TOMATO",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.allrecipes.com/thmb/2bpzxTSElVw_0I8wWoRxCYXMOGk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7617238-bce7dabc601243fcb76ed638d3dea515.jpg",
        itemPrice: 300,
      },
      {
        id: 35,
        itemName: "KOFTA CURRY",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://veenaazmanov.com/wp-content/uploads/2021/08/Meatball-Kofta-Curry-Recipe30.jpg",
        itemPrice: 320,
      },
      {
        id: 36,
        itemName: "MUSHROOM MASALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://ministryofcurry.com/wp-content/uploads/2020/02/mushroom-masala-1-2.jpg",
        itemPrice: 320,
      },
      {
        id: 37,
        itemName: "GARDEN VEGETABLE",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.cookingandme.com/wp-content/uploads/2015/12/mughlai-vegetable-korma-how-to-make-mughlai-vegetable-korma-ed.jpg",
        itemPrice: 350,
      },
      {
        id: 38,
        itemName: "NARGISI KOFTA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.thespruceeats.com/thmb/Q-TzG4FsMMbkPIqxy2lCoQcZU28=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/NargisiKoftas-56a511073df78cf772862ccb.jpg",
        itemPrice: 320,
      },
      {
        id: 39,
        itemName: "CHEESE BUTTER MASALA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg",
        itemPrice: 370,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>SABJI-MANDI</u></p>
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

export default SabjiMandi;
