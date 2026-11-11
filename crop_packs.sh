#!/bin/bash
mkdir -p public/products
mkdir -p public/categories
mkdir -p public/brand

# Copy brand and logistics
cp public/catalogue-pages/page-02.jpg public/brand/catalogue-cover.jpg
cp public/catalogue-pages/page-11.jpg public/brand/eranad-logistics.jpg
cp public/catalogue-pages/page-01.jpg public/brand/about-hero.jpg

# Crop categories & marquee items
# Page 6 Parotta
convert public/catalogue-pages/page-06.jpg -crop 1200x520+400+420 public/products/whole-wheat-parotta.jpg
convert public/catalogue-pages/page-06.jpg -crop 1200x520+400+980 public/products/malabar-parotta.jpg
convert public/catalogue-pages/page-06.jpg -crop 1200x520+400+1560 public/products/kothu-parotta.jpg
convert public/catalogue-pages/page-06.jpg -crop 900x1200+0+800 public/categories/parotta-hero.jpg

# Page 3 Breakfast
convert public/catalogue-pages/page-03.jpg -crop 800x700+320+340 public/products/chemba-puttu.jpg
convert public/catalogue-pages/page-03.jpg -crop 800x700+520+620 public/products/puttu-white.jpg
convert public/catalogue-pages/page-03.jpg -crop 800x700+100+1300 public/products/idiyappam-brown.jpg
convert public/catalogue-pages/page-03.jpg -crop 800x700+230+1680 public/products/idli.jpg
convert public/catalogue-pages/page-03.jpg -crop 1653x1000+0+300 public/categories/breakfast-hero.jpg

# Page 4 Snacks
convert public/catalogue-pages/page-04.jpg -crop 750x450+60+300 public/products/elayada-jaggery.jpg
convert public/catalogue-pages/page-04.jpg -crop 750x450+840+300 public/products/kozhukkatta.jpg
convert public/catalogue-pages/page-04.jpg -crop 500x420+70+740 public/products/sughiyaan.jpg
convert public/catalogue-pages/page-04.jpg -crop 500x420+570+740 public/products/banana-roast.jpg
convert public/catalogue-pages/page-04.jpg -crop 500x420+1070+740 public/products/kumbilappam.jpg
convert public/catalogue-pages/page-04.jpg -crop 500x420+70+1320 public/products/banana-fry.jpg
convert public/catalogue-pages/page-04.jpg -crop 500x420+570+1320 public/products/uzhunnu-vada.jpg
convert public/catalogue-pages/page-04.jpg -crop 500x420+1070+1320 public/products/parippu-vada.jpg
convert public/catalogue-pages/page-04.jpg -crop 650x450+120+1760 public/products/vegetable-cutlet.jpg
convert public/catalogue-pages/page-04.jpg -crop 650x450+880+1760 public/products/tender-jackfruit-cutlet.jpg

# Page 5 Vegetables 1
convert public/catalogue-pages/page-05.jpg -crop 500x600+220+420 public/products/sliced-coconut.jpg
convert public/catalogue-pages/page-05.jpg -crop 500x650+760+540 public/products/grated-coconut.jpg
convert public/catalogue-pages/page-05.jpg -crop 500x600+1180+350 public/products/shallots.jpg
convert public/catalogue-pages/page-05.jpg -crop 500x600+60+1450 public/products/drumstick.jpg
convert public/catalogue-pages/page-05.jpg -crop 500x650+480+1280 public/products/sambar-mix.jpg
convert public/catalogue-pages/page-05.jpg -crop 500x600+880+1580 public/products/avial-mix.jpg

# Page 10 Vegetables 2
convert public/catalogue-pages/page-10.jpg -crop 550x700+270+380 public/products/tapioca-drum-cuts.jpg
convert public/catalogue-pages/page-10.jpg -crop 550x700+890+380 public/products/tapioca-sliced.jpg
convert public/catalogue-pages/page-10.jpg -crop 520x650+80+1220 public/products/yam.jpg
convert public/catalogue-pages/page-10.jpg -crop 520x650+620+1220 public/products/green-peas.jpg
convert public/catalogue-pages/page-10.jpg -crop 520x650+1120+1220 public/products/french-fries.jpg

# Page 7 Meat Curries
convert public/catalogue-pages/page-07.jpg -crop 500x650+90+420 public/products/beef-fry.jpg
convert public/catalogue-pages/page-07.jpg -crop 500x650+570+420 public/products/chilli-beef.jpg
convert public/catalogue-pages/page-07.jpg -crop 500x650+1050+420 public/products/beef-vindaloo.jpg
convert public/catalogue-pages/page-07.jpg -crop 500x650+90+1180 public/products/butter-chicken.jpg
convert public/catalogue-pages/page-07.jpg -crop 500x650+570+1180 public/products/pepper-chicken.jpg
convert public/catalogue-pages/page-07.jpg -crop 500x650+1050+1180 public/products/chicken-roast.jpg

# Page 8 Gravy Mixes
convert public/catalogue-pages/page-08.jpg -crop 600x700+230+430 public/products/prawns-roast.jpg
convert public/catalogue-pages/page-08.jpg -crop 600x700+860+430 public/products/coconut-roast-paste.jpg
convert public/catalogue-pages/page-08.jpg -crop 600x700+230+1180 public/products/stew.jpg
convert public/catalogue-pages/page-08.jpg -crop 600x700+860+1180 public/products/angamali-mango-curry.jpg

# Page 9 Fruit Pulp
convert public/catalogue-pages/page-09.jpg -crop 500x600+60+450 public/products/white-guava.jpg
convert public/catalogue-pages/page-09.jpg -crop 500x600+580+450 public/products/pink-guava.jpg
convert public/catalogue-pages/page-09.jpg -crop 500x600+1100+450 public/products/tender-coconut.jpg
convert public/catalogue-pages/page-09.jpg -crop 500x600+60+1180 public/products/custard-apple.jpg
convert public/catalogue-pages/page-09.jpg -crop 500x600+580+1180 public/products/alphonso-mango.jpg
convert public/catalogue-pages/page-09.jpg -crop 500x600+1100+1180 public/products/chickoo.jpg

# Page 12 Meat & Chicken
convert public/catalogue-pages/page-12.jpg -crop 750x600+50+300 public/products/chicken-legs.jpg
convert public/catalogue-pages/page-12.jpg -crop 700x800+880+340 public/products/chicken-griller.jpg
convert public/catalogue-pages/page-12.jpg -crop 750x600+50+1020 public/products/chicken-breasts.jpg
convert public/catalogue-pages/page-12.jpg -crop 600x480+280+1760 public/products/samosa-roll-sheets.jpg
convert public/catalogue-pages/page-12.jpg -crop 650x480+920+1760 public/products/samosa-patti-sheets.jpg

echo "Crops complete!"
ls -lh public/products | head -n 30
