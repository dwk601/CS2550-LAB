//Create an object map called courses that stores a university department's course number as the key and an object as the value. The object has three properties: title, description, creditHours.
//Example courses:
//courses = {170 - Introduction to Programming, Develop algorithms for computers, 5.,
//250 - Web Development, Build web applications, 3.,
//310 - Operating Systems, Process management and memory management, 3.,
//430 - Artificial Intelligence, Simulate human thinking, 2.}

//Create a function called addCourse that takes three parameters: courseNumber, title, description, creditHours. The function should add a new course to the courses object. The courseNumber should be the key and the value should be an object with the title, description, and creditHours properties.

// let courses = {
//   170: {
//     title: "Introduction to Programming",
//     description: "Develop algorithms for computers",
//     creditHours: 5,
//   },
//   250: {
//     title: "Web Development",
//     description: "Build web applications",
//     creditHours: 3,
//   },
//   310: {
//     title: "Operating Systems",
//     description: "Process management and memory management",
//     creditHours: 3,
//   },
//   430: {
//     title: "Artificial Intelligence",
//     description: "Simulate human thinking",
//     creditHours: 2,
//   },
// };

// function addCourse(courseNumber, title, description, creditHours) {
//   courses[courseNumber] = {
//     title,
//     description,
//     creditHours,
//   };
// }

// let cast = {
//   // Code will be tested with different actors
//   "Tom Hanks": "Forrest Gump",
//   "Michael Connor Humphreys": "Young Forrest Gump",
//   "Robin Wright": "Jenny Curran",
//   "Gary Sinise": "Lieutenant Dan Taylor",
// };

// function roleOf(actorName, cast) {
//   //Define a function named deleteFromMovie() that takes the name of an actor and a cast as arguments, deletes that actor from the cast, and returns "Actor deleted". If the actor is not in the cast, return "Not in this cast". Ex: deleteFromMovie("Tom Hanks") returns "Actor deleted".

//   if (actorName in cast) {
//     delete cast[actorName];
//     return "Actor deleted";
//   } else {
//     return "Not in this cast";
//   }
// }

// let cast = new Map();

// //Add "Mackenzie Foy" to the cast as the key, with value "Young Murph".

// cast.set("Mackenzie Foy", "Young Murph");

let actors = new Map(); // Code will be tested with different actors

actors.set("Elijah Wood", {
  movie: "The Lord of the Rings",
  role: "Frodo Baggins",
});
actors.set("Orlando Bloom", {
  movie: "Pirates of the Caribbean",
  role: "Will Turner",
});
actors.set("Matthew McConaughey", { movie: "Interstellar", role: "Cooper" });
actors.set("Michael Connor Humphreys", {
  movie: "Forrest Gump",
  role: "Young Forrest Gump",
});

function actorInfo(actorName, actors) {
  //Define a function named actorInfo() that takes an actor name and actors map as arguments and outputs "{actorName} plays {role} in {movie}". If the actor is not found, the method outputs "Actor not found". Ex: actorInfo("Matthew McConaughey", actors) outputs "Matthew McConaughey plays Cooper in Interstellar" and actorInfo("Nicole Kidman", actors) outputs "Actor not found".

  if (actors.has(actorName)) {
    let actor = actors.get(actorName);
    return `${actorName} plays ${actor.role} in ${actor.movie}`;
  } else {
    return "Actor not found";
  }
}

actorInfo("Elijah Wood", actors);
