set names utf8;
drop database if exists art_center;
#创建数据库
create database art_center charset=utf8;
use art_center;
#用户表
create table user(
	uid int primary key auto_increment,
	uname varchar(32),
	upwd varchar(50),	
	email varchar(32),
	phone varchar(32) not null unique
);
insert into user values('1','dajiaoya','123456','309002854@qq.com','18664994409');
insert into user values('2','yihezhimu','ppaa2017','441303747@qq.com','18566773623');
insert into user values('3','hecaotian','123456','3389396491@qq.com','13325113322');
insert into user values('4','tommy','123456','1866499554@qq.com','18354649898');
insert into user values('5','kate','123456','3389396491@qq.com','18355663647');
insert into user values('6','lili','123456','1866499554@qq.com','18745562345');

#创建商品详情表
create table detials(
	`uid` int primary key NOT NULL auto_increment,
	`pname` varchar(32),
	`shelf_time` bigint(128) default NULL,
	`psource` varchar(32),
	`pinfo` char(255)
);
INSERT INTO `detials` VALUES (null,'合欢木小猪造型砧板', '150123456789','可立特　二期 7002-7005','精选优质金合欢木，辅以细腻的手工雕琢，本系列的餐具、砧板和器皿都经过严格食物安全标准检测，可以放心地使用它们盛放面包、奶酪、水果、蔬菜等各类食品，不论是家庭聚餐还是朋友派对，这些风格独特的合欢木器皿都会成为桌面独一无二的风景线');
INSERT INTO `detials` VALUES (null,'佛罗伦萨圆形餐桌', '1514012176506','STUDIO│A HOME　二期 1037-1038','规格：152.4cm x 77.47cm；材质：铁镀铜，中纤板。精细的灰色调，西式馅饼形状的镶嵌细工，形成这款餐桌的台面。外层哑光涂漆给予产品充足的保护，以增加其耐久性。桌台的金属边缘和底座皆为铁制，辅以古铜外漆');
INSERT INTO `detials` VALUES (null,'手绘实木家具', '1514012170000','朴工嘉园　三期 218-219','原生态.纯手工.艺术化，沿用中国民族元素，老松木的古朴在画师的笔下，被勾勒的淋漓尽致。产品含括：玄关柜、展示柜、餐边柜、收纳柜、沙发、茶几、衣柜、椅子等。提供全屋定制服务。适用于：酒店、会所、别墅、样板房等高端场所');
INSERT INTO `detials` VALUES (null,'海明威酒吧车', '1514000650600',
'STUDIO│A HOME　二期 1037-1038',
'规格：86.36cm x 48.26cm x 73.66cm；材质：胡桃木，三合板。一次不同寻常的发现，使我们收获了20世纪60年代极具复古风格的灵感，最终诞生了这款双层推车');
INSERT INTO `detials` VALUES (null,'金色树枝醒酒器', '1514012176506','恋巢家饰　一期1A082','规格：长17×宽17×高25cm 材质：铜+玻璃 推荐位置：餐厅、客厅、会所、酒店。 最佳用途：家居、软装、乔迁、送礼');
INSERT INTO `detials` VALUES (null,'恋巢金色银杏叶四方托盘', '1514012176506','恋巢家饰　一期1A082','规格：长47×宽31×高7cm 材质：铜+不锈钢 推荐位置：餐厅、客厅、会所、酒店。 最佳用途：家居、软装、乔迁、送礼。');
INSERT INTO `detials` VALUES (null,'传奇系列', '1514012176506','伶居丽布　一期3033-3034','敦煌系列，敦煌的历史古老而久远。');
INSERT INTO `detials` VALUES (null,'法式时尚储物柜', '1514012176506','你可居','规格：98.5*38.5*81.5cm；材质：松木；铁
柠檬黄与薄荷绿是今年流行色彩的一大亮点，结合家具设计，时尚简约。你可居紧扣时尚潮流，将柠檬黄和薄荷绿完美融合，时尚不单调！松木配以铁饰的材质，活泼而不笨重！强大的储物功能更是您的首选！');
INSERT INTO `detials` VALUES (null,'法式田园休闲椅', '150123456789','你可居','规格：51*59*88cm；材质：铁
优美的不仅仅是它的线条，更有它别具一格的雅致情调。舒适的感受加上仿古绿的宁静安逸,给你不一样的法式田园风格，享受你可居给您带来的别样浪漫！');
INSERT INTO `detials` VALUES (null,'明亮的灯光', '1514012170000','愿心情一如灯光一样明亮','家居必备');
INSERT INTO `detials` VALUES (null,'AOC全球设计', '150123456789','泠空间　二期 8A02','外承欢之汋约兮，谌荏弱而难持；承欢侍宴无闲暇，春从春游夜专夜。坐，唯型而有气，唯声动而成静，唯光阴而成茶。侘，和而为自然，端坐，她是基本的几何，坐下的几何。她的横杆扶手、座位端面互为垂平，简洁而有力。舒适，不是她提醒你的全部本质。端姿，在坐下的一刻自然的感受。简洁的力度反衬于人的气度，文雅方刚透露着她的宁静安详。变在边缘！和人与器物而生。');
INSERT INTO `detials` VALUES (null,'融力家具系列-云椅', '1514012176506','DOMO　二期 8A09','规格：750*700*H770mm;材质：金属&毛呢；
“坐下来”——坐如钟，意如云。
——体静、态稳、情凝、意生。
——安然、从容的坐。
——坐的目的决定了坐的形式。
云——逍遥自在，是一种情态、意境，如云般的超然是对“坐下来”的另一种解读。');
INSERT INTO `detials` VALUES (null,'舞者','1514012176506','卓尔　三期144','
规格：40*40*5cm
材料：树脂配木板
外观：高浮雕人物造型
功能：壁饰
创意及内涵：舞者，踮起足尖，飘着优雅的舞步，演绎了一幕幕旋律的辉煌，创造了多少舞台上的历史奇迹。芭蕾，蕴藏着经典的委婉与高雅，却有着诗一般的浪漫与亲切感，它犹若蒙娜丽莎的微笑，神秘却温情脉脉，舒展着的肢体婉若在舞台上挥毫着一幅幅文波墨澜。
');
INSERT INTO `detials` VALUES (null,'手绘山水画马尼拉麻帘子','1514012176506','乐在　二期 811','规格：幅宽3米，长度不限，尺寸可定制。材质：进口马尼拉麻天然麻料；工艺：加手绘山水画， 以传统手工艺的方式加以现代美学设计，传递一种随性潇洒的写意之情。它的遮光感形成室内的独特的光影效果。特别适合运用于玄关，酒店大堂，书房。');
INSERT INTO `detials` VALUES (null,'新中式简约茶台组合','150123456789','乐在　二期 811','规格：桌子：160*60*52cm  凳子：45*35*28cm;材质：水曲柳；材质坚韧，纹理精美，密度高，抗震力好工艺：榫卯结构，严密扣合，达到“天衣无缝”的程度。时尚现代实木打造，展现新中式家具独特的韵味，简约、质朴、将传统文化与现代元素结合，营造淡雅舒适的茶室空间，宣扬茶道文化，意求心灵恬静。');

#创建商品图片表
create table art_pic(
	`pid` int primary key NOT NULL auto_increment,
	`lg` varchar(128),
	`sm` varchar(128),	
	`uid` int ,
	foreign key(uid) references detials(uid)
);
INSERT INTO `art_pic` VALUES (null,'images/lg/pig/pig1.png', 'images/sm/pig/pig_small1.png',1);
INSERT INTO `art_pic` VALUES (null,'images/lg/pig/pig2.png', 'images/sm/pig/pig_small2.png',1);
INSERT INTO `art_pic` VALUES (null,'images/lg/pig/pig3.png', 'images/sm/pig/pig_small3.png',1);
INSERT INTO `art_pic` VALUES (null,'images/lg/tab/tab1.png', 'images/sm/tab/tab_small1.png',2);
INSERT INTO `art_pic` VALUES (null,'images/lg/tab/tab2.png', 'images/sm/tab/tab_small2.png',2);
INSERT INTO `art_pic` VALUES (null,'images/lg/tab/tab3.png', 'images/sm/tab/tab_small3.png',2);
INSERT INTO `art_pic` VALUES (null,'images/lg/art/art1.png', 'images/sm/art/art_small1.png',3);
INSERT INTO `art_pic` VALUES (null,'images/lg/art/art2.png', 'images/sm/art/art_small2.png',3);
INSERT INTO `art_pic` VALUES (null,'images/lg/art/art3.png', 'images/sm/art/art_small3.png',3);
INSERT INTO `art_pic` VALUES (null,'images/lg/bar/bar1.png', 'images/sm/bar/bar_small1.png',4);
INSERT INTO `art_pic` VALUES (null,'images/lg/bar/bar2.png', 'images/sm/bar/bar_small2.png',4);
INSERT INTO `art_pic` VALUES (null,'images/lg/bar/bar3.png', 'images/sm/bar/bar_small3.png',4);
INSERT INTO `art_pic` VALUES (null,'images/lg/golden/golden1.png', 'images/sm/golden/golden_small1.png',5);
INSERT INTO `art_pic` VALUES (null,'images/lg/golden/golden2.png', 'images/sm/golden/golden_small2.png',5);
INSERT INTO `art_pic` VALUES (null,'images/lg/golden/golden3.png', 'images/sm/golden/golden_small3.png',5);
INSERT INTO `art_pic` VALUES (null,'images/lg/glass/glass1.png', 'images/sm/glass/glass_small1.png',6);
INSERT INTO `art_pic` VALUES (null,'images/lg/glass/glass2.png', 'images/sm/glass/glass_small2.png',6);
INSERT INTO `art_pic` VALUES (null,'images/lg/glass/glass3.png', 'images/sm/glass/glass_small3.png',6);
INSERT INTO `art_pic` VALUES (null,'images/lg/sofa/sofa1.png', 'images/sm/sofa/sofa_small1.png',7);
INSERT INTO `art_pic` VALUES (null,'images/lg/sofa/sofa2.png', 'images/sm/sofa/sofa_small2.png',7);
INSERT INTO `art_pic` VALUES (null,'images/lg/sofa/sofa3.png', 'images/sm/sofa/sofa_small3.png',7);
INSERT INTO `art_pic` VALUES (null,'images/lg/fashion/fashion1.png', 'images/sm/fashion/fashion_small1.png',8);
INSERT INTO `art_pic` VALUES (null,'images/lg/fashion/fashion2.png', 'images/sm/fashion/fashion_small2.png',8);
INSERT INTO `art_pic` VALUES (null,'images/lg/fashion/fashion3.png', 'images/sm/fashion/fashion_small3.png',8);
INSERT INTO `art_pic` VALUES (null,'images/lg/chair/chair1.png', 'images/sm/chair/chair_small1.png',9);
INSERT INTO `art_pic` VALUES (null,'images/lg/chair/chair2.png', 'images/sm/chair/chair_small2.png',9);
INSERT INTO `art_pic` VALUES (null,'images/lg/chair/chair3.png', 'images/sm/chair/chair_small3.png',9);
INSERT INTO `art_pic` VALUES (null,'images/lg/light/light1.png', 'images/sm/light/light_small1.png',10);
INSERT INTO `art_pic` VALUES (null,'images/lg/light/light2.png', 'images/sm/light/light_small2.png',10);
INSERT INTO `art_pic` VALUES (null,'images/lg/light/light3.png', 'images/sm/light/light_small3.png',10);
INSERT INTO `art_pic` VALUES (null,'images/lg/aoc/aoc1.png', 'images/sm/aoc/aoc_small1.png',11);
INSERT INTO `art_pic` VALUES (null,'images/lg/aoc/aoc2.png', 'images/sm/aoc/aoc_small2.png',11);
INSERT INTO `art_pic` VALUES (null,'images/lg/aoc/aoc3.png', 'images/sm/aoc/aoc_small3.png',11);
INSERT INTO `art_pic` VALUES (null,'images/lg/home/home1.png', 'images/sm/home/home_small1.png',12);
INSERT INTO `art_pic` VALUES (null,'images/lg/home/home2.png', 'images/sm/home/home_small2.png',12);
INSERT INTO `art_pic` VALUES (null,'images/lg/home/home3.png', 'images/sm/home/home_small3.png',12);
INSERT INTO `art_pic` VALUES (null,'images/lg/noir/noir1.png', 'images/sm/noir/noir_small1.png',13);
INSERT INTO `art_pic` VALUES (null,'images/lg/noir/noir2.png', 'images/sm/noir/noir_small2.png',13);
INSERT INTO `art_pic` VALUES (null,'images/lg/noir/noir3.png', 'images/sm/noir/noir_small3.png',13);
INSERT INTO `art_pic` VALUES (null,'images/lg/flower/flower1.png','images/sm/flower/flower_small1.png',14);
INSERT INTO `art_pic` VALUES (null,'images/lg/flower/flower2.png','images/sm/flower/flower_small2.png',14);
INSERT INTO `art_pic` VALUES (null,'images/lg/flower/flower3.png','images/sm/flower/flower_small3.png',14);
INSERT INTO `art_pic` VALUES (null,'images/lg/des/des1.png', 'images/sm/des/des_small1.png',15);
INSERT INTO `art_pic` VALUES (null,'images/lg/des/des2.png', 'images/sm/des/des_small2.png',15);
INSERT INTO `art_pic` VALUES (null,'images/lg/des/des3.png', 'images/sm/des/des_small3.png',15);

#设计方案表
create table design(
	`did` int primary key NOT NULL auto_increment,
	`pic` varchar(128)	
);
INSERT INTO `design` VALUES (null,'images/design/0.jpg');
INSERT INTO `design` VALUES (null,'images/design/1.jpg');
INSERT INTO `design` VALUES (null,'images/design/2.jpg');
INSERT INTO `design` VALUES (null,'images/design/3.jpg');
INSERT INTO `design` VALUES (null,'images/design/4.jpg');
INSERT INTO `design` VALUES (null,'images/design/5.jpg');
INSERT INTO `design` VALUES (null,'images/design/6.jpg');
INSERT INTO `design` VALUES (null,'images/design/7.jpg');
INSERT INTO `design` VALUES (null,'images/design/8.jpg');
INSERT INTO `design` VALUES (null,'images/design/9.jpg');
INSERT INTO `design` VALUES (null,'images/design/10.jpg');
INSERT INTO `design` VALUES (null,'images/design/11.jpg');
INSERT INTO `design` VALUES (null,'images/design/12.jpg');
INSERT INTO `design` VALUES (null,'images/design/13.jpg');
INSERT INTO `design` VALUES (null,'images/design/14.jpg');
INSERT INTO `design` VALUES (null,'images/design/15.jpg');
INSERT INTO `design` VALUES (null,'images/design/16.jpg');
INSERT INTO `design` VALUES (null,'images/design/17.jpg');
INSERT INTO `design` VALUES (null,'images/design/18.jpg');
INSERT INTO `design` VALUES (null,'images/design/19.jpg');
INSERT INTO `design` VALUES (null,'images/design/20.jpg');
INSERT INTO `design` VALUES (null,'images/design/21.jpg');
INSERT INTO `design` VALUES (null,'images/design/22.jpg');
INSERT INTO `design` VALUES (null,'images/design/23.jpg');
INSERT INTO `design` VALUES (null,'images/design/24.jpg');
INSERT INTO `design` VALUES (null,'images/design/25.jpg');
INSERT INTO `design` VALUES (null,'images/design/26.jpg');
INSERT INTO `design` VALUES (null,'images/design/27.jpg');
INSERT INTO `design` VALUES (null,'images/design/28.jpg');
INSERT INTO `design` VALUES (null,'images/design/29.jpg');
INSERT INTO `design` VALUES (null,'images/design/30.jpg');
INSERT INTO `design` VALUES (null,'images/design/31.jpg');
INSERT INTO `design` VALUES (null,'images/design/32.jpg');
INSERT INTO `design` VALUES (null,'images/design/33.jpg');
INSERT INTO `design` VALUES (null,'images/design/34.jpg');
INSERT INTO `design` VALUES (null,'images/design/35.jpg');
INSERT INTO `design` VALUES (null,'images/design/36.jpg');
INSERT INTO `design` VALUES (null,'images/design/37.jpg');
INSERT INTO `design` VALUES (null,'images/design/38.jpg');
INSERT INTO `design` VALUES (null,'images/design/40.jpg');
INSERT INTO `design` VALUES (null,'images/design/41.jpg');
INSERT INTO `design` VALUES (null,'images/design/42.jpg');
INSERT INTO `design` VALUES (null,'images/design/43.jpg');
INSERT INTO `design` VALUES (null,'images/design/44.jpg');
INSERT INTO `design` VALUES (null,'images/design/45.jpg');
INSERT INTO `design` VALUES (null,'images/design/46.jpg');
INSERT INTO `design` VALUES (null,'images/design/47.jpg');
INSERT INTO `design` VALUES (null,'images/design/48.jpg');
INSERT INTO `design` VALUES (null,'images/design/20141230033106593.jpg');
INSERT INTO `design` VALUES (null,'images/design/20141230033106702.jpg');
INSERT INTO `design` VALUES (null,'images/design/20141230033106827.jpg');
INSERT INTO `design` VALUES (null,'images/design/20150128025254056.jpg');
INSERT INTO `design` VALUES (null,'images/design/20150128025254181.jpg');
INSERT INTO `design` VALUES (null,'images/design/20150128025254181.jpg');
INSERT INTO `design` VALUES (null,'images/design/20150128025254588.jpg');
INSERT INTO `design` VALUES (null,'images/design/20150130040116119.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160217051325325.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160217051325622.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218022924372.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218022925309.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218022925684.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218022926153.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218022926388.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218022926684.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218022927138.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218032212263.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218032212559.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218032213106.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218032213466.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218032213825.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218032214122.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218050332919.jpg');
INSERT INTO `design` VALUES (null,'images/design/20160218050333341.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061518560043750.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061520128637500.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061521523950000.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061522025668750.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061531271762500.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061536169887500.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061536257231250.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061542467231250.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061546528637500.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061547001137500.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061547082075000.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061547193481250.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061638043012500.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061638237075000.jpg');
INSERT INTO `design` VALUES (null,'images/design/201411061638395668750.jpg');