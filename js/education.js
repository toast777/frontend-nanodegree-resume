var education =
{
  "schools":
  [{
    "name": "Starfleet Academy",
    "location": "San Francisco",
    "degree": "Command",
    "major": "Officer Training Program",
    "dates": 2257,
    "url": "http://acad.sfi.org/"
  }],
  "onlineCourses":
  [{
    "title": "Intergalactic Travel",
    "school": "Kelvan Empire",
    "date": 2268,
    "url": "http://en.memory-alpha.wikia.com/wiki/Andromeda_Galaxy"
  }],
  display: function()
  {
    $("#education").append(HTMLschoolStart);
    for (schools in education.schools)
    {
      var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schools].name);
      $("#education").append(formattedSchool);

      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
      $("#education").append(formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
      $("#education").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
      $("#education").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
      $("#education").append(formattedMajor);

      var formattedMajor = HTMLonlineURL.replace("%data%", education.schools[schools].url);
      $("#education").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (courses in education.onlineCourses)
    {
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
      $("#education").append(formattedTitle);

      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
      $("#education").append(formattedSchool);

      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].date);
      $("#education").append(formattedDate);

      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
      $("#education").append(formattedURL);
    }
  }
};