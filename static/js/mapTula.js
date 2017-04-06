ymaps.ready(init);
 var myMapT, myPinT, myPlacemark77, myPlacemark78, myPlacemark79, myPlacemark80, myPlacemark81, myPlacemark82, myPlacemark83, myPlacemark84;
    function init(){     
        myMapT = new ymaps.Map("map_Tula", {
            center: [54.19153657, 37.61341300],
            zoom: 12
        });
        myMapT.behaviors.disable('scrollZoom');
        myPinT = new ymaps.GeoObjectCollection({},{
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


        myPlacemark77 = new ymaps.Placemark([54.19153657, 37.61341300], 
        {balloonContentHeader: '<span class="address_title">Фитнес клуб vlastelin - fitness</span><br><span class="address_address">г. Тула, Каминского, д.24 В</span>'
        });
        myPlacemark78 = new ymaps.Placemark([54.17543457, 37.70347850], 
        {balloonContentHeader: '<span class="address_title">Фитнес клуб Драйв</span><br><span class="address_address">г. Тула, ул. Доктора Гумилевской, д.16</span>'
        });
        myPlacemark79 = new ymaps.Placemark([54.21156057, 37.62131850], 
        {balloonContentHeader: '<span class="address_title">На базе танцевального зала "Джайв"</span><br><span class="address_address">г. Тула, Октябрьская, 46</span>'
        });
        myPlacemark80 = new ymaps.Placemark([54.17569257, 37.61738350], 
        {balloonContentHeader: '<span class="address_title">Фитнес клуб КИТ</span><br><span class="address_address">г. Тула, ул. Кауля, дом 47, корпус 3</span>'
        });
        myPlacemark81 = new ymaps.Placemark([54.20566807, 37.65583150], 
        {balloonContentHeader: '<span class="address_title">Центр Nergo </span><br><span class="address_address">г. Тула, ул. Каракозова, д. 71</span>'
        });
        myPlacemark82 = new ymaps.Placemark([54.20527307, 37.66362000], 
        {balloonContentHeader: '<span class="address_title">Фитнес клуб Пантера</span><br><span class="address_address">г. Тула, ул. Шухова, 10</span>'
        });
        myPlacemark83 = new ymaps.Placemark([54.19124157, 37.59559050], 
        {balloonContentHeader: '<span class="address_title">На базе клуба "Пламя"</span><br><span class="address_address">г. Тула, Демонстрации, 5</span>'
        });
        myPlacemark84 = new ymaps.Placemark([54.20612057, 37.68116400], 
        {balloonContentHeader: '<span class="address_title">На базе клуба "Лидер"  г. Тула, Бондаренко, 1Б</span><br><span class="address_address">г. Тула, Бондаренко, 1Б</span>'
        });


         myPinT.add(myPlacemark77).add(myPlacemark78).add(myPlacemark79).add(myPlacemark80).add(myPlacemark81).add(myPlacemark82).add(myPlacemark83).add(myPlacemark84);
         myMapT.geoObjects.add(myPinT);
};
