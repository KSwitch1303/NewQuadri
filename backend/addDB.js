const mongoose = require('mongoose');
const YorubaWord = require('./models/yorubaWordsSchema.js');

const words = [
  {
    word: 'Dun',
    meanings: [
      { tone: 'Dún', definition: 'Sound' },
      { tone: 'Dùn', definition: 'Sweet' }
    ]
  },
  {
    word: 'Mi',
    meanings: [
      { tone: 'Mí', definition: 'Breathe' },
      { tone: 'Mì', definition: 'Shake' }
    ]
  },
  {
    word: 'Oba',
    meanings: [
      { tone: 'Ọba', definition: 'King' },
      { tone: 'Ọbà', definition: 'Name of Sango\'s wife' }
    ]
  },
  {
    word: 'Agbe',
    meanings: [
      { tone: 'Àgbẹ̀', definition: 'Farmer' },
      { tone: 'Agbẹ́', definition: 'Name of person' },
      { tone: 'Agbè', definition: 'Gourd' },
      { tone: 'Agbe', definition: 'Begging' },
      { tone: 'Àgbé', definition: 'Name of lineage' }
    ]
  },
  {
    word: 'Obo',
    meanings: [
      { tone: 'Ọ̀bọ̀', definition: 'Name of tree' },
      { tone: 'Ọ̀bọ', definition: 'Monkey' }
    ]
  },
  {
    word: 'Abo',
    meanings: [
      { tone: 'Abọ́', definition: 'Plate' },
      { tone: 'Abọ̀', definition: 'Welcome' }
    ]
  },
  {
    word: 'Sun',
    meanings: [
      { tone: 'Sùn', definition: 'Sleep' },
      { tone: 'Sún', definition: 'Move' },
      { tone: 'Sun', definition: '(Something increase)' }
    ]
  },
  {
    word: 'Ero',
    meanings: [
      { tone: 'Ẹ̀rọ', definition: 'Machine' },
      { tone: 'Ẹ̀rọ̀', definition: 'Ease' }
    ]
  },
  {
    word: 'Sokoto',
    meanings: [
      { tone: 'Ṣòkòtò', definition: 'Trousers' },
      { tone: 'Sókótó', definition: 'Name of a town' }
    ]
  },
  {
    word: 'Ebi',
    meanings: [
      { tone: 'Ẹbí', definition: 'Family' },
      { tone: 'Ẹ̀bi', definition: 'Fault' }
    ]
  },
  {
    word: 'Ibi',
    meanings: [
      { tone: 'Ìbí', definition: 'Lineage' },
      { tone: 'Ibí', definition: 'Here' },
      { tone: 'Ibi', definition: 'Placenta' },
      { tone: 'Ibi', definition: 'Bad' }
    ]
  },
  {
    word: 'Eja',
    meanings: [
      { tone: 'Ẹ̀já', definition: 'Doubt' },
      { tone: 'Ẹja', definition: 'Fish' }
    ]
  },
  {
    word: 'Asa',
    meanings: [
      { tone: 'Àṣà', definition: 'Culture' },
      { tone: 'Àṣá', definition: 'Lark' },
      { tone: 'Aṣà', definition: 'Name of a place' }
    ]
  },
  {
    word: 'Irun',
    meanings: [
      { tone: 'Irun', definition: 'Hair' },
      { tone: 'Ìrun', definition: 'Prayer done by Muslim' }
    ]
  },
  {
    word: 'Odi',
    meanings: [
      { tone: 'Òdí', definition: 'Ifá corpus' },
      { tone: 'Odi', definition: 'Dumb' },
      { tone: 'Òdí', definition: 'Arẹ̀ṣà lineage' }
    ]
  },
  {
    word: 'Ope',
    meanings: [
      { tone: 'Ọpẹ́', definition: 'Thank' },
      { tone: 'Ọ̀pẹ́', definition: 'Palm tree' },
      { tone: 'Ọ̀pẹ́', definition: 'Unmoving object' }
    ]
  },
  {
    word: 'Agbon',
    meanings: [
      { tone: 'Agbọ́n', definition: 'Wasp' },
      { tone: 'Àgbọn', definition: 'Coconut' },
      { tone: 'Àgbọ̀n', definition: 'Chin' },
      { tone: 'Agbọ̀n', definition: 'Basket' }
    ]
  },
  {
    word: 'Ogbon',
    meanings: [
      { tone: 'Ọgbọ́n', definition: 'Wisdom' },
      { tone: 'Ọgbọ́n', definition: 'Thirty' }
    ]
  },
  {
    word: 'Iru',
    meanings: [
      { tone: 'Irú', definition: 'Locust beans' },
      { tone: 'Ìrù', definition: 'Tail' }
    ]
  },
  {
    word: 'Ere',
    meanings: [
      { tone: 'Eré', definition: 'Play' },
      { tone: 'Èrè', definition: 'Gain' },
      { tone: 'Ère', definition: 'Statue' }
    ]
  },
  {
    word: 'Ojo',
    meanings: [
      { tone: 'Òjó', definition: 'Name of a person' },
      { tone: 'Òjó', definition: 'Rain' },
      { tone: 'Ojo', definition: 'Coward' }
    ]
  },
  {
    word: 'Esi',
    meanings: [
      { tone: 'Èsì', definition: 'Response' },
      { tone: 'Èsì', definition: 'Wild pig' }
    ]
  },
  {
    word: 'Olu',
    meanings: [
      { tone: 'Olú', definition: 'Mushroom' },
      { tone: 'Olú', definition: 'Name of a person' },
      { tone: 'Òlù', definition: 'Instrument used to press clothes in olden days' }
    ]
  },
  {
    word: 'Oluko',
    meanings: [
      { tone: 'Olùkọ́', definition: 'Teacher' },
      { tone: 'Olùkọ', definition: 'Someone who writes' },
      { tone: 'Olùkọ̀', definition: 'Activist' }
    ]
  },
  {
    word: 'Oye',
    meanings: [
      { tone: 'Òye', definition: 'Insight' },
      { tone: 'Oyè', definition: 'Title' }
    ]
  },
  {
    word: 'Eje',
    meanings: [
      { tone: 'Ẹ̀jẹ̀', definition: 'Blood' },
      { tone: 'Ẹ̀jẹ́', definition: 'Promise' }
    ]
  },
  {
    word: 'Je',
    meanings: [
      { tone: 'Jẹ', definition: 'Eat' },
      { tone: 'Jẹ́', definition: 'Become something' }
    ]
  },
  {
    word: 'Esin',
    meanings: [
      { tone: 'Ẹṣin', definition: 'Horse' },
      { tone: 'Ẹ̀sín', definition: 'Embarrassment' },
      { tone: 'Ẹ̀ṣìn', definition: 'Religion' }
    ]
  },
  {
    word: 'Ato',
    meanings: [
      { tone: 'Àtọ̀', definition: 'Sperm' },
      { tone: 'Atọ́', definition: 'Mini calabash' }
    ]
  },
  {
    word: 'Ese',
    meanings: [
      { tone: 'Ẹ̀ṣẹ̀', definition: 'Sin' },
      { tone: 'Ẹsẹ̀', definition: 'Leg' }
    ]
  },
  {
    word: 'Igbin',
    meanings: [
      { tone: 'Ìgbín', definition: 'Snail' },
      { tone: 'Igbìn', definition: "Obatala's drum" }
    ]
  },
  {
    word: 'Mu',
    meanings: [
      { tone: 'Mu', definition: 'Drink' },
      { tone: 'Mú', definition: 'Pick' }
    ]
  },
  {
    word: 'Ye',
    meanings: [
      { tone: 'Yé', definition: 'Understand' },
      { tone: 'Yè', definition: 'Survive' }
    ]
  },
  {
    word: 'Ha',
    meanings: [
      { tone: 'Há', definition: 'Distribute' },
      { tone: 'Ha', definition: 'Peel' }
    ]
  },
  {
    word: 'Ran',
    meanings: [
      { tone: 'Rán', definition: 'Send errand' },
      { tone: 'Ràn', definition: 'Help' },
      { tone: 'Rán', definition: 'Sew' }
    ]
  },
  {
    word: 'Du',
    meanings: [
      { tone: 'Dù', definition: 'To contest for position' },
      { tone: 'Dú', definition: 'Slaughter' }
    ]
  },
  {
    word: 'Re',
    meanings: [
      { tone: 'Rẹ̀', definition: 'Tire' },
      { tone: 'Rẹ', definition: 'To dye something' },
      { tone: 'Rẹ́', definition: 'Cut' }
    ]
  },
  {
    word: 'Ikun',
    meanings: [
      { tone: 'Ikùn', definition: 'Squirrel' },
      { tone: 'Ikùn', definition: 'Belly' },
      { tone: 'Ikun', definition: 'Mucus' }
    ]
  },
  {
    word: 'Bo',
    meanings: [
      { tone: 'Bọ̀', definition: 'Arrive' },
      { tone: 'Bọ́', definition: 'Feed' },
      { tone: 'Bọ̀', definition: 'Worship' }
    ]
  },
  {
    word: 'Irin',
    meanings: [
      { tone: 'Irin', definition: 'Iron' },
      { tone: 'Ìrìn', definition: 'Walking' }
    ]
  },
  {
    word: 'Iya',
    meanings: [
      { tone: 'Ìyá', definition: 'Mother' },
      { tone: 'Ìyà', definition: 'Beating' },
      { tone: 'Ìyá', definition: 'Name of leaf' }
    ]
  },
  {
    word: 'Eru',
    meanings: [
      { tone: 'Ẹ̀rù', definition: 'Fear' },
      { tone: 'Ẹrú', definition: 'Slave' },
      { tone: 'Ẹrù', definition: 'Luggage' }
    ]
  },
  {
    word: 'Eda',
    meanings: [
      { tone: 'Ẹ̀dà', definition: 'Duplicate of something' },
      { tone: 'Ẹ̀dá', definition: 'Human being' },
      { tone: 'Ẹ̀dà', definition: 'The name of disease' }
    ]
  },
  {
    word: 'Agba',
    meanings: [
      { tone: 'Àgbà', definition: 'Elder' },
      { tone: 'Àgbá', definition: 'Drum' },
      { tone: 'Agba', definition: 'Rope' }
    ]
  },
  {
    word: 'Ana',
    meanings: [
      { tone: 'Àná', definition: 'Yesterday' },
      { tone: 'Àna', definition: 'In law' }
    ]
  },
  {
    word: 'Apo',
    meanings: [
      { tone: 'Apó', definition: "Hunter's bag" },
      { tone: 'Àpò', definition: 'Pocket' }
    ]
  },
  {
    word: 'Igba',
    meanings: [
      { tone: 'Igba', definition: 'Two hundred' },
      { tone: 'Ìgbà', definition: 'Time' },
      { tone: 'Ìgbá', definition: 'Locust beans' }
    ]
  },
  {
    word: 'Pe',
    meanings: [
      { tone: 'Pé', definition: 'Complete' },
      { tone: 'Pé', definition: 'To come together' },
      { tone: 'Pè', definition: 'Call' }
    ]
  },
  {
    word: 'Ate',
    meanings: [
      { tone: 'Àtẹ', definition: 'Collection of something' },
      { tone: 'Àtẹ́', definition: 'Food without salt' }
    ]
  },
  {
    word: 'Aba',
    meanings: [
      { tone: 'Àbá', definition: 'Suggestion' },
      { tone: 'Àbá', definition: 'The name of an area in IBADAN' },
      { tone: 'Abá', definition: 'Village' }
    ]
  },
  {
    word: 'Gun',
    meanings: [
      { tone: 'Gùn', definition: 'Tall' },
      { tone: 'Gùn', definition: 'To climb something' },
      { tone: 'Gún', definition: 'Grind/Pound' }
    ]
  },
  {
    word: 'Be',
    meanings: [
      { tone: 'Bẹ̀', definition: 'Beg' },
      { tone: 'Bẹ', definition: 'To peel something' }
    ]
  },
  {
    word: 'Akoko',
    meanings: [
      { tone: 'Àkókò', definition: 'Time' },
      { tone: 'Àkókó', definition: 'The name of town in Ondo' }
    ]
  },
  {
    word: 'Obe',
    meanings: [
      { tone: 'Ọ̀bẹ', definition: 'Knife' },
      { tone: 'Ọbẹ̀', definition: 'Soup' }
    ]
  },
  {
    word: 'Ilu',
    meanings: [
      { tone: 'Ìlú', definition: 'Town' },
      { tone: 'Ìlù', definition: 'Drum' }
    ]
  },
  {
    word: 'Ko',
    meanings: [
      { tone: 'Kọ', definition: 'Write' },
      { tone: 'Kọ́', definition: 'Learn' },
      { tone: 'Kọ̀', definition: 'Against' }
    ]
  },
  {
    word: 'Mo',
    meanings: [
      { tone: 'Mọ̀', definition: 'Know' },
      { tone: 'Mọ́', definition: 'Clean' },
      { tone: 'Mọ', definition: 'Build' }
    ]
  },
  {
    word: 'Pon',
    meanings: [
      { tone: 'Pọ́n', definition: 'Ripe' },
      { tone: 'Pọ̀n', definition: 'Back' },
      { tone: 'Pọn', definition: 'Fetch' }
    ]
  },
  {
    word: 'Iba',
    meanings: [
      { tone: 'Ìbà', definition: 'Praise' },
      { tone: 'Ìbà', definition: 'The title of Kish\'s king' },
      { tone: 'Ibà', definition: 'Malaria' },
      { tone: 'Ibà', definition: 'The name of town in Osun state' }
    ]
  },
  {
    word: 'Keke',
    meanings: [
      { tone: 'Kẹ̀kẹ́', definition: 'Bicycle' },
      { tone: 'Kẹ́kẹ́', definition: 'A kind of tribal mark' }
    ]
  },
  {
    word: 'Aremo',
    meanings: [
      { tone: 'Àrẹ̀mọ̀', definition: 'Heir' },
      { tone: 'Arẹmọ', definition: 'The name of a place in Ibadan' }
    ]
  },
  {
    word: 'Emu',
    meanings: [
      { tone: 'Ẹmu', definition: 'Palmwine' },
      { tone: 'Ẹmu', definition: 'Plyer' },
      { tone: 'Ẹ̀mù', definition: 'The part in yam that is not suitable for eating' }
    ]
  },
  {
    word: 'Aran',
    meanings: [
      { tone: 'Àrán', definition: 'Velvet: Name of a cloth' },
      { tone: 'Àrán', definition: 'Name of a town in Kwara State' },
      { tone: 'Aràn', definition: 'Earthworm' }
    ]
  },
  {
    word: 'Titi',
    meanings: [
      { tone: 'Títì', definition: 'Road' },
      { tone: 'Títí', definition: 'Name of a person' }
    ]
  },
  {
    word: 'Ara',
    meanings: [
      { tone: 'Àrà', definition: 'Wonder' },
      { tone: 'Àrá', definition: 'Thunder' },
      { tone: 'Ara', definition: 'Body' }
    ]
  },
  {
    word: 'Eji',
    meanings: [
      { tone: 'Èjí', definition: 'Gap-tooth' },
      { tone: 'Eji', definition: 'Rain' },
      { tone: 'Èjì', definition: 'Two' }
    ]
  },
  {
    word: 'Yo',
    meanings: [
      { tone: 'Yọ̀', definition: 'Delight' },
      { tone: 'Yọ́', definition: 'Dissolve' },
      { tone: 'Yọ', definition: 'Remove' }
    ]
  },
  {
    word: 'Eta',
    meanings: [
      { tone: 'Ẹ̀ta', definition: 'Triplet' },
      { tone: 'Ẹtà', definition: 'Bush dog' },
      { tone: 'Ẹ̀ta', definition: 'Three' }
    ]
  },
  {
    word: 'Le',
    meanings: [
      { tone: 'Lé', definition: 'Pursue' },
      { tone: 'Le', definition: 'Hard' }
    ]
  },
  {
    word: 'Iwo',
    meanings: [
      { tone: 'Ìwó', definition: 'A town in Osun state' },
      { tone: 'Ìwo', definition: 'Horn' }
    ]
  },
  {
    word: 'Tan',
    meanings: [
      { tone: 'Tán', definition: 'Finish' },
      { tone: 'Tàn', definition: 'Deceive' },
      { tone: 'Tan', definition: 'Relate' }
    ]
  },
  {
    word: 'Ogbe',
    meanings: [
      { tone: 'Ọgbẹ̀', definition: 'An area in Oyo' },
      { tone: 'Ọgbẹ́', definition: 'Injury' }
    ]
  },
  {
    word: 'Oluwa',
    meanings: [
      { tone: 'Olúwa', definition: 'God' },
      { tone: 'Olùwà', definition: 'The subject of the sentence' },
      { tone: 'Olùwá', definition: 'The searcher / Finder' }
    ]
  },
  {
    word: 'Ose',
    meanings: [
      { tone: 'Ọ̀sẹ̀', definition: 'Week' },
      { tone: 'Ọṣẹ', definition: 'Soap' }
    ]
  },
  {
    word: 'Iwe',
    meanings: [
      { tone: 'Ìwé', definition: 'Book' },
      { tone: 'Iwe', definition: 'Gizzard' }
    ]
  },
  {
    word: 'Ododo',
    meanings: [
      { tone: 'Òdòdó', definition: 'Flower' },
      { tone: 'Òdodo', definition: 'Truth' }
    ]
  },
  {
    word: 'Eko',
    meanings: [
      { tone: 'Ẹ̀kọ́', definition: 'Education' },
      { tone: 'Ẹ̀kọ', definition: 'Pap' }
    ]
  },
  {
    word: 'Oko',
    meanings: [
      { tone: 'Ọkọ', definition: 'Husband' },
      { tone: 'Ọkọ̀', definition: 'Motor' },
      { tone: 'Ọkọ́', definition: 'Hoe' },
      { tone: 'Oko', definition: 'Farm' },
      { tone: 'Òkò', definition: 'Town' },
      { tone: 'Okó', definition: 'Pennis' }
    ]
  },
  {
    word: 'Oruko',
    meanings: [
      { tone: 'Orúkọ', definition: 'Name' },
      { tone: 'Òrúkọ', definition: 'Buck - Male goat' }
    ]
  },
  {
    word: 'Bata',
    meanings: [
      { tone: 'Bàtà', definition: 'Footwear' },
      { tone: 'Bàtá', definition: 'Sango drum' }
    ]
  },
  {
    word: 'Egba',
    meanings: [
      { tone: 'Ẹ̀gbá', definition: 'The name of a town' },
      { tone: 'Ẹgba', definition: 'Cane' },
      { tone: 'Ẹ̀gbà', definition: 'Jewelry' }
    ]
  },
  {
    word: 'Ifa',
    meanings: [
      { tone: 'Ifá', definition: 'Oracle' },
      { tone: 'Ìfà', definition: 'Inordinate gain' }
    ]
  },
  {
    word: 'Eye',
    meanings: [
      { tone: 'Ẹyẹ', definition: 'Bird' },
      { tone: 'Ẹ̀yẹ', definition: 'Celebration' }
    ]
  },
  {
    word: 'Ore',
    meanings: [
      { tone: 'Ọ̀rẹ́', definition: 'Friend' },
      { tone: 'Ọrẹ', definition: 'Charity' },
      { tone: 'Ọ̀rẹ̀', definition: 'Name of a town in Ondo State' }
    ]
  },
  {
    word: 'Ite',
    meanings: [
      { tone: 'Ìtẹ́', definition: 'Throne' },
      { tone: 'Itẹ́', definition: 'Cemetery' }
    ]
  },
  {
    word: 'Ete',
    meanings: [
      { tone: 'Ètè', definition: 'Lips' },
      { tone: 'Ète', definition: 'Pretence' }
    ]
  },
  {
    word: 'Otun',
    meanings: [
      { tone: 'Ọ̀tun', definition: 'New' },
      { tone: 'Ọ̀tún', definition: 'Right side' }
    ]
  },
  {
    word: 'Olori',
    meanings: [
      { tone: 'Olórí', definition: 'Leader' },
      { tone: 'Olorì', definition: 'Queen' },
      { tone: 'Olórì', definition: 'The name of a village in Oyo town' }
    ]
  },
  {
    word: 'Aga',
    meanings: [
      { tone: 'Àga', definition: 'Chair' },
      { tone: 'Agà', definition: 'Ladder' }
    ]
  },
  {
    word: 'Egbe',
    meanings: [
      { tone: 'Ẹ̀gbẹ́', definition: 'Group' },
      { tone: 'Ẹ̀gbẹ́', definition: 'Side' },
      { tone: 'Ẹ̀gbẹ', definition: 'Name of disease (Prolonged gonorrhoeal)' }
    ]
  },
  {
    word: 'Agbada',
    meanings: [
      { tone: 'Agbada', definition: 'Frying pot' },
      { tone: 'Agbádá', definition: 'Flowing wide-sleeved robe' }
    ]
  },
  {
    word: 'Ekun',
    meanings: [
      { tone: 'Ẹkún', definition: 'Crying' },
      { tone: 'Ẹkùn', definition: 'Regional' },
      { tone: 'Ẹkùn', definition: 'Leopard' },
      { tone: 'Ẹ̀kún', definition: 'Complete' }
    ]
  },
  {
    word: 'Ina',
    meanings: [
      { tone: 'Iná', definition: 'Fire' },
      { tone: 'Ìná', definition: 'Cashew nut' }
    ]
  },
  {
    word: 'Ikoko',
    meanings: [
      { tone: 'Ìkòkò', definition: 'Pot' },
      { tone: 'Ìkókó', definition: 'New born' }
    ]
  },
  {
    word: 'Awo',
    meanings: [
      { tone: 'Àwọ̀', definition: 'Colour' },
      { tone: 'Awọ', definition: 'Skin' },
      { tone: 'Awó', definition: 'Guinea fowl' },
      { tone: 'Awo', definition: 'Initiator /Herbalist' },
      { tone: 'Awo', definition: 'Plate' },
    ]
  },
  {
    word: 'Oro',
    meanings: [
      { tone: 'Orò', definition: 'Ritual' },
      { tone: 'Oró', definition: 'Venom' },
      { tone: 'Òro', definition: 'Bushmango' },
      { tone: 'Òró', definition: 'A town in Kwara State' },
      { tone: 'Ọ̀rọ̀', definition: 'Word' },
      { tone: 'Orọ̀', definition: 'Wealth' },
    ]
  },
  {
    word: 'Iyan',
    meanings: [
      { tone: 'Iyán', definition: 'Pounded Yam' },
      { tone: 'Iyàn', definition: 'Argument' },
      { tone: 'Ìyàn', definition: 'Starve' }
    ]
  },
  {
    word: 'Igbo',
    meanings: [
      { tone: 'Igbó', definition: 'Bush' },
      { tone: 'Ìgbò', definition: 'Name of tribe' },
      { tone: 'Ígbò', definition: 'An ethnic in Nigeria' }
    ]
  },
  {
    word: 'Aso',
    meanings: [
      { tone: 'Aṣọ', definition: 'Cloth' },
      { tone: 'Aṣọ̀', definition: 'Conflict' }
    ]
  },
  {
    word: 'Ogun',
    meanings: [
      { tone: 'Ogún', definition: 'Twenty' },
      { tone: 'Ogún', definition: 'Inheritance' },
      { tone: 'Ògún', definition: 'god of iron' },
      { tone: 'Ogun', definition: 'War' },
      { tone: 'Ọ̀gùn', definition: 'Name of a town' }
    ]
  },
  {
    word: 'Eyin',
    meanings: [
      { tone: 'Ẹyin', definition: 'Egg' },
      { tone: 'Ẹ̀yìn', definition: 'Back' },
      { tone: 'Ẹ̀yin', definition: 'You' },
      { tone: 'Ẹyìn', definition: 'Palm fruit' }
    ]
  },
  {
    word: 'Ise',
    meanings: [
      { tone: 'Iṣẹ́', definition: 'Work' },
      { tone: 'Ìṣẹ́', definition: 'Poverty' }
    ]
  },
  {
    word: 'Odo',
    meanings: [
      { tone: 'Odò', definition: 'River' },
      { tone: 'Odó', definition: 'Mortar' }
    ]
  },
  {
    word: 'Ila',
    meanings: [
      { tone: 'Ilà', definition: 'Tribal mark' },
      { tone: 'Ìlá', definition: 'Name of a town in Osun State' },
      { tone: 'Ilá', definition: 'Okro' }
    ]
  },
  {
    word: 'Ilasa',
    meanings: [
      { tone: 'Ìlàṣà', definition: 'Another name for gun' },
      { tone: 'Ìlaṣa', definition: 'Okro leaf' }
    ]
  },
  {
    word: 'Owo',
    meanings: [
      { tone: 'Ọwọ́', definition: 'Hand' },
      { tone: 'Ọ̀wọ̀', definition: 'Respect' },
      { tone: 'Ọwọ̀', definition: 'Broom' }
    ]
  },
  {
    word: 'Oso',
    meanings: [
      { tone: 'Ọ̀ṣọ́', definition: 'Adornment' },
      { tone: 'Ọṣọ́', definition: 'Trap for catching animal' }
    ]
  },
  {
    word: 'Baba',
    meanings: [
      { tone: 'Bàbá', definition: 'Father' },
      { tone: 'Bàbà', definition: 'Millet' }
    ]
  },
  {
    word: 'Owu',
    meanings: [
      { tone: 'Òwú', definition: 'The name of a town' },
      { tone: 'Owú', definition: 'Jealousy' },
      { tone: 'Òwú', definition: 'Silk' }
    ]
  },
  {
    word: 'Omo',
    meanings: [
      { tone: 'Ọmọ', definition: 'Child' },
      { tone: 'Ọ̀mọ̀', definition: 'Name of a tree' }
    ]
  },
  {
    word: 'Oorun',
    meanings: [
      { tone: 'Òòrùn', definition: 'Sun' },
      { tone: 'Òórùn', definition: 'Smell' },
      { tone: 'Oorun', definition: 'Sleep' }
    ]
  },
  {
    word: 'Iko',
    meanings: [
      { tone: 'Ikọ́', definition: 'Cough' },
      { tone: 'Ikọ̀', definition: 'Organization' }
    ]
  },
  {
    word: 'Ede',
    meanings: [
      { tone: 'Ẹdẹ', definition: 'Town' },
      { tone: 'Ẹ̀dẹ̀', definition: 'Passage' },
      { tone: 'Ẹ̀dẹ', definition: 'Deceitful' },
      { tone: 'Èdè', definition: 'Language' },
      { tone: 'Edé', definition: 'Crayfish' }
    ]
  },
  {
    word: 'Aja',
    meanings: [
      { tone: 'Ajá', definition: 'Dog' },
      { tone: 'Àjà', definition: 'Roof' }
    ]
  },
  {
    word: 'Oyan',
    meanings: [
      { tone: 'Ọyàn', definition: 'Breast' },
      { tone: 'Ọ̀yán', definition: 'Town' }
    ]
  },
  {
    word: 'Aro',
    meanings: [
      { tone: 'Arọ', definition: 'Disabled person' },
      { tone: 'Àrọ̀', definition: 'Catfish' }
    ]
  },
  {
    word: 'Were',
    meanings: [
      { tone: 'Wèrè', definition: 'Madness' },
      { tone: 'Wéré', definition: 'Hurry' }
    ]
  },
  {
    word: 'Osu',
    meanings: [
      { tone: 'Oṣù', definition: 'Month' },
      { tone: 'Òsú', definition: 'Name of a town' }
    ]
  },
  {
    word: 'Ki',
    meanings: [
      { tone: 'Kí', definition: 'Greet' },
      { tone: 'Kì', definition: 'Praise' }
    ]
  },
  {
    word: 'Ojiji',
    meanings: [
      { tone: 'Òjìjí', definition: 'Shadow' },
      { tone: 'Òjijì', definition: 'Suddenly' }
    ]
  },
  {
    word: 'Sonu',
    meanings: [
      { tone: 'Sọnù', definition: 'Lost' },
      { tone: 'Sọnú', definition: 'To remember something' }
    ]
  },
  {
    word: 'Saki',
    meanings: [
      { tone: 'Ṣakí', definition: 'Name of a town' },
      { tone: 'Sàkì', definition: 'Beef tripe' }
    ]
  },
  {
    word: 'Ku',
    meanings: [
      { tone: 'Kú', definition: 'Die' },
      { tone: 'Kù', definition: 'Remain' }
    ]
  },
  {
    word: 'La',
    meanings: [
      { tone: 'Lá', definition: 'Lick' },
      { tone: 'Là', definition: 'Open' }
    ]
  },
  {
    word: 'Ya',
    meanings: [
      { tone: 'Yá', definition: 'Borrow' },
      { tone: 'Yà', definition: 'Draw, take picture' }
    ]
  },
  {
    word: 'Isin',
    meanings: [
      { tone: 'Ìsìn', definition: 'Church service' },
      { tone: 'Ìsín', definition: 'small fish' }
    ]
  },
  {
    word: 'Wo',
    meanings: [
      { tone: 'Wò', definition: 'Look' },
      { tone: 'Wó', definition: 'Collapse' }
    ]
  },
  {
    word: 'Kun',
    meanings: [
      { tone: 'Kùn', definition: 'Murmur' },
      { tone: 'Kún', definition: 'Sufficient' }
    ]
  },
  {
    word: 'Da',
    meanings: [
      { tone: 'Dà', definition: 'To pour something' },
      { tone: 'Dá', definition: 'To pieces something' },
      { tone: 'Dà', definition: 'Betray' },
      { tone: 'Dá', definition: 'Create' },
      { tone: 'Dà', definition: 'To pour something' }
    ]
  },
  {
    word: 'So',
    meanings: [
      { tone: 'Sọ', definition: 'Talk' },
      { tone: 'Sọ́', definition: 'Guard' }
    ]
  },
  {
    word: 'Te',
    meanings: [
      { tone: 'Tẹ̀', definition: 'Press' },
      { tone: 'Tẹ́', definition: 'Embarrass' }
    ]
  },
  {
    word: 'Na',
    meanings: [
      { tone: 'Nà', definition: 'Beat' },
      { tone: 'Ná', definition: 'Spend' }
    ]
  },
  {
    word: 'Arun',
    meanings: [
      { tone: 'Àrún', definition: 'Five' },
      { tone: 'Àrùn', definition: 'Disease' }
    ]
  },
  {
    word: 'Ogidi',
    meanings: [
      { tone: 'Ògidì', definition: 'Original' },
      { tone: 'Ogidi', definition: 'The name of an area in Ilorin' }
    ]
  },
  {
    word: 'Ora',
    meanings: [
      { tone: 'Ọ̀rá', definition: 'Nylon' },
      { tone: 'Ọ̀rà', definition: 'Name of a town' }
    ]
  },
  {
    word: 'Mimo',
    meanings: [
      { tone: 'Mímọ́', definition: 'Holy' },
      { tone: 'Mímọ̀', definition: 'Knowledge' }
    ]
  },
  {
    word: 'Ota',
    meanings: [
      { tone: 'Ọ̀tá', definition: 'Enemy' },
      { tone: 'Ọ̀ta', definition: 'Bullet' }
    ]
  },
  {
    word: 'Agbara',
    meanings: [
      { tone: 'Àgbàrá', definition: 'Erosion' },
      { tone: 'Agbára', definition: 'Power' }
    ]
  },
  {
    word: 'Okuta',
    meanings: [
      { tone: 'Òkúta', definition: 'Stone' },
      { tone: 'Òkùtà', definition: 'Lack of sales' }
    ]
  },
  {
    word: 'Iro',
    meanings: [
      { tone: 'Irọ́', definition: 'Lying' },
      { tone: 'Irọ̀', definition: 'Mate' },
      { tone: 'Ìró', definition: 'News' },
      { tone: 'Ìró', definition: 'Sound' },
      { tone: 'Ìrò', definition: 'Wrapper' }
    ]
  },
  {
    word: 'Opolo',
    meanings: [
      { tone: 'Ọpọlọ', definition: 'Brain' },
      { tone: 'Ọ̀pọ̀lọ́', definition: 'Frog' }
    ]
  },
  {
    word: 'Okun',
    meanings: [
      { tone: 'Òkun', definition: 'Sea' },
      { tone: 'Okun', definition: 'Energy' },
      { tone: 'Okùn', definition: 'Rope' }
    ]
  },
  {
    word: 'Orun',
    meanings: [
      { tone: 'Ọ̀run', definition: 'Heaven' },
      { tone: 'Ọrùn', definition: 'Neck' }
    ]
  }
]

mongoose.connect('mongodb+srv://ureshi:passwordd@cluster0.gdzmsas.mongodb.net/words', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected to MongoDB');

  try {
    await YorubaWord.deleteMany({});
    console.log('Existing words removed');

    for (const word of words) {
      await YorubaWord.create(word);
      console.log(word);
    }
    console.log('New words inserted');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting words:', error);
    mongoose.connection.close();
  }
});