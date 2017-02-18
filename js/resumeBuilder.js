
var formattedName = HTMLheaderName.replace("%data%", name);


var formattedRole = HTMLheaderRole.replace("%data%", role);

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';


var bio = {
  "name": "Seth Lachman",
  "role": "Front-End Web Developer",
  "contactInfo": {
    "mobile": "717-799-8671",
    "email": "lachmanseth17@gmail.com",
    "github": "https://github.com/stlachman",
    "twitter": "@SethLachm",
    "location": "Austin, TX"
    },
    "welcomeMessage": "Front Ender with a focus on the realness",
    "skills": ["JavaScript", "HTML", "CSS", "jQuery"],
    "bioPic": "images/fry.jpg"
  }


if (bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);
   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkill);
   var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkill);
   var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkill);
   var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);
 }

 var projects = {
   projects: [{
     "title": "Running App",
     "dates": "March 2016",
     "description": "An app to keep track of fitness level",
     "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
   }, {
     "title": "Trails",
     "dates": "July 2016",
     "description": "An app to suggest trails",
     "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
   }]
   //display :function
 }

  projects.display = function() {
    for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates  );

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  };
  projects.display();

var work = {
  "jobs": [{
  "position": "Marketing Associate",
  "employer": "Trace Analytics",
  "years": "1",
  "city": "Austin",
  "description": "I help create marketing strategies and implement them."
}, {
  "position": "Clinical Aide",
  "employer": "Retreat",
  "years": "1",
  "city": "Lancaster",
  "description": "I helped faciliated a healthier environment for those suffering from addiction."
  }]
}

var work = {
  "jobs": [{
  "employer": "Trace Analytics",
  "title": "Marketing Associate",
  "location": "Austin, TX",
  "dates": "string",
  "description": ""
  //display: function
  }]
}

function displayWork() {

  for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedRole = HTMLworkTitle.replace("%data%", work.jobs[job].position);

  var formattedJobAndEmployer = formattedEmployer + formattedRole;
  $(".work-entry:last").append(formattedJobAndEmployer);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();




function inName(name) {
  var fname = name.trim().split(" ");
  console.log(fname);
  var secondHalf = fname[1].toUpperCase();
  var firstHalf = fname[0].slice(0,1).toUpperCase() + fname[0].slice(1).toLowerCase();

  var intName = firstHalf + " " + secondHalf;

   return intName;
}

$("#main").append(internationalizeButton);



var education =  {
 	"schools": [{
 		"name": "St. John's College",
 		"location": "Santa Fe",
 		"degree": "Bachelor of Arts",
     "majors": ["Philosophy", "History of Mathematics and Science"],
 		"dates": "2015"
 	}, {
 		"onlineCourses": "Udacity",
 		"title": "Anywhere",
 		"school": "n/a",
 		"dates": "Near Future",
     "url": "string"
 	}]
 }

  education["school"] = "St John's College";
  education["years"] = "2011-2015";
  education["schoolCity"] = "Santa Fe";




  $("#mapDiv").append(googleMap);


  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
