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
    title: 'Gaming Chairs',
    items: [
      {
        id: 10,
        name: 'noblechairs HERO Gaming',
        imageUrl: 'https://img.overclockers.co.uk/media/image/GC00ZNC_190424.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 349,
      },
      {
        id: 11,
        name: 'noblechairs HERO Real',
        imageUrl: 'https://img.overclockers.co.uk/media/image/GC00UNC_190384.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 349,
      },
      {
        id: 12,
        name: 'noblechairs ICON Gaming',
        imageUrl: 'https://img.overclockers.co.uk/media/image/GC00KNC_190317.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282',
        price: 349,
      },
      {
        id: 13,
        name: 'noblechairs HERO TX',
        imageUrl: 'https://img.overclockers.co.uk/products/GC-02U-NC/GC02UNC01.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282',
        price: 349,
      },
      {
        id: 14,
        name: 'noblechairs EPIC Gaming',
        imageUrl: 'https://img.overclockers.co.uk/media/image/GC029NC_233710.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282',
        price: 349,
      },
      {
        id: 15,
        name: 'noblechairs EPIC TX',
        imageUrl: 'https://img.overclockers.co.uk/products/GC-02T-NC/GC02TNC01.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282',
        price: 349,
      },
      {
        id: 16,
        name: 'noblechairs HERO Gaming2',
        imageUrl: 'https://img.overclockers.co.uk/products/GC-036-NC/GC036NC01.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282',
        price: 349,
      },
      {
        id: 17,
        name: 'noblechairs HERO Gaming R',
        imageUrl: 'https://img.overclockers.co.uk/media/image/GC00YNC_190400.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 349,
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
        name: 'Intel Core i7-12700K',
        imageUrl: 'https://img.overclockers.co.uk/media/image/inteli7K617965a18a076.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 359,
      },
      {
        id: 21,
        name: 'Intel Core i9-12900K',
        imageUrl: 'https://img.overclockers.co.uk/media/image/Intel12900K.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 499,
      },
      {
        id: 22,
        name: 'Intel Core i9-13900K',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-CP-6AZ-IN/intel-i9.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 589,
      },
    ],
  },
  {
    title: 'Keyboards',
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
    title: 'Monitors',
    items: [
      {
        id: 30,
        name: 'Iiyama 24" G-Master',
        imageUrl: 'https://img.overclockers.co.uk/media/image/Gigabyte-M34WQ-Gaming-Monitor-Images-00001.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 148,
      },
      {
        id: 31,
        name: 'Gigabyte 34" M34WQ',
        imageUrl: 'https://img.overclockers.co.uk/media/image/Gigabyte-M34WQ-Gaming-Monitor-Images-00001.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 498,
      },
      {
        id: 32,
        name: 'MSI 28" OPTIX',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-MO-01L-MS/16-optix-mag281urf.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 648,
      },
      {
        id: 33,
        name: 'BenQ MOBIUZ EX3210U',
        imageUrl: 'https://img.overclockers.co.uk/products/benqapril/ex3210u-front-high.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 798,
      },
      {
        id: 34,
        name: 'MSI 27" MPG ARTYMIS',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-MO-01M-MS/mo-01m-ms.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 548,
      },
      {
        id: 35,
        name: 'Samsung 32" Odyssey',
        imageUrl: 'https://img.overclockers.co.uk/products/OCUK-MO-24P-SA/samsungneog700001.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244',
        price: 1099,
      },
    ],
  },
];

export default SHOP_DATA;
