const TelegramBot = require('node-telegram-bot-api');
const token = '1145722716:AAEvgzIUzKSsD2VxjMxwNxsQDvhAsw8o8N0';
const bot = new TelegramBot(token, { polling: true });


const getRandomMessage = (messagesArray) => messagesArray[Math.floor(Math.random() * messagesArray.length)];

const sendMessageDelay = (messageSeries, chatId, senderId) => {
  if (senderId)
    messageSeries.forEach( (msgText, i) => {
      setTimeout( () => {
        bot.sendMessage(chatId, msgText, { reply_to_message_id: senderId }); 
      }, (i+2) * msgLag + 0.2* Math.random());
    });
  else
    messageSeries.forEach( (msgText, i) => {
    setTimeout( () => {
      bot.sendMessage(chatId, msgText); 
    }, (i+2) * msgLag + 0.2* Math.random());
  });
};

const sendStickerDelay = (stickerId, chatId, senderId) => {
  setTimeout( () => {
    if (senderId)
      bot.sendSticker(chatId, stickerId, { reply_to_message_id: senderId });
    else
      bot.sendSticker(chatId, stickerId);
  }, msgLag / 2 + 0.2* Math.random());
}

// 舒華 ------------------------------------
const newWife = {
  query: [
    '舒華',
    '新阿嫂'
  ],
  replies: [
    ['無無無', '真心無', '都係個句', 'Me好誠實'],
    ['唔會啦', 'Me好誠實'],
    ['無', '不了'],
    ['唔會啦', '我有女朋友'],
    ['真心無'],
    ['做野啫']
  ],
  stickers: [
    'CAACAgUAAxkBAAMhXqndhC_2F7CkKV1pD7b2hPnR77IAAh8MAALJ8ckCZq2EQGRCmUoZBA',
    'CAACAgUAAxkBAAN2Xqnx0ZmGYR0UzBIV3dJ4Rnbvd7YAAiAMAALJ8ckCn_DTTYMFAAE6GQQ'
  ]
}

// 大舅 ------------------------------------
const brotherInLaw = {
  query: [
    '女神',
    '大舅'
  ],
  replies: [
    ['因為我都未收到payme'],
    ['PayMe plz', '小龍已經pay左']
  ],
  stickers: [
    'CAACAgUAAxkBAAMiXqndhkAzau5Bcuow75c60-RghBQAAiAMAALJ8ckCn_DTTYMFAAE6GQQ'
  ]
}


// 生仔 ------------------------------------
const giveBirth = {
  query: [
    '生仔',
    '生女'
  ],
  replies: [
    ['Me生仔'],
    ['Me生孖仔'],
    ['女就生硬架啦'],
    ['老母話想要孫女']
  ],
  stickers: [
    'CAACAgUAAxkBAAN1XqnxQzB2isOoslo_B29ELsXjgbcAAuUEAALvoLUBCUtCr7MvwTcZBA',
    'CAACAgUAAxkBAAN0XqnxQWM8_AOs4mia9lAy9f-y5lEAAtkEAALvoLUBCl7eIFaqEacZBA'
  ]

}

// 坑妹 ------------------------------------
const hangSister = {
  query: [
    '坑妹'
  ],
  replies: [
    ['Marked'],
    ['Marked']
  ],
  stickers: []

}

// 呢個岩 ------------------------------------
const agger = {
  query: [
    'agger',
    '呢個岩',
    '呢個真',
    '得好岩'
  ],
  replies: [
    ['呢個岩'],
    ['呢個真']
  ],
  stickers: []
}

const msgLag = 2000;

bot.on('message', (msg) => {
  // console.log(msg);
  if (msg.from.username === 'ktse02' && brotherInLaw.query.some((query) => msg.text.toString().toLowerCase().split(' ').join('').includes(query))) {
    const stickerToSend = getRandomMessage(brotherInLaw.stickers);
    sendStickerDelay(stickerToSend, msg.chat.id, msg.message_id);

    const msgToSend = getRandomMessage(brotherInLaw.replies);
    sendMessageDelay(msgToSend, msg.chat.id);
  }


  else if (newWife.query.some((query) => msg.text.toString().toLowerCase().split(' ').join('').includes(query))) {
    const stickerToSend = getRandomMessage(newWife.stickers);
    sendStickerDelay(stickerToSend, msg.chat.id, msg.message_id);
    
    const msgToSend = getRandomMessage(newWife.replies);
    sendMessageDelay(msgToSend, msg.chat.id);
  }

  

  else if (giveBirth.query.some((query) => msg.text.toString().toLowerCase().split(' ').join('').includes(query))) {
    
    const msgToSend = getRandomMessage(giveBirth.replies);
    sendMessageDelay(msgToSend, msg.chat.id);

    const stickerToSend = getRandomMessage(giveBirth.stickers);
    sendStickerDelay(stickerToSend, msg.chat.id);
    
  }

  else if (hangSister.query.some((query) => msg.text.toString().toLowerCase().split(' ').join('').includes(query))) {
    const msgToSend = getRandomMessage(hangSister.replies);
    sendMessageDelay(msgToSend, msg.chat.id, msg.message_id);
  }

  else if (agger.query.some((query) => msg.text.toString().toLowerCase().split(' ').join('').includes(query))) {
    const msgToSend = getRandomMessage(agger.replies);
    sendMessageDelay(msgToSend, msg.chat.id);
  }


});