const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250505997591";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_36_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIRCtzZWJDQWZjU0o3Z01ORlcwOUNQUGV1RmV3cThpQS8rb0ZncDZNSXd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3ZlNVMG5KM1RKYXZkd1lBdTB0a1ZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhNTNkZWMyLWEwYWUtNGY3ZS04NWUyLWZmZDVmNTQxNWM4OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTA3LFxuICAgICAgMjA4LFxuICAgICAgMTE3LFxuICAgICAgMjQ2LFxuICAgICAgMTEsXG4gICAgICAxNDUsXG4gICAgICAxODEsXG4gICAgICAxMjIsXG4gICAgICAyMSxcbiAgICAgIDM3LFxuICAgICAgNzAsXG4gICAgICAyNDQsXG4gICAgICAyNTUsXG4gICAgICAxMCxcbiAgICAgIDE0NCxcbiAgICAgIDM4LFxuICAgICAgMjM2LFxuICAgICAgMjU1LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDExNSxcbiAgICAgIDE1MSxcbiAgICAgIDYwLFxuICAgICAgMTQsXG4gICAgICA1NixcbiAgICAgIDg5LFxuICAgICAgMzEsXG4gICAgICA3NixcbiAgICAgIDc3LFxuICAgICAgOTQsXG4gICAgICA2MSxcbiAgICAgIDE0NixcbiAgICAgIDI1NSxcbiAgICAgIDEzNyxcbiAgICAgIDE4MSxcbiAgICAgIDE0OSxcbiAgICAgIDEzNSxcbiAgICAgIDE1NCxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtQ3VjRUlFT1dhNUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQVJ0cjdOVk1TZCs2TWM4d0VBNE45R0NEQ0xhNDFFV05RWm1GeWQ4U0R5ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDeTFYQlI4d2hud3BKRDNoc2F5c2ZScGx0UHhPdFN3QmVrRXJPbER1VUdFRUNISWVmaHJTaVdFWG5tRlh2RFQ0T3N0MG1QMW5NUTVOam12OGRPM3poUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPeGdHdUwxMzFZRC93bWs0Tzl1ek5HNlNsMTgxYjU3ckJkZ1JCcjR2SFlLLzNWK0xHWlhzSVRIb3NlcXdBeitSWW9nbHpmUDBuR0t2eXlhUzVSR3NnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTA1OTk3NTkxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMDUyMDA5NjcwNjczODozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDU5OTc1OTE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTEyMTY5XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
