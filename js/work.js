var work = {
  "jobs":
  [{
    "employer": "United Federation of Planets",
    "title": "Starfleet Captain",
    "location": "San Francisco",
    "dates": "Jan 2265 - Jan 2260",
    "description": "I served as captain of the USS Enterprise."
  }],
  display: function() {
    for (job in work.jobs)
    {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var combTitleEmp = formattedEmployer + formattedTitle;
      $("#workExperience").append(combTitleEmp);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $("#workExperience").append(formattedLocation);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $("#workExperience").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $("#workExperience").append(formattedDescription);
    }

  }
};
