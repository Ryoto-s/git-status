$(function(){
  $('#form').submit(function(){
    let $text = $('#name').val();
    let length1 = $text.length;
    let $email = $('#email').val();
    let length2 = $email.length;
    let $content = $('#content').val();
    let length3 = $content.length;
    if (length1 == 0){
      alert('必須入力項目をすべて入力してください');
      return false;
    } else if (length1 > 20) {
      alert('名前は20文字以内にしてください');
      $('#name').val('');
      return false;
    } else if (length2 == 0){
      alert('必須入力項目をすべて入力してください');
      return false;
    } else if (length3 == 0){
      alert('必須入力項目をすべて入力してください');
      return false;
    }
  });
});

let submitted=false;
function onLoad() {
  $('form')[0].reset();
  if (submitted) {
    $('#success').show();
  } else {
    $('#success').hide();
  };
};
/* || または の条件式; && かつ */
/* 文字列の中がからの場合はfalse 中身がある場合はtrue */
/* ! は trueとfalseを逆にする */
/* !$nameForm.val() || ! */
/* $(this)で親要素を持ってくる。一回使った要素を使い回せるため、動作が軽くなる場合がある */
/* if文でセミコロンはいらない */