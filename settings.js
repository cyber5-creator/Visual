const version = require("@whiskeysockets/baileys/package.json").version

global.baileys = require('@whiskeysockets/baileys') 
global.language = "id"
global.nomerOwner = ["6282163617264"]
global.ownerjid = "6282163617264@s.whatsapp.net"
global.sig = "thaipuri"
global.email = "leocc0831@gmail.com"
global.runWith = "replit"
global.botName = "𝐂𝐲𝐛𝐞𝐫" 
global.ownerName = "𝚝𝚑𝚊𝚏𝚞𝚛𝚒" 
global.sessionName ="session"
global.setmenu ="location" 
global.docType = "docx"
global.prefa = "!"
global.fake = botName
global.copyright = `Bot WhatsApp`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.fake1 ="𝐚𝐧𝐢𝐧𝐝𝐲𝐚 ᴮᵒᵗ`"
global.packName = "𝐜𝐲𝐛𝐞𝐫 𝐛𝐨𝐭"
global.authorName = "𝐛𝐲 𝐭𝐡𝐚𝐢𝐟𝐮𝐫𝐢"
global.replyType = "mess"
global.setwelcome = "type1"
global.Dana = '6281316643491'
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
global.sgc = 'https://chat.whatsapp.com/Ftx4jCceLLJ4FyfBAAQtfc'
global.sig = 'https://www.instagram.com/thaipuri?igsh=Z2tlengzbzdjZXZk'
global.nobg = ['jVW2tQEAj2Qo7RD2mjcv99QU','Z9XYXF8LgFeszUF3a6u5PKbJ', 'yFPL4CQFi38fAWVhVQczyrBg']
global.token = "13cc2eee-5315-4d84-b3c8-d5b05ce297c3"
global.fileStackApi = "AVKHbeyXsT0G9IKI01qenz"  
// OPSI PAIRING BY DARWIN
global.usePairingCode = true // false untuk QR
// ISI NOMOR BOTNYA DISINI
global.pairingNumber = "6282163617264" // gunakan tanpa + dan spasi
//Set Bot
global.public = true
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = false 
global.Console = false
global.autorespon = false
global.autoblockcmd = false
//Apikey kalo error daftar aje
global.api = {
alice: 'always ehz', //skizo.tech
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
global.fotoRandom = [
    "https://telegra.ph/file/0ada53a88a1617b24e1c2.jpg",
    "https://telegra.ph/file/d0c414f12d006486256e8.jpg",
    "https://telegra.ph/file/8dd923a69f562d5264b3b.jpg",
    "https://telegra.ph/file/f6840e7b9c789bd6f7b75.jpg",
    "https://telegra.ph/file/a2b84d6ab76d01cefa658.jpg",
   
    ]

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






