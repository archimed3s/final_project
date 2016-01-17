$(function(){
    // breadcrumbs
    $('.main-menu a[href]').click(function () {
        var $this = $(this),
            $bc = $('<div class="bread-item"></div>');

        $this.parents('li').each(function (n, li) {
            var $a = $(li).children('a').clone();
            $bc.prepend($('<span></span>'), $a);
        });
        $('.breadcrumb').html($bc.prepend('<a href="#home">Home</a>'));
    });
});