(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=270)})({270:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(271);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},271:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.NorthWest.1.08-19-2016 05:02:18
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"NorthWest",revision:1,standaloneInit:true,baseWidth:545,baseHeight:700,baseScaleFactor:10,entities:{"SG.NW.HO":{outlines:[[M,2381,2444,Q,2273,2467,2225,2489,2191,2504,2145,2508,2094,2512,2065,2523,2042,2531,1984,2554,1941,2573,1905,2581,1858,2592,1807,2595,1745,2596,1708,2597,1648,2596,1619,2596,1568,2596,1535,2608,1492,2622,1447,2623,1435,2623,1362,2620,L,1283,2619,Q,1250,2620,1234,2624,1232,2626,1149,2616,1057,2606,1048,2605,1015,2601,969,2567,939,2546,859,2546,800,2546,793,2547,767,2553,703,2561,L,703,2580,Q,710,2603,710,2649,710,2668,654,2824,593,2988,593,3e3,588,3046,588,3080,588,3182,613,3322,636,3450,665,3530,675,3536,685,3549,697,3567,721,3608,745,3641,795,3736,805,3753,833,3804,859,3850,866,3870,881,3907,924,3911,966,3915,970,3931,981,3972,1004,4051,1021,4114,1021,4170,1022,4174,1022,4178,1042,4306,1122,4401,1242,4543,1242,4592,1242,4605,1230,4631,1218,4655,1220,4675,L,1213,4763,Q,1213,4764,1213,4765,L,1213,4766,Q,1214,4781,1211,4805,1211,4828,1219,4837,1239,4862,1264,4900,1278,4923,1296,4965,1316,5014,1316,5036,L,1314,5073,Q,1314,5088,1321,5098,1330,5110,1334,5136,1336,5143,1336,5166,1339,5186,1355,5186,L,1363,5175,Q,1372,5163,1377,5163,1388,5162,1395,5158,1399,5157,1409,5157,1430,5157,1445,5184,1448,5189,1457,5199,1469,5211,1479,5225,1510,5264,1539,5317,L,1540,5319,Q,1548,5329,1608,5416,1643,5468,1680,5499,1696,5511,1744,5586,1801,5673,1801,5707,L,1801,5726,Q,1799,5734,1784,5734,1773,5734,1721,5711,1664,5686,1643,5667,1636,5661,1592,5609,1560,5571,1548,5571,1533,5571,1496,5579,1464,5585,1461,5587,L,1429,5587,Q,1423,5566,1419,5560,1415,5551,1399,5551,1374,5551,1320,5587,1266,5622,1240,5622,1198,5615,1176,5615,1134,5615,1064,5620,1046,5621,1010,5655,977,5689,975,5689,L,947,5685,Q,927,5685,912,5717,899,5742,899,5756,899,5782,934,5799,953,5810,1003,5836,1038,5861,1075,5881,1093,5895,1093,5926,L,1086,6123,Q,1086,6151,1089,6216,1088,6282,1069,6282,1058,6282,1047,6269,1036,6255,1021,6255,1010,6256,997,6260,974,6265,969,6275,963,6284,937,6286,914,6288,914,6297,914,6309,1018,6448,1026,6456,1048,6489,1070,6521,1075,6530,1083,6547,1092,6576,1102,6597,1127,6597,1141,6597,1151,6535,1159,6472,1160,6468,1162,6463,1180,6448,1201,6430,1205,6426,1218,6403,1225,6395,1236,6385,1255,6385,1277,6385,1279,6392,L,1290,6422,Q,1295,6429,1309,6440,1317,6446,1331,6457,1355,6477,1366,6490,1385,6515,1392,6554,1393,6560,1402,6584,1410,6603,1409,6612,1407,6647,1414,6664,1418,6676,1425,6729,1429,6766,1441,6766,1447,6766,1460,6762,1472,6758,1483,6758,L,1542,6758,Q,1643,6758,1708,6798,1750,6825,1871,6909,1877,6913,1925,6944,1953,6962,1980,6962,1990,6962,2033,6957,2075,6951,2088,6951,2103,6951,2142,6959,2175,6966,2200,6962,2220,6959,2239,6962,L,2239,6929,Q,2242,6904,2242,6885,2242,6857,2224,6840,2199,6818,2186,6782,2180,6765,2168,6754,2148,6735,2147,6734,2134,6718,2127,6710,2115,6695,2106,6687,2079,6665,2061,6655,2047,6646,2037,6634,2027,6620,2021,6611,1966,6541,1950,6525,L,1950,6519,1983,6520,Q,1999,6521,2010,6527,2033,6541,2062,6541,2080,6541,2103,6510,2114,6494,2126,6472,2132,6469,2148,6445,2155,6435,2170,6419,2182,6389,2214,6354,2222,6346,2230,6328,2241,6307,2249,6294,2254,6286,2266,6258,2279,6233,2287,6233,2294,6233,2377,6308,L,2421,6343,Q,2429,6350,2442,6362,2453,6371,2470,6371,2486,6371,2501,6360,2505,6356,2518,6352,2525,6350,2536,6347,2550,6340,2568,6328,2583,6319,2603,6319,2626,6319,2642,6326,2656,6331,2663,6331,2664,6331,2678,6330,2692,6330,2692,6339,2692,6346,2688,6350,2684,6353,2684,6361,2684,6363,2686,6369,2688,6374,2688,6381,2688,6387,2687,6397,2688,6405,2701,6405,2739,6401,2742,6405,2773,6405,2794,6403,L,2794,6424,Q,2786,6491,2786,6506,2786,6528,2800,6564,2804,6572,2805,6593,2808,6610,2822,6610,2840,6610,2849,6603,2850,6602,2863,6582,L,2908,6555,Q,2919,6552,2956,6525,2958,6523,2967,6520,2972,6517,2976,6511,2978,6509,2984,6500,2992,6491,2995,6490,3037,6460,3102,6424,3122,6412,3142,6387,3165,6359,3165,6340,L,3164,6300,Q,3177,6299,3212,6299,3214,6299,3215,6299,3263,6299,3279,6308,3298,6317,3342,6317,L,3412,6315,Q,3431,6326,3537,6365,3654,6408,3676,6408,3704,6408,3706,6378,3707,6334,3710,6329,3733,6293,3737,6273,3740,6262,3740,6217,3740,6146,3689,6107,3675,6096,3563,6041,3489,6002,3445,5980,3365,5940,3317,5921,3294,5911,3257,5889,3226,5870,3200,5862,3158,5850,3138,5839,3119,5828,3082,5798,3066,5785,3025,5761,2994,5743,2975,5720,2920,5653,2891,5633,2858,5620,2823,5581,2783,5533,2755,5505,2657,5407,2636,5377,2641,5374,2663,5361,2676,5352,2692,5347,2703,5342,2721,5338,2734,5331,2736,5314,2740,5285,2754,5255,2763,5237,2788,5195,2838,5112,3137,4639,3125,4640,3112,4616,3098,4590,3094,4586,L,3062,4540,Q,3046,4510,3036,4494,3017,4465,3005,4465,L,2999,4466,Q,2999,4477,2981,4483,2964,4489,2964,4499,2964,4505,2980,4520,2995,4534,2995,4549,2995,4560,2982,4569,2972,4577,2962,4578,2950,4578,2937,4589,2924,4600,2910,4600,2891,4600,2891,4576,2891,4564,2894,4563,2904,4562,2916,4546,2920,4541,2920,4525,L,2925,4502,Q,2925,4493,2916,4492,2906,4492,2903,4492,L,2861,4493,Q,2842,4492,2839,4495,2838,4497,2838,4512,2838,4536,2853,4536,2862,4536,2866,4530,2871,4523,2875,4523,2885,4523,2887,4530,2887,4531,2887,4541,2887,4552,2884,4557,2881,4564,2881,4570,2881,4584,2887,4613,2887,4633,2865,4633,2861,4633,2853,4630,2847,4627,2838,4627,L,2811,4627,Q,2801,4627,2801,4605,2800,4584,2788,4581,L,2769,4581,2767,4603,Q,2767,4627,2773,4661,2773,4674,2766,4703,2765,4723,2747,4723,2743,4723,2735,4704,2731,4693,2730,4686,L,2728,4686,2728,4664,Q,2721,4664,2699,4669,2700,4675,2693,4689,2686,4704,2688,4716,L,2677,4717,Q,2669,4717,2665,4710,2659,4701,2653,4698,2660,4684,2687,4652,2715,4618,2724,4602,2733,4588,2746,4549,2761,4510,2761,4498,2761,4492,2751,4488,2743,4483,2740,4483,2740,4477,2740,4473,2739,4469,2732,4469,2731,4469,2715,4482,2700,4497,2696,4505,2690,4513,2685,4532,2678,4552,2678,4565,2678,4574,2682,4579,2687,4584,2687,4586,2687,4588,2673,4595,2662,4595,2656,4587,2649,4579,2641,4579,2626,4579,2610,4593,2592,4608,2592,4621,2592,4641,2603,4658,2620,4684,2625,4700,L,2604,4700,Q,2593,4694,2584,4680,2579,4673,2561,4673,2550,4673,2547,4682,2546,4685,2546,4697,2546,4711,2553,4729,2558,4747,2558,4755,L,2549,4756,Q,2541,4756,2530,4733,2519,4710,2488,4710,2469,4710,2464,4714,2458,4718,2458,4733,2458,4742,2469,4761,2480,4780,2480,4787,2480,4795,2473,4802,2467,4808,2460,4808,2450,4808,2443,4788,2438,4769,2436,4765,2427,4762,2421,4762,2417,4762,2399,4787,2382,4812,2382,4814,2382,4828,2388,4851,2392,4866,2401,4894,2397,4892,2370,4858,2344,4827,2333,4827,2329,4827,2319,4856,2309,4884,2300,4884,2293,4869,2265,4869,2257,4869,2249,4862,2239,4853,2240,4841,L,2180,4841,Q,2148,4859,2130,4870,2097,4889,2097,4905,2097,4912,2102,4917,2106,4922,2106,4934,2106,4951,2100,4958,2093,4964,2079,4964,2051,4975,2048,4951,2045,4932,2033,4924,2029,4922,2004,4912,1989,4906,1983,4890,L,1994,4890,Q,2001,4890,2015,4896,2029,4902,2034,4902,2075,4882,2075,4872,2075,4859,2059,4842,2046,4828,2047,4819,L,2060,4819,Q,2072,4827,2088,4842,2095,4850,2110,4850,2113,4850,2158,4826,2203,4802,2228,4786,2245,4774,2260,4771,2266,4770,2295,4768,2298,4768,2323,4764,2348,4759,2348,4747,2348,4728,2328,4728,2301,4730,2290,4728,L,2289,4721,Q,2289,4705,2331,4705,2372,4705,2372,4684,2372,4676,2352,4656,2332,4636,2322,4636,L,2269,4634,Q,2253,4634,2218,4663,2177,4695,2174,4725,L,2153,4725,Q,2144,4721,2142,4720,2140,4719,2140,4716,2140,4711,2166,4687,2186,4668,2195,4662,2203,4653,2234,4640,2260,4625,2251,4607,2267,4607,2298,4609,2299,4593,2301,4585,2304,4569,2310,4557,2325,4562,2328,4588,2331,4614,2354,4621,2374,4627,2382,4645,2387,4661,2413,4661,2471,4661,2471,4621,2471,4612,2456,4603,2438,4596,2432,4591,2405,4568,2396,4555,L,2396,4538,Q,2403,4538,2417,4555,2434,4574,2437,4576,2457,4588,2485,4588,2512,4588,2562,4524,2610,4465,2610,4451,2610,4444,2560,4411,2546,4411,2543,4412,2538,4412,2519,4419,2488,4419,2482,4423,2472,4428,2456,4458,2441,4487,2439,4487,2435,4487,2425,4471,2415,4456,2415,4448,2415,4443,2426,4434,2437,4424,2437,4410,2437,4382,2415,4368,2397,4356,2370,4356,2340,4356,2338,4385,2337,4403,2338,4444,2339,4445,2333,4445,2327,4417,2319,4390,2305,4334,2275,4334,2249,4334,2242,4342,2236,4350,2238,4386,2239,4416,2222,4425,2207,4433,2207,4457,2207,4472,2221,4491,2229,4501,2244,4521,L,2244,4538,Q,2231,4543,2219,4518,2205,4490,2193,4490,2178,4490,2167,4509,2158,4523,2158,4534,2158,4551,2163,4554,2170,4559,2177,4581,L,2177,4602,Q,2163,4596,2152,4610,2149,4611,2137,4636,L,2124,4636,Q,2130,4619,2132,4613,2134,4605,2134,4589,2134,4566,2130,4560,2124,4554,2101,4554,2084,4554,2082,4554,2076,4555,2064,4563,2058,4566,2055,4579,2051,4595,2050,4597,2042,4607,2034,4639,2026,4671,2030,4677,L,2030,4692,2029,4693,2017,4693,Q,2006,4678,2010,4650,2015,4619,2015,4606,2015,4587,2008,4570,2001,4552,1990,4552,1983,4552,1977,4558,1967,4567,1950,4575,1946,4576,1934,4600,1923,4623,1923,4628,1923,4641,1931,4644,1940,4647,1940,4660,1940,4671,1920,4680,1901,4689,1901,4711,1901,4719,1912,4736,1923,4753,1923,4756,1923,4771,1905,4771,1894,4771,1891,4759,1887,4745,1881,4743,1875,4741,1864,4743,L,1850,4747,Q,1833,4747,1833,4734,1833,4717,1853,4701,1876,4683,1880,4673,L,1880,4614,Q,1870,4614,1849,4601,1828,4588,1810,4588,1811,4580,1817,4578,1818,4578,1829,4578,1841,4578,1856,4582,1872,4587,1880,4587,1895,4587,1905,4575,1914,4564,1914,4549,1914,4535,1909,4527,1903,4516,1902,4512,L,1925,4512,Q,1926,4513,1942,4534,1947,4540,1959,4540,1969,4540,2018,4516,2068,4493,2084,4493,2103,4493,2119,4483,2136,4472,2140,4454,2143,4429,2154,4412,2164,4396,2164,4381,2164,4337,2145,4323,2131,4312,2089,4312,2044,4312,2036,4323,2028,4334,2026,4394,L,2024,4395,Q,2015,4390,2015,4362,L,2019,4301,Q,2019,4291,2013,4285,2005,4280,2005,4269,2005,4254,2013,4236,2021,4215,2033,4208,2037,4205,2057,4208,2069,4209,2080,4194,2082,4190,2083,4188,2087,4177,2088,4175,2088,4174,2088,4163,2081,4132,2081,4109,L,2082,4078,2086,4078,Q,2091,4086,2129,4186,2146,4237,2217,4237,2233,4237,2238,4234,2244,4230,2244,4215,2244,4197,2234,4193,2218,4185,2203,4160,L,2203,4142,Q,2216,4142,2228,4138,2240,4132,2241,4132,2245,4132,2256,4140,2266,4147,2272,4147,2289,4147,2294,4135,2297,4118,2303,4105,2306,4096,2321,4080,2332,4069,2332,4054,2332,4033,2278,4026,2222,4020,2219,4008,L,2219,3991,Q,2221,3991,2267,4005,2314,4020,2320,4020,2343,4020,2348,4011,2349,4007,2348,3967,2347,3946,2351,3918,2356,3891,2358,3881,2370,3882,2372,3888,2373,3890,2373,3900,L,2372,3973,Q,2372,3997,2394,4005,2405,4010,2416,4013,L,2415,4020,Q,2391,4025,2385,4029,2373,4035,2373,4053,L,2379,4083,Q,2379,4088,2352,4128,2326,4166,2326,4184,2326,4199,2333,4209,2341,4219,2352,4219,2358,4219,2380,4187,2397,4161,2404,4147,L,2406,4149,Q,2412,4156,2412,4173,L,2409,4225,2424,4225,Q,2426,4220,2468,4184,2493,4161,2485,4121,2500,4123,2507,4139,L,2528,4139,Q,2562,4089,2568,4084,L,2581,4084,2581,4102,Q,2548,4124,2516,4172,2482,4220,2482,4248,2482,4269,2485,4274,2490,4283,2510,4283,2524,4283,2528,4258,2533,4230,2549,4225,2555,4222,2566,4223,2584,4225,2586,4225,2593,4225,2602,4212,2610,4200,2615,4200,2621,4200,2625,4203,L,2625,4227,Q,2611,4222,2603,4234,2594,4249,2586,4249,2570,4249,2567,4261,2566,4263,2566,4285,2566,4298,2567,4301,2569,4314,2580,4316,L,2587,4331,Q,2592,4346,2601,4346,2606,4346,2619,4326,2630,4306,2648,4306,2662,4306,2670,4327,2679,4347,2693,4347,2707,4347,2719,4325,2730,4305,2730,4288,2728,4276,2727,4268,2725,4250,2736,4249,2766,4323,2815,4323,2831,4323,2834,4318,2847,4301,2853,4295,2861,4287,2877,4274,2892,4263,2892,4250,2892,4233,2864,4226,2837,4217,2837,4205,2837,4197,2847,4194,2856,4189,2856,4182,2850,4163,2850,4156,2849,4152,2850,4147,2851,4139,2858,4139,2864,4139,2888,4147,2915,4147,2934,4105,2952,4062,2970,4062,2975,4062,2979,4076,2982,4089,2989,4089,L,3006,4071,Q,3012,4066,3023,4060,3038,4071,3048,4107,3054,4130,3058,4160,L,3086,4164,3084,4220,Q,3084,4233,3099,4236,3113,4238,3113,4260,L,3112,4280,Q,3097,4287,3095,4290,3094,4291,3091,4298,3088,4306,3081,4307,3072,4308,3070,4309,3068,4310,3068,4319,3068,4325,3089,4329,3092,4351,3102,4358,3111,4364,3111,4373,3111,4384,3104,4386,3095,4389,3091,4397,3089,4404,3087,4408,3082,4416,3076,4418,3068,4419,3067,4428,3066,4434,3066,4448,3062,4455,3062,4479,3062,4488,3070,4498,3073,4503,3081,4513,3083,4519,3089,4525,3093,4530,3094,4535,3095,4545,3100,4556,3103,4570,3108,4577,3112,4586,3121,4589,3123,4599,3132,4606,3141,4611,3145,4624,3145,4628,3146,4630,3164,4587,3196,4537,3214,4509,3254,4447,3265,4429,3284,4406,3288,4386,3313,4334,3337,4284,3337,4279,3337,4274,3323,4259,3321,4255,3320,4248,3320,4241,3316,4240,3313,4240,3287,4230,3280,4228,3262,4228,3246,4228,3240,4228,3231,4228,3219,4233,3210,4236,3203,4242,3198,4248,3190,4248,3181,4248,3175,4240,3168,4233,3169,4222,3169,4210,3164,4199,3157,4187,3157,4177,3157,4172,3162,4156,3166,4141,3166,4133,3166,4109,3163,4105,3152,4103,3146,4100,3136,4096,3141,4080,L,3141,4071,3149,4071,Q,3145,4083,3153,4088,3157,4091,3167,4096,3175,4101,3175,4127,3180,4143,3177,4163,3177,4176,3202,4176,3206,4176,3249,4175,3264,4175,3268,4174,3279,4170,3278,4156,L,3296,4156,Q,3306,4166,3315,4168,3318,4170,3331,4170,3355,4170,3359,4163,3360,4161,3360,4132,3360,4101,3358,4092,3354,4078,3339,4055,3332,4046,3320,4022,3311,4004,3300,3992,3311,3999,3319,4004,3330,4011,3336,4020,3338,4023,3344,4029,3341,4015,3327,3988,3310,3958,3305,3944,3298,3927,3291,3895,3285,3863,3277,3845,3233,3730,3217,3629,3217,3625,3215,3622,3208,3587,3180,3480,3171,3448,3153,3402,3134,3357,3126,3328,3115,3280,3108,3255,3094,3215,3071,3187,3007,3117,2992,3057,2990,3044,2988,3040,2983,3032,2972,3031,L,2937,3024,Q,2914,3018,2902,3013,2896,3011,2891,3010,2891,2998,2935,2933,2978,2868,2978,2831,2978,2814,2968,2806,2953,2797,2945,2791,2934,2782,2925,2765,2918,2750,2918,2740,2919,2725,2917,2716,2915,2699,2903,2690,2896,2686,2891,2671,2887,2657,2884,2649,2849,2513,2828,2456,2790,2356,2709,2356,2662,2356,2538,2393,Q,2410,2435,2381,2444,Z,M,2613,2416,Q,2626,2399,2642,2392,2658,2384,2687,2384,2713,2384,2720,2390,2725,2394,2734,2401,2742,2406,2743,2414,L,2744,2463,2763,2472,Q,2767,2478,2780,2487,2790,2493,2790,2502,2790,2518,2773,2526,2754,2535,2754,2563,2754,2576,2762,2586,2765,2590,2768,2599,2773,2606,2780,2606,2786,2606,2805,2600,2815,2600,2828,2607,2836,2610,2851,2619,2853,2619,2863,2635,2875,2654,2875,2662,2875,2673,2861,2687,L,2861,2708,Q,2863,2709,2886,2714,2908,2720,2908,2730,2908,2738,2904,2752,2904,2766,2901,2784,2901,2794,2910,2798,2928,2807,2935,2813,2945,2820,2954,2823,2961,2826,2961,2841,2961,2867,2953,2882,2947,2894,2927,2917,2889,2977,2871,3e3,2869,3002,2866,3004,2811,3052,2779,3086,2766,3099,2758,3114,2749,3133,2744,3139,2738,3148,2721,3149,2701,3150,2698,3151,2676,3160,2669,3194,2664,3224,2641,3224,2632,3224,2630,3222,2627,3220,2625,3208,2616,3208,2609,3218,2602,3229,2595,3229,2583,3229,2572,3200,2560,3172,2544,3172,2529,3172,2484,3218,2438,3264,2430,3286,2424,3305,2412,3347,2399,3394,2399,3410,2399,3414,2418,3465,2436,3514,2436,3518,2436,3542,2423,3565,2406,3594,2403,3606,L,2397,3607,Q,2396,3603,2382,3503,2372,3437,2314,3434,L,2314,3411,Q,2339,3405,2364,3352,2387,3304,2387,3269,2387,3253,2382,3250,2376,3247,2352,3244,2351,3247,2351,3241,2351,3240,2386,3216,2420,3192,2420,3165,2420,3153,2404,3143,2391,3134,2382,3134,2356,3134,2334,3166,2317,3197,2312,3197,2304,3197,2293,3185,2280,3173,2263,3173,2229,3173,2207,3205,2186,3236,2199,3263,2191,3263,2182,3250,2173,3236,2167,3233,2146,3227,2143,3226,2140,3225,2124,3225,2095,3225,2072,3249,2050,3272,2050,3296,2050,3317,2071,3333,2092,3347,2092,3351,2092,3359,2073,3379,2054,3399,2054,3415,2054,3439,2076,3445,2112,3454,2113,3454,L,2113,3466,Q,2087,3464,2068,3483,2051,3502,2051,3530,2051,3545,2059,3553,L,2060,3554,Q,2068,3559,2094,3583,2123,3608,2123,3610,2123,3619,2105,3622,2086,3625,2083,3628,2081,3630,2073,3646,2068,3657,2058,3657,2040,3657,2037,3628,2038,3595,2037,3589,2021,3529,2022,3507,2022,3362,1969,3362,1955,3362,1930,3384,1908,3405,1904,3418,1895,3436,1894,3459,L,1894,3499,Q,1894,3518,1892,3521,1883,3537,1877,3554,1870,3575,1860,3586,1855,3591,1855,3609,1855,3624,1890,3649,1923,3673,1923,3679,1923,3685,1920,3686,L,1915,3686,Q,1910,3686,1905,3678,1897,3667,1885,3663,1874,3659,1854,3659,1831,3659,1807,3726,1789,3774,1786,3799,L,1775,3799,Q,1772,3785,1766,3777,1762,3772,1755,3771,1750,3771,1750,3764,1793,3701,1803,3685,1820,3651,1823,3638,1826,3628,1826,3597,1820,3542,1820,3527,1820,3509,1832,3492,1844,3476,1844,3454,1844,3407,1819,3409,1810,3409,1794,3402,1777,3394,1768,3394,1747,3394,1738,3406,1725,3427,1713,3443,1711,3440,1706,3417,1701,3395,1694,3395,1667,3403,1658,3403,L,1644,3402,1644,3393,Q,1657,3389,1659,3373,1660,3360,1671,3360,L,1705,3363,Q,1716,3363,1722,3355,1728,3346,1734,3346,1740,3346,1749,3352,1758,3360,1765,3361,L,1794,3363,Q,1819,3363,1845,3348,1880,3327,1888,3325,1909,3318,1930,3294,1951,3269,1951,3249,1951,3229,1943,3225,1940,3222,1921,3222,1898,3227,1868,3227,1855,3224,1823,3224,1806,3222,1801,3222,1796,3224,1775,3236,1761,3244,1757,3246,1752,3249,1745,3249,L,1713,3248,Q,1698,3248,1680,3258,1664,3268,1653,3268,1637,3268,1632,3264,1623,3259,1623,3242,1623,3236,1625,3233,1626,3231,1637,3222,1636,3208,1638,3207,1638,3206,1649,3206,1659,3206,1670,3209,1680,3212,1688,3212,1701,3212,1712,3201,1724,3190,1743,3190,1765,3190,1771,3186,1773,3184,1779,3173,1783,3166,1788,3166,1793,3166,1804,3174,1815,3181,1821,3181,1833,3181,1841,3170,L,1849,3159,Q,1854,3159,1858,3164,1860,3167,1862,3172,1866,3176,1881,3176,1892,3176,1920,3171,1931,3171,1951,3174,1963,3174,1977,3170,1980,3167,1983,3166,1991,3161,1994,3157,2001,3151,2001,3139,2001,3116,1983,3111,L,1982,3110,Q,1985,3105,1993,3102,1996,3101,2e3,3101,2008,3101,2016,3114,2025,3127,2039,3127,2065,3127,2065,3107,2065,3087,2013,3053,1962,3020,1939,3020,1886,3020,1872,3029,L,1839,3029,1839,3018,Q,1856,3009,1873,3001,1881,2994,1881,2974,1881,2965,1872,2959,1862,2954,1862,2948,1862,2942,1873,2933,1887,2923,1888,2921,1898,2928,1905,2963,1910,2990,1934,2990,1949,2990,1963,2979,1978,2967,1980,2967,1982,2967,1990,2983,1997,3e3,2001,3e3,2017,3e3,2027,2976,2036,2950,2046,2950,2058,2950,2058,2967,2058,2974,2054,2989,2049,3004,2049,3010,2049,3018,2060,3027,2071,3038,2079,3038,2087,3038,2099,3047,2105,3053,2113,3059,2114,3061,2136,3086,2154,3107,2167,3107,2188,3107,2188,3095,2188,3084,2167,3080,2145,3077,2145,3048,2145,3030,2173,3030,2193,3030,2205,3046,2216,3062,2235,3062,2256,3062,2272,3045,2286,3030,2286,3011,2286,2994,2274,2985,2262,2974,2260,2954,2257,2935,2243,2926,2214,2907,2212,2905,L,2212,2889,2232,2889,Q,2253,2899,2282,2905,2296,2911,2297,2925,2299,2946,2303,2950,2309,2960,2329,2988,2333,2996,2339,3007,2344,3014,2359,3014,2371,3014,2382,2997,2388,2987,2396,2969,2413,2974,2419,2983,2424,2990,2439,2990,2457,2990,2466,2978,2475,2964,2467,2942,2464,2934,2491,2917,2518,2901,2518,2894,L,2518,2870,2502,2869,Q,2488,2869,2460,2888,2432,2905,2425,2905,2416,2905,2404,2896,2392,2888,2392,2882,L,2417,2864,Q,2441,2847,2441,2825,2441,2780,2323,2780,2309,2780,2299,2803,2288,2825,2280,2825,2272,2825,2263,2817,2251,2806,2230,2798,2239,2773,2273,2761,2301,2751,2301,2727,2301,2716,2296,2713,2293,2710,2279,2710,2196,2710,2154,2716,2141,2717,2133,2753,2126,2785,2134,2801,2122,2777,2117,2772,2112,2764,2093,2764,2079,2764,2067,2773,2053,2783,2053,2801,2053,2809,2060,2827,2067,2845,2067,2848,2067,2855,2053,2855,2038,2855,2039,2816,2040,2775,2024,2771,L,1999,2772,Q,1980,2772,1974,2762,1960,2737,1941,2737,L,1941,2729,1955,2728,Q,1964,2728,1984,2732,2004,2737,2013,2737,2043,2737,2076,2721,2113,2704,2113,2681,2113,2664,2100,2660,2081,2656,2069,2650,2056,2643,2047,2631,2034,2614,2030,2611,L,2030,2598,2046,2598,Q,2055,2634,2115,2634,2138,2634,2138,2613,2138,2601,2127,2592,2114,2584,2110,2578,2104,2572,2103,2561,2102,2548,2101,2542,L,2101,2541,Q,2115,2545,2132,2572,2149,2599,2164,2605,2177,2610,2225,2639,2238,2639,2244,2617,2249,2601,2249,2587,2249,2576,2236,2533,L,2236,2500,2242,2499,Q,2246,2499,2264,2551,2282,2601,2304,2601,2316,2601,2327,2564,2336,2532,2336,2514,2342,2515,2345,2518,2352,2523,2353,2524,2360,2516,2364,2505,2367,2498,2374,2493,L,2388,2493,2388,2514,Q,2362,2536,2362,2570,2362,2590,2386,2589,2410,2588,2410,2597,2410,2609,2398,2623,2386,2638,2386,2661,2386,2695,2423,2714,2450,2728,2481,2728,2499,2728,2510,2705,2523,2675,2536,2665,2553,2652,2562,2631,2573,2608,2569,2592,2592,2601,2600,2607,2610,2616,2610,2634,2610,2651,2591,2689,2572,2728,2572,2747,L,2572,2762,Q,2573,2771,2582,2771,2597,2771,2615,2738,2634,2705,2636,2705,2649,2705,2658,2727,2666,2743,2667,2761,2668,2775,2667,2793,2670,2803,2700,2803,2731,2803,2745,2761,L,2753,2719,Q,2753,2675,2719,2659,2657,2629,2651,2622,2663,2613,2679,2610,2685,2608,2685,2594,2685,2569,2673,2562,L,2633,2536,Q,2637,2533,2675,2524,2698,2519,2700,2497,2703,2488,2709,2479,2712,2474,2712,2460,2712,2410,2676,2410,2660,2410,2646,2421,2632,2431,2622,2431,L,2613,2429,Z,M,1453,3835,L,1557,3833,Q,1557,3834,1558,3835,1664,4086,1734,4483,L,1734,4519,Q,1635,4542,1589,4542,1553,4542,1554,4522,1561,4490,1557,4465,1549,4417,1555,4371,1558,4339,1538,4285,1522,4237,1496,4195,1478,4164,1419,4132,1350,4099,1322,4083,1298,4068,1244,4033,1217,4021,1202,4014,1175,4002,1172,3986,1178,3981,1201,3940,1223,3901,1223,3895,1223,3882,1165,3862,L,1165,3848,1249,3709,Q,1255,3697,1287,3636,1317,3583,1326,3583,1331,3583,1399,3630,1407,3635,1430,3647,1450,3660,1451,3677,Q,1453,3725,1453,3835,Z]],label:"Holland-Bukit Timah Group Representation Constituency",shortLabel:"HO",labelPosition:[216.4,544.3],labelAlignment:[CEN,MID]},"SG.NW.MA":{outlines:[[M,1557,873,Q,1547,878,1537,883,1444,932,1383,992,L,1362,992,Q,1357,963,1344,942,L,1319,942,Q,1333,986,1309,1010,1308,1011,1261,1039,1238,1052,1214,1079,1207,1088,1191,1112,1194,1127,1185,1140,1174,1153,1170,1159,1163,1171,1140,1177,1121,1182,1121,1196,1121,1210,1127,1226,1142,1257,1142,1258,1153,1287,1175,1316,1166,1320,1160,1320,1153,1320,1131,1276,1104,1220,1103,1219,L,1092,1219,Q,1090,1229,1076,1260,1060,1290,1058,1307,1058,1335,1044,1348,1025,1360,1015,1372,1010,1380,995,1385,982,1390,979,1391,975,1392,960,1402,947,1410,938,1411,861,1420,832,1420,792,1420,727,1424,669,1427,632,1426,613,1425,590,1441,565,1457,548,1458,514,1456,503,1458,488,1460,482,1469,478,1477,467,1477,448,1477,346,1405,242,1333,202,1333,185,1333,183,1335,177,1339,173,1368,172,1376,151,1383,126,1392,125,1393,L,125,1409,Q,159,1411,187,1470,201,1503,231,1573,253,1610,287,1665,313,1711,322,1768,318,1785,322,1826,320,1866,286,1879,251,1892,241,1937,229,1993,226,1998,203,2023,120,2095,114,2099,98,2124,82,2148,75,2152,56,2159,45,2163,L,44,2164,Q,46,2172,96,2306,146,2447,146,2491,146,2511,135,2559,123,2608,123,2633,123,2660,129,2687,L,130,2687,Q,151,2725,208,2758,241,2776,297,2807,196,2934,196,3048,176,3192,175,3196,158,3265,110,3320,81,3363,71,3382,55,3411,55,3448,55,3501,76,3533,78,3536,87,3549,92,3556,98,3569,100,3576,100,3589,101,3598,114,3598,138,3598,211,3540,285,3480,380,3480,414,3480,522,3500,633,3520,636,3520,652,3521,665,3530,636,3450,613,3322,588,3182,588,3080,588,3046,593,3e3,593,2988,654,2824,710,2668,710,2649,710,2603,703,2580,L,703,2561,Q,767,2553,793,2547,800,2546,859,2546,939,2546,969,2567,1015,2601,1048,2605,1057,2606,1149,2616,1232,2626,1234,2624,1250,2620,1283,2619,L,1362,2620,Q,1435,2623,1447,2623,1492,2622,1535,2608,1568,2596,1619,2596,1648,2596,1708,2597,1745,2596,1807,2595,1858,2592,1905,2581,1941,2573,1984,2554,2042,2531,2065,2523,2094,2512,2145,2508,2191,2504,2225,2489,2273,2467,2381,2444,2410,2435,2538,2393,2613,2371,2660,2362,2670,2316,2670,2302,2670,2250,2525,2170,2429,2123,2391,2104,2369,2092,2364,2090,2307,2056,2157,1983,2025,1920,2025,1917,2025,1879,2043,1837,2067,1776,2079,1721,2086,1687,2105,1680,2117,1675,2146,1674,2160,1671,2178,1630,2181,1624,2193,1619,2206,1613,2214,1613,2266,1613,2287,1654,2309,1695,2317,1695,2345,1695,2387,1626,2407,1593,2424,1557,2426,1540,2449,1478,2467,1431,2470,1400,L,2470,1388,Q,2343,1382,2296,1380,2290,1376,2258,1381,2228,1387,2199,1398,2158,1411,2140,1464,2124,1508,2114,1557,2101,1584,2032,1584,1934,1584,1903,1559,1870,1534,1870,1453,1870,1445,1924,1387,1978,1328,1978,1313,1978,1287,1952,1268,1921,1250,1910,1242,1885,1225,1811,1199,1778,1187,1756,1162,1753,1159,1729,1120,1703,1082,1677,1080,1649,1078,1647,1047,1654,1021,1654,1011,1654,981,1647,968,1643,957,1620,932,1613,913,1607,909,L,1591,897,Q,1566,882,1557,873,Z]],label:"Marsiling-Yew Tee Group Representation Constituency",shortLabel:"MA",labelPosition:[135.7,189.8],labelAlignment:[CEN,MID]},"SG.NW.NE":{outlines:[[M,4312,1291,Q,4331,1279,4331,1260,4331,1249,4247,1188,4165,1128,4156,1128,4130,1128,4061,1171,4005,1206,3992,1219,3980,1230,3954,1246,3921,1265,3911,1273,3896,1283,3892,1308,L,3884,1347,Q,3872,1374,3850,1432,3828,1479,3796,1502,3784,1511,3758,1517,3733,1521,3723,1531,3699,1552,3688,1558,3668,1570,3646,1570,3606,1570,3568,1520,L,3518,1455,Q,3492,1437,3460,1401,3424,1358,3402,1335,3365,1297,3256,1239,3148,1182,3116,1182,3099,1182,3090,1215,3086,1233,3080,1268,3073,1291,3054,1318,3030,1350,3017,1369,2969,1437,2391,2104,2429,2123,2525,2170,2670,2250,2670,2302,2670,2316,2660,2362,2690,2356,2709,2356,2790,2356,2828,2456,2849,2513,2884,2649,2887,2657,2891,2671,2896,2686,2903,2690,2915,2699,2917,2716,2919,2725,2918,2740,2918,2750,2925,2765,2934,2782,2945,2791,2953,2797,2968,2806,2978,2814,2978,2831,2978,2868,2935,2933,2891,2998,2891,3010,2896,3011,2902,3013,2914,3018,2937,3024,L,2972,3031,Q,2983,3032,2988,3040,2990,3044,2992,3057,3007,3117,3071,3187,3094,3215,3108,3255,3115,3280,3126,3328,3134,3357,3153,3402,3171,3448,3180,3480,3208,3587,3215,3622,3217,3625,3217,3629,3233,3730,3277,3845,3285,3863,3291,3895,3298,3927,3305,3944,3310,3958,3327,3988,3341,4015,3344,4029,3349,4032,3356,4037,3359,4041,3364,4053,3366,4059,3373,4059,3378,4059,3391,4056,3404,4052,3405,4047,3406,4038,3414,4030,3423,4021,3431,4023,L,3431,4001,3441,4001,3446,4035,Q,3446,4041,3413,4074,3404,4083,3399,4097,3399,4099,3396,4121,3399,4151,3408,4165,3416,4182,3440,4199,3449,4206,3479,4228,3508,4248,3523,4248,3532,4248,3534,4247,3537,4244,3537,4232,3537,4221,3528,4208,3519,4195,3519,4193,3519,4179,3538,4179,3550,4179,3555,4194,3559,4207,3580,4207,3590,4207,3597,4196,3602,4187,3602,4178,3602,4170,3601,4167,3595,4155,3594,4152,3583,4135,3583,4127,L,3587,4116,3593,4116,Q,3597,4116,3603,4117,3609,4117,3616,4120,L,3626,4120,3643,4128,Q,3643,4143,3647,4152,3652,4161,3658,4164,3664,4166,3664,4173,3664,4179,3653,4184,3642,4188,3641,4192,3637,4203,3632,4214,3628,4218,3628,4229,3628,4243,3650,4250,3679,4259,3685,4264,3690,4271,3708,4290,3723,4307,3723,4317,3723,4330,3712,4346,3699,4363,3698,4374,3696,4382,3686,4405,3682,4415,3679,4419,3677,4422,3668,4429,L,3638,4428,Q,3627,4428,3622,4439,3643,4450,3708,4450,3722,4450,3769,4453,3811,4449,3811,4423,3811,4399,3863,4399,3891,4399,3924,4404,3937,4404,4006,4425,4082,4447,4103,4460,L,4135,4460,Q,4142,4416,4168,4373,4177,4355,4178,4353,4185,4341,4193,4340,4210,4337,4232,4337,4307,4337,4421,4329,4422,4324,4421,4291,4421,4268,4428,4255,L,4428,4240,Q,4380,4243,4352,4197,4330,4160,4331,4107,4331,4105,4331,4101,4332,4097,4337,4091,4342,4084,4346,4083,4350,4081,4358,4069,4364,4059,4367,4058,4386,4054,4425,4054,L,4425,4042,Q,4411,4013,4375,4014,4334,4021,4316,4019,4296,4016,4259,4019,4225,4021,4222,4021,4179,4021,4177,4018,4167,3996,4138,3957,4071,3863,4071,3855,4071,3844,4095,3836,4120,3827,4120,3816,4120,3812,4093,3783,4067,3755,4067,3747,4067,3746,4099,3709,4130,3673,4130,3660,4130,3657,4050,3598,3959,3530,3946,3520,3811,3409,3771,3356,L,3771,3355,Q,3805,3351,3840,3340,3874,3329,3920,3319,3967,3309,4019,3292,4072,3274,4097,3271,4121,3266,4155,3257,4188,3246,4204,3243,4221,3240,4245,3237,4269,3233,4286,3220,L,4285,3220,Q,4280,3204,4275,3151,L,4258,3150,Q,4214,3152,4199,3151,4187,3150,4172,3159,4160,3171,4156,3173,L,4120,3228,Q,4092,3254,4084,3259,L,4076,3259,4076,3249,Q,4079,3244,4114,3206,4148,3167,4148,3154,4148,3150,4128,3142,4109,3134,4106,3133,4094,3121,4090,3118,4084,3112,4072,3112,4060,3112,4044,3134,4033,3150,4028,3160,4024,3168,4007,3192,L,3993,3215,Q,3985,3215,3981,3219,L,3978,3219,Q,3975,3206,3975,3195,3975,3193,4013,3141,4026,3128,4050,3090,L,4083,3040,Q,4122,3040,4122,3010,4122,3e3,4115,2998,4105,2993,4099,2985,4097,2981,4084,2977,4072,2972,4066,2972,4054,2972,4048,2971,4038,2968,4041,2956,L,4036,2898,Q,4036,2887,4037,2885,4038,2882,4047,2879,L,4063,2866,4098,2844,Q,4119,2828,4136,2824,4141,2822,4155,2813,4169,2802,4169,2801,4169,2796,4156,2784,4144,2774,4136,2770,4132,2768,4125,2766,4119,2766,4114,2763,4110,2760,4092,2760,4078,2760,4040,2768,4005,2775,3998,2779,3985,2784,3980,2786,3971,2790,3961,2798,3948,2802,3938,2807,3924,2815,3920,2818,3898,2834,3889,2845,3882,2852,3880,2862,3880,2866,3880,2882,3877,2896,3865,2918,3847,2948,3823,2948,3813,2948,3800,2935,3788,2923,3788,2917,3788,2911,3798,2896,3808,2882,3808,2878,L,3808,2840,Q,3809,2835,3818,2823,3829,2807,3829,2806,3829,2780,3835,2771,3841,2764,3850,2750,3858,2738,3856,2728,3855,2717,3859,2685,3854,2668,3891,2668,3900,2667,3908,2662,3915,2656,3925,2656,3932,2656,3942,2661,3947,2661,3958,2655,3969,2649,3976,2650,3986,2650,3994,2643,3998,2640,4006,2633,4011,2621,4015,2614,4017,2610,4024,2608,4027,2607,4034,2605,4038,2601,4054,2588,4069,2577,4079,2577,4097,2577,4100,2589,4102,2597,4106,2614,4108,2617,4141,2640,L,4156,2638,Q,4160,2638,4171,2642,4182,2645,4189,2645,4202,2645,4230,2642,4248,2642,4267,2628,4274,2628,4274,2637,4274,2641,4273,2649,4275,2656,4295,2663,L,4350,2677,Q,4354,2677,4377,2696,4392,2700,4396,2707,4399,2711,4413,2725,4429,2740,4435,2740,4445,2740,4464,2722,4484,2704,4496,2704,4502,2704,4524,2714,4526,2714,4540,2700,4555,2687,4571,2687,L,4584,2687,Q,4593,2686,4596,2674,4612,2656,4617,2645,4631,2620,4672,2603,4706,2590,4706,2564,4706,2546,4692,2536,4671,2521,4668,2515,4701,2521,4745,2472,4805,2405,4818,2396,4835,2384,4842,2351,4851,2311,4851,2309,4852,2306,4864,2294,4877,2282,4881,2273,4894,2236,4907,2221,4926,2198,4979,2156,5022,2113,5020,2058,5019,2030,5039,1996,5049,1980,5055,1969,5029,1969,4986,1953,4948,1935,4946,1935,4913,1935,4904,1991,4899,2021,4900,2066,4897,2092,4862,2142,4824,2197,4819,2213,4790,2296,4717,2329,4624,2357,4573,2381,L,4537,2381,Q,4537,2350,4562,2319,4587,2289,4587,2266,4587,2252,4583,2248,4581,2243,4556,2225,4547,2218,4533,2219,4513,2220,4509,2219,4495,2219,4485,2217,4468,2214,4467,2200,4464,2185,4464,2150,4464,2096,4471,2079,4482,2054,4530,2015,4571,1981,4581,1950,4585,1935,4585,1882,4585,1840,4582,1823,4573,1785,4546,1764,4501,1737,4487,1727,4467,1713,4467,1680,4467,1657,4481,1648,4494,1639,4494,1629,4474,1580,4460,1567,4432,1551,4365,1463,4294,1368,4294,1327,Q,4294,1303,4312,1291,Z]],label:"Nee Soon Group Representation Constituency",shortLabel:"NE",labelPosition:[372.3,215],labelAlignment:[CEN,MID]},"SG.NW.SE":{outlines:[[M,5033,961,Q,5070,954,5073,988,5074,997,5106,1029,5107,1030,5122,1057,5135,1086,5141,1091,5154,1108,5158,1122,5160,1132,5160,1154,5160,1186,5158,1206,5156,1218,5168,1228,5175,1233,5190,1242,5241,1279,5242,1327,5242,1339,5275,1366,5292,1396,5300,1405,5319,1425,5344,1455,5364,1474,5389,1469,5392,1469,5394,1469,5396,1461,5408,1430,5413,1417,5413,1390,5413,1322,5366,1259,5301,1182,5264,1123,5241,1083,5228,1061,5203,1020,5183,1007,5164,993,5117,956,5080,925,5077,925,5059,925,5033,944,Z],[M,3478,90,Q,3414,61,3391,56,3313,40,3305,40,3300,39,3232,39,3190,39,3141,56,3090,73,3076,73,3059,73,3021,54,2982,35,2967,35,2939,35,2775,107,2732,125,2673,184,2623,234,2600,234,2561,208,2550,208,2535,208,2296,371,2050,537,1964,608,1898,662,1820,713,1722,773,1678,806,1657,823,1557,873,1566,882,1591,897,L,1607,909,Q,1613,913,1620,932,1643,957,1647,968,1654,981,1654,1011,1654,1021,1647,1047,1649,1078,1677,1080,1703,1082,1729,1120,1753,1159,1756,1162,1778,1187,1811,1199,1885,1225,1910,1242,1921,1250,1952,1268,1978,1287,1978,1313,1978,1328,1924,1387,1870,1445,1870,1453,1870,1534,1903,1559,1934,1584,2032,1584,2101,1584,2114,1557,2124,1508,2140,1464,2158,1411,2199,1398,2228,1387,2258,1381,2290,1376,2296,1380,2343,1382,2470,1388,L,2470,1400,Q,2467,1431,2449,1478,2426,1540,2424,1557,2407,1593,2387,1626,2345,1695,2317,1695,2309,1695,2287,1654,2266,1613,2214,1613,2206,1613,2193,1619,2181,1624,2178,1630,2160,1671,2146,1674,2117,1675,2105,1680,2086,1687,2079,1721,2067,1776,2043,1837,2025,1879,2025,1917,2025,1920,2157,1983,2307,2056,2364,2090,2369,2092,2391,2104,2969,1437,3017,1369,3030,1350,3054,1318,3073,1291,3080,1268,3086,1233,3090,1215,3099,1182,3116,1182,3148,1182,3256,1239,3365,1297,3402,1335,3424,1358,3460,1401,3492,1437,3518,1455,L,3568,1520,Q,3606,1570,3646,1570,3668,1570,3688,1558,3699,1552,3723,1531,3733,1521,3758,1517,3784,1511,3796,1502,3828,1479,3850,1432,3872,1374,3884,1347,L,3892,1308,Q,3896,1283,3911,1273,3921,1265,3954,1246,3980,1230,3992,1219,4005,1206,4061,1171,4130,1128,4156,1128,4165,1128,4247,1188,4331,1249,4331,1260,4331,1279,4312,1291,4294,1303,4294,1327,4294,1368,4365,1463,4432,1551,4460,1567,4474,1580,4494,1629,4494,1639,4481,1648,4467,1657,4467,1680,4467,1713,4487,1727,4501,1737,4546,1764,4573,1785,4582,1823,4585,1840,4585,1882,4585,1935,4581,1950,4571,1981,4530,2015,4482,2054,4471,2079,4464,2096,4464,2150,4464,2185,4467,2200,4468,2214,4485,2217,4495,2219,4509,2219,4513,2220,4533,2219,4547,2218,4556,2225,4581,2243,4583,2248,4587,2252,4587,2266,4587,2289,4562,2319,4537,2350,4537,2381,L,4573,2381,Q,4624,2357,4717,2329,4790,2296,4819,2213,4824,2197,4862,2142,4897,2092,4900,2066,4899,2021,4904,1991,4913,1935,4946,1935,4948,1935,4986,1953,5029,1969,5055,1969,5062,1956,5065,1949,5065,1948,5077,1890,5079,1876,5105,1876,5113,1876,5122,1865,5126,1860,5134,1850,5135,1848,5137,1846,5147,1825,5153,1801,5160,1770,5166,1752,5170,1739,5188,1732,5211,1725,5214,1722,5222,1716,5236,1705,5247,1696,5254,1685,L,5255,1684,Q,5257,1675,5262,1667,5266,1663,5266,1656,5262,1624,5262,1604,5262,1593,5268,1580,5275,1568,5275,1563,5275,1552,5266,1539,5256,1523,5252,1515,5237,1494,5226,1475,5213,1452,5187,1437,5157,1421,5144,1404,5137,1395,5134,1383,5127,1365,5127,1363,5111,1335,5105,1324,5087,1291,5076,1286,5071,1284,5054,1270,5038,1257,5035,1257,5030,1257,5019,1263,5008,1270,5003,1270,4987,1269,4975,1283,4940,1329,4930,1341,4917,1356,4909,1377,4903,1396,4905,1411,4900,1416,4891,1416,4880,1415,4874,1415,4865,1416,4859,1428,4851,1442,4842,1442,4838,1442,4828,1438,4819,1434,4810,1434,4775,1434,4758,1452,4739,1472,4704,1479,4677,1482,4682,1523,4682,1529,4676,1540,4670,1551,4668,1553,4644,1568,4641,1568,4631,1568,4631,1562,4631,1558,4649,1547,4667,1536,4667,1524,4667,1515,4663,1507,4656,1492,4643,1492,4634,1492,4621,1501,4610,1510,4606,1515,4583,1546,4576,1561,4566,1577,4538,1594,4508,1612,4496,1620,4503,1606,4518,1594,4543,1575,4551,1566,4561,1554,4603,1497,4631,1455,4671,1455,4683,1454,4707,1439,4734,1422,4747,1416,4765,1409,4791,1404,4812,1400,4830,1389,4848,1377,4866,1356,4877,1345,4896,1324,4952,1261,4953,1260,4955,1257,4981,1224,4984,1219,4997,1210,5008,1203,5008,1196,L,5009,1189,Q,4993,1093,4971,1041,4933,954,4874,954,4801,954,4763,986,4723,1018,4689,1018,4671,1018,4656,1010,4641,1001,4615,1001,4592,1001,4584,1004,4589,1022,4609,1051,4626,1078,4626,1083,4626,1095,4625,1098,4624,1102,4617,1110,4595,1072,4568,1052,4555,1041,4555,1009,4555,999,4566,968,4576,938,4576,931,4568,849,4559,828,L,4559,760,4571,760,Q,4589,783,4600,893,4609,971,4675,971,4706,971,4717,954,4730,933,4757,928,4763,927,4797,924,4824,922,4841,916,4841,798,4809,749,4783,708,4685,651,4643,628,4617,612,4569,585,4537,562,4495,520,4475,499,4438,463,4403,465,4362,468,4335,441,4307,403,4285,381,4252,349,4196,338,4122,323,4120,322,4011,276,3950,247,3842,194,3769,128,3761,143,3696,281,3660,356,3636,356,3630,356,3626,354,3623,351,3622,351,L,3622,326,Q,3638,316,3642,307,3643,303,3643,283,3643,263,3633,259,3616,257,3601,250,3561,216,3555,216,3521,216,3478,265,3429,323,3398,334,L,3398,313,Q,3412,278,3485,225,3550,177,3550,142,Q,3550,125,3478,90,Z]],label:"Sembawang Group Representation Constituency",shortLabel:"SE",labelPosition:[325.5,69.1],labelAlignment:[CEN,MID]},"SG.NW.BU":{outlines:[[M,1451,3677,Q,1450,3660,1430,3647,1407,3635,1399,3630,1331,3583,1326,3583,1317,3583,1287,3636,1255,3697,1249,3709,L,1165,3848,1165,3862,Q,1223,3882,1223,3895,1223,3901,1201,3940,1178,3981,1172,3986,1175,4002,1202,4014,1217,4021,1244,4033,1298,4068,1322,4083,1350,4099,1419,4132,1478,4164,1496,4195,1522,4237,1538,4285,1558,4339,1555,4371,1549,4417,1557,4465,1561,4490,1554,4522,1553,4542,1589,4542,1635,4542,1734,4519,L,1734,4483,Q,1664,4086,1558,3835,1557,3834,1557,3833,L,1453,3835,Q,1453,3725,1451,3677,Z]],label:"Bukit Panjang Single Member Constituency",shortLabel:"BU",labelPosition:[144.9,406.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"northwest",type:"maps"}}})});