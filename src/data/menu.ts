export type MenuOption = {
  labelJa: string;
  labelEn: string;
  extraPrice: number;
};

export type MenuItem = {
  id: string;
  nameJa: string;
  nameEn: string;
  price: number;
  description: string;
  category: string;
  options?: {
    name: string;
    choices: MenuOption[];
  };
};

export const foodMenu: MenuItem[] = [
  // Quick Bites
  { id: 'f1', nameJa: '中札内枝豆', nameEn: 'Nakasatsunai Edamame', price: 550, description: 'Lightly salted boiled soybeans, a classic quick starter.', category: 'Quick Bites' },
  { id: 'f2', nameJa: 'たこわさび', nameEn: 'Octopus with Wasabi', price: 550, description: 'Raw octopus marinated in a spicy wasabi sauce.', category: 'Quick Bites' },
  { id: 'f3', nameJa: '梅水晶', nameEn: 'Shark Cartilage with Plum Sauce (Ume Suisho)', price: 550, description: 'Crunchy shark cartilage mixed with refreshing sour plum paste.', category: 'Quick Bites' },
  { id: 'f4', nameJa: 'おつまみメンマ', nameEn: 'Seasoned Bamboo Shoots', price: 550, description: 'Savory marinated bamboo shoots.', category: 'Quick Bites' },
  { id: 'f5', nameJa: '新生姜', nameEn: 'Fresh Pickled Ginger', price: 550, description: 'Refreshing sweet and sour pickled young ginger.', category: 'Quick Bites' },
  { id: 'f6', nameJa: '冷やしトマト', nameEn: 'Chilled Tomato', price: 600, description: 'Fresh, cold sliced tomatoes.', category: 'Quick Bites' },
  { id: 'f7', nameJa: '日替わり漬物盛り合わせ', nameEn: 'Assorted Pickles (Daily Selection)', price: 880, description: 'A selection of traditional Japanese pickled vegetables.', category: 'Quick Bites' },
  { id: 'f8', nameJa: '燻製塩辛', nameEn: 'Smoked Squid Shiokara', price: 550, description: 'Salted and fermented squid with a rich smoky flavor.', category: 'Quick Bites' },
  { id: 'f9', nameJa: 'たくあんラー油ねぎまみれ', nameEn: 'Takuwan with Chili Oil & Green Onion', price: 680, description: 'Pickled daikon radish topped with spicy chili oil and plenty of green onions.', category: 'Quick Bites' },
  { id: 'f10', nameJa: 'いぶりがっこクリームチーズ', nameEn: 'Smoked Daikon Pickle with Cream Cheese', price: 680, description: 'A perfect pairing of smoky crunchy radish and smooth cream cheese.', category: 'Quick Bites' },

  // Salads
  { id: 's1', nameJa: '味扉ラーメンサラダ', nameEn: 'Ajito Ramen Noodle Salad', price: 1180, description: 'A Hokkaido specialty: chilled ramen noodles served as a salad with fresh vegetables and dressing.', category: 'Salads' },
  { id: 's2', nameJa: 'トマトのカプレーゼ', nameEn: 'Tomato Caprese', price: 980, description: 'Fresh tomatoes and mozzarella cheese.', category: 'Salads' },
  { id: 's3', nameJa: '温玉シーザーサラダ', nameEn: 'Caesar Salad with Soft-Boiled Egg', price: 980, description: 'Classic Caesar salad topped with a rich, soft-boiled egg.', category: 'Salads' },
  { id: 's4', nameJa: '自家製タルタルの揚げポテトサラダ', nameEn: 'Fried Potato Salad with Homemade Tartar Sauce', price: 680, description: 'Unique potato salad featuring fried potatoes and rich tartar sauce.', category: 'Salads' },
  { id: 's5', nameJa: '塩だれキャベツ', nameEn: 'Cabbage with Salt Sauce', price: 550, description: 'Crispy fresh cabbage leaves tossed in a savory garlic-salt sauce.', category: 'Salads' },

  // Meat Sashimi
  { id: 'ms1', nameJa: 'マトンユッケ', nameEn: 'Mutton Yukhoe (Seasoned Raw Mutton)', price: 1080, description: 'Thinly sliced raw mutton seasoned with a savory and sweet sauce, topped with egg yolk.', category: 'Meat Sashimi' },
  { id: 'ms2', nameJa: 'ラム刺し', nameEn: 'Lamb Sashimi', price: 1580, description: 'Fresh, tender slices of raw lamb.', category: 'Meat Sashimi' },
  { id: 'ms3', nameJa: 'とりわさ', nameEn: 'Chicken with Wasabi', price: 680, description: 'Lightly seared chicken served with spicy wasabi.', category: 'Meat Sashimi' },
  { id: 'ms4', nameJa: '塩だれささみ', nameEn: 'Chicken Tenderloin with Salt Sauce', price: 680, description: 'Lightly seared chicken tenderloin with a savory salt sauce.', category: 'Meat Sashimi' },
  { id: 'ms5', nameJa: 'とりしそわさび', nameEn: 'Chicken with Shiso & Wasabi', price: 680, description: 'Lightly seared chicken with refreshing shiso leaf and wasabi.', category: 'Meat Sashimi' },
  { id: 'ms6', nameJa: 'とりぽん', nameEn: 'Chicken with Ponzu Sauce', price: 680, description: 'Lightly seared chicken served with citrus soy sauce.', category: 'Meat Sashimi' },
  { id: 'ms7', nameJa: '小樽地鶏たたき', nameEn: 'Otaru Local Chicken Tataki', price: 680, description: 'Seared local chicken from Otaru, raw on the inside.', category: 'Meat Sashimi' },
  { id: 'ms8', nameJa: '馬肉ユッケ', nameEn: 'Horse Meat Yukhoe', price: 680, description: 'Seasoned raw horse meat with egg yolk.', category: 'Meat Sashimi' },

  // Fried Dishes
  { id: 'fr1', nameJa: '特製ザンギ', nameEn: 'Special Zangi (Hokkaido Fried Chicken)', price: 780, description: 'Hokkaido-style deep-fried chicken, marinated in a rich soy-ginger-garlic sauce.', category: 'Fried Dishes' },
  { id: 'fr2', nameJa: '大根のから揚げ', nameEn: 'Deep-Fried Daikon Radish', price: 600, description: 'Crispy on the outside, juicy and flavorful on the inside.', category: 'Fried Dishes' },
  { id: 'fr3', nameJa: 'レバーザンギ', nameEn: 'Fried Chicken Liver (Zangi Style)', price: 680, description: 'Deep-fried chicken liver marinated in Hokkaido style.', category: 'Fried Dishes' },
  { id: 'fr4', nameJa: 'タコのから揚げ', nameEn: 'Fried Octopus', price: 780, description: 'Crispy bite-sized pieces of deep-fried octopus.', category: 'Fried Dishes' },
  { id: 'fr5', nameJa: 'チーズ春巻き', nameEn: 'Cheese Spring Rolls', price: 500, description: 'Crispy spring rolls filled with melted cheese.', category: 'Fried Dishes' },
  { id: 'fr6', nameJa: 'フライドポテト', nameEn: 'French Fries', price: 500, description: 'Classic crispy potato fries.', category: 'Fried Dishes' },
  { id: 'fr7', nameJa: 'ガーリックシュリンプ', nameEn: 'Garlic Shrimp', price: 800, description: 'Shrimp cooked in a rich garlic butter sauce.', category: 'Fried Dishes' },
  { id: 'fr8', nameJa: '氷下魚唐揚げ', nameEn: 'Fried Hokkai Fish (Icefish)', price: 720, description: 'Deep-fried Komai (saffron cod), a northern specialty.', category: 'Fried Dishes' },
  { id: 'fr9', nameJa: '軟骨唐揚げ', nameEn: 'Fried Chicken Cartilage', price: 720, description: 'Crunchy deep-fried chicken cartilage, a perfect beer snack.', category: 'Fried Dishes' },
  { id: 'fr10', nameJa: '鶏皮餃子', nameEn: 'Chicken Skin Gyoza', price: 780, description: 'Dumpling filling wrapped in crispy chicken skin instead of dough.', category: 'Fried Dishes' },
  { id: 'fr11', nameJa: 'オニオンリング', nameEn: 'Onion Rings', price: 600, description: 'Crispy battered onion rings.', category: 'Fried Dishes' },

  // A la carte
  { id: 'a1', nameJa: '餃子', nameEn: 'Gyoza (Japanese Dumplings)', price: 720, description: 'Pan-fried dumplings filled with minced pork and vegetables.', category: 'A la carte' },
  { id: 'a2', nameJa: 'エビマヨ', nameEn: 'Shrimp with Mayonnaise Sauce', price: 1580, description: 'Crispy shrimp tossed in a rich, sweet mayonnaise sauce.', category: 'A la carte' },
  { id: 'a3', nameJa: 'エビマヨハーフサイズ', nameEn: 'Shrimp with Mayonnaise Sauce (Half)', price: 1080, description: 'Half portion of crispy shrimp in mayo sauce.', category: 'A la carte' },
  { id: 'a4', nameJa: 'エビチリ', nameEn: 'Shrimp in Chili Sauce', price: 1680, description: 'Shrimp stir-fried in a sweet and spicy chili sauce.', category: 'A la carte' },
  { id: 'a5', nameJa: 'エビチリハーフ', nameEn: 'Shrimp in Chili Sauce (Half)', price: 1080, description: 'Half portion of shrimp in chili sauce.', category: 'A la carte' },
  { id: 'a6', nameJa: 'アヒージョ', nameEn: 'Ajillo (Garlic Oil Seafood/Vegetables)', price: 1080, description: 'Ingredients simmered in garlic and olive oil.', category: 'A la carte' },
  { id: 'a7', nameJa: '豚の角煮', nameEn: 'Braised Pork Belly', price: 980, description: 'Slow-cooked, melt-in-your-mouth pork belly in a sweet soy glaze.', category: 'A la carte' },
  { id: 'a8', nameJa: 'ホルモン鉄板焼き', nameEn: 'Grilled Pork Offal on Hot Plate', price: 880, description: 'Sizzling grilled pork offal with savory sauce.', category: 'A la carte' },

  // Charcoal-broiled
  { id: 'c1', nameJa: 'おまかせ串の盛り合わせ(10本)', nameEn: 'Chef’s Selection Skewers (10 pcs)', price: 1980, description: 'An assortment of 10 recommended charcoal-grilled skewers.', category: 'Charcoal-broiled' },
  { id: 'c2', nameJa: '国産厳選白レバー', nameEn: 'Premium Domestic White Chicken Liver', price: 200, description: 'Rich and creamy premium chicken liver skewer.', category: 'Charcoal-broiled' },
  { id: 'c3', nameJa: '国産鳥精肉', nameEn: 'Domestic Chicken Thigh Skewer', price: 200, description: 'Juicy grilled chicken thigh.', category: 'Charcoal-broiled' },
  { id: 'c4', nameJa: 'ハツ', nameEn: 'Chicken Heart', price: 200, description: 'Grilled chicken heart, tender with a slight crunch.', category: 'Charcoal-broiled' },
  { id: 'c5', nameJa: 'ささみ', nameEn: 'Chicken Tenderloin', price: 200, description: 'Healthy and lean chicken tenderloin skewer.', category: 'Charcoal-broiled', options: { name: 'Topping', choices: [{ labelJa: 'なし', labelEn: 'None', extraPrice: 0 }, { labelJa: '梅しそ', labelEn: 'Plum & Shiso', extraPrice: 50 }, { labelJa: 'おろしポン酢', labelEn: 'Grated Daikon with Ponzu', extraPrice: 50 }, { labelJa: 'わさび', labelEn: 'Wasabi', extraPrice: 50 }, { labelJa: 'チーズ', labelEn: 'Cheese', extraPrice: 50 }, { labelJa: '月見', labelEn: 'Raw Egg', extraPrice: 50 }, { labelJa: '明太子', labelEn: 'Spicy Cod Roe', extraPrice: 50 }] } },
  { id: 'c6', nameJa: 'つくね', nameEn: 'Chicken Meatball Skewer', price: 250, description: 'Flavorful minced chicken meatball grilled on a stick.', category: 'Charcoal-broiled', options: { name: 'Topping', choices: [{ labelJa: 'なし', labelEn: 'None', extraPrice: 0 }, { labelJa: '梅しそ', labelEn: 'Plum & Shiso', extraPrice: 50 }, { labelJa: 'おろしポン酢', labelEn: 'Grated Daikon with Ponzu', extraPrice: 50 }, { labelJa: '納豆', labelEn: 'Natto', extraPrice: 50 }, { labelJa: 'チーズ', labelEn: 'Cheese', extraPrice: 50 }, { labelJa: '月見', labelEn: 'Raw Egg', extraPrice: 50 }] } },
  { id: 'c7', nameJa: '鶏皮', nameEn: 'Chicken Skin', price: 250, description: 'Crispy and savory grilled chicken skin.', category: 'Charcoal-broiled' },
  { id: 'c8', nameJa: 'ポンポチ', nameEn: 'Chicken Tail (Fat)', price: 200, description: 'Rich and fatty chicken tail skewer.', category: 'Charcoal-broiled' },
  { id: 'c9', nameJa: '国産豚精肉', nameEn: 'Domestic Pork Skewer', price: 250, description: 'Juicy grilled pork skewer.', category: 'Charcoal-broiled' },
  { id: 'c10', nameJa: '新生姜豚巻き', nameEn: 'Pork-Wrapped Fresh Ginger', price: 200, description: 'Refreshing ginger wrapped in savory pork.', category: 'Charcoal-broiled' },
  { id: 'c11', nameJa: 'ラム', nameEn: 'Lamb Skewer', price: 350, description: 'Flavorful grilled lamb skewer.', category: 'Charcoal-broiled' },
  { id: 'c12', nameJa: 'ピーマンの肉詰め', nameEn: 'Stuffed Green Pepper with Meat', price: 300, description: 'Green pepper stuffed with minced meat and grilled.', category: 'Charcoal-broiled' },
  { id: 'c13', nameJa: 'しいたけの肉詰め', nameEn: 'Stuffed Shiitake Mushroom with Meat', price: 300, description: 'Shiitake mushroom stuffed with minced meat.', category: 'Charcoal-broiled' },
  { id: 'c14', nameJa: 'ねぎ', nameEn: 'Grilled Green Onion', price: 200, description: 'Sweet and charred green onion skewer.', category: 'Charcoal-broiled' },
  { id: 'c15', nameJa: 'しいたけ', nameEn: 'Grilled Shiitake Mushroom', price: 200, description: 'Savory grilled shiitake mushroom.', category: 'Charcoal-broiled' },
  { id: 'c16', nameJa: 'ピーマン', nameEn: 'Grilled Green Pepper', price: 200, description: 'Simple grilled green pepper.', category: 'Charcoal-broiled' },

  // Rice & Soba
  { id: 'r1', nameJa: 'おにぎり', nameEn: 'Rice Ball (Onigiri)', price: 350, description: 'Traditional Japanese rice ball.', category: 'Rice & Soba', options: { name: 'Filling', choices: [{ labelJa: 'かつお', labelEn: 'Bonito Flakes', extraPrice: 0 }, { labelJa: '明太子', labelEn: 'Spicy Cod Roe', extraPrice: 0 }, { labelJa: '昆布', labelEn: 'Kelp', extraPrice: 0 }] } },
  { id: 'r2', nameJa: '焼きおにぎり', nameEn: 'Grilled Rice Ball', price: 350, description: 'Rice ball grilled with a savory soy sauce glaze.', category: 'Rice & Soba' },
  { id: 'r3', nameJa: 'ゆめぴりか（お米）', nameEn: 'Yumepirika Rice (Hokkaido Premium Rice)', price: 300, description: 'A bowl of premium, sweet, and sticky white rice from Hokkaido.', category: 'Rice & Soba' },

  // Dessert
  { id: 'd1', nameJa: 'バニラアイス', nameEn: 'Vanilla Ice Cream', price: 420, description: 'Classic sweet vanilla ice cream.', category: 'Dessert' },
  { id: 'd2', nameJa: 'ゆずシャーベット', nameEn: 'Yuzu Sherbet', price: 420, description: 'Refreshing citrus sherbet made with Japanese Yuzu.', category: 'Dessert' },
];

