/*
  EDT Bot
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// DISCORD_TOKEN: The token of your bot - https://discordapp.com/developers/applications/me

// Log our bot in
client.login(process.env.DISCORD_TOKEN);

// Create an event listener for messages
client.on('message', message => {
  if (message.content === 'edt week') {
    message.channel.send('https://edt.grenoble-inp.fr/'+process.env.EDT_YEAR+'/exterieur?clearTree=false&projectId=10&name='+process.env.EDT_GROUP+'&displayConfName=esisar_standard_impression');
  }
  if (message.content === 'edt now') {
    message.channel.send('Je sais pas moi, demande à Fulget...');
  }
  /*if (message.content === 'edt gros') {
    
        var ical = require('ical')
  , months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec']

    ical.fromURL('http://edt.esisariens.org/ics/emploi_du_temps_3APP-TP2.ics', {}, function(err, data) {
      for (var k in data){
        if (data.hasOwnProperty(k)) {
          var ev = data[k]
          message.channel.send("Cours "+
            ev.summary +
            ' en salle ' +
            ev.location +
            ' le '+ ev.start.getDate() + months[ev.start.getMonth()]);
        }
      }
    });

  }*/
  
});
