


    ymaps.ready(init);
    var myMap, myPin,myPlacemark, myPlacemark1, myPlacemark2, myPlacemark3, myPlacemark4, myPlacemark5, myPlacemark6, myPlacemark7, myPlacemark8, myPlacemark9, myPlacemark10, myPlacemark11, myPlacemark12, myPlacemark13, myPlacemark14, myPlacemark15, myPlacemark16, myPlacemark17, myPlacemark18, myPlacemark19, myPlacemark20, myPlacemark21, myPlacemark22, myPlacemark23, myPlacemark24, myPlacemark25, myPlacemark26, myPlacemark27, myPlacemark28, myPlacemark29, myPlacemark30, myPlacemark31, myPlacemark32, myPlacemark33, myPlacemark34, myPlacemark35, myPlacemark36, myPlacemark37, myPlacemark38, myPlacemark39, myPlacemark40, myPlacemark41, myPlacemark42, myPlacemark43, myPlacemark44, myPlacemark45, myPlacemark46, myPlacemark47, myPlacemark48, myPlacemark49, myPlacemark50, myPlacemark51, myPlacemark52, myPlacemark53, myPlacemark54, myPlacemark55, myPlacemark56, myPlacemark57, myPlacemark58, myPlacemark59, myPlacemark60, myPlacemark61, myPlacemark62, myPlacemark63, myPlacemark64, myPlacemark65, myPlacemark66, myPlacemark67, myPlacemark68, myPlacemark69, myPlacemark70, myPlacemark71, myPlacemark72, myPlacemark73, myPlacemark74, myPlacemark75, myPlacemark76;
    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.76271257, 37.64631850],
            zoom: 10
        });
        myMap.behaviors.disable('scrollZoom');
        myPin = new ymaps.GeoObjectCollection({},{
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


        myPlacemark1 = new ymaps.Placemark([55.76397077, 37.64430148], 
        {
        balloonContentHeader: '<img src="static/img/address/1.jpg" alt="alt" class="studia_photo"><span class="address_title">Москва м. Чистые пруды</span><br><span class="address_address">ул. Жуковского д. 8 стр 2</span>',
        hintContent: "Москва м. Чистые пруды"
        });

        myPlacemark2 = new ymaps.Placemark([55.75594507, 37.64316550], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">Москва м. Китай-город</span><br><span class="address_address"> Хохловский переулок д. 7</span>',
        hintContent: "Москва м. Китай-город"
        });
        myPlacemark3 = new ymaps.Placemark([55.66537557, 37.49376650], 
        {
        balloonContentHeader: '<img src="static/img/address/3.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Юго-западная (танцевальный зал "Balance club")</span><br><span class="address_address">г.Москва, проспект Вернадского,95, корп.4</span>',
        hintContent: "Москва м.Юго-западная"
        });

        myPlacemark4 = new ymaps.Placemark([55.74185007, 37.59914800], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Кропоткинская (танцевальный зал "Mambo City")</span><br><span class="address_address"> г. Москва, ул. Остоженка, 14/2</span>',
        hintContent: "Москва м.Кропоткинская"
        });

        myPlacemark5 = new ymaps.Placemark([55.78010657, 37.66475200], 
        {
        balloonContentHeader: '<img src="static/img/address/5.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Красносельская (танцевальный зал "Trinity Dance")</span><br><span class="address_address"> г. Москва, ул. Верхняя красносельская, д. 34</span>',
        hintContent: "Москва м.Красносельская"
        });
        myPlacemark6 = new ymaps.Placemark([55.69378957, 37.54783600], 
        {
        balloonContentHeader: '<img src="static/img/address/6.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Университет (танцевальный зал "Импульс спорт")</span><br><span class="address_address"> г. Москва, ул. Молодежная д.4</span>',
        hintContent: "Москва м.Университет"
        });

        myPlacemark7 = new ymaps.Placemark([55.68064057, 37.51644000], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Проспект Вернадского (на базе Maximum)</span><br><span class="address_address"> г.Москва , пр-т Вернадского, д. 29, 5 этаж, помещение 503 </span>',
        hintContent: "Москва м.Проспект Вернадского"
        });
        myPlacemark8 = new ymaps.Placemark([55.70849607, 37.65661300], 
        {
        balloonContentHeader: '<img src="static/img/address/8.jpg" alt="alt" class="studia_photo"><span class="address_title">Автозаводская (Танцевальный зал "DMS")</span><br><span class="address_address"> г. Москва, ул.Мастеркова, д.4</span>',
        hintContent: "Москва м.Автозаводская"
        });

        myPlacemark9 = new ymaps.Placemark([55.70358057, 37.66107750], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">Автозаводская (танцевальный зал "Imperia Dance")</span><br><span class="address_address"> г. Москва, ул.Трофимова, 1/17</span>',
        hintContent: "Москва м.Автозаводская"
        });

        myPlacemark10 = new ymaps.Placemark([55.80914507, 37.53343600], 
        {
        balloonContentHeader: '<img src="static/img/address/10.jpg" alt="alt" class="studia_photo"><span class="address_title">Аэропорт (Танцевальный зал "firstdancecenter")</span><br><span class="address_address">г. Москва, Б.Коптиевский проезд, д.3, с.2</span>',
        hintContent: "Москва Аэропорт"
        });

        myPlacemark11 = new ymaps.Placemark([55.78015757, 37.57885500], 
        {
        balloonContentHeader: '<img src="static/img/address/11.jpg" alt="alt" class="studia_photo"><span class="address_title">Белорусская (танцевальный зал "5life")</span><br><span class="address_address"> г. Москва, Ленинградский проспект, 12</span>',
        hintContent: "Москва м.Белорусская"
        });

        myPlacemark12 = new ymaps.Placemark([55.78161057, 37.58702950], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">Белорусская (танцевальный зал "CosmoDance")</span><br><span class="address_address"> г. Москва, ул. 2-ой Лесной пер., д. 10</span>',
        hintContent: "Москва м.Белорусская"
        });

        myPlacemark13 = new ymaps.Placemark([55.67303707, 37.66460800], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">Коломенская (танцевальный зал "Timefitness")</span><br><span class="address_address"> г. Москва, проспект Андропова, дом 37</span>',
        hintContent: "Москва м.Коломенская"
        });


        myPlacemark14 = new ymaps.Placemark([55.68482757, 37.68765000], 
        {
        balloonContentHeader: '<img src="static/img/address/14.jpg" alt="alt" class="studia_photo"><span class="address_title">Коломенская (танцевальный зал "Pradna")</span><br><span class="address_address"> г. Москва, ул. Судостроительная д. 41</span>',
        hintContent: "Москва м.Коломенская"
        });

        myPlacemark15 = new ymaps.Placemark([55.73583907, 37.62584600], 
        {
        balloonContentHeader: '<img src="static/img/address/15.jpg" alt="alt" class="studia_photo"><span class="address_title">Новокузнецкая (танцевальный зал "Gold & Dance")</span><br><span class="address_address"> г. Москва,Малая Ордынка 25</span>',
        hintContent: "Москва м.Новокузнецкая"
        });

        myPlacemark16 = new ymaps.Placemark([55.72740457, 37.64312950], 
        {
        balloonContentHeader: '<img src="static/img/address/16.jpg" alt="alt" class="studia_photo"><span class="address_title">Павелецкая (Танцевальный зал "Hendrix")</span><br><span class="address_address"> г.Москва ул. Летниковская 4, 1</span>',
        hintContent: "Москва м.Павелецкая"
        });

        myPlacemark17 = new ymaps.Placemark([55.60866307, 37.73436250], 
        {
        balloonContentHeader: '<img src="static/img/address/17.jpg" alt="alt" class="studia_photo"><span class="address_title">Домодедовская (Фитнес на Елецкой)</span><br><span class="address_address"> г. Москва, ул Елецкая д.11 кор 2</span>',
        hintContent: "Москва м.Домодедовская"
        });

        myPlacemark18 = new ymaps.Placemark([55.79091907, 37.53949050], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">Динамо ( на базе ЦСКА)</span><br><span class="address_address"> Ленинградский проспект, д. 39, строение 1</span>',
        hintContent: "Москва м.Динамо"
        });

        myPlacemark19 = new ymaps.Placemark([55.75417257, 37.60231900], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Арбатская (танцевальный зал "Лето")</span><br><span class="address_address"> г. Москва, Калашный пер., д.4</span>',
        hintContent: "Москва м.Арбатская"
        });
        myPlacemark71 = new ymaps.Placemark([55.77640607, 37.67691500], 
        {
        balloonContentHeader: '<img src="static/img/address/71.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Бауманская (танцевальный зал "Maximum dance")</span><br><span class="address_address">г. Москва, ул. Бауманская, д. 11</span>',
        hintContent: "Москва м.Бауманская"
        });

        myPlacemark20 = new ymaps.Placemark([55.77640607, 37.67691500], 
        {
        balloonContentHeader: '<img src="static/img/address/20.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Партизанская (центр Красоты и Здоровья)</span><br><span class="address_address"> г. Москва, Зверинецкая 31/2</span>',
        hintContent: "Москва м.Партизанская"
        });
        myPlacemark21 = new ymaps.Placemark([55.75517557, 37.66522800], 
        {
        balloonContentHeader: '<img src="static/img/address/21.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Курская (танцевальный зал "dance options")</span><br><span class="address_address">г. Москва, 4-й Сыромятнический пер. 1 стр. 6</span>',
        hintContent: "Москва м.Курская"
        });
        myPlacemark22 = new ymaps.Placemark([55.78439457, 37.72049250], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Семеновская (танцевальный зал "Театр танца")</span><br><span class="address_address"> г. Москва, Семеновская площадь, дом 7, корпус 10</span>',
        hintContent: "Москва м.Семеновская"
        });

        myPlacemark23 = new ymaps.Placemark([55.78650557, 37.70413400], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Электрозаводская (танцевальный зал "a Loft of Dance")</span><br><span class="address_address"> г. Москва, ул.Электрозаводская, д.21</span>',
        hintContent: "Москва м.Электрозаводская"
        });

        myPlacemark24 = new ymaps.Placemark([55.76406007, 37.48737050], 
        {
        balloonContentHeader: '<img src="static/img/address/24.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Фили (Фитнес клуб "Адреналин")</span><br><span class="address_address"> г. Москва, Филевский бульвар д.10</span>',
        hintContent: "Москва м.Фили"
        });
        myPlacemark25 = new ymaps.Placemark([55.72865657, 37.44084650], 
        {
        balloonContentHeader: '<img src="static/img/address/25.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Кунцевская (танцевальный зал "dance factory")</span><br><span class="address_address"> г. Москва ул. Ивана Франко д.14</span>',
        hintContent: "Москва м.Кунцевская"
        });

        myPlacemark26 = new ymaps.Placemark([55.84175607, 37.35794150], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Митино (на базе школы спортивных единоборств)</span><br><span class="address_address"> г. Москва, ул. Барышиха, д.14, корп. 3</span>',
        hintContent: "Москва м.Митино"
        });
        myPlacemark27 = new ymaps.Placemark([55.78015757, 37.57885500], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Белорусская (танцевальный зал "5life")</span><br><span class="address_address"> г. Москва, Ленинградский проспект, 12</span>',
        hintContent: "Москва м.Белорусская"
        });

        myPlacemark28 = new ymaps.Placemark([55.78093707, 37.58726350], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Белорусская (танцевальный зал "CosmoDance")</span><br><span class="address_address"> г. Москва, ул. 2-ой Лесной пер., д. 1</span>',
        hintContent: "Москва м.Белорусская"
        });

        myPlacemark29 = new ymaps.Placemark([55.76301157, 37.57186600], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Краснопресненская/1905 года (танцевальный зал "OpenDance")</span><br><span class="address_address">г. Москва, ул. Малая Грузинская, д.2</span>',
        hintContent: "Москва м.Краснопресненская"
        });
        myPlacemark30 = new ymaps.Placemark([55.75527207, 37.66600950], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Курская (танцевальный зал "dance options")<br><span class="address_address"> г. Москва, 4-й Сыромятнический пер. 1 стр. </span>',
        hintContent: "Москва м.Курская"
        });
        myPlacemark31 = new ymaps.Placemark([55.77980307, 37.63252050], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Проспект Мира (танцевальный зал "Dance First")<br><span class="address_address"> г. Москва, Проспект Мира, 29-3</span>',
        hintContent: "м.Проспект Мира"
        });
        myPlacemark32 = new ymaps.Placemark([55.73017757, 37.59244650], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Парк культуры (танцевальный зал при студии "danceparadise")<br><span class="address_address">г. Москва, Фрунзенская набережная д.16 стр 1</span>',
        hintContent: "Москва м.Парк культуры"
        });
        myPlacemark33 = new ymaps.Placemark([55.74088707, 37.65062150], 
        {
        balloonContentHeader: '<img src="static/img/address/33.jpg" alt="alt" class="studia_photo"><span class="address_title">Штаб студии свадебного танца Ты со мной<br><span class="address_address">г. Москва, ул. Гончарная д. 38</span>',
        hintContent: "Москва м.Таганская"
        });
        myPlacemark34 = new ymaps.Placemark([55.74438857, 37.56385300], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Киевская (Танцевальный зал "Premium dance")<br><span class="address_address"> г. Москва ул. Брянская, д. 2</span>',
        hintContent: "Москва м.Киевская"
        });


        myPlacemark35 = new ymaps.Placemark([55.68417807, 37.56880300], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Академическая (танцевальный зал "Импульс")<br><span class="address_address"> г. Москва, ул. Профсоюзная д.16/10</span>',
        hintContent: "Москва м.Академическая"
        });


        myPlacemark36 = new ymaps.Placemark([55.80779928, 37.63873650], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Алексеевская (танцевальный зал "Walzer")<br><span class="address_address"> м.Алексеевская (танцевальный зал "Walzer") </span>',
        hintContent: "Москва м.Алексеевская"
        });


        myPlacemark37 = new ymaps.Placemark([55.64354557, 37.51106800], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Беляево (танцевальный зал "timefitness")<br><span class="address_address">г. Москва, ул. Академика Арцимовича, 8</span>',
        hintContent: "Москва м.Беляево"
        });


        myPlacemark38 = new ymaps.Placemark([55.65640707, 37.55336050], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Калужская (на базе танцевальной школы "Beatsoulstep")<br><span class="address_address">г. Москва, Научный проезд д. 10</span>',
        hintContent: "Москва м.Калужская"
        });


        myPlacemark39 = new ymaps.Placemark([55.88089407, 37.70055850], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Медведково (на базе фитнес-студии Energy)<br><span class="address_address"> г. Москва, ул. Таёжная д.1</span>',
        hintContent: "Москва м.Медведково"
        });
        myPlacemark40 = new ymaps.Placemark([55.77963078, 37.63346350], 
        {
        balloonContentHeader: '<img src="static/img/address/40.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Проспект Мира (танцевальный зал "Dance First")<br><span class="address_address">г. Москва, Проспект Мира, 29-31</span>',
        hintContent: "Москва м.Проспект Мира"
        });
        myPlacemark41 = new ymaps.Placemark([55.77980307, 37.63252050], 
        {
        balloonContentHeader: '<img src="static/img/address/41.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Бабушкинская (танцевальный зал "Империя фитнес")<br><span class="address_address">г. Москва, проспект Дежнева, дом 34</span>',
        hintContent: "Москва м.Бабушкинская"
        });


        myPlacemark42 = new ymaps.Placemark([55.71888157, 37.60380100], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Шаболовка (танцевальный зал "Hendrixstudio")<br><span class="address_address"> г. Москва, ул. Донская 24</span>',
        hintContent: "Москва м.Шаболовка"
        });


        myPlacemark43 = new ymaps.Placemark([55.65767207, 37.52941150], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Калужская ( на базе клуба Ермак)<br><span class="address_address"> г. Москва, ул. Обручева, 23, корп. 3</span>',
        hintContent: "Москва м.Калужская"
        });


        myPlacemark44 = new ymaps.Placemark([55.71103157, 37.59243750], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Ленинский проспект (на базе Provacation)<br><span class="address_address">г.Москва, 2-ой Донской проезд, д.10, стр.3</span>',
        hintContent: "Москва м.Ленинский проспект"
        });


        myPlacemark45 = new ymaps.Placemark([55.76600957, 37.57146200], 
        {
        balloonContentHeader: '<img src="static/img/address/45.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Краснопресненская/1905 года (танцевальный зал "OpenDance")<br><span class="address_address">г. Москва, ул. Малая Грузинская, д.21</span>',
        hintContent: "Москва м.Краснопресненская"
        });


        myPlacemark46 = new ymaps.Placemark([55.80115657, 37.50570500], 
        {
        balloonContentHeader: '<img src="static/img/address/46.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Октябрьское поле (танцевальный зал "Убежище")<br><span class="address_address"> г. Москва,ул.Алабяна, д.8а</span>',
        hintContent: "Москва м.Октябрьское поле"
        });
        myPlacemark47 = new ymaps.Placemark([55.86287857, 37.44743150], 
        {
        balloonContentHeader: '<img src="static/img/address/47.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Планерная (танцевальный зал "Vision")<br><span class="address_address">г.Москва ул Свободы, д.79, 2 этаж</span>',
        hintContent: "Москва м.Планерная"
        });
        myPlacemark48 = new ymaps.Placemark([55.74088707, 37.65062150], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Таганская (салон красоты + фитнес студия "Vitalita")<br><span class="address_address">г. Москва, ул. Гончарная д. 38</span>',
        hintContent: "Москва м.Таганская"
        });
        myPlacemark49 = new ymaps.Placemark([55.70616807, 37.77230700], 
        {
        balloonContentHeader: '<img src="static/img/address/49.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Кузьминки (танцевальный зал "Trinity Dance")<br><span class="address_address">г. Москва,Волгоградский прос-т д. 135 стр 3</span>',
        hintContent: "Москва м.Кузьминки"
        });


        myPlacemark50 = new ymaps.Placemark([55.72359707, 37.67690600], 
        {
        balloonContentHeader: '<img src="static/img/address/50.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Волгоградский проспект (на базе проекта Exzazal)<br><span class="address_address">г. Москва ул.Новоостаповская 5, стр 2</span>',
        hintContent: "Москва м.Волгоградский проспект"
        });


        myPlacemark51 = new ymaps.Placemark([55.57139807, 37.57391450], 
        {
        balloonContentHeader: '<img src="static/img/address/51.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Бульвар Дм. Донского (танцевальный зал "Знаменский")<br><span class="address_address"> г. Москва, ул. Знаменские Садки, д.1Б</span>',
        hintContent: "Москва м.Бульвар Дм. Донского"
        });

        myPlacemark52 = new ymaps.Placemark([55.80713207, 37.58839500], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Дмитровская (танцевальный зал "DeLuxe")<br><span class="address_address">г. Москва, ул. Новодмитровская д.5а, стр.2 (4 этаж)</span>',
        hintContent: "Москва м.Дмитровская"
        });
        myPlacemark53 = new ymaps.Placemark([55.77719057, 37.60709800], 
        {
        balloonContentHeader: '<img src="static/img/address/53.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Менделеевская (танцевальный зал "Zebra step")<br><span class="address_address">г. Москва, ул. Краснопролетарская, д.16</span>',
        hintContent: "Москва м.Менделеевская"
        });


        myPlacemark54 = new ymaps.Placemark([55.78984107, 37.58596950], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Савеловская (танцевальный зал "Hendrixstudio")<br><span class="address_address">г. Москва, Бумажный проезд д.19</span>',
        hintContent: "Москва м.Савеловская "
        });


        myPlacemark55 = new ymaps.Placemark([55.82002507, 37.57654650], 
        {
        balloonContentHeader: '<img src="static/img/address/55.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Тимирязевская (танцевальный зал "Apple street STUDIO")<br><span class="address_address"> г. Москва, ул. Яблочкова, д.21 кор 3</span>',
        hintContent: "Москва м.Тимирязевская"
        });


        myPlacemark56 = new ymaps.Placemark([55.76342657, 37.61388050], 
        {
        balloonContentHeader: '<img src="static/img/address/56.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Чеховская (танцевальный зал "Viva la Dance")<br><span class="address_address">г. Москва, ул. Большая Дмитровка, д.22 стр.2</span>',
        hintContent: "Москва м.Чеховская"
        });


        myPlacemark57 = new ymaps.Placemark([55.62316807, 37.60146550], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Южная (танцевальный зал "Titanium fitnes")<br><span class="address_address">г. Москва, ул. Днепропетровская 4а , 2 этаж Супермаркет "7 Континент"</span>',
        hintContent: "Москва м.Южная "
        });
        myPlacemark72 = new ymaps.Placemark([55.86203457, 37.60445700], 
        {
        balloonContentHeader: '<img src="static/img/address/72.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Отрадное (танцевальный зал "Ritmix dance")<br><span class="address_address"> г. Москва, ул. Хачатуряна д. 20</span>',
        hintContent: "Москва м.Отрадное"
        });

        myPlacemark58 = new ymaps.Placemark([55.65602107, 37.59769250], 
        {
        balloonContentHeader: '<img src="static/img/address/58.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Каховская (танцевальный зал Синди)<br><span class="address_address"> г.Москва ул. Азовская, д. 18</span>',
        hintContent: "Москва м.Каховская"
        });




        myPlacemark59 = new ymaps.Placemark([55.90335257, 37.59128750], 
        {
        balloonContentHeader: '<img src="static/img/address/59.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Алтуфьево (на базе Majestick)<br><span class="address_address">г.Москва, Алтуфьевское шоссе, дом 102Б</span>',
        hintContent: "Москва м.Алтуфьево"
        });

        myPlacemark60 = new ymaps.Placemark([55.66580157, 37.74154000], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Братиславская (танцевальный зал "Перспектива")<br><span class="address_address">г. Москва, ул. Люблинская, 141</span>',
        hintContent: "Москва м.Братиславская"
        });



        myPlacemark61 = new ymaps.Placemark([55.64753357, 37.74244700], 
        {
        balloonContentHeader: '<img src="static/img/address/61.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Марьино (танцевальный зал "Fitenergy")<br><span class="address_address">г.Москва, ул. Новочеркасский бульвар, д.57, к.2</span>',
        hintContent: "Москва м.Марьино "
        });


        myPlacemark62 = new ymaps.Placemark([55.71351157, 37.69042550], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Кожуховская (танцевальный зал при студии "Gallos")<br><span class="address_address"> г. Москва, ул. Угрешская д.2 стр. 7</span>',
        hintContent: "Москва м.Кожуховская"
        });


        myPlacemark63 = new ymaps.Placemark([55.70734407, 37.69484550], 
        {
        balloonContentHeader: '<img src="static/img/address/63.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Кожуховская (танцевальный зал "Hendrix")<br><span class="address_address">г.Москва ул Южнопортовая д.9 стр 8</span>',
        hintContent: "Москва м.Кожуховская"
        });


        myPlacemark64 = new ymaps.Placemark([55.60866307, 37.73436250], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Зябликово (Фитнес на Елецкой)<br><span class="address_address">г. Москва, ул Елецкая д.11 кор 2</span>',
        hintContent: "Москва м.Зябликово "
        });
        myPlacemark65 = new ymaps.Placemark([55.71820257, 37.67285450], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Дубровка (на базе школы TrixFamily)<br><span class="address_address">г. Москва, ул. Шарикоподшипниковская, д.22</span>',
        hintContent: "Москва м.Дубровка"
        });

        myPlacemark66 = new ymaps.Placemark([55.75830607, 37.83912400], 
        {
        balloonContentHeader: '<img src="static/img/address/66.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Новогиреево (танцевальный зал "ПАЛЛАДА")<br><span class="address_address"> г. Москва, ул. Сталеваров д. 14, корп. 1</span>',
        hintContent: "Москва м.Новогиреево"
        });




        myPlacemark67 = new ymaps.Placemark([55.75206507, 37.77193000], 
        {
        balloonContentHeader: '<img src="static/img/address/67.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Перово (на базе astraland)<br><span class="address_address">г.Москва, ул. З-й Проезд Перова Поля, д 8 cтр 5</span>',
        hintContent: "Москва м.Перово"
        });
        
        myPlacemark68 = new ymaps.Placemark([55.76810657, 37.85076600], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Реутов (на базе школы Energy)<br><span class="address_address">ул. Победы, д. 28</span>',
        hintContent: "Москва Реутов"
        });


        myPlacemark69 = new ymaps.Placemark([55.75116807, 37.99243050], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Железнодорожный (на базе "Танцбург")<br><span class="address_address">ул. Главная д. 2, стр. 1</span>',
        hintContent: "Москва м.Железнодорожный"
        });
        
        myPlacemark70 = new ymaps.Placemark([55.90887307, 37.38876250], 
        {
        balloonContentHeader: '<img src="static/img/address/2.jpg" alt="alt" class="studia_photo"><span class="address_title">м.Химки (на базе Dance Time)<br><span class="address_address">Новокуркинское шоссе д.51</span>',
        hintContent: "Москва м.Химки"
        });

        myPlacemark73 = new ymaps.Placemark([55.79494757, 37.61041250], 
        {
        balloonContentHeader: '<img src="static/img/address/71.jpg" alt="alt" class="studia_photo"><span class="address_title">Москва, м. Марьина роща<br><span class="address_address">ул. 1-я Ямская д.8</span>',
        hintContent: "Москва м. Марьина роща"
        });
        myPlacemark74 = new ymaps.Placemark([55.70631007, 37.81926200], 
        {
        balloonContentHeader: '<img src="static/img/address/74.jpg" alt="alt" class="studia_photo"><span class="address_title">Москва, м.Выхино<br><span class="address_address">ул. Ферганская д.17</span>',
        hintContent: "Москва, м.Выхино"
        });

        myPlacemark75 = new ymaps.Placemark([55.54485057, 37.58791000], 
        {
        balloonContentHeader: '<img src="static/img/address/75.jpg" alt="alt" class="studia_photo"><span class="address_title">Москва, м.Улица Скобелевская<br><span class="address_address">ЖК Бутово Парк д.23</span>',
        hintContent: "Москва, м.Улица Скобелевская"
        });
        myPlacemark76 = new ymaps.Placemark([55.88089407, 37.70055850], 
        {
        balloonContentHeader: '<img src="static/img/address/76.jpg" alt="alt" class="studia_photo"><span class="address_title">Москва, м. Медведково<br><span class="address_address">ул. Таежная д.1</span>',
        hintContent: "Москва, м. Медведково"
        });

         myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7).add(myPlacemark8).add(myPlacemark9).add(myPlacemark10).add(myPlacemark11).add(myPlacemark12).add(myPlacemark13).add(myPlacemark14).add(myPlacemark15).add(myPlacemark16).add(myPlacemark17).add(myPlacemark18).add(myPlacemark19).add(myPlacemark20).add(myPlacemark21).add(myPlacemark22).add(myPlacemark23).add(myPlacemark24).add(myPlacemark25).add(myPlacemark26).add(myPlacemark27).add(myPlacemark28).add(myPlacemark29).add(myPlacemark30).add(myPlacemark31).add(myPlacemark32).add(myPlacemark33).add(myPlacemark34).add(myPlacemark35).add(myPlacemark36).add(myPlacemark37).add(myPlacemark38).add(myPlacemark39).add(myPlacemark40).add(myPlacemark41).add(myPlacemark42).add(myPlacemark43).add(myPlacemark44).add(myPlacemark45).add(myPlacemark6).add(myPlacemark47).add(myPlacemark48).add(myPlacemark49).add(myPlacemark50).add(myPlacemark51).add(myPlacemark52).add(myPlacemark53).add(myPlacemark54).add(myPlacemark55).add(myPlacemark56).add(myPlacemark57).add(myPlacemark58).add(myPlacemark59).add(myPlacemark60).add(myPlacemark61).add(myPlacemark62).add(myPlacemark63).add(myPlacemark64).add(myPlacemark65).add(myPlacemark66).add(myPlacemark67).add(myPlacemark68).add(myPlacemark69).add(myPlacemark70).add(myPlacemark71).add(myPlacemark72).add(myPlacemark73).add(myPlacemark74).add(myPlacemark75).add(myPlacemark76);
         myMap.geoObjects.add(myPin);

    };







