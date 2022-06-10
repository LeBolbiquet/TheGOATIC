const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

const prefix = ",";

Client.on("ready", () => {
    Client.application.commands.create(data);
    console.log("bot on");
});

Client.login("OTg0MDY1MzUyNDI4MzEwNTI4.GX-kiN.tHsazdHiPaY5KYRyy2H_1_O-g_8BboJnLIHuoo");

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong");

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "help"){
    const embed = new Discord.MessageEmbed()
        .setColor("#606EB2")
        .setAuthor({ name: 'Commande de THE GΘΔƬIC', iconURL: 'https://cdn.discordapp.com/attachments/984087423736762378/984121011450576906/pp_goatic_3_1.png', url: 'https://discord.gg/WTe9HUYM9v' })
        .setDescription('Mon préfixe sur le serveur est ``,``')
        .addFields(
            { name: '🚦・Commande Fun', value: '``loto``, ``word``', inline: true },
            { name: '⚙️・Config', value: '``some``, ``some``', inline: true },
            { name: '❓・Info', value: '``some``, ``some``', inline: true },
        )
        .setTimestamp()
        .setFooter(message.author.username);

    message.channel.send({embeds: [embed]});
    }
});

Client.on("messageCreate", (msg) => {
    const salutation = [
        'bonjour',
        'salut',
        'yo',
        'hello',
    ]
    if (salutation.includes(msg.content.toLowerCase())) {
        msg.reply('Salut toi ! Comment vas-tu ? <a:meowyey:963361634192072734>');
    }
})

Client.on("messageCreate", (msg) => {
    const response = [
        'bien',
        'super',
        'nikel',
        'cool',
    ]
    if (response.includes(msg.content.toLowerCase())) {
        msg.reply('Comme moi ! Attends je vais appeler mes chèvres <:Seagull:984453738825650176>\n<:Seagull2:984453740394315807> bêêêêhêêêê bêêêêhêêêê @here');
    }
})
