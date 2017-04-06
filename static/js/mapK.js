ymaps.ready(init);
 var myMapK, myPinK, myPlacemark91, myPlacemark92, myPlacemark93,  myPlacemark94, myPlacemark95, myPlacemark96, myPlacemark97, myPlacemark98;
    function init(){     
        myMapK = new ymaps.Map("map_Kazan", {
            center: [55.78089657, 49.12730000],
            zoom: 11
        });
        myMapK.behaviors.disable('scrollZoom');
        myPinK = new ymaps.GeoObjectCollection({},{
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


       myPlacemark91 = new ymaps.Placemark([55.78089657, 49.12730000], 
        {balloonContentHeader: '<span class="address_title"> м. Площадь Габдуллы Тукая</span><br><span class="address_address">Казань ул Спартаковская д 2</span>'
        });
        myPlacemark92 = new ymaps.Placemark([55.78560457, 49.12120050], 
        {balloonContentHeader: '<span class="address_title">м. Площадь Габдуллы Тукая</span><br><span class="address_address">Казань ул. Островского 38а, оф 410</span>'
        });
        myPlacemark93 = new ymaps.Placemark([55.79177907, 49.13745050], 
        {balloonContentHeader: '<span class="address_title">м. Площадь Габдуллы Тукая</span><br><span class="address_address">Казань ул Щапова д47</span>'
        });
        myPlacemark94 = new ymaps.Placemark([55.76347757, 49.23327400], 
        {balloonContentHeader: '<span class="address_title">м.Проспект Победы</span><br><span class="address_address">ул Юлиуса Фучика д 90</span>'
        });
        myPlacemark95 = new ymaps.Placemark([55.74699357, 49.26311600], 
        {balloonContentHeader: '<span class="address_title">м.Проспект Победы</span><br><span class="address_address">пос. Салмычи,Казань ул. Лиственная 18</span>'
        });
        myPlacemark96 = new ymaps.Placemark([55.82533507, 49.07739850], 
        {balloonContentHeader: '<span class="address_title">м. Яльшек</span><br><span class="address_address">м. Яльшек Казань ул. Энергетиков 14</span>'
        });
        myPlacemark97 = new ymaps.Placemark([55.81884707, 49.11473250], 
        {balloonContentHeader: '<span class="address_title">м. Козья Слобода</span><br><span class="address_address">м. Козья Слобода Казань ул. Чистопольская д 26/5</span>'
        });
        myPlacemark98 = new ymaps.Placemark([55.83977457, 49.09946100], 
        {balloonContentHeader: '<span class="address_title">м. Северный Вокзал</span><br><span class="address_address">м. Северный Вокзал,Казань ул Гагарина ,4</span>'
        });


         myPinK.add(myPlacemark91).add(myPlacemark92).add(myPlacemark93).add(myPlacemark94).add(myPlacemark95).add(myPlacemark96).add(myPlacemark97).add(myPlacemark98);
         myMapK.geoObjects.add(myPinK);
};

