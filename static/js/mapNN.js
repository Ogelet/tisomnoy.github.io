ymaps.ready(init);
 var myMapNN, myPinNN, myPlacemark85, myPlacemark86, myPlacemark87, myPlacemark88, myPlacemark89, myPlacemark90;
    function init(){     
        myMapNN = new ymaps.Map("map_NN", {
            center: [56.30753107, 43.98604400],
            zoom: 11
        });
        myMapNN.behaviors.disable('scrollZoom');
        myPinNN = new ymaps.GeoObjectCollection({},{
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


        myPlacemark85 = new ymaps.Placemark([56.30753107, 43.98604400], 
        {balloonContentHeader: '<span class="address_title"> Нижний Новгород м. Горьковская</span><br><span class="address_address">Проспект Гагарина 2</span>'
        });
        myPlacemark86 = new ymaps.Placemark([56.31023307, 43.94588900], 
        {balloonContentHeader: '<span class="address_title">Нижний Новгород м. Чкаловская</span><br><span class="address_address">ул. Июльских дней 1а</span>'
        });
        myPlacemark87 = new ymaps.Placemark([56.28352457, 44.08876600], 
        {balloonContentHeader: '<span class="address_title">Нижний Новгород м. Горьковская</span><br><span class="address_address">Нижний Новгород Казанское шоссе 12</span>'
        });
        myPlacemark88 = new ymaps.Placemark([56.24010807, 43.86145650], 
        {balloonContentHeader: '<span class="address_title">Нижний Новгород м. Парк Культуры</span><br><span class="address_address">Нижний Новгород Ул. Героя Смирнова, 12</span>'
        });
        myPlacemark89 = new ymaps.Placemark([56.32207007, 44.01219350], 
        {balloonContentHeader: '<span class="address_title">Нижний Новгород м. Горьковская</span><br><span class="address_address">ул. Варварская, 32</span>'
        });
        myPlacemark90 = new ymaps.Placemark([56.31720757, 43.99826100], 
        {balloonContentHeader: '<span class="address_title">Нижний Новгород м. Горьковская</span><br><span class="address_address">ул. Звездинка 24</span>'
        });


         myPinNN.add(myPlacemark85).add(myPlacemark86).add(myPlacemark87).add(myPlacemark88).add(myPlacemark89).add(myPlacemark90);
         myMapNN.geoObjects.add(myPinNN);
};
