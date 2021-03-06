stocks_old = [
  ["Banana","medium",6.440662244,0.1763699536,105,1.29,0.39,14.43,0.132,1,0,0,0,0,0.1768995697,1.221618974,1,"Fruits & Veggies","https://image.flaticon.com/icons/svg/415/415761.svg"  ],
  ["Mixed vegetables","oz",2.41150377,0.125,18,0.81,0.04,0,0.009,10,0,0,0,0,3,0.0004987075014,4,"Fruits & Veggies","https://image.flaticon.com/icons/svg/188/188364.svg"  ],
  ["Potatoes","oz",1.872285536,0.03575,16,0.73,0.03,0.2,0.007,3,0,0,0,0,0.06927480776,0.01708057695,5.3,"Fruits & Veggies","https://image.flaticon.com/icons/svg/135/135676.svg"  ],
  ["Black Beans","oz",30.3684714,0.141625,37,2.31,0.1,0.09,0.025,1,0,0,0,0,1.555714169,0.007668804863,7.1,"Legumes","https://image.flaticon.com/icons/svg/135/135716.svg"  ],
  ["Lentils","oz",30.3684714,0.07425,33,2.55,0.11,0.51,0.015,1,0,0,0,0,2.287814892,0.04322383072,7.1,"Legumes","https://image.flaticon.com/icons/svg/135/135716.svg"  ],
  ["Pinto Beans","oz",30.3684714,0.141625,40,2.55,0.18,0.09,0.038,0,0,0,0,0,0.9075003086,0.007618934113,7.1,"Legumes","https://image.flaticon.com/icons/svg/135/135716.svg"  ],
  ["Beef (80/20) raw","oz",115.4451262,3.293742347,72,4.85,5.65,0,2.142,19,20,0.0001275510204,0.375,0.75,22.15988372,0.3768292943,4,"Meat","https://image.flaticon.com/icons/svg/235/235371.svg"  ],
  ["Beef (90/10) raw","oz",115.4451262,3.293742347,50,5.65,2.83,0,1.109,19,18,0.0001275510204,0.375,0.75,22.15988372,0.3768292943,4,"Meat","https://image.flaticon.com/icons/svg/235/235371.svg"  ],
  ["Chicken breast","oz",32.39053977,0.3923520408,34,6.38,0.74,0,0.16,13,21,0.01631172356,0.10625,0.2125,3.149953226,0.3765300698,4,"Meat","https://image.flaticon.com/icons/svg/235/235024.svg"  ],
  ["Chicken thighs/legs","oz",32.39053977,0.3923520408,125,2.72,12.54,0,3.431,14,30,0.01631172356,0.10625,0.2125,3.149953226,0.3765799405,4,"Meat","https://image.flaticon.com/icons/svg/235/235024.svg"  ],
  ["Lamb","oz",78.125,4.010117347,80,4.69,6.64,0,2.889,17,21,0.03333333333,0.3125,0.625,2.274815967,0.3767295528,4,"Meat","https://image.flaticon.com/icons/svg/306/306143.svg"  ],
  ["Pulled Pork raw","oz",44.84498316,0.7763814526,53,4.94,3.5,0,1.232,17,18,0.0005208333333,0.21875,0.4375,1.592371177,0.3767295528,4,"Meat","https://image.flaticon.com/icons/png/512/235/235373.png"  ],
  ["Salmon (farmed)","oz",0.498125,0.56925,59,5.79,3.8,0,0.864,17,16,0.004464285714,0.078125,0.15625,0.5593288054,0.3767295528,4,"Meat","https://image.flaticon.com/icons/png/512/235/235432.png"  ],
  ["Tuna (canned in oil)","oz",0.498125,0.1197485281,56,8.26,2.33,0,0.435,118,5,0.000270197828,1.0625,2.125,0.5593288054,0.3817664985,4,"Meat","https://image.flaticon.com/icons/png/512/235/235432.png"  ],
  ["Butter (salted)","oz",41.58720633,0.5919085938,203,0.24,22.95,0.02,14.537,182,61,0.0000075,2.091796875,4.18359375,25.80190106,0.121322241,1,"Milk/Animal Products","https://image.flaticon.com/icons/svg/266/266638.svg"  ],
  ["Cheese (hard)","slice (oz)",37.44571072,1.35234933,105,6.59,8.41,0.14,5.32,159,27,0.000003571428571,0.99609375,1.9921875,12.28661955,0.1303337926,1,"Milk/Animal Products","https://image.flaticon.com/icons/svg/135/135651.svg"  ],
  ["Eggs (large)","each",43.13341461,0.5215603261,78,6.29,5.3,0.2,1.633,62,186,0.001666666667,0.265625,0.53125,3.713549,0.1305756192,1,"Milk/Animal Products","https://image.flaticon.com/icons/png/512/256/256964.png"  ],
  ["Greek yogurt, vanilla (nonfat)","fl oz",15,0.08285194565,22,2.45,0.05,1.01,0.038,10,1,8.928571429e-7,0.3984375,0.796875,3.071654888,0.1965527472,6,"Milk/Animal Products","https://image.flaticon.com/icons/svg/184/184807.svg"  ],
  ["Ice Cream","cup",32.59312,0.6191784396,274.71344,4.6095984,14.4806576,27.9835216,8.94913952,107.09168,55.87392,0.000003990994286,1.11311325,2.2262265,13.73003196,2.889031735,1,"Milk/Animal Products","https://image.flaticon.com/icons/svg/135/135581.svg"  ],
  ["Mayonnaise","oz",14.41309121,0.1237135815,193,0.27,21.22,0.16,3.318,180,12,0.0004166666667,0.06640625,0.1328125,0.92838725,0.1330741748,0.5,"Milk/Animal Products","https://image.flaticon.com/icons/svg/170/170331.svg"  ],
  ["Milk (2%)","fl oz",7.638924987,0.06133157758,15,1.06,0.58,1.54,0.363,16,2,3.571428571e-7,0.099609375,0.19921875,1.228661955,0.2417190282,8,"Milk/Animal Products","https://image.flaticon.com/icons/svg/135/135635.svg"  ],
  ["Milk (skim)","fl oz",7.638924987,0.05948052127,10,1.03,0.02,1.54,0.017,13,1,3.571428571e-7,0.099609375,0.19921875,1.228661955,0.2415694159,8,"Milk/Animal Products","https://image.flaticon.com/icons/svg/135/135635.svg"  ],
  ["Milk (whole)","fl oz",7.638924987,0.146234933,19,0.96,0.99,1.54,0.569,13,3,3.571428571e-7,0.099609375,0.19921875,1.228661955,0.2415694159,8,"Milk/Animal Products","https://image.flaticon.com/icons/svg/135/135635.svg"  ],
  ["Pizza (cheese)","slice",42,0.976332736,285,12.19,10.37,3.83,4.778,640,18,0.00001071428571,2.98828125,5.9765625,36.85985865,0.466697922,4,"Milk/Animal Products","https://image.flaticon.com/icons/svg/432/432339.svg"  ],
  ["Yogurt","oz",5.833333333,0.09395993304,17,0.98,0.92,1.32,0.595,13,4,3.571428571e-7,0.099609375,0.19921875,1.228661955,0.2229453548,6,"Milk/Animal Products","https://image.flaticon.com/icons/svg/184/184807.svg"  ],
  ["Bread","slice",9.735884788,0.1530147137,79,3.09,1.31,1.66,0.202,137,0,0,0,0,0.5625,0.1473592997,2,"Nuts & Grains","https://image.flaticon.com/icons/svg/135/135597.svg"  ],
  ["Corn (grain)","oz",6.74022793,0.0104375,103,2.67,1.34,0.18,0.189,10,0,0,0,0,0.4549631935,0.01573657573,1,"Nuts & Grains","https://image.flaticon.com/icons/svg/135/135697.svg"  ],
  ["Mixed Nuts","oz",18.72285536,0.18425,172,5.53,15.17,1.42,2.271,1,1,0,0,0,1.019662873,0.1202597201,1,"Nuts & Grains","https://image.flaticon.com/icons/svg/204/204697.svg"  ],
  ["Rice (white)","oz",25.46308329,0.34375,102,1.87,0.16,0,0.045,0,0,0,0,0,0.3995205753,0,2,"Nuts & Grains","https://image.flaticon.com/icons/svg/184/184251.svg"  ],
  ["Wheat (flour)","cup",40.44136758,0.1235081329,408,13.56,1.88,0.36,0.276,4,0,0,0,0,1.598082301,0.03067521945,0.25,"Nuts & Grains","https://image.flaticon.com/icons/svg/135/135663.svg"  ],
  ["Soy Burger","oz",21.8,0.048125,50,4.44,1.78,0.3,0.408,161,1,0,0,0,2.314125,0.03342563782,4,"Soy Products","https://image.flaticon.com/icons/svg/123/123278.svg"  ],
  ["Soymilk (original)","fl oz",2.319532348,0.02445449777,17,1,0.54,1.21,0.063,16,0,0,0,0,1.168382863,0.1032302684,8,"Soy Products","https://image.flaticon.com/icons/svg/135/135635.svg"  ],
  ["Tempeh","oz",12.383064,0.0230998152,54,5.74,3.06,0,0.719,3,0,0,0,0,1.110771114,0.0001496122504,4,"Soy Products","https://image.flaticon.com/icons/svg/454/454595.svg"  ],
  ["Tofu","oz",25.25,0.09625,23,2.82,1.49,0.2,0.26,1,0,0,0,0,4.62825,0.01698083545,4,"Soy Products","https://image.flaticon.com/icons/svg/454/454595.svg"  ],
  ["Vegan Nuggets (soy)","oz",21.8,0.048125,52,4.88,1.63,0.65,0.325,172,0,0,0,0,2.314125,0.06360340429,4,"Soy Products","https://image.flaticon.com/icons/png/512/315/315607.png"  ],
  ["Cacao","oz",179.739,0.625,136,1.19,8.51,15.45,5.032,3,0,0,0,0,3.390577585,1.418619303,1.45,"Sweets","https://image.flaticon.com/icons/svg/123/123257.svg"  ],
  ["Chocolate","oz",127.316,0.1863325866,151,2.16,8.39,14.57,5.238,22,7,7.142857143e-8,0.019921875,0.03984375,1.601963425,1.345070603,1.45,"Sweets","https://image.flaticon.com/icons/svg/123/123257.svg"  ],
  ["Corn Syrup","fl oz",11.15931776,0.01728062914,109,0,0,29.31,0,1,0,0,0,0,0.4854914297,2.481282747,1,"Sweets","https://image.flaticon.com/icons/svg/135/135697.svg"  ],
  ["Soda","fl oz",10.64647779,0.02494335117,13,0,0.08,3.05,0,1,0,0,0,0,0.1939638153,0.2582470824,12,"Sweets","https://image.flaticon.com/icons/svg/267/267936.svg"  ],
  ["Sugar","oz",11.23371322,0.01503093504,110,0,0,28.3,0,0,0,0,0,0,0.4340729937,2.395731504,1,"Sweets","https://image.flaticon.com/icons/svg/66/66645.svg"  ],
  ["French Fries","oz",2.9337142,0.0417335921,56,0.82,1.91,0.14,0.359,113,0,0,0,0,0.4200133922,0.01748707005,4,"Vegetable Products","https://image.flaticon.com/icons/svg/305/305429.svg"  ],
  ["Margarine","oz",9.915624199,0.06125,102,0.28,11.32,0,2.048,222,0,0,0,0,5.300817694,0.01107130653,1,"Vegetable Products","https://image.flaticon.com/icons/svg/266/266638.svg"  ],
  ["Nutritional Yeast","g",0.08506329224,0.00706361088,3.9859577,0.5989518739,0,0,0,0,0,0,0,0,0,0,5,"Vegetable Products","https://image.flaticon.com/icons/svg/297/297098.svg"  ],
  ["Olive Oil","oz",21.77842536,0.2306145384,250,0,28.3,0,3.908,1,0,0,0,0,1.512500057,0.00004987075014,0.5,"Vegetable Products","https://image.flaticon.com/icons/svg/135/135692.svg"  ],
  ["Peanut Butter","oz",36,0.2145,167,6.81,14.13,2.97,2.153,138,0,0,0,0,3.675378676,0.2583069893,1,"Vegetable Products","https://image.flaticon.com/icons/png/512/452/452663.png"  ],
  ["Tomato Sauce","oz",3.13704,0.09375,11,0.47,0.06,1.37,0.008,57,0,0,0,0,0.4188459746,0.1188197409,8,"Vegetable Products","https://image.flaticon.com/icons/svg/172/172739.svg"  ],
  ["Vegetable Oil","oz",17.70433203,0.125,205,0,23.8,0,19.937,0,0,0,0,0,5.300817694,0,0.5,"Vegetable Products","https://image.flaticon.com/icons/svg/123/123308.svg"  ]
]