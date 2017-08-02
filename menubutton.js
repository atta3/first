
    // ◇ボタンをクリックしたら、メニューが開きます
    $(document).ready(function(){
  $("#menubutton").click(function(){
    $(".sp_menu_toggle").slideToggle();
        if ($(this).prevAll().is(':hidden')) {
            $(this).hasClass('sp_menu_toggle').slideDown();
            $(this).text('メニューを開く').addClass('close');
        } else {
            $(this).hasClass('sp_menu_toggle')();
            $(this).text('閉じる').removeClass('close');
        }
  });
});

