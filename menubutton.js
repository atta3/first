
    // ◇ボタンをクリックしたら、メニューが開きます
    $(document).ready(function(){
  $("#menubutton").click(function(){
    $(".sp_menu_toggle,.sp_sns_navi").slideToggle();
        if ($(this).prevAll().is(':hidden')) {
            $(this).hasClass('sp_menu_toggle,sp_sns_navi').slideDown();
            $(this).text('メニューを開く').addClass('close');
        } else {
            $(this).hasClass('sp_menu_toggle,sp_sns_navi')();
            $(this).text('閉じる').removeClass('close');
        }
  });
});
