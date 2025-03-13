const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { zokou } = require(__dirname + "/../framework/zokou");
const os = require("os");
const moment = require("moment-timezone");
const conf = require(__dirname + "/../set");

const AudioUrl = "https://files.catbox.moe/lb0x7w.mp3"; // New audio URL
const ThumbnailURL = "https://files.catbox.moe/o4f1bs.jpg"; // New image URL

moment.tz.setDefault(`${conf.TZ}`);

const getTimeAndDate = () => {
    return {
        time: moment().format('HH:mm:ss'),
        date: moment().format('DD/MM/YYYY')
    };
};

// Ping Command
zokou({ nomCom: "ping3", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms } = commandeOptions;
    const { time, date } = getTimeAndDate();
    const ping = Math.floor(Math.random() * 100) + 1; // Generate a random ping between 1ms - 100ms

    try {
        await zk.sendMessage(dest, { 
            text:`❣️ *Pong:* ${ping}ms\n📅 *Date:* ${date}\n⏰ *Time:* ${time}`, 
            ptt: true, // Voice note form
            audio: {URL:AudioUrl},
            contextInfo: {
            sourceUrl: conf.GURL,
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363302677217436@newsletter',
              newsletterName: '𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐌𝐃',
              serverMessageId: 143},
        externalAdReply: {
          title: "𝐓𝐇𝐄 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐌𝐃 𝐌𝐔𝐋𝐓𝐈𝐃𝐄𝐕𝐈𝐂𝐄",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/yedfbr.jpg",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true,

          showAdAttribution: false
        }
      }
    }, { quoted: ms });
    };
}
     catch (e) {
        console.log("❌ Ping Command Error: " + e);
        repondre("❌ Error: " + e);
    }
});
