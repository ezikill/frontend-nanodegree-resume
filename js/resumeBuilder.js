/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append(["Colin"]);

var formattedName = HTMLheaderName.replace("%data%", "Colin McKean");
var formattedRole = HTMLheaderRole.replace("%data%", "Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);