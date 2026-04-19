// $(function () {
//   /*=================================================
//   ハンバーガーメニュー
//   ===================================================*/
//   $(".toggle_btn").on("click", function () {
//     // .toggle_btnをクリックしたときに実行する
//     //  function:実行する

//     ($("#header").toggleClass("open"));
//   });

//   $("#navi a").on("click", function () {
//     // #navi aをクリックしたときに実行する

//     $("#header").toggleClass("open");
//   });
$(function() {
    $('.toggle-btn').on('click', function() {
        // bodyにopenクラスをつけ外しする
        $('body').toggleClass('open');
        
        // メニューをフェードで出し入れ
        if ($('body').hasClass('open')) {
            $('.navi').fadeIn(300);
        } else {
            $('.navi').fadeOut(300);
        }
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    $('.navi a').on('click', function() {
        $('body').removeClass('open');
        $('.navi').fadeOut(300);
        $('#mask').fadeToggle(300);
    });


  /*=================================================
  スムーススクロール
  ===================================================*/
  $(function() {
    // ボタンをクリックした時の動き
    $('.js-faq-toggle').on('click', function() {
        // 次の要素（回答エリア）をスライドしながら表示・非表示
        $(this).next('.faq-a').slideToggle(300);
        
        // ボタンに「is-open」クラスをつけ外しする
        $(this).toggleClass('is-open');
    });
  });
});