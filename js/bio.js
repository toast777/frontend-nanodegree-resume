var bio ={
	"contacts": {
		mobile: "(123) 118-1047",
		email: "james.kirk@starfleet.com",
		github: "https://github.com/jameskirk84",
		twitter: "https://twitter.com/williamshatner",
		location: "Des Moines"
	},
	"name": "James Kirk",
	"role": "Starfleet Captain",
	"contact_info": "james.kirk@starfleet.com",
	"biopic": "images/James_Kirk,_2266.jpg",
	"welcomeMessage": "To Boldy Go where no man has gone before",
	"skills": ["Command", "Red-Shirt Killer", "Time Travel"],
	display: function () {
        //display header
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedPic);
		$("#header").prepend(formattedName);
        //display contacts below header and in footer
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
        //display welcome message and skills
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMsg);
		$("#header").append(HTMLskillsStart);
		for (skills in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
			$("#skills").append(formattedSkill);
		}
		
	}
};