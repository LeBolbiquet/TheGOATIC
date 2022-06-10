Client.on("interactionCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "interact") {
    var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Selectionnnez")
                .addOptions([
                    {
                        label: "premiere option",
                        description: "description",
                        value: "option1"
                    },
                    {
                        label: "seconde option",
                        description: "seconde description",
                        value: "option2",
                    }
                ])
        )
    message.channel.send({content: "menu de selection", components: [row]});
}});

Client.on("IntersectionCreate", interaction => {
    if(interaction.isSelectMenu()){
        if(interaction.setCustomId === "select"){
            console.log(interaction.values);

            if(interaction.values == "option1"){
                interaction.reply({content: "vous avez selectionner l'option 1", ephemeral: true});
            }
            else if(Discord.Interaction.values == "options2"){
                interaction.reply({content: "Vous avez selectionnez la 2", ephemeral: true});
            }
        }
    }
})

Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivé");
    Client.channels.cache.get("861321455525953539").send(member.displayName + "est arrivé.");
});

Client.on("guildMemberRemove", member => {
    console.log("un membre a quité");
    Client.channels.cache.get("861321455525953539").send(member.displayName + "a quitté.");
});
