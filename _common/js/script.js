//問題文オブジェクト
const quiz = [
  {
    question: 'お茶漬けの素に入っている「あられ」には、何の意味があるでしょうか？',
    options: [
      '湿気予防のため',
      '食感が良いから',
      '香りが良いから',
      '色合いのため'
    ],
    answer: '湿気予防のため'
  },
  {
    question: 'かぐや姫の原作である「竹取物語」の作者は誰でしょうか？',
    options: [
      '紫式部',
      '清少納言',
      '聖徳太子',
      '作者不明'
    ],
    answer: '作者不明'
  },
  {
    question: '靴の一種、「ローファー」には英語でどんな意味があるでしょうか？',
    options: [
      '怠け者',
      '働き者',
      '親不孝者',
      '幸せ者'
    ],
    answer: '怠け者'
  },
  {
    question: '炊飯器の保温機能は最大でだいたい何時間くらいが限度でしょうか？',
    options: [
      '12時間',
      '24時間',
      '36時間',
      '48時間'
    ],
    answer: '24時間'
  },
];

//クイズの数
const quizLength = quiz.length;
//クイズの初期値(while文のため)
let quizIndex = 0;
//スコアの初期値
let score = 0;

//回答ボタンのクラス名取得変数
const $QuizButton = document.getElementsByClassName('quiz--btn_container__item');
const ButtonLength = $QuizButton.length;

//クイズ
const SetUpQuiz = () => {
  //問題文取得し、指定IDのテキストとする
  document.getElementById('js-content').textContent = quiz[quizIndex].question;
  //回答ボタンの数の初期値
  let QuizButtonIndex = 0;
  //回答ボタン（クラス名）の数

  //回答ボタンの数が回答ボタン（クラス名）の数になるまで繰り返す
  while (QuizButtonIndex < ButtonLength) {
    //回答ボタンのテキストを取得し、指定クラスのテキストとする
    $QuizButton[QuizButtonIndex].textContent = quiz[quizIndex].options[QuizButtonIndex];
    //+1する
    QuizButtonIndex++;
  };
}
//実行する
SetUpQuiz();

//ボタンをクリックしたら正誤判定 e=MouseEvent
const ClickHandler = (e) => {
  if (quiz[quizIndex].answer === e.target.textContent) {
    window.alert('正解！');
    //正解ならスコアを+1する
    score++;
  } else {
    window.alert('不正解');
  };

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題がまだあればこちらを実行
    SetUpQuiz();
  } else {
    //問題がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizIndex + 'です！');
    quizIndex = 0;
    QuizButtonIndex = 0;
    score = 0;
    SetUpQuiz();
  }
};

//正誤判定の初期値
let HandlerIndex = 0;

while (HandlerIndex < ButtonLength) {
  $QuizButton[HandlerIndex].addEventListener('click', (e) => {
    ClickHandler(e);
  });
  HandlerIndex++;
}