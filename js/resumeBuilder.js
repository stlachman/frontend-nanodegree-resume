var bio = {
  "name": "Seth Lachman",
  "role": "Front-End Web Developer",
  "contactInfo": {
    "mobile": "717-799-8671",
    "email": "lachmanseth17@gmail.com",
    "github": "stlachman",
    "twitter": "SethLachman",
    "location": "Austin, TX"
    },
    "welcomeMessage": "Front Ender with a focus on the realness",
    "skills": ["JavaScript", "HTML", "CSS", "jQuery"],
    "bioPic": "images/gh_me.jpeg"
  };

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
  };

 var projects = {
   projects: [
     {
     "title": "Running App",
     "dates": "March 2016",
     "description": "An app to keep track of fitness level",
     "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
   }, 
   {
     "title": "Trails",
     "dates": "July 2016",
     "description": "An app to suggest trails",
     "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
   }
   ]
};

var education =  {
 	  "schools": [
     {
 		  "name": "St. John's College",
 		  "location": "Santa Fe",
 		  "degree": "Bachelor of Arts",
      "majors": ["Philosophy", " History of Mathematics and Science"],
 		  "dates": "2015"
   }], 
 		"onlineCourses": [
     {
 		"title": "Front-End Web Development Nanodegree",
 		"school": "Udacity",
 		"dates": "Near Future",
     "url": "https://www.udacity.com/"
    }
  ]
};
 



/*function inName(name) {
  var fname = name.trim().split(" ");
  console.log(fname);
  var secondHalf = fname[1].toUpperCase();
  var firstHalf = fname[0].slice(0,1).toUpperCase() + fname[0].slice(1).toLowerCase();

  var intName = firstHalf + " " + secondHalf;

   return intName;
} 

$("#main").append(internationalizeButton); */

bio.display = function() {

  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contactInfo.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contactInfo.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contactInfo.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contactInfo.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contactInfo.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contactInfo.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contactInfo.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contactInfo.location));
}

work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
    
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (onlineClass in education.onlineCourses){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


/*  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName); */