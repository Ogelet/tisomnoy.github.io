ymaps.ready(init);
 var myMapSPB, myPinSPB, myPlacemark99, myPlacemark100, myPlacemark101; myPlacemark102, myPlacemark103, myPlacemark104, myPlacemark105, myPlacemark106, myPlacemark107, myPlacemark108, myPlacemark109,  myPlacemark110, myPlacemark111, myPlacemark112, myPlacemark113, myPlacemark114,  myPlacemark115,myPlacemark116, myPlacemark117, myPlacemark118,  myPlacemark119, myPlacemark120, myPlacemark121, myPlacemark122, myPlacemark123,myPlacemark124,  myPlacemark125, myPlacemark126, myPlacemark127, myPlacemark128,myPlacemark1281, myPlacemark1281;
    function init(){     
        myMapSPB = new ymaps.Map("map_SPB", {
            center: [59.91817154, 30.30557800],
            zoom: 10
        });
        myMapSPB.behaviors.disable('scrollZoom');
        myPinSPB = new ymaps.GeoObjectCollection({},{
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'static/img/addrr.png',
            // Размеры метки.
            iconImageSize: [23, 20],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-14, -18]
        });


        myPlacemark99 = new ymaps.Placemark([59.91817154, 30.30557800], 
        {balloonContentHeader: '<img src="static/img/address/99.jpg" alt="alt" class="studia_photo"><span class="address_title"> Санкт-Петербург, ул. Непокоренных д.74</span><br><span class="address_address">Кировско - Выборгская линия м. Площадь Мужества (На площадке школы Bump)</span>'
        });



        myPlacemark100 = new ymaps.Placemark([59.89536656, 30.28501100], 
        {balloonContentHeader: '<img src="static/img/address/100.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, ул. Маршала Говорова, 42</span><br><span class="address_address">м. Нарвская</span>'
        });



        myPlacemark101 = new ymaps.Placemark([59.93628706, 30.37215650], 
        {balloonContentHeader: '<span class="address_title">Санкт-Петербург, ул. 7-я Советская, 16</span><br><span class="address_address">м. Площадь Восстания (На площадке Школы танцев "Триумф")</span>'
        });



        myPlacemark102 = new ymaps.Placemark([59.92503756, 30.36296650], 
        {balloonContentHeader: '<span class="address_title">м. Площадь Восстания (На площадке школы Nataly Dance)</span><br><span class="address_address">Санкт-Петербург, пр. Лиговский, 50, корп. 1, 2 этаж</span>'
        });



        myPlacemark103 = new ymaps.Placemark([59.91700106, 30.33472350], 
        {balloonContentHeader: '<img src="static/img/address/103.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, пер. Подъездной, 18</span><br><span class="address_address">м. Пушкинская ("Деловой центр Пушкинский" Танцевальный зал Лето)</span>'
        });



        myPlacemark104 = new ymaps.Placemark([59.94744656, 30.34182950], 
        {balloonContentHeader: '<img src="static/img/address/104.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, ул. Гагаринская, 7</span><br><span class="address_address">м. Чернышевская</span>'
        });

        myPlacemark105 = new ymaps.Placemark([59.95901156, 30.31352350], 
        {balloonContentHeader: '<img src="static/img/address/105.jpg" alt="alt" class="studia_photo"><span class="address_title"> м. Горьковская (На базе площадки Мистера Данс)Санкт-Петербург, ул. Мира, 3 БЦ Троицкий, офис 331</span><br><span class="address_address">Московско - Петроградская линия</span>'
        });


        
        myPlacemark106 = new ymaps.Placemark([59.84668506, 30.32014400], 
        {balloonContentHeader: '<img src="static/img/address/106.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, пр. Московский, 205, корп. 2</span><br><span class="address_address">м. Московская</span>'
        });


        
        myPlacemark107 = new ymaps.Placemark([59.88713706, 30.32913650], 
        {balloonContentHeader: '<img src="static/img/address/107.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, ул. Цветочная, 19</span><br><span class="address_address">м. Московские ворота (На площадке Студии Ника)</span>'
        });


        
        myPlacemark108 = new ymaps.Placemark([59.93250906, 30.32204850], 
        {balloonContentHeader: '<img src="static/img/address/108.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, ул. Казанская, 10</span><br><span class="address_address">м. Невский проспект или Гостиный двор</span>'
        });


        
        myPlacemark109 = new ymaps.Placemark([60.00371806, 30.33137300], 
        {balloonContentHeader: '<img src="static/img/address/109.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, Светлановский пр., д.1</span><br><span class="address_address">м. Пионерская (На площадке студии Дива)</span>'
        });


        
        myPlacemark110 = new ymaps.Placemark([60.05151306, 30.33523550], 
        {balloonContentHeader: '<img src="static/img/address/110.jpg" alt="alt" class="studia_photo"><span class="address_title">Санкт-Петербург, пр. Энгельса, 139/21 цокольный этаж</span><br><span class="address_address">м. Проспект Просвещения</span>'
        });


        myPlacemark111 = new ymaps.Placemark([60.04767656, 30.33434650], 
        {balloonContentHeader: '<span class="address_title">пр. Энгельса, 129, корпус 4</span><br><span class="address_address">Санкт-Петербург</span>'
        });



        myPlacemark112 = new ymaps.Placemark([60.04919006, 30.36567050], 
        {balloonContentHeader: '<span class="address_title">Санкт-Петербург, ул. Руднева, 22, к.2</span><br><span class="address_address">м. Проспект Просвещения</span>'
        });
        myPlacemark113 = new ymaps.Placemark([60.01797606, 30.30525900], 
        {balloonContentHeader: '<span class="address_title"> Санкт-Петербург, ул. Афонская, 5 (в здании автошколы)</span><br><span class="address_address">м. Пионерская, м. Удельная</span>'
        });


        
        myPlacemark114 = new ymaps.Placemark([59.82768401, 30.25970100], 
        {balloonContentHeader: '<img src="static/img/address/114.jpg" alt="alt" class="studia_photo"><span class="address_title"> 8-я линия, 33 во дворе</span><br><span class="address_address">Санкт-Петербург</span>'
        });


        
        myPlacemark115 = new ymaps.Placemark([59.89421556, 30.43979950], 
        {balloonContentHeader: '<span class="address_title">пр. Обуховской обороны, 86К</span><br><span class="address_address">Санкт-Петербург</span>'
        });


        
        myPlacemark116 = new ymaps.Placemark([59.89918856, 30.43016050], 
        {balloonContentHeader: '<span class="address_title">пр. Обуховской Обороны, 72</span><br><span class="address_address">м. Елизаровская Санкт-Петербург</span>'
        });


        
        myPlacemark117 = new ymaps.Placemark([59.95694406, 30.22048500], 
        {balloonContentHeader: '<span class="address_title">ул. Кораблестроителей 38, литера А</span><br><span class="address_address">м. Приморская Санкт-Петербург</span>'
        });


        
        myPlacemark118 = new ymaps.Placemark([59.95349306, 30.22181450], 
        {balloonContentHeader: '<span class="address_title">ул. Кораблестроителей, 33, корп. 2</span><br><span class="address_address">м. Приморская Санкт-Петербург</span>'
        });


        myPlacemark119 = new ymaps.Placemark([59.92812656, 30.34499150], 
        {balloonContentHeader: '<img src="static/img/address/119.jpg" alt="alt" class="studia_photo"><span class="address_title"> пер. Щербаков, 12, 5 этаж </span><br><span class="address_address">м. Достоевская Санкт-Петербург</span>'
        });


        
        myPlacemark120 = new ymaps.Placemark([59.92812656, 30.34499150], 
        {balloonContentHeader: '<span class="address_title">Новочеркасский проспект д. 52/2</span><br><span class="address_address">м.Новочеркасская Санкт-Петербург</span>'
        });


        
        myPlacemark121 = new ymaps.Placemark([59.93427606, 30.30980450], 
        {balloonContentHeader: '<img src="static/img/address/121.jpg" alt="alt" class="studia_photo"><span class="address_title">ул. Малая Морская, 20</span><br><span class="address_address">м. Адмиралтейская Санкт-Петербург</span>'
        });


        
        myPlacemark122 = new ymaps.Placemark([60.01694606, 30.22955800], 
        {balloonContentHeader: '<span class="address_title">ул. Планерная 47</span><br><span class="address_address">Санкт-Петербург</span>'
        });


        
        myPlacemark123 = new ymaps.Placemark([59.91329756, 30.35688500], 
        {balloonContentHeader: '<img src="static/img/address/123.jpg" alt="alt" class="studia_photo"><span class="address_title">Обводный канал, д.64, зал 38/4</span><br><span class="address_address">Санкт-Петербург</span>'
        });


        
        myPlacemark124 = new ymaps.Placemark([59.95571006, 30.29751550], 
        {balloonContentHeader: '<span class="address_title">ул. Большая Пушкарская, 10</span><br><span class="address_address">м. Спортивная Санкт-Петербург</span>'
        });

        
        myPlacemark125 = new ymaps.Placemark([59.95536306, 30.29759650], 
        {balloonContentHeader: '<span class="address_title">м. Спортивная Санкт-Петербург</span><br><span class="address_address">ул. Большая Пушкарская, 8</span>'
        });


        
        myPlacemark126 = new ymaps.Placemark([59.98541256, 30.27642300], 
        {balloonContentHeader: '<span class="address_title">ул. Дибуновская,50, 7 парадная, 1 этаж, пом 22-Н</span><br><span class="address_address">м.Старая Деревня Санкт-Петербург</span>'
        });


        
        myPlacemark127 = new ymaps.Placemark([59.96243056, 30.29401200], 
        {balloonContentHeader: '<img src="static/img/address/127.jpg" alt="alt" class="studia_photo"><span class="address_title">пр. Чкаловский, 15</span><br><span class="address_address">Санкт-Петербург</span>'
        });


        
        myPlacemark128 = new ymaps.Placemark([59.96243056, 30.29401200], 
        {balloonContentHeader: '<span class="address_title">м. Чкаловская</span><br><span class="address_address">Санкт-Петербург, пр. Чкаловский, 15</span>'
        });
        myPlacemark1281 = new ymaps.Placemark([59.99829206, 30.13984350], 
        {balloonContentHeader: '<img src="static/img/address/1281.jpg" alt="alt" class="studia_photo"><span class="address_title">м. Садовая</span><br><span class="address_address">Санкт-Петербург, Садовая улица, 28</span>'
        });
        myPlacemark1282 = new ymaps.Placemark([59.89454456, 30.42249800], 
        {balloonContentHeader: '<img src="static/img/address/1282.jpg" alt="alt" class="studia_photo"><span class="address_title">м. Елизаровская</span><br><span class="address_address">Санкт-Петербург, ул. Ольги Бегольц, д.17 к.2</span>'
        });


myPinSPB.add(myPlacemark99).add(myPlacemark100).add(myPlacemark101).add(myPlacemark102).add(myPlacemark103).add(myPlacemark104).add(myPlacemark105).add(myPlacemark106).add(myPlacemark107).add(myPlacemark108).add(myPlacemark109).add(myPlacemark110).add(myPlacemark111).add(myPlacemark112).add(myPlacemark113).add(myPlacemark114).add(myPlacemark115).add(myPlacemark116).add(myPlacemark117).add(myPlacemark118).add(myPlacemark119).add(myPlacemark120).add(myPlacemark121).add(myPlacemark122).add(myPlacemark123).add(myPlacemark124).add(myPlacemark125).add(myPlacemark126).add(myPlacemark127).add(myPlacemark128).add(myPlacemark1281).add(myPlacemark1282);
myMapSPB.geoObjects.add(myPinSPB);
};
