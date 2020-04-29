const TelegramBot = require('node-telegram-bot-api');
const token = '1145722716:AAEvgzIUzKSsD2VxjMxwNxsQDvhAsw8o8N0';
const bot = new TelegramBot(token, { polling: true });


const newWife = [
  ['無無無', '真心無', '都係個句', 'Me好誠實'],
  ['唔會啦', 'Me好誠實'],
  ['無', '不了'],
  ['唔會啦', '我有女朋友'],
  ['真心無'],
  ['做野啫']
];

const newWifeStickers = [
  'CAACAgUAAxkBAAMhXqndhC_2F7CkKV1pD7b2hPnR77IAAh8MAALJ8ckCZq2EQGRCmUoZBA',
  'CAACAgUAAxkBAAN2Xqnx0ZmGYR0UzBIV3dJ4Rnbvd7YAAiAMAALJ8ckCn_DTTYMFAAE6GQQ'
]

const hangSister = [
  ['因為我都未收到payme'],
  ['PayMe plz', '小龍已經pay左']
];

const giveBirth = [
  ['Me生仔'],
  ['Me生孖仔'],
  ['女就生硬架啦'],
  ['老母話想要孫女']
];

const giveBirthStickers = [
  'CAACAgUAAxkBAAN1XqnxQzB2isOoslo_B29ELsXjgbcAAuUEAALvoLUBCUtCr7MvwTcZBA',
  'CAACAgUAAxkBAAN0XqnxQWM8_AOs4mia9lAy9f-y5lEAAtkEAALvoLUBCl7eIFaqEacZBA'
]

const msgLag = 2000;

bot.on('message', (msg) => {
  // console.log(msg);
  if (msg.from.username === "ktse02" && (msg.text.toString().includes("女神") || msg.text.toString().includes("大舅"))) {

    setTimeout( () => {
      bot.sendSticker(msg.chat.id, 'CAACAgUAAxkBAAMiXqndhkAzau5Bcuow75c60-RghBQAAiAMAALJ8ckCn_DTTYMFAAE6GQQ', { reply_to_message_id: msg.message_id });
    }, msgLag / 2 + 0.2* Math.random());

    const msgToSend = hangSister[Math.floor(Math.random() * hangSister.length)];
    msgToSend.forEach( (msgText, i) => {
      setTimeout( () => {
        bot.sendMessage(msg.chat.id, msgText); 
      }, (i+2) * msgLag + 0.2* Math.random());
    });
  }


  else if (msg.text.toString().includes("舒華") || msg.text.toString().includes("新阿嫂")) {

    const stickerToSend = newWifeStickers[Math.floor(Math.random() * newWifeStickers.length)];
    setTimeout( () => {
      bot.sendSticker(msg.chat.id, stickerToSend, { reply_to_message_id: msg.message_id });
    }, msgLag / 2 + 0.2* Math.random());
    
    const msgToSend = newWife[Math.floor(Math.random() * newWife.length)];
    msgToSend.forEach( (msgText, i) => {
      setTimeout( () => {
        bot.sendMessage(msg.chat.id, msgText); 
      }, (i+2) * msgLag + 0.2* Math.random());
    });
  }

  

  else if (msg.text.toString().includes("生仔") || msg.text.toString().includes("生女") || msg.text.toString().includes("個女")) {
    
    const msgToSend = giveBirth[Math.floor(Math.random() * newWife.length)];
    msgToSend.forEach( (msgText, i) => {
      setTimeout( () => {
        bot.sendMessage(msg.chat.id, msgText); 
      }, (i+2) * msgLag + 0.2* Math.random());
    });

    const stickerToSend = giveBirthStickers[Math.floor(Math.random() * giveBirthStickers.length)];
    setTimeout( () => {
      bot.sendSticker(msg.chat.id, stickerToSend);
    }, msgLag / 2 + 0.2* Math.random());
    
  }

  else if (msg.text.toString().includes("坑妹")) {

    setTimeout( () => {
      bot.sendMessage(msg.chat.id, 'marked', { reply_to_message_id: msg.message_id });
    }, msgLag / 2 + 0.2* Math.random());
    
  }

  else if (msg.from.username === "sherrybomb") {

    if (Math.random() < 0.2){
      setTimeout( () => {
        bot.sendMessage(msg.chat.id, '呢個岩');
      }, msgLag / 2 + 0.2* Math.random());
    }
    
  }


});