var current;
var wanted;
var shortest_length;
var current_length = -1;
var score = 0;
var bonus = 0;
var items_data = [{
    "name":"Linken's Sphere",
    "url":"https://dota2.gamepedia.com/Linken%27s_Sphere",
    "alt_text":"Linken's Sphere (4850)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/23/Linken%27s_Sphere_icon.png/40px-Linken%27s_Sphere_icon.png?version=c2ff6b5fcbdcc46792e97182f4879c1a",
    "from":[1,6],
    "into":[]
    },{
    "name":"Perseverance",
    "url":"https://dota2.gamepedia.com/Perseverance",
    "alt_text":"Perseverance (1700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/fb/Perseverance_icon.png/40px-Perseverance_icon.png?version=0659fb58ee069ae2cb0bd0483540289b",
    "from":[85,21],
    "into":[2,0,132,118]
    },{
    "name":"Battle Fury",
    "url":"https://dota2.gamepedia.com/Battle_Fury",
    "alt_text":"Battle Fury (4500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/c/c1/Battle_Fury_icon.png/40px-Battle_Fury_icon.png?version=9a2947cbf512233c248b7c6c743c185b",
    "from":[3,65,1,113],
    "into":[]
    },{
    "name":"Claymore",
    "url":"https://dota2.gamepedia.com/Claymore",
    "alt_text":"Claymore (1400)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/4/49/Claymore_icon.png/40px-Claymore_icon.png?version=fa9c9bf1d1cc13a278106edb15f8e392",
    "from":[],
    "into":[2,4]
    },{
    "name":"Shadow Blade",
    "url":"https://dota2.gamepedia.com/Shadow_Blade",
    "alt_text":"Shadow Blade (2700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/0/0f/Shadow_Blade_icon.png/40px-Shadow_Blade_icon.png?version=359eb6844d8bfa6ed2f338c32d954e3a",
    "from":[3,93],
    "into":[5]
    },{
    "name":"Silver Edge",
    "url":"https://dota2.gamepedia.com/Silver_Edge",
    "alt_text":"Silver Edge (5550)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/91/Silver_Edge_icon.png/40px-Silver_Edge_icon.png?version=13d13e1d8d75cf15b1bd8ae0484857cf",
    "from":[4,6],
    "into":[]
    },{
    "name":"Ultimate Orb",
    "url":"https://dota2.gamepedia.com/Ultimate_Orb",
    "alt_text":"Ultimate Orb (2150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/14/Ultimate_Orb_icon.png/40px-Ultimate_Orb_icon.png?version=f1098eb30d0169f470ceaaec863ef663",
    "from":[],
    "into":[7,0,20,60,5]
    },{
    "name":"Eye of Skadi",
    "url":"https://dota2.gamepedia.com/Eye_of_Skadi",
    "alt_text":"Eye of Skadi (5775)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/1e/Eye_of_Skadi_icon.png/40px-Eye_of_Skadi_icon.png?version=b21414c1c3c1e401063a99b5556dc767",
    "from":[6,6,8,131],
    "into":[]
    },{
    "name":"Point Booster",
    "url":"https://dota2.gamepedia.com/Point_Booster",
    "alt_text":"Point Booster (1200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/57/Point_Booster_icon.png/40px-Point_Booster_icon.png?version=d8153648447ebe707542231b3f915a97",
    "from":[],
    "into":[9,7,78]
    },{
    "name":"Aghanim's Scepter",
    "url":"https://dota2.gamepedia.com/Aghanim%27s_Scepter",
    "alt_text":"Aghanim's Scepter (4200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/0/07/Aghanim%27s_Scepter_icon.png/40px-Aghanim%27s_Scepter_icon.png?version=ae1bd2d04717ef96b41fe978edd1846a",
    "from":[8,10,61,23],
    "into":[]
    },{
    "name":"Ogre Club",
    "url":"https://dota2.gamepedia.com/Ogre_Club",
    "alt_text":"Ogre Club (1000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/dc/Ogre_Club_icon.png/40px-Ogre_Club_icon.png?version=86fa1e3b82c94b79adb3e4d66557f3d8",
    "from":[],
    "into":[9,11,57,88,49]
    },{
    "name":"Black King Bar",
    "url":"https://dota2.gamepedia.com/Black_King_Bar",
    "alt_text":"Black King Bar (3975)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/72/Black_King_Bar_icon.png/40px-Black_King_Bar_icon.png?version=3475cf7496be25f3980c69262b4974d9",
    "from":[12,10],
    "into":[]
    },{
    "name":"Mithril Hammer",
    "url":"https://dota2.gamepedia.com/Mithril_Hammer",
    "alt_text":"Mithril Hammer (1600)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/d5/Mithril_Hammer_icon.png/40px-Mithril_Hammer_icon.png?version=273c0824c0179a2f30c8cc2ba6edbb28",
    "from":[],
    "into":[11,13,120,74]
    },{
    "name":"Maelstrom",
    "url":"https://dota2.gamepedia.com/Maelstrom",
    "alt_text":"Maelstrom (2800)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/65/Maelstrom_icon.png/40px-Maelstrom_icon.png?version=669c87627f63560e5446613b85b6b1dd",
    "from":[12,29],
    "into":[14]
    },{
    "name":"Mjollnir",
    "url":"https://dota2.gamepedia.com/Mjollnir",
    "alt_text":"Mjollnir (5700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/9d/Mjollnir_icon.png/40px-Mjollnir_icon.png?version=dc23964a7000cf631ab2026beb899807",
    "from":[15,13],
    "into":[]
    },{
    "name":"Hyperstone",
    "url":"https://dota2.gamepedia.com/Hyperstone",
    "alt_text":"Hyperstone (2000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/6a/Hyperstone_icon.png/40px-Hyperstone_icon.png?version=884282ce78e9d675be604c83abe0b960",
    "from":[],
    "into":[16,14,130]
    },{
    "name":"Assault Cuirass",
    "url":"https://dota2.gamepedia.com/Assault_Cuirass",
    "alt_text":"Assault Cuirass (5250)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/d3/Assault_Cuirass_icon.png/40px-Assault_Cuirass_icon.png?version=6b45b9b9d22d5a98ffe1ceb1d5d8a593",
    "from":[17,15,66],
    "into":[]
    },{
    "name":"Platemail",
    "url":"https://dota2.gamepedia.com/Platemail",
    "alt_text":"Platemail (1400)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/4/4f/Platemail_icon.png/40px-Platemail_icon.png?version=4969d5aaf30a5ad1d1e2baeb3448cc23",
    "from":[],
    "into":[16,18,118]
    },{
    "name":"Shiva's Guard",
    "url":"https://dota2.gamepedia.com/Shiva%27s_Guard",
    "alt_text":"Shiva's Guard (4750)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/b6/Shiva%27s_Guard_icon.png/40px-Shiva%27s_Guard_icon.png?version=c9d69bb6005e9eefb0bda10bac230d64",
    "from":[19,17],
    "into":[]
    },{
    "name":"Mystic Staff",
    "url":"https://dota2.gamepedia.com/Mystic_Staff",
    "alt_text":"Mystic Staff (2700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/29/Mystic_Staff_icon.png/40px-Mystic_Staff_icon.png?version=58dc2e0a09df633fc4d80ae9b3f354db",
    "from":[],
    "into":[20,18,115]
    },{
    "name":"Scythe of Vyse",
    "url":"https://dota2.gamepedia.com/Scythe_of_Vyse",
    "alt_text":"Scythe of Vyse (5700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/54/Scythe_of_Vyse_icon.png/40px-Scythe_of_Vyse_icon.png?version=6bb81daa2167cb5c4710356a41af6fed",
    "from":[19,6,21],
    "into":[]
    },{
    "name":"Void Stone",
    "url":"https://dota2.gamepedia.com/Void_Stone",
    "alt_text":"Void Stone (850)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/6b/Void_Stone_icon.png/40px-Void_Stone_icon.png?version=8ed44ab9ab3118720db2d8c70b13f886",
    "from":[],
    "into":[22,20,1,117]
    },{
    "name":"Eul's Scepter of Divinity",
    "url":"https://dota2.gamepedia.com/Eul%27s_Scepter_of_Divinity",
    "alt_text":"Eul's Scepter of Divinity (2750)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/8/80/Eul%27s_Scepter_of_Divinity_icon.png/40px-Eul%27s_Scepter_of_Divinity_icon.png?version=603a9166eb116858ec259682191238d3",
    "from":[23,100,21],
    "into":[]
    },{
    "name":"Staff of Wizardry",
    "url":"https://dota2.gamepedia.com/Staff_of_Wizardry",
    "alt_text":"Staff of Wizardry (1000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/8/8a/Staff_of_Wizardry_icon.png/40px-Staff_of_Wizardry_icon.png?version=610b134083b7ef6907f63c10881d18f8",
    "from":[],
    "into":[9,24,22,86,122,102]
    },{
    "name":"Dagon",
    "url":"https://dota2.gamepedia.com/Dagon",
    "alt_text":"Dagon (2720)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/bc/Dagon_1_icon.png/40px-Dagon_1_icon.png?version=ac345b848148c3da390c030a5fa23718",
    "from":[23,25],
    "into":[]
    },{
    "name":"Null Talisman",
    "url":"https://dota2.gamepedia.com/Null_Talisman",
    "alt_text":"Null Talisman (470)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/90/Null_Talisman_icon.png/40px-Null_Talisman_icon.png?version=02da3005843c119a9ab0a6035186713d",
    "from":[97,129],
    "into":[24,26]
    },{
    "name":"Veil of Discord",
    "url":"https://dota2.gamepedia.com/Veil_of_Discord",
    "alt_text":"Veil of Discord (2340)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/f2/Veil_of_Discord_icon.png/40px-Veil_of_Discord_icon.png?version=3c9e3c17ea934138d895211e44122ee9",
    "from":[27,25,25],
    "into":[]
    },{
    "name":"Helm of Iron Will",
    "url":"https://dota2.gamepedia.com/Helm_of_Iron_Will",
    "alt_text":"Helm of Iron Will (900)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/f6/Helm_of_Iron_Will_icon.png/40px-Helm_of_Iron_Will_icon.png?version=7a10682987af6964fdef19bbe82eac02",
    "from":[],
    "into":[28,26]
    },{
    "name":"Armlet of Mordiggian",
    "url":"https://dota2.gamepedia.com/Armlet_of_Mordiggian",
    "alt_text":"Armlet of Mordiggian (2370)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/8/8d/Armlet_of_Mordiggian_%28Inactive%29_icon.png/40px-Armlet_of_Mordiggian_%28Inactive%29_icon.png?version=b473e83a8d26c24b987df98277dea21e",
    "from":[27,29,123],
    "into":[]
    },{
    "name":"Gloves of Haste",
    "url":"https://dota2.gamepedia.com/Gloves_of_Haste",
    "alt_text":"Gloves of Haste (500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/16/Gloves_of_Haste_icon.png/40px-Gloves_of_Haste_icon.png?version=29c611189a9ce8a477b1d8a77df67d6f",
    "from":[],
    "into":[28,30,13,31,90]
    },{
    "name":"Hand of Midas",
    "url":"https://dota2.gamepedia.com/Hand_of_Midas",
    "alt_text":"Hand of Midas (2150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/5b/Hand_of_Midas_icon.png/40px-Hand_of_Midas_icon.png?version=a8f5dbec17b80bb6d7aae26a1a0c6775",
    "from":[29],
    "into":[]
    },{
    "name":"Power Treads",
    "url":"https://dota2.gamepedia.com/Power_Treads",
    "alt_text":"Power Treads (1350)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/6b/Power_Treads_icon.png/40px-Power_Treads_icon.png?version=94fd0e1910a5c0104e7e2339564baf1c",
    "from":[32,29,121,63,89],
    "into":[]
    },{
    "name":"Boots of Speed",
    "url":"https://dota2.gamepedia.com/Boots_of_Speed",
    "alt_text":"Boots of Speed (400)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/97/Boots_of_Speed_icon.png/40px-Boots_of_Speed_icon.png?version=d8128555973765374001329f844766e7",
    "from":[],
    "into":[33,128,101,124,31]
    },{
    "name":"Arcane Boots",
    "url":"https://dota2.gamepedia.com/Arcane_Boots",
    "alt_text":"Arcane Boots (1300)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/be/Arcane_Boots_icon.png/40px-Arcane_Boots_icon.png?version=54358563258f0c100bbac94c54bc25cd",
    "from":[32,116],
    "into":[34]
    },{
    "name":"Guardian Greaves",
    "url":"https://dota2.gamepedia.com/Guardian_Greaves",
    "alt_text":"Guardian Greaves (5375)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/94/Guardian_Greaves_icon.png/40px-Guardian_Greaves_icon.png?version=fddadfb344f7d9a6e5eb7a09181ccd64",
    "from":[35,33],
    "into":[]
    },{
    "name":"Mekansm",
    "url":"https://dota2.gamepedia.com/Mekansm",
    "alt_text":"Mekansm (2375)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/f7/Mekansm_icon.png/40px-Mekansm_icon.png?version=2a73ddb33f36aebe0bd7f6086be413e8",
    "from":[36,82],
    "into":[34]
    },{
    "name":"Buckler",
    "url":"https://dota2.gamepedia.com/Buckler",
    "alt_text":"Buckler (800)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/e/e4/Buckler_icon.png/40px-Buckler_icon.png?version=9f02d311487486c230ebd3cfa660baef",
    "from":[66,94],
    "into":[35,37]
    },{
    "name":"Crimson Guard",
    "url":"https://dota2.gamepedia.com/Crimson_Guard",
    "alt_text":"Crimson Guard (3550)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/70/Crimson_Guard_icon.png/40px-Crimson_Guard_icon.png?version=447270c18dbb1e7d00c15438afb79900",
    "from":[38,36],
    "into":[]
    },{
    "name":"Vanguard",
    "url":"https://dota2.gamepedia.com/Vanguard",
    "alt_text":"Vanguard (2150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/a/ab/Vanguard_icon.png/40px-Vanguard_icon.png?version=983a398e107d322c7bba35defe52e7bf",
    "from":[85,77,108],
    "into":[37,39]
    },{
    "name":"Abyssal Blade",
    "url":"https://dota2.gamepedia.com/Abyssal_Blade",
    "alt_text":"Abyssal Blade (6400)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/3b/Abyssal_Blade_icon.png/40px-Abyssal_Blade_icon.png?version=da7dd6a610e7bd60b989e6ce2e6c5f87",
    "from":[38,40],
    "into":[]
    },{
    "name":"Skull Basher",
    "url":"https://dota2.gamepedia.com/Skull_Basher",
    "alt_text":"Skull Basher (2700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/9d/Skull_Basher_icon.png/40px-Skull_Basher_icon.png?version=66999cbd545fbd00ca45ff2429858dad",
    "from":[41,121],
    "into":[39]
    },{
    "name":"Javelin",
    "url":"https://dota2.gamepedia.com/Javelin",
    "alt_text":"Javelin (1500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/e/ed/Javelin_icon.png/40px-Javelin_icon.png?version=60b45153d5acc0003980af572e73a7de",
    "from":[],
    "into":[40,42]
    },{
    "name":"Monkey King Bar",
    "url":"https://dota2.gamepedia.com/Monkey_King_Bar",
    "alt_text":"Monkey King Bar (5200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/b0/Monkey_King_Bar_icon.png/40px-Monkey_King_Bar_icon.png?version=84c7092d46799d5468781e7538fca587",
    "from":[43,41,41],
    "into":[]
    },{
    "name":"Demon Edge",
    "url":"https://dota2.gamepedia.com/Demon_Edge",
    "alt_text":"Demon Edge (2200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/ba/Demon_Edge_icon.png/40px-Demon_Edge_icon.png?version=d04819e3980cb178bacbccd0ec110156",
    "from":[],
    "into":[44,125,42]
    },{
    "name":"Daedalus",
    "url":"https://dota2.gamepedia.com/Daedalus",
    "alt_text":"Daedalus (5320)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/24/Daedalus_icon.png/40px-Daedalus_icon.png?version=fdf2dbba891f2906a276e5380fef4691",
    "from":[45,43],
    "into":[]
    },{
    "name":"Crystalys",
    "url":"https://dota2.gamepedia.com/Crystalys",
    "alt_text":"Crystalys (2120)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/3f/Crystalys_icon.png/40px-Crystalys_icon.png?version=ab0c6f0457f6d2d69f03284093b8ca8d",
    "from":[65,123],
    "into":[44,46]
    },{
    "name":"Bloodthorn",
    "url":"https://dota2.gamepedia.com/Bloodthorn",
    "alt_text":"Bloodthorn (7195)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/f4/Bloodthorn_icon.png/40px-Bloodthorn_icon.png?version=3392c075ce74e9c8555bc5c883fbe9e2",
    "from":[47,45],
    "into":[]
    },{
    "name":"Orchid Malevolence",
    "url":"https://dota2.gamepedia.com/Orchid_Malevolence",
    "alt_text":"Orchid Malevolence (4075)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/a/ad/Orchid_Malevolence_icon.png/40px-Orchid_Malevolence_icon.png?version=95f57f51f3915482582d968bd4fd2e2f",
    "from":[48,48],
    "into":[46]
    },{
    "name":"Oblivion Staff",
    "url":"https://dota2.gamepedia.com/Oblivion_Staff",
    "alt_text":"Oblivion Staff (1650)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/7b/Oblivion_Staff_icon.png/40px-Oblivion_Staff_icon.png?version=6fbc85901cdba57b5253243374d2b14b",
    "from":[50,63,69],
    "into":[47,49]
    },{
    "name":"Echo Sabre",
    "url":"https://dota2.gamepedia.com/Echo_Sabre",
    "alt_text":"Echo Sabre (2650)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/6b/Echo_Sabre_icon.png/40px-Echo_Sabre_icon.png?version=4ffdd91b37007f922d670c49dd2c0216",
    "from":[10,48],
    "into":[]
    },{
    "name":"Quarterstaff",
    "url":"https://dota2.gamepedia.com/Quarterstaff",
    "alt_text":"Quarterstaff (875)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/13/Quarterstaff_icon.png/40px-Quarterstaff_icon.png?version=101f64c078de590976b30146bdb491ad",
    "from":[],
    "into":[48,51,73]
    },{
    "name":"Butterfly",
    "url":"https://dota2.gamepedia.com/Butterfly",
    "alt_text":"Butterfly (5525)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/28/Butterfly_icon.png/40px-Butterfly_icon.png?version=b7e58ae0dba12cc97d014b1b49e289a5",
    "from":[52,55,50],
    "into":[]
    },{
    "name":"Eaglesong",
    "url":"https://dota2.gamepedia.com/Eaglesong",
    "alt_text":"Eaglesong (3200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/9a/Eaglesong_icon.png/40px-Eaglesong_icon.png?version=ffb0fec9decdef7f0ef0dbd7aa706034",
    "from":[],
    "into":[53,51]
    },{
    "name":"Ethereal Blade",
    "url":"https://dota2.gamepedia.com/Ethereal_Blade",
    "alt_text":"Ethereal Blade (4700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/5b/Ethereal_Blade_icon.png/40px-Ethereal_Blade_icon.png?version=cda4f7fa0c95d1c31c3f57c629e98301",
    "from":[52,54],
    "into":[]
    },{
    "name":"Ghost Scepter",
    "url":"https://dota2.gamepedia.com/Ghost_Scepter",
    "alt_text":"Ghost Scepter (1500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/9d/Ghost_Scepter_icon.png/40px-Ghost_Scepter_icon.png?version=10531f8c9dca9898995f07f3adf90415",
    "from":[],
    "into":[53]
    },{
    "name":"Talisman of Evasion",
    "url":"https://dota2.gamepedia.com/Talisman_of_Evasion",
    "alt_text":"Talisman of Evasion (1450)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/37/Talisman_of_Evasion_icon.png/40px-Talisman_of_Evasion_icon.png?version=14fab444e6682f84b1415049c94e64de",
    "from":[],
    "into":[51,56,68]
    },{
    "name":"Heaven's Halberd",
    "url":"https://dota2.gamepedia.com/Heaven%27s_Halberd",
    "alt_text":"Heaven's Halberd (3400)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/c/c6/Heaven%27s_Halberd_icon.png/40px-Heaven%27s_Halberd_icon.png?version=ae097031308d988a57c2c99a549d9899",
    "from":[57,55],
    "into":[]
    },{
    "name":"Sange",
    "url":"https://dota2.gamepedia.com/Sange",
    "alt_text":"Sange (1950)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/fc/Sange_icon.png/40px-Sange_icon.png?version=b542913a2c73c192ab92bf6c36d4bca0",
    "from":[10,121],
    "into":[58,56]
    },{
    "name":"Sange and Yasha",
    "url":"https://dota2.gamepedia.com/Sange_and_Yasha",
    "alt_text":"Sange and Yasha (3900)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/b4/Sange_and_Yasha_icon.png/40px-Sange_and_Yasha_icon.png?version=3029b2f51fa9523605333dce79ec6cab",
    "from":[57,59],
    "into":[]
    },{
    "name":"Yasha",
    "url":"https://dota2.gamepedia.com/Yasha",
    "alt_text":"Yasha (1950)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/d1/Yasha_icon.png/40px-Yasha_icon.png?version=7d7ae2ad6ba89dddbf43dda30d97deb9",
    "from":[61,89],
    "into":[60,58]
    },{
    "name":"Manta Style",
    "url":"https://dota2.gamepedia.com/Manta_Style",
    "alt_text":"Manta Style (5000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/8/84/Manta_Style_icon.png/40px-Manta_Style_icon.png?version=c9fb63ec3b4fabf610daef0cfca11616",
    "from":[6,59],
    "into":[]
    },{
    "name":"Blade of Alacrity",
    "url":"https://dota2.gamepedia.com/Blade_of_Alacrity",
    "alt_text":"Blade of Alacrity (1000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/a/a2/Blade_of_Alacrity_icon.png/40px-Blade_of_Alacrity_icon.png?version=e286e8b3d3b4ecccb2dc93dcc5d84702",
    "from":[],
    "into":[9,62,59]
    },{
    "name":"Diffusal Blade",
    "url":"https://dota2.gamepedia.com/Diffusal_Blade",
    "alt_text":"Diffusal Blade (3150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/65/Diffusal_Blade_1_icon.png/40px-Diffusal_Blade_1_icon.png?version=83f229c956163a207326749b8ead6d4e",
    "from":[61,61,63],
    "into":[]
    },{
    "name":"Robe of the Magi",
    "url":"https://dota2.gamepedia.com/Robe_of_the_Magi",
    "alt_text":"Robe of the Magi (450)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/b3/Robe_of_the_Magi_icon.png/40px-Robe_of_the_Magi_icon.png?version=74800b1aacbe43743fc57f7c968dc0d1",
    "from":[],
    "into":[64,62,48,31]
    },{
    "name":"Blade Mail",
    "url":"https://dota2.gamepedia.com/Blade_Mail",
    "alt_text":"Blade Mail (2200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/18/Blade_Mail_icon.png/40px-Blade_Mail_icon.png?version=c92d1ec0f1856451a8a1be5d3b3ff832",
    "from":[65,66,63],
    "into":[]
    },{
    "name":"Broadsword",
    "url":"https://dota2.gamepedia.com/Broadsword",
    "alt_text":"Broadsword (1200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/3e/Broadsword_icon.png/40px-Broadsword_icon.png?version=ebecdd42944fb5a3b42f114f5817181e",
    "from":[],
    "into":[2,64,45]
    },{
    "name":"Chainmail",
    "url":"https://dota2.gamepedia.com/Chainmail",
    "alt_text":"Chainmail (550)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/f2/Chainmail_icon.png/40px-Chainmail_icon.png?version=84f6b60824a876022d7c23880f2de627",
    "from":[],
    "into":[16,64,67,36]
    },{
    "name":"Medallion of Courage",
    "url":"https://dota2.gamepedia.com/Medallion_of_Courage",
    "alt_text":"Medallion of Courage (1175)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/d9/Medallion_of_Courage_icon.png/40px-Medallion_of_Courage_icon.png?version=be7c34de559c77f7085cb9bcc84a4c02",
    "from":[66,69,119],
    "into":[68]
    },{
    "name":"Solar Crest",
    "url":"https://dota2.gamepedia.com/Solar_Crest",
    "alt_text":"Solar Crest (2625)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/36/Solar_Crest_icon.png/40px-Solar_Crest_icon.png?version=ca460e559a4ef6c4dfa82ad74350be34",
    "from":[67,55],
    "into":[]
    },{
    "name":"Sage's Mask",
    "url":"https://dota2.gamepedia.com/Sage%27s_Mask",
    "alt_text":"Sage's Mask (325)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/c/c6/Sage%27s_Mask_icon.png/40px-Sage%27s_Mask_icon.png?version=d3c6813841bef4bf2edeb2202baf33d0",
    "from":[],
    "into":[67,48,70,80,99]
    },{
    "name":"Ring of Basilius",
    "url":"https://dota2.gamepedia.com/Ring_of_Basilius",
    "alt_text":"Ring of Basilius (500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/26/Ring_of_Basilius_%28Active%29_icon.png/40px-Ring_of_Basilius_%28Active%29_icon.png?version=238ff1c5b352c623896c2efcc81885cc",
    "from":[69,111],
    "into":[71,105]
    },{
    "name":"Vladmir's Offering",
    "url":"https://dota2.gamepedia.com/Vladmir%27s_Offering",
    "alt_text":"Vladmir's Offering (2275)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/28/Vladmir%27s_Offering_icon.png/40px-Vladmir%27s_Offering_icon.png?version=e46adfb0e6a994c36f5c18ba4a80fef6",
    "from":[72,70,82],
    "into":[]
    },{
    "name":"Morbid Mask",
    "url":"https://dota2.gamepedia.com/Morbid_Mask",
    "alt_text":"Morbid Mask (1100)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/76/Morbid_Mask_icon.png/40px-Morbid_Mask_icon.png?version=cc1e3f36ea03ebec27b285f9e53e999b",
    "from":[],
    "into":[73,71,74]
    },{
    "name":"Mask of Madness",
    "url":"https://dota2.gamepedia.com/Mask_of_Madness",
    "alt_text":"Mask of Madness (1975)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/76/Mask_of_Madness_icon.png/40px-Mask_of_Madness_icon.png?version=e21afeffea5b8d58620575d863d3813b",
    "from":[72,50],
    "into":[]
    },{
    "name":"Satanic",
    "url":"https://dota2.gamepedia.com/Satanic",
    "alt_text":"Satanic (5700)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/dd/Satanic_icon.png/40px-Satanic_icon.png?version=a05558081a279a340e0280cc11b96b0c",
    "from":[75,72,12],
    "into":[]
    },{
    "name":"Reaver",
    "url":"https://dota2.gamepedia.com/Reaver",
    "alt_text":"Reaver (3000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/37/Reaver_icon.png/40px-Reaver_icon.png?version=dd97e871cd58254d5d306aac1e050676",
    "from":[],
    "into":[76,74]
    },{
    "name":"Heart of Tarrasque",
    "url":"https://dota2.gamepedia.com/Heart_of_Tarrasque",
    "alt_text":"Heart of Tarrasque (5200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/75/Heart_of_Tarrasque_icon.png/40px-Heart_of_Tarrasque_icon.png?version=60f4d18ab80a8c6083f4aff839fddc92",
    "from":[75,77,77],
    "into":[]
    },{
    "name":"Vitality Booster",
    "url":"https://dota2.gamepedia.com/Vitality_Booster",
    "alt_text":"Vitality Booster (1100)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/1c/Vitality_Booster_icon.png/40px-Vitality_Booster_icon.png?version=a0c8c1e08a4d690c4700521abe552261",
    "from":[],
    "into":[76,78,38]
    },{
    "name":"Soul Booster",
    "url":"https://dota2.gamepedia.com/Soul_Booster",
    "alt_text":"Soul Booster (3200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/2f/Soul_Booster_icon.png/40px-Soul_Booster_icon.png?version=60a46eb1a0033fe5803964dd8301f6dc",
    "from":[8,77,116],
    "into":[79,115]
    },{
    "name":"Bloodstone",
    "url":"https://dota2.gamepedia.com/Bloodstone",
    "alt_text":"Bloodstone (4850)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/5a/Bloodstone_icon.png/40px-Bloodstone_icon.png?version=f3d510f300112e524cc0fed2f1abe7a0",
    "from":[78,80],
    "into":[]
    },{
    "name":"Soul Ring",
    "url":"https://dota2.gamepedia.com/Soul_Ring",
    "alt_text":"Soul Ring (750)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/a/a6/Soul_Ring_icon.png/40px-Soul_Ring_icon.png?version=5ee965fd95fd8cd24399327aff09331d",
    "from":[81,69,114],
    "into":[79]
    },{
    "name":"Ring of Regen",
    "url":"https://dota2.gamepedia.com/Ring_of_Regen",
    "alt_text":"Ring of Regen (325)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/6d/Ring_of_Regen_icon.png/40px-Ring_of_Regen_icon.png?version=c44487a77d7a2ff2701369fc538bfc54",
    "from":[],
    "into":[82,84,101,80]
    },{
    "name":"Headdress",
    "url":"https://dota2.gamepedia.com/Headdress",
    "alt_text":"Headdress (675)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/0/03/Headdress_icon.png/40px-Headdress_icon.png?version=8e119c6b5ba6d3fe8359ad15371f756c",
    "from":[81,94],
    "into":[83,35,71,90]
    },{
    "name":"Pipe of Insight",
    "url":"https://dota2.gamepedia.com/Pipe_of_Insight",
    "alt_text":"Pipe of Insight (3200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/76/Pipe_of_Insight_icon.png/40px-Pipe_of_Insight_icon.png?version=8a497ef92587d36f3047340549119a2a",
    "from":[84,82],
    "into":[]
    },{
    "name":"Hood of Defiance",
    "url":"https://dota2.gamepedia.com/Hood_of_Defiance",
    "alt_text":"Hood of Defiance (1725)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/a/ad/Hood_of_Defiance_icon.png/40px-Hood_of_Defiance_icon.png?version=d62c53c63a187cffee64cec375ad4315",
    "from":[85,91,81],
    "into":[83]
    },{
    "name":"Ring of Health",
    "url":"https://dota2.gamepedia.com/Ring_of_Health",
    "alt_text":"Ring of Health (850)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/29/Ring_of_Health_icon.png/40px-Ring_of_Health_icon.png?version=b42463d74b4d227e0b86e3dce497e65c",
    "from":[],
    "into":[84,1,38,86,90]
    },{
    "name":"Force Staff",
    "url":"https://dota2.gamepedia.com/Force_Staff",
    "alt_text":"Force Staff (2250)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/a/a2/Force_Staff_icon.png/40px-Force_Staff_icon.png?version=8ab737dfac012c9b9462658d0e4f73dd",
    "from":[23,85],
    "into":[87]
    },{
    "name":"Hurricane Pike",
    "url":"https://dota2.gamepedia.com/Hurricane_Pike",
    "alt_text":"Hurricane Pike (4650)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/13/Hurricane_Pike_icon.png/40px-Hurricane_Pike_icon.png?version=abdbbe336a2b46b45598e3b392833ba9",
    "from":[86,88],
    "into":[]
    },{
    "name":"Dragon Lance",
    "url":"https://dota2.gamepedia.com/Dragon_Lance",
    "alt_text":"Dragon Lance (1900)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/db/Dragon_Lance_icon.png/40px-Dragon_Lance_icon.png?version=fb2889f946f18f89ad44f44fbd320995",
    "from":[10,89,89],
    "into":[87]
    },{
    "name":"Band of Elvenskin",
    "url":"https://dota2.gamepedia.com/Band_of_Elvenskin",
    "alt_text":"Band of Elvenskin (450)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/c/ca/Band_of_Elvenskin_icon.png/40px-Band_of_Elvenskin_icon.png?version=b77d28e41e6e39dff89264593d2d839c",
    "from":[],
    "into":[31,59,88]
    },{
    "name":"Helm of the Dominator",
    "url":"https://dota2.gamepedia.com/Helm_of_the_Dominator",
    "alt_text":"Helm of the Dominator (2025)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/97/Helm_of_the_Dominator_icon.png/40px-Helm_of_the_Dominator_icon.png?version=8b5b548dd0259dbe5dd3afe8f5968aec",
    "from":[29,82,85],
    "into":[]
    },{
    "name":"Cloak",
    "url":"https://dota2.gamepedia.com/Cloak",
    "alt_text":"Cloak (550)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/21/Cloak_icon.png/40px-Cloak_icon.png?version=479c3b58116af7669e8050aefc07ddf9",
    "from":[],
    "into":[84,92]
    },{
    "name":"Glimmer Cape",
    "url":"https://dota2.gamepedia.com/Glimmer_Cape",
    "alt_text":"Glimmer Cape (1850)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/c/ce/Glimmer_Cape_icon.png/40px-Glimmer_Cape_icon.png?version=ffddf1d3483edd78b2763714df48e4ea",
    "from":[93,91],
    "into":[]
    },{
    "name":"Shadow Amulet",
    "url":"https://dota2.gamepedia.com/Shadow_Amulet",
    "alt_text":"Shadow Amulet (1300)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/0/07/Shadow_Amulet_icon.png/40px-Shadow_Amulet_icon.png?version=f8f77197cc68a5e2ab966866f7bd7553",
    "from":[],
    "into":[4,92]
    },{
    "name":"Iron Branch",
    "url":"https://dota2.gamepedia.com/Iron_Branch",
    "alt_text":"Iron Branch (50)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/a/a3/Iron_Branch_icon.png/40px-Iron_Branch_icon.png?version=9305017eac6cc867a950fcaefaf0dc25",
    "from":[],
    "into":[82,95,36]
    },{
    "name":"Magic Wand",
    "url":"https://dota2.gamepedia.com/Magic_Wand",
    "alt_text":"Magic Wand (465)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/74/Magic_Wand_icon.png/40px-Magic_Wand_icon.png?version=d9ec720c14a0a8f763817dab41595bb6",
    "from":[96,94,94,97],
    "into":[]
    },{
    "name":"Magic Stick",
    "url":"https://dota2.gamepedia.com/Magic_Stick",
    "alt_text":"Magic Stick (200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/59/Magic_Stick_icon.png/40px-Magic_Stick_icon.png?version=066e22624a26edddddec069ac350ddf6",
    "from":[],
    "into":[95]
    },{
    "name":"Circlet",
    "url":"https://dota2.gamepedia.com/Circlet",
    "alt_text":"Circlet (165)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/28/Circlet_icon.png/40px-Circlet_icon.png?version=2474b07ceceb859a1723143f2add9d68",
    "from":[],
    "into":[98,25,104,95,109]
    },{
    "name":"Bracer",
    "url":"https://dota2.gamepedia.com/Bracer",
    "alt_text":"Bracer (490)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/6e/Bracer_icon.png/40px-Bracer_icon.png?version=65e646ede0ff22c0570df53cffba1d83",
    "from":[97,103],
    "into":[99,102]
    },{
    "name":"Drum of Endurance",
    "url":"https://dota2.gamepedia.com/Drum_of_Endurance",
    "alt_text":"Drum of Endurance (1640)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/91/Drum_of_Endurance_icon.png/40px-Drum_of_Endurance_icon.png?version=56883ca664abb604784073f1dd461a13",
    "from":[98,69,100],
    "into":[]
    },{
    "name":"Wind Lace",
    "url":"https://dota2.gamepedia.com/Wind_Lace",
    "alt_text":"Wind Lace (250)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/91/Wind_Lace_icon.png/40px-Wind_Lace_icon.png?version=ca80917cb6bcaf93598047a80f8f0291",
    "from":[],
    "into":[22,99,101]
    },{
    "name":"Tranquil Boots",
    "url":"https://dota2.gamepedia.com/Tranquil_Boots",
    "alt_text":"Tranquil Boots (975)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/23/Tranquil_Boots_%28Active%29_icon.png/40px-Tranquil_Boots_%28Active%29_icon.png?version=6649b51783d8676d744402d3e0b86fbd",
    "from":[32,100,81],
    "into":[]
    },{
    "name":"Rod of Atos",
    "url":"https://dota2.gamepedia.com/Rod_of_Atos",
    "alt_text":"Rod of Atos (3080)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/66/Rod_of_Atos_icon.png/40px-Rod_of_Atos_icon.png?version=7c26c281555e4a7f268ced11aca27860",
    "from":[23,98,98],
    "into":[]
    },{
    "name":"Gauntlets of Strength",
    "url":"https://dota2.gamepedia.com/Gauntlets_of_Strength",
    "alt_text":"Gauntlets of Strength (150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/8/88/Gauntlets_of_Strength_icon.png/40px-Gauntlets_of_Strength_icon.png?version=2ae1f4b5a7736d615503ba41dad7c77c",
    "from":[],
    "into":[98]
    },{
    "name":"Wraith Band",
    "url":"https://dota2.gamepedia.com/Wraith_Band",
    "alt_text":"Wraith Band (485)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/55/Wraith_Band_icon.png/40px-Wraith_Band_icon.png?version=a3aa9f232093620ece155ffea7331577",
    "from":[97,106],
    "into":[105]
    },{
    "name":"Ring of Aquila",
    "url":"https://dota2.gamepedia.com/Ring_of_Aquila",
    "alt_text":"Ring of Aquila (985)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/3f/Ring_of_Aquila_%28Active%29_icon.png/40px-Ring_of_Aquila_%28Active%29_icon.png?version=64be81ba6e0fd7d619711f3137e219a9",
    "from":[104,70],
    "into":[]
    },{
    "name":"Slippers of Agility",
    "url":"https://dota2.gamepedia.com/Slippers_of_Agility",
    "alt_text":"Slippers of Agility (150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/5c/Slippers_of_Agility_icon.png/40px-Slippers_of_Agility_icon.png?version=30e432cf0dab2d4c94a810ef0c7f0db1",
    "from":[],
    "into":[107,104]
    },{
    "name":"Poor Man's Shield",
    "url":"https://dota2.gamepedia.com/Poor_Man%27s_Shield",
    "alt_text":"Poor Man's Shield (500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/11/Poor_Man%27s_Shield_icon.png/40px-Poor_Man%27s_Shield_icon.png?version=92abba3618e804584ad880dcfbf6fae8",
    "from":[108,106,106],
    "into":[]
    },{
    "name":"Stout Shield",
    "url":"https://dota2.gamepedia.com/Stout_Shield",
    "alt_text":"Stout Shield (200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/0/01/Stout_Shield_icon.png/40px-Stout_Shield_icon.png?version=57b0ea7e2c80b70627a7b181db0bb22e",
    "from":[],
    "into":[107,38]
    },{
    "name":"Urn of Shadows",
    "url":"https://dota2.gamepedia.com/Urn_of_Shadows",
    "alt_text":"Urn of Shadows (875)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/5/58/Urn_of_Shadows_icon.png/40px-Urn_of_Shadows_icon.png?version=4b768bc5005558df3bcb994314259a40",
    "from":[110,97,111],
    "into":[]
    },{
    "name":"Infused Raindrop",
    "url":"https://dota2.gamepedia.com/Infused_Raindrop",
    "alt_text":"Infused Raindrop (225)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/de/Infused_Raindrop_icon.png/40px-Infused_Raindrop_icon.png?version=713176a832d050cfb2474b1291cbd56b",
    "from":[],
    "into":[109]
    },{
    "name":"Ring of Protection",
    "url":"https://dota2.gamepedia.com/Ring_of_Protection",
    "alt_text":"Ring of Protection (175)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/3b/Ring_of_Protection_icon.png/40px-Ring_of_Protection_icon.png?version=74cf34598f1755f2376ae31c18db7944",
    "from":[],
    "into":[70,112,109]
    },{
    "name":"Iron Talon",
    "url":"https://dota2.gamepedia.com/Iron_Talon",
    "alt_text":"Iron Talon (500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/8/89/Iron_Talon_icon.png/40px-Iron_Talon_icon.png?version=29f1907c0e615335618282f938571de4",
    "from":[113,111],
    "into":[]
    },{
    "name":"Quelling Blade",
    "url":"https://dota2.gamepedia.com/Quelling_Blade",
    "alt_text":"Quelling Blade (200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/94/Quelling_Blade_icon.png/40px-Quelling_Blade_icon.png?version=35e21605ce1657637f63c1f0dc8a5cdc",
    "from":[],
    "into":[2,112]
    },{
    "name":"Enchanted Mango",
    "url":"https://dota2.gamepedia.com/Enchanted_Mango",
    "alt_text":"Enchanted Mango (100)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/70/Enchanted_Mango_icon.png/40px-Enchanted_Mango_icon.png?version=3c3d2acee2e353787835264c1c205478",
    "from":[],
    "into":[80]
    },{
    "name":"Octarine Core",
    "url":"https://dota2.gamepedia.com/Octarine_Core",
    "alt_text":"Octarine Core (5900)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/1/13/Octarine_Core_icon.png/40px-Octarine_Core_icon.png?version=484957670b244976c56822a8932d09b2",
    "from":[19,78],
    "into":[]
    },{
    "name":"Energy Booster",
    "url":"https://dota2.gamepedia.com/Energy_Booster",
    "alt_text":"Energy Booster (900)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/72/Energy_Booster_icon.png/40px-Energy_Booster_icon.png?version=5c337a756039ff907e6cc62216878593",
    "from":[],
    "into":[33,78,117,118]
    },{
    "name":"Aether Lens",
    "url":"https://dota2.gamepedia.com/Aether_Lens",
    "alt_text":"Aether Lens (2350)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/d4/Aether_Lens_icon.png/40px-Aether_Lens_icon.png?version=66b2680a7858f079c410774a898fe26e",
    "from":[116,21],
    "into":[]
    },{
    "name":"Lotus Orb",
    "url":"https://dota2.gamepedia.com/Lotus_Orb",
    "alt_text":"Lotus Orb (4000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/c/c8/Lotus_Orb_icon.png/40px-Lotus_Orb_icon.png?version=acf051f363ea2ebc055837d84bf5d4af",
    "from":[1,17,116],
    "into":[]
    },{
    "name":"Blight Stone",
    "url":"https://dota2.gamepedia.com/Blight_Stone",
    "alt_text":"Blight Stone (300)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/98/Blight_Stone_icon.png/40px-Blight_Stone_icon.png?version=6b87da41da189a536953a54fa42d106b",
    "from":[],
    "into":[120,67]
    },{
    "name":"Desolator",
    "url":"https://dota2.gamepedia.com/Desolator",
    "alt_text":"Desolator (3500)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/8/84/Desolator_icon.png/40px-Desolator_icon.png?version=c643bb718834405e301dd0ee1f12fdff",
    "from":[12,12,119],
    "into":[]
    },{
    "name":"Belt of Strength",
    "url":"https://dota2.gamepedia.com/Belt_of_Strength",
    "alt_text":"Belt of Strength (450)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/f6/Belt_of_Strength_icon.png/40px-Belt_of_Strength_icon.png?version=427adc2d0a0d7c6403c25053e68e32ec",
    "from":[],
    "into":[40,122,31,57]
    },{
    "name":"Necronomicon",
    "url":"https://dota2.gamepedia.com/Necronomicon",
    "alt_text":"Necronomicon (2650)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/30/Necronomicon_1_icon.png/40px-Necronomicon_1_icon.png?version=62b852f74725a330e579e7b746d53dc8",
    "from":[23,121],
    "into":[]
    },{
    "name":"Blades of Attack",
    "url":"https://dota2.gamepedia.com/Blades_of_Attack",
    "alt_text":"Blades of Attack (420)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/e/ed/Blades_of_Attack_icon.png/40px-Blades_of_Attack_icon.png?version=dd9761347e0876fa802b4a409827b143",
    "from":[],
    "into":[28,45,124]
    },{
    "name":"Phase Boots",
    "url":"https://dota2.gamepedia.com/Phase_Boots",
    "alt_text":"Phase Boots (1240)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/9/98/Phase_Boots_icon.png/40px-Phase_Boots_icon.png?version=a8d823f332965193cbde405defccc3b7",
    "from":[32,123,123],
    "into":[]
    },{
    "name":"Divine Rapier",
    "url":"https://dota2.gamepedia.com/Divine_Rapier",
    "alt_text":"Divine Rapier (6000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/b/b1/Divine_Rapier_icon.png/40px-Divine_Rapier_icon.png?version=6d7b9350f25e2345bb7e8b185ea0f373",
    "from":[126,43],
    "into":[]
    },{
    "name":"Sacred Relic",
    "url":"https://dota2.gamepedia.com/Sacred_Relic",
    "alt_text":"Sacred Relic (3800)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/7/7c/Sacred_Relic_icon.png/40px-Sacred_Relic_icon.png?version=4ee079e55bd5d5aa022890d05729b590",
    "from":[],
    "into":[125,127]
    },{
    "name":"Radiance",
    "url":"https://dota2.gamepedia.com/Radiance",
    "alt_text":"Radiance (5150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/d/df/Radiance_%28Active%29_icon.png/40px-Radiance_%28Active%29_icon.png?version=75febfb161a47fee282a8c2030c8b426",
    "from":[126],
    "into":[]
    },{
    "name":"Boots of Travel",
    "url":"https://dota2.gamepedia.com/Boots_of_Travel",
    "alt_text":"Boots of Travel (2400)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/6/6d/Boots_of_Travel_1_icon.png/40px-Boots_of_Travel_1_icon.png?version=9eb2b6af19cb82d9c9b205d1708be202",
    "from":[32],
    "into":[]
    },{
    "name":"Mantle of Intelligence",
    "url":"https://dota2.gamepedia.com/Mantle_of_Intelligence",
    "alt_text":"Mantle of Intelligence (150)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/c/cf/Mantle_of_Intelligence_icon.png/40px-Mantle_of_Intelligence_icon.png?version=c9f61c17f484b132748dc34c80e38f58",
    "from":[],
    "into":[25]
    },{
    "name":"Moon Shard",
    "url":"https://dota2.gamepedia.com/Moon_Shard",
    "alt_text":"Moon Shard (4000)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/2/21/Moon_Shard_icon.png/40px-Moon_Shard_icon.png?version=4524265442bbbed20e4a97c0acd3d6e1",
    "from":[15,15],
    "into":[]
    },{
    "name":"Orb of Venom",
    "url":"https://dota2.gamepedia.com/Orb_of_Venom",
    "alt_text":"Orb of Venom (275)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/3/35/Orb_of_Venom_icon.png/40px-Orb_of_Venom_icon.png?version=c7a0d216e9eda4ff228b4b144d2471ae",
    "from":[],
    "into":[7]
    },{
    "name":"Refresher Orb",
    "url":"https://dota2.gamepedia.com/Refresher_Orb",
    "alt_text":"Refresher Orb (5200)",
    "img_url":"https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/e/e2/Refresher_Orb_icon.png/40px-Refresher_Orb_icon.png?version=27157cf95402370dcee997b9b0290822",
    "from":[1,1],
    "into":[]
    }];

