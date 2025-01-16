client.on("messageCreate", (message) => {
  if (message.content === "Tagrip") {
      message.reply(`𝐃𝐆ᴿᴵᴾ`);
  }
if (message.content === "tagdr") {
      message.reply(`𝐃𝐆ᵈʳ`);
  } 
  if (message.content === "tagmvp") {
      message.reply(`𝐃𝐆ᴹᵛᴾ`);
  }
  if (message.content === "link") {
      message.reply(`https://discord.gg/yDFJtRMxXF`);
  } 
  client.login(process.env.login)
