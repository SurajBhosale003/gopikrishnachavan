import NavBar from '../components/Navbar'
import Gallary from '../components/Gallary'

const items = [
    {
      uid: "1",
      name: "Mukhote",
      imgUrl: "products/Mukhote/Mukhote_001.jpg",
      category: "Mukhote",
      type: "Copper",
    },
    {
      uid: "2",
      name: "Mukhote",
      imgUrl: "products/Mukhote/Mukhote_002.jpg",
      category: "Mukhote",
      type: "Silver",
    },
    {
      uid: "3",
      name: "Mukhote",
      imgUrl: "products/Mukhote/Mukhote_003.jpg",
      category: "Mukhote",
      type: "Silver",
    },
    {
      uid: "4",
      name: "Mukhote",
      imgUrl: "products/Mukhote/Mukhote_004.jpg",
      category: "Mukhote",
      type: "Silver",
    },
    {
      uid: "5",
      name: "Mukhote",
      imgUrl: "products/Mukhote/Mukhote_005.jpg",
      category: "Mukhote",
      type: "Gold",
    },
    {
      "uid": "6",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_006.jpg",
      "category": "Mukhote",
      "type": "Gold"
  },
  {
      "uid": "7",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_007.jpg",
      "category": "Mukhote",
      "type": "Silver"
  },
  {
      "uid": "8",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_008.jpg",
      "category": "Mukhote",
      "type": "Silver"
  },
  {
      "uid": "9",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_009.jpg",
      "category": "Mukhote",
      "type": "Silver"
  },
  {
      "uid": "10",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_010.jpg",
      "category": "Mukhote",
      "type": "Silver"
  },
  {
      "uid": "11",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_011.jpg",
      "category": "Mukhote",
      "type": "Silver"
  },
  {
      "uid": "12",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_012.jpg",
      "category": "Mukhote",
      "type": "Silver"
  },
  {
      "uid": "13",
      "name": "Mukhote",
      "imgUrl": "products/Mukhote/Mukhote_013.jpg",
      "category": "Mukhote",
      "type": "Gold"
  },
  {
    "uid": "14",
    "name": "mukut",
    "imgUrl": "products/mukut/Mukut_001.jpg",
    "category": "mukut",
    "type": "Gold"
},{
  "uid": "15",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_002.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "16",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_003.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "17",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_004.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "18",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_005.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "19",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_006.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "20",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_007.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "21",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_008.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "22",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_009.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "23",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_010.jpg",
  "category": "mukut",
  "type": "Gold"
},
{
  "uid": "24",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_011.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "25",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_012.jpg",
  "category": "mukut",
  "type": "Silver"
},
{
  "uid": "26",
  "name": "mukut",
  "imgUrl": "products/mukut/Mukut_013.jpg",
  "category": "mukut",
  "type": "Gold"
},
{
  "uid": "27",
  "name": "murti",
  "imgUrl": "products/murti/murti_001.jpg",
  "category": "murti",
  "type": "Gold"
},
{
  "uid": "28",
  "name": "murti",
  "imgUrl": "products/murti/murti_002.jpg",
  "category": "murti",
  "type": "Gold"
},
{
  "uid": "29",
  "name": "murti",
  "imgUrl": "products/murti/murti_003.jpg",
  "category": "murti",
  "type": "Gold"
},
{
  "uid": "30",
  "name": "murti",
  "imgUrl": "products/murti/murti_004.jpg",
  "category": "murti",
  "type": "Gold"
},
{
  "uid": "31",
  "name": "murti",
  "imgUrl": "products/murti/murti_005.jpg",
  "category": "murti",
  "type": "Gold"
},
{
  "uid": "32",
  "name": "murti",
  "imgUrl": "products/murti/murti_006.jpg",
  "category": "murti",
  "type": "Silver"
},
{
  "uid": "33",
  "name": "murti",
  "imgUrl": "products/murti/murti_007.jpg",
  "category": "murti",
  "type": "Silver"
},
{
  "uid": "34",
  "name": "murti",
  "imgUrl": "products/murti/murti_008.jpg",
  "category": "murti",
  "type": "Silver"
},
{
  "uid": "35",
  "name": "murti",
  "imgUrl": "products/murti/murti_009.jpg",
  "category": "murti",
  "type": "Silver"
},
{
  "uid": "36",
  "name": "murti",
  "imgUrl": "products/murti/murti_010.jpg",
  "category": "murti",
  "type": "Silver"
},
{
  "uid": "37",
  "name": "murti",
  "imgUrl": "products/murti/murti_011.jpg",
  "category": "murti",
  "type": "Silver"
},
{
  "uid": "38",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_001.jpg",
  "category": "ornament",
  "type": "Silver"
},{
  "uid": "39",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_002.jpg",
  "category": "ornament",
  "type": "Gold"
},
{
  "uid": "40",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_003.jpg",
  "category": "ornament",
  "type": "Gold"
},
{
  "uid": "41",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_004.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "42",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_005.jpg",
  "category": "ornament",
  "type": "Gold"
},
{
  "uid": "43",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_006.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "44",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_007.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "45",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_008.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "46",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_009.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "47",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_010.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "48",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_011.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "49",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_012.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "50",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_013.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "51",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_014.jpg",
  "category": "ornament",
  "type": "Gold"
},
{
  "uid": "52",
  "name": "ornament",
  "imgUrl": "products/ornament/ornament_015.jpg",
  "category": "ornament",
  "type": "Silver"
},
{
  "uid": "53",
  "name": "Pooja Sahitya",
  "imgUrl": "products/Pooja_Sahitya/Pooja_Sahitya_001.jpg",
  "category": "PoojaSahitya",
  "type": "Silver"
},
{
  "uid": "54",
  "name": "Pooja Sahitya",
  "imgUrl": "products/Pooja_Sahitya/Pooja_Sahitya_002.jpg",
  "category": "PoojaSahitya",
  "type": "Silver"
},
{
  "uid": "55",
  "name": "Pooja Sahitya",
  "imgUrl": "products/Pooja_Sahitya/Pooja_Sahitya_003.jpg",
  "category": "PoojaSahitya",
  "type": "Silver"
},
{
  "uid": "56",
  "name": "Pooja Sahitya",
  "imgUrl": "products/Pooja_Sahitya/Pooja_Sahitya_004.jpg",
  "category": "PoojaSahitya",
  "type": "Silver"
},
{
  "uid": "57",
  "name": "Pooja Sahitya",
  "imgUrl": "products/Pooja_Sahitya/Pooja_Sahitya_005.jpg",
  "category": "PoojaSahitya",
  "type": "Silver"
},
{
  "uid": "58",
  "name": "Prabhavali",
  "imgUrl": "products/Prabhavali/Prabhavali_001.jpg",
  "category": "Prabhavali",
  "type": "Silver"
},
{
    "uid": "59",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_002.jpg",
    "category": "Prabhavali",
    "type": "Silver"
},
{
    "uid": "60",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_003.jpg",
    "category": "Prabhavali",
    "type": "Silver"
},
{
    "uid": "61",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_004.jpg",
    "category": "Prabhavali",
    "type": "Silver"
},
{
    "uid": "62",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_005.jpg",
    "category": "Prabhavali",
    "type": "Silver"
},
{
    "uid": "63",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_006.jpg",
    "category": "Prabhavali",
    "type": "Silver"
},
{
    "uid": "64",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_007.jpg",
    "category": "Prabhavali",
    "type": "Silver"
},
{
    "uid": "65",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_008.jpg",
    "category": "Prabhavali",
    "type": "Silver"
},
{
    "uid": "66",
    "name": "Prabhavali",
    "imgUrl": "products/Prabhavali/Prabhavali_009.jpg",
    "category": "Prabhavali",
    "type": "Silver"
}
  ];

function Gold() {
    return (
      <>
      <div>
      <NavBar/>
         <Gallary items={items} />
      </div>
      </>
    )
  }
  
  export default Gold