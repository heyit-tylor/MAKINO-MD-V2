const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "254754783972";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "254754783972" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "254754783972";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "𝚃𝚈𝙻𝙾𝚁";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["Tylor"];
global.OwnerNumber = ["0754783972"]; 
global.ownertag = ["wa.me/254754783972"]; 
global.OwnerName = "Tylor";
global.BotName = "Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"SH9w+xyzgBzQkQJ18yYpeSWIuTQIYnKs5Wt8gtAH0Wk="},"public":{"type":"Buffer","data":"SHRDxAD0gusLt63rPLkw6FAOkGzu8Z7udq9XpXSnFjQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EKNc1c2c8wmUd1jCzkloA9K3c27eZMH61NPMmx1E4l0="},"public":{"type":"Buffer","data":"sbY4kjD8QhsclIS4IERJmiP6/gU+jL2Sl3AZkg6rjiU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GCqfGGztirf17e6eSCpZRNSc3zlfwXvCNjc1xDq6nmM="},"public":{"type":"Buffer","data":"HyZuYZ4/Je+Qbmo6QpXXqPs8dMAbCccc8EhxQyiGfV4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"sOuJhHq6NvaUAcYgirQUpgFyT9hXkhabKuvycqBx4G8="},"public":{"type":"Buffer","data":"PCw1SexIvYgaJwf7pZo9FM8b2JJrotZgXUMttAf0bg8="}},"signature":{"type":"Buffer","data":"K92ko9GOLDCXT6dFRDwlq9G97muixj/Q+jjZXtY+gmNdLa+3DZ30e3Gi23kYsX+xkJUpTV41sNhRGJWnrifSjg=="},"keyId":1},"registrationId":100,"advSecretKey":"lXvu5Xxj1yPrzA6vg13dL6VNd/VJkhZdkVjH4RKMlBk=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"VqubGZuqTfmtD3Elu4M3mw","phoneId":"6b6ab521-9b7a-44ce-9385-3b548b4179d9","identityId":{"type":"Buffer","data":"QWjGE+aC289GPpOjIc+nkXD4AGY="},"registered":true,"backupToken":{"type":"Buffer","data":"Y1JBtOxQ1PuYnZTVp8AScTYdIDs="},"registration":{},"pairingCode":"P7TGP3YY","me":{"id":"254754783972:30@s.whatsapp.net"},"account":{"details":"CNiU24kCEIXkkbIGGAMgACgA","accountSignatureKey":"Isy1zc7Rlk37035PC4plaUFrBLauOpyQsyzPaqw2nDU=","accountSignature":"z5BXTN3zlCgTsSVwEdzaTEYmbLdfyGfD6vdHzS/cjjotr0HIPUS4UalIHYzGFylpUp5WZEvK0nDQ12pWKYdsAQ==","deviceSignature":"2CLbdJ+pGnkns34u4hKp0iceuSMLqCL+B+oLeCyX7JtDJbWXyhIJpnAajcZXsQ/Qt/8+Ky704JTumdpGIoW9gA=="},"signalIdentities":[{"identifier":{"name":"254754783972:30@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSLMtc3O0ZZN+9N+TwuKZWlBawS2rjqckLMsz2qsNpw1"}}],"platform":"android","lastAccountSyncTimestamp":1715761682}"; //Session ID here.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["*"];
//process.env.PREFIX || "*";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🙂";
global.themeemoji = "😎";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