window.onload = function(){
    current = Math.floor(Math.random()*items_data.length); 
    Next();
    ShowWantedItem();


    
};
function ShowWantedItem()
{
    wanted = Math.floor(Math.random()*items_data.length);
    var item = items_data[wanted];
    if (current == wanted)
        wanted= (wanted+1)%items_data.length+1;
    var name = document.getElementById("w_name");
    var link = document.getElementById("wanted");   
    name.innerText = "Wanted:"+item.name;
    Append(item,link);
   
    shortest_length = CalcAndDraw(true);    
    DrawScore();
    
}
function CalcAndDraw(show)
{
    let shortest = BFS(current,wanted);
    var button = document.getElementById("spoiler1");
    if (show)
        button.checked = false;
    var outer = document.getElementsByClassName("spoiler")[0];
    outer.innerHTML = "";
    for (var i=shortest.length-2;i>=0;i--)
    {
        let inner = document.createElement("a");
        Append(items_data[shortest[i]],inner);
        outer.appendChild(inner);
        
    }

    return shortest.length-1;
}
function Next()
{
    current_length +=1;
    var item = items_data[current];  
    var name = document.getElementById("name");
    var link = document.getElementById("current");   
    name.innerText = "Current:"+item.name;
    Append(item,link);
    var outer = document.getElementById("into");
    outer.innerHTML ="";
    for (let i=0;i<item.into.length;i++)
    {
            let inner = document.createElement("a");
            inner.className ="inner";
            var item_index = item.into[i];
            inner.dataset.index =item_index;
            inner.onclick = oc_handler
            Append(items_data[item_index],inner);
            outer.appendChild(inner);
    }
    outer = document.getElementById("from");
    outer.innerHTML = "";
    for (let i=0;i<item.from.length;i++)
    {
            let inner = document.createElement("a");
            inner.className ="inner";
            let item_index = item.from[i];
            inner.dataset.index =item_index;
            inner.onclick =  oc_handler;
            Append(items_data[item_index],inner);
         
            outer.appendChild(inner);
    }
    function oc_handler(e,item_index)
    {
        e.preventDefault();
        current = this.dataset.index;
        Next();
        CalcAndDraw();
    
       
    }
    if (current == wanted)
    {
            var diff = current_length-shortest_length;
            if (diff == 0)
            {
                    
                    score +=100 + bonus;
                    bonus+=50;
                 
            }
            else if (diff<=3)
            {
                    bonus = 0;
                    score +=50;
            }
            else 
            {
                bonus = 0;
                score =0;
            }
            current_length = 0;
            ShowWantedItem();
           
    }
}
function DrawScore()
{
    document.getElementById("bonus").innerText ="Bonus:"+bonus;
    document.getElementById("score").innerText ="Score:"+score;
    document.getElementById("length").innerHTML="Shortest:"+shortest_length;
}
function Append(item,link)
{

    link.href = item.url;1
    link.target ="_blank";    
    link.innerHTML ="";
    var img = document.createElement("img");
    img.src =item.img_url;
    img.title =item.alt_text;
    link.appendChild(img); 
    
}
function BFS(source,target)
{
 var queue = [];
 var visited  = [];
 queue.push(source);
 visited[source] = source;

 while (queue.length > 0)
{
    var v = queue.shift();
    var com = items_data[v].into.concat(items_data[v].from);
    for (var i=0;i<com.length;i++)
    {
        var item = com[i];
        if (visited[item]==undefined)
        {
            queue.push(item);
            visited[item] = v;
            if (item == target)
            {
            queue =[];
            break;
            }
        }
    }

}
let shortest =[];
shortest.push(target);
let next = target;
while (true)
{   
    next = visited[next];
    shortest.push(next);
    if (next == source)
        break;
}
return shortest;
}