//function to Capitalize last name
function inName(){
    var interName = (bio.name).split(" ");
    interName[1] = interName[1].toUpperCase();
    interName2 = interName.join(" ");
    return interName2;
}
//Add Capitalize Last Name Button
$("#main").append(internationalizeButton);
//Display Biographical Section
bio.display();
//Display Education Section
education.display();
//Display Work Section
work.display();
//Display Projects Section
projects.display();
//Display Map Section
$("#mapDiv").append(googleMap);
