$(function() {
    var container = $('#container'),
        array = [],
        linePath = "";
    function refreshcontent(value) {
        container.children().remove();
        $.ajax({
            url: 'backend/data.json'
        }).done(function (data) {
            if ((value == "audio") || (value == "video")) {
                var source = $("#libtext").html();
            }
            else {
                var source = $("#lib" + value).html();
            }
            var template = Handlebars.compile(source),
                section = "lib" + value,
                data = {test: data[section], gallery: data.libtext};
            container.append(template(data));
            makeevents();
            addElement();
            array = data.test;
        });
    }
    $('.main-menu a').click(function () {
        linePath = $(this).attr('data-href');
        var dataPath = $('[data-href="' + linePath + '"]');
        if (($(this).attr('href') == '#container') && ($(this).hasClass('active') == false)) {
            $('a').removeClass('active');
            dataPath.addClass('active');
            dataPath.parents("li").children('a').addClass("active");
            refreshcontent(linePath);
        }
        else if ($(this).attr('href') == '#home') {
            $('a').removeClass('active');
            $('[data-href="' + linePath + '"]').addClass('active');
        }
    });

    // add Element
    function addElement(){
        $(".js-add").click(function(){
            var $file = 'img/img-lib-text3.jpg',
                $title = $("#title-text").val(),
                $author  = $("#author-text").val(),
                $genre = $("#genre-text").val(),
                $year = $("#year-text").val(),
                $desc = $("#description-text").val(),
                newElem = {
                    image : $file,
                    title : $title,
                    author : $author,
                    genre : $genre,
                    year : $year
                };
            if (linePath == "text") newElem.description = $desc;
            else if (linePath == "video") newElem.video = $desc;
            else newElem.audio = $desc;
            array.push(newElem);
            container.children().remove();
            var data = { test:array },
                source = $("#libtext").html(),
                template = Handlebars.compile(source);
            container.append(template(data));
            addElement();
            makeevents();
            return false;
        });
    }

    // for single template item
    function makeevents(){
        $(".js-singleItem").click(function(){
            container.children().remove();
            var id = $(this).index(),
                data = {singlelement: array[id]},
                source = $("#singleItem" ).html(),
                template = Handlebars.compile(source);
            container.append(template(data));
        });
    }

    //searching for some element
    $(".js-search").keypress(function (key) {
        container.children().remove();
        if(key.which == 13) {
            var search = $(".js-search").val();
            $.ajax({
                url: 'backend/data.json'
            }).done(function (data) {
                array =[];
                $.each(data, function(id,dataJ){
                    jQuery.grep(dataJ, function(value){
                        var regexp = new RegExp(search,"i");
                        if (regexp.test(value.title) == true) {
                            array = array.concat(value);
                        }
                    });
                });
                var source = $("#search").html(),
                    template = Handlebars.compile(source),
                    data = { search: array };
                container.append(template(data));
                makeevents();
            });
        }
    });

    // sidebar menu
    $(".main-menu li").children('ul').parent().addClass('hasSubMenu');

    // easy move to anchor
    $(".main-menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 500);
    });
});