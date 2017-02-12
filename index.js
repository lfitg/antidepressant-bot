var token = process.env.TELEGRAM_TOKEN

var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot(token, {polling: true});

var textArr = [
  'да хулі тут бля думать', 'тю їбать',
  'грацую бро', 'панове, це піздець',
  'отета норм', 'жизнь боль',
  'це зрада', 'нє, ну а чьо нє',
  'ну а хулi', 'та шо ж ета такоє',
  'та конешо шо так', 'пф... ну да, канешо',
  'шота всьо плохо',
  'децкий сад, бля',
  'сказав, як в воду перднув',
  'всраться і не жить',
  'моє ж ти сонечко',
  'щось ти дохуя пиздиш',
  'це мєрзость',
  'йобушки воробушки',
  'совпадєніє',
  'братішка ти шо, гоніш',
  'шляк би його трафив'
];

function getAnswer(text) {
  if (text.includes("/start")){
    return "и шо вас опять сюда привело!?";
  } else if (text.includes("привет")) {
    return "да божеж мой, шо случилось?";
  } else if (text.includes("ладно") || text.includes("спасибо")){
    return "вот и хорошо";
  }
  else {
    var randomNumber = Math.floor(Math.random()*textArr.length);
    return textArr[randomNumber]
  }
}



telegram.on("message", (msg) => {
  var text = '';
  console.log(msg.text);
if(typeof msg.text !== 'undefined'){
  text = msg.text.toLowerCase();
}
const replay = getAnswer(text);
telegram.sendMessage(msg.chat.id, replay, {parse_mode: "Markdown"});
});
