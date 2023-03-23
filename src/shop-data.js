const SHOP_DATA = [
  {
    title: 'Graphics cards',
    items: [
      {
        id: 1,
        name: 'Nvidia rtx 4070 ti',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-GX-20X-GW/p01169-pic-9386389758e3bf99.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442',
        price: 799,
      },
      {
        id: 2,
        name: 'Radeon Rx 7900',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-GX-3A3-SP/21322-01-rx7900xtx-mba-24ggddr6-full-box-card.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442',
        price: 1200,
      },
      {
        id: 3,
        name: 'Nvidia rtx 3070',
        imageUrl: 'https://img.overclockers.co.uk/media/image/GX46KAS_289136.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 499,
      },
      {
        id: 4,
        name: 'Radeon Rx 650xt',
        imageUrl: 'https://img.overclockers.co.uk/media/image/RX6500_PULSE_Lite_Box_Card.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 199,
      },
      {
        id: 5,
        name: 'Nvidia Rtx 3060ti',
        imageUrl: 'https://img.overclockers.co.uk/media/image/asus161bc77aaeef58.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 449,
      },
      {
        id: 6,
        name: 'Radeon rx 7900xtx',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-GX-3A4-SP/11322-01-rx7900xtx-nitro-24ggddr6-full-box-card.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 1200,
      },
      {
        id: 7,
        name: 'Nvidia rtx 4090',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-GX-13E-ZT/zt.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 1748,
      },
      {
        id: 8,
        name: 'Nvidia Rtx 4070 ti rog',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-GX-48V-AS/rog1.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 999,
      },
      {
        id: 9,
        name: 'Nvidia Rtx 3080 xlr',
        imageUrl: 'https://img.overclockers.co.uk/media/image/GX06HPN_262361.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 749,
      },
    ],
  },
  {
    title: 'Keyboards',
    items: [
      {
        id: 10,
        name: 'Glorious Gmmk tkl 80',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB005GR_203839.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 61,
      },
      {
        id: 11,
        name: 'Ducky One2 rgb',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB259DK_22926360ca23554fc49.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 102,
      },
      {
        id: 12,
        name: 'Asus rog Falchion',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB04FAS_270352.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 124,
      },
      {
        id: 13,
        name: 'Corsair Gaming k70',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB0A5CS_187204.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 148,
      },
      {
        id: 14,
        name: 'Das keyboard pro 6',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-KB-00F-DS/daspro6uklayout001.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 168,
      },
      {
        id: 15,
        name: 'Das keyboard 4',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB004DS_105623.png?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 114,
      },
      {
        id: 16,
        name: 'Ducky one 2 Horizon',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB236DK_182179.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 94,
      },
      {
        id: 17,
        name: 'Corsair gaming k63',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB09GCS_161286.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 109,
      },
    ],
  },
  {
    title: 'Processors',
    items: [
      {
        id: 18,
        name: 'AMD Ryzen 9 5950X',
        imageUrl: 'https://img.overclockers.co.uk/media/image/CP3C9AM_265460.png?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 319,
      },
      {
        id: 19,
        name: 'AMD Ryzen 7 5800X 3D',
        imageUrl: 'https://img.overclockers.co.uk/products/5800X3D.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    title: 'Keyboard2',
    items: [
      {
        id: 23,
        name: 'Glorious Gmmk tkl 80',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB005GR_203839.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 61,
      },
      {
        id: 24,
        name: 'Ducky One2 rgb',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB259DK_22926360ca23554fc49.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 102,
      },
      {
        id: 25,
        name: 'Asus rog Falchion',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB04FAS_270352.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 124,
      },
      {
        id: 26,
        name: 'Corsair Gaming k70',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB0A5CS_187204.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 148,
      },
      {
        id: 27,
        name: 'Das keyboard pro 6',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-KB-00F-DS/daspro6uklayout001.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 168,
      },
      {
        id: 28,
        name: 'Das keyboard 4',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB004DS_105623.png?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 114,
      },
      {
        id: 29,
        name: 'Ducky one 2 Horizon',
        imageUrl: 'https://img.overclockers.co.uk/media/image/KB236DK_182179.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=210&h=210',
        price: 94,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
