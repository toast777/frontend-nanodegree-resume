var projects =
{
  "projects":
  [{
    "title": "Space Seed",
    "dates": "Stardate 3149.9",
    "description" : "The crew of the enterpise thrawts Khan's attempt to take over enterprise",
    "images": "images/Khan_Noonien_Singh,_2267.jpg"
  },
  {
    "title": "A Private Little War",
    "dates": "Stardate 4211.4",
    "description": "Stopped Klingons from arming a primative society",
    "images": "images/Kirk_and_Tyree.jpg"
  }],

  display: function()
  {
    for (project in projects.projects)
    {
      $("#projects").append(HTMLprojectStart);
      var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $("#projects").append(formattedProTitle);
      var formattedProdate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $("#projects").append(formattedProdate);
      var formattedDescr = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $("#projects").append(formattedDescr);
      if (projects.projects[project].images.length > 0)
      {
        var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $("#projects").append(formattedimage);
      }
    }
  }
};