export const drinkMenu: MenuItem[] = [
  // Beer
  { id: 'b1', nameJa: 'サッポロクラシック', nameEn: 'Sapporo Classic', price: 590, description: 'Hokkaido exclusive draft beer.', category: 'Beer' },
  { id: 'b2', nameJa: 'ノンアルコールビール', nameEn: 'Non-Alcohol Beer', price: 550, description: 'Alcohol-free beer.', category: 'Beer' },

  // Whisky
  { id: 'w1', nameJa: '角ウイスキー', nameEn: 'Kaku Whisky', price: 500, description: 'Classic Japanese whisky. (On the Rocks / With Water / Soda)', category: 'Whisky' },
  { id: 'w2', nameJa: '白州', nameEn: 'Hakushu Single Malt', price: 1500, description: 'Premium single malt whisky. (On the Rocks / With Water / Soda)', category: 'Whisky' },
  { id: 'w3', nameJa: '山崎', nameEn: 'Yamazaki Single Malt', price: 1500, description: 'Premium single malt whisky. (On the Rocks / With Water / Soda)', category: 'Whisky' },

  // Highballs
  { id: 'h1', nameJa: 'ハイボール', nameEn: 'Original Highball', price: 500, description: 'Whisky mixed with soda water.', category: 'Highballs' },
  { id: 'h2', nameJa: 'ジンジャーハイボール', nameEn: 'Ginger Highball', price: 530, description: 'Whisky mixed with ginger ale.', category: 'Highballs' },
  { id: 'h3', nameJa: 'コークハイボール', nameEn: 'Coke Highball', price: 530, description: 'Whisky mixed with cola.', category: 'Highballs' },

  // Shochu
  { id: 'sh1', nameJa: '二階堂 (麦)', nameEn: 'Nikaido (Barley Shochu)', price: 600, description: 'Smooth barley shochu.', category: 'Shochu' },
  { id: 'sh2', nameJa: 'いいちこ (麦)', nameEn: 'iichiko (Barley Shochu)', price: 600, description: 'Popular barley shochu.', category: 'Shochu' },
  { id: 'sh3', nameJa: '黒霧島 (芋)', nameEn: 'Kuro Kirishima (Sweet Potato Shochu)', price: 600, description: 'Rich sweet potato shochu.', category: 'Shochu' },
  { id: 'sh4', nameJa: '伊佐美 (芋)', nameEn: 'Isami (Sweet Potato Shochu)', price: 600, description: 'Traditional sweet potato shochu.', category: 'Shochu' },
  { id: 'sh5', nameJa: 'だいやめ (芋)', nameEn: 'Daiyame (Sweet Potato Shochu)', price: 600, description: 'Aromatic sweet potato shochu.', category: 'Shochu' },
  { id: 'sh6', nameJa: '三岳 (芋)', nameEn: 'Mitake (Sweet Potato Shochu)', price: 700, description: 'Premium sweet potato shochu.', category: 'Shochu' },
  { id: 'sh7', nameJa: '魔王 (芋)', nameEn: 'Maoh (Sweet Potato Shochu)', price: 1200, description: 'Highly sought-after premium sweet potato shochu.', category: 'Shochu' },
  { id: 'sh8', nameJa: '村尾 (芋)', nameEn: 'Murao (Kame-Tsubo Shochu)', price: 1500, description: 'Pot-aged premium sweet potato shochu.', category: 'Shochu' },
  { id: 'sh9', nameJa: '焼酎水割り', nameEn: 'Shochu + Water', price: 450, description: 'Standard shochu mixed with water.', category: 'Shochu' },
  { id: 'sh10', nameJa: '焼酎ソーダ割り', nameEn: 'Shochu + Soda', price: 450, description: 'Standard shochu mixed with soda.', category: 'Shochu' },
  { id: 'sh11', nameJa: 'ウーロンハイ', nameEn: 'Oolong Tea High', price: 480, description: 'Shochu mixed with Oolong tea.', category: 'Shochu' },
  { id: 'sh12', nameJa: '緑茶ハイ', nameEn: 'Green Tea High', price: 480, description: 'Shochu mixed with Green tea.', category: 'Shochu' },
  { id: 'sh13', nameJa: 'ジャスミンハイ', nameEn: 'Jasmine Tea High', price: 480, description: 'Shochu mixed with Jasmine tea.', category: 'Shochu' },

  // Sours
  { id: 'so1', nameJa: 'レモンサワー', nameEn: 'Lemon Sour', price: 500, description: 'Shochu with soda and lemon.', category: 'Sours' },
  { id: 'so2', nameJa: 'ぶどうサワー', nameEn: 'Grape Sour', price: 500, description: 'Shochu with soda and grape.', category: 'Sours' },
  { id: 'so3', nameJa: 'ライムサワー', nameEn: 'Lime Sour', price: 500, description: 'Shochu with soda and lime.', category: 'Sours' },
  { id: 'so4', nameJa: '梅干しサワー', nameEn: 'Salt Plum Sour', price: 500, description: 'Shochu with soda and salty plum.', category: 'Sours' },
  { id: 'so5', nameJa: 'パインサワー', nameEn: 'Pineapple Sour', price: 500, description: 'Shochu with soda and pineapple.', category: 'Sours' },
  { id: 'so6', nameJa: 'みかんサワー', nameEn: 'Mikan (Mandarin Orange) Sour', price: 500, description: 'Shochu with soda and mandarin orange.', category: 'Sours' },
  { id: 'so7', nameJa: 'キウイサワー', nameEn: 'Kiwi Sour', price: 500, description: 'Shochu with soda and kiwi.', category: 'Sours' },
  { id: 'so8', nameJa: '桃サワー', nameEn: 'Peach Sour', price: 500, description: 'Shochu with soda and peach.', category: 'Sours' },
  { id: 'so9', nameJa: 'アロエサワー', nameEn: 'Aloe Sour', price: 500, description: 'Shochu with soda and aloe.', category: 'Sours' },
  { id: 'so10', nameJa: 'アセロラサワー', nameEn: 'Acerola Sour', price: 500, description: 'Shochu with soda and acerola.', category: 'Sours' },
  { id: 'so11', nameJa: 'マンゴーサワー', nameEn: 'Mango Sour', price: 500, description: 'Shochu with soda and mango.', category: 'Sours' },
  { id: 'so12', nameJa: 'グレープフルーツサワー', nameEn: 'Grapefruit Sour', price: 500, description: 'Shochu with soda and grapefruit.', category: 'Sours' },
  { id: 'so13', nameJa: 'シークワーサーサワー', nameEn: 'Shikuwasa Sour', price: 500, description: 'Shochu with soda and Okinawan citrus.', category: 'Sours' },
  { id: 'so14', nameJa: 'カルピスサワー', nameEn: 'Calpis Sour', price: 500, description: 'Shochu with soda and sweet yogurt drink.', category: 'Sours' },

  // Cocktails
  { id: 'co1', nameJa: 'カシスオレンジ', nameEn: 'Cassis Orange', price: 530, description: 'Blackcurrant liqueur and orange juice.', category: 'Cocktails' },
  { id: 'co2', nameJa: 'クーニャン', nameEn: 'Koo Nyang', price: 530, description: 'Peach liqueur and oolong tea.', category: 'Cocktails' },
  { id: 'co3', nameJa: 'マリブコーク', nameEn: 'Malibu Coke', price: 530, description: 'Coconut rum and cola.', category: 'Cocktails' },
  { id: 'co4', nameJa: 'カルーアミルク', nameEn: 'Kahlua Milk', price: 530, description: 'Coffee liqueur and milk.', category: 'Cocktails' },
  { id: 'co5', nameJa: 'ファジーネーブル', nameEn: 'Fuzzy Navel', price: 530, description: 'Peach liqueur and orange juice.', category: 'Cocktails' },
  { id: 'co6', nameJa: 'キティ', nameEn: 'Kitty', price: 530, description: 'Red wine and ginger ale.', category: 'Cocktails' },
  { id: 'co7', nameJa: 'オペレーター', nameEn: 'Operator', price: 530, description: 'White wine and ginger ale.', category: 'Cocktails' },
  { id: 'co8', nameJa: 'カシスアップル', nameEn: 'Cassis Apple', price: 530, description: 'Blackcurrant liqueur and apple juice.', category: 'Cocktails' },
  { id: 'co9', nameJa: 'カシスグレープフルーツ', nameEn: 'Cassis Grapefruit', price: 530, description: 'Blackcurrant liqueur and grapefruit juice.', category: 'Cocktails' },
  { id: 'co10', nameJa: 'ピーチアップル', nameEn: 'Peach Apple', price: 530, description: 'Peach liqueur and apple juice.', category: 'Cocktails' },
  { id: 'co11', nameJa: 'ピーチグレープフルーツ', nameEn: 'Peach Grapefruit', price: 530, description: 'Peach liqueur and grapefruit juice.', category: 'Cocktails' },
  { id: 'co12', nameJa: 'カンパリアップル', nameEn: 'Campari Apple', price: 530, description: 'Campari and apple juice.', category: 'Cocktails' },
  { id: 'co13', nameJa: 'カンパリオレンジ', nameEn: 'Campari Orange', price: 530, description: 'Campari and orange juice.', category: 'Cocktails' },
  { id: 'co14', nameJa: 'カンパリグレープフルーツ', nameEn: 'Campari Grapefruit', price: 530, description: 'Campari and grapefruit juice.', category: 'Cocktails' },

  // Wine
  { id: 'wi1', nameJa: 'ハウスワイン (赤/白)', nameEn: 'House Wine (Red / White)', price: 550, description: 'Glass of house wine.', category: 'Wine' },
  { id: 'wi2', nameJa: '梅酒', nameEn: 'Plum Wine', price: 550, description: 'Sweet Japanese plum wine.', category: 'Wine' },

  // Soft Drinks
  { id: 'sd1', nameJa: 'ウーロン茶', nameEn: 'Oolong Tea', price: 350, description: 'Cold roasted green tea.', category: 'Soft Drinks' },
  { id: 'sd2', nameJa: '緑茶', nameEn: 'Green Tea', price: 350, description: 'Cold Japanese green tea.', category: 'Soft Drinks' },
  { id: 'sd3', nameJa: 'ジャスミン茶', nameEn: 'Jasmine Tea', price: 350, description: 'Cold jasmine tea.', category: 'Soft Drinks' },
  { id: 'sd4', nameJa: 'コーラ', nameEn: 'Coke', price: 350, description: 'Coca-Cola.', category: 'Soft Drinks' },
  { id: 'sd5', nameJa: 'ジンジャーエール', nameEn: 'Ginger Ale', price: 350, description: 'Ginger flavored soda.', category: 'Soft Drinks' },
  { id: 'sd6', nameJa: 'カルピス', nameEn: 'Calpis', price: 350, description: 'Japanese sweet yogurt drink.', category: 'Soft Drinks' },
  { id: 'sd7', nameJa: 'リンゴジュース', nameEn: 'Apple Juice', price: 350, description: '100% Apple juice.', category: 'Soft Drinks' },
  { id: 'sd8', nameJa: 'オレンジジュース', nameEn: 'Orange Juice', price: 350, description: '100% Orange juice.', category: 'Soft Drinks' },
  { id: 'sd9', nameJa: 'カルピスソーダ', nameEn: 'Calpis Soda', price: 350, description: 'Carbonated sweet yogurt drink.', category: 'Soft Drinks' },
  { id: 'sd10', nameJa: 'グレープフルーツジュース', nameEn: 'Grapefruit Juice', price: 350, description: '100% Grapefruit juice.', category: 'Soft Drinks' },
];
