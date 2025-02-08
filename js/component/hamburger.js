export function toggleHamburger() {
  console.log("ハンバーガーメニューのスクリプトが読み込まれました！");

  const menu = document.querySelector(".l-header");
  const hamburger = document.querySelector(".l-header__hamburger");
  const overlay = document.querySelector(".overlay");


  // デバッグ用ログ
  console.log("ハンバーガーメニュー:", hamburger);
  console.log("サイドバー:", menu);
  console.log("オーバーレイ:", overlay);

  if (!menu || !hamburger) {
    console.error("要素が見つかりませんでした。クラス名を確認してください！");
    return;
  }

  hamburger.addEventListener('click', function () {
    menu.classList.toggle('is-active'); //サイドバー表示
    overlay.classList.toggle('is-active');  //背景黒反映
    hamburger.classList.toggle('is-active');  //×ボタン反映
  });
  
  overlay.addEventListener('click', function () {
    menu.classList.remove('is-active');
    overlay.classList.remove('is-active');
    hamburger.classList.remove('is-active');
  });
}