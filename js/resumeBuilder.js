
var education = {
    "schools": [
        {
            "location": "San Francisco",
            "major": "Officer Training Program",
            "gradYear": 2257
        }]
};

var work = {
    "jobs": [
        {
            "employer": "Computer Impressions",
            "title": "Systems Administrator",
            "location": "Overland Park",
            "dates": "Dec 2009 - Aug 2014",
            "description": "I served as both a contractor and part time employee supporting various small business IT needs. I had many job functions such as supporting Windows Desktops and Servers or doing custom development."
        },
        {
            "employer": "CCP/Polynt Composites",
            "title": "Systems Administrator",
            "location": "North Kansas City",
            "dates": "Aug 2014 - Present",
            "description": "Primarily I support the over 300 desktops deployed over the organization. I maintain the server infrastructure as well."
        }]
}
var projects = {
    "projects": [
        {
            "title": "Sample Project",
            "dates": "2014",
            "description" : "where is waldo",
            "images" : "images/fry.jpg"
        },
        {
            "title": "Sample Project",
            "dates": "2009",
            "description" : "The cat in the hat",
            "images" : "images/fry.jpg"
        }
    ]
};


function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $("#workExperience").append(formattedJob);
        $("#workExperience").append(formattedJob);
    }
}
displayWork();

function inName(){
    var interName = (bio.name).split(" ");
    interName[1] = interName[1].toUpperCase();
    interName2 = interName.join(" ");
    return interName2;
}
$("#main").append(internationalizeButton);
projects.display = function () {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $("#projects").append(formattedProTitle);
        var formattedProdate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $("#projects").append(formattedProdate);
        var formattedDescr = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescr);
        if (projects.projects[project].images.length > 0) {
            var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $("#projects").append(formattedimage);
        }
}

}
bio.display();
projects.display();
$("#mapDiv").append(googleMap);
