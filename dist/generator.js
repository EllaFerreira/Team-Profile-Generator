function renderCards(teamMembers) {
  const AllCards = [];

  //looping
  for (var i = 0; i < teamMembers.length; i++) {
    var name = teamMembers[i].name;
    var id = teamMembers[i].id;
    var email = teamMembers[i].email;
    var role = teamMembers[i].role;

    let card = `
<div class="columns is-mobile" >
  <div class="card">
        <p class="title is-6">${name}</p>
          <p class="subtitle is-4">${role}</p>
            <div class="card-content">
          <ul>
        <li class="list-group-item"><span>Employee ID: </span>${id}</li>
      <li class="list-group-item"><span>Email: </span><a href="mailto:${email}">${email}</a></li>\n`;

    //adding if statements to be able to display the right card for the right role

if (role === "Manager") {
      card += ` <li class="list-items"><span>Office Number: </span>${teamMembers[i].office}</li>
      </ul>
      </div>
    </div>
  </div> `;
    
}

if (role === "Enginner") {
      card += ` <li class="list-items"><span>GitHub: </span><a href='https://github.com/${teamMembers[i].gitHub}' target='_blank'></a></li>
      </ul>
    </div>
    </div>
  </div>`;
    
}

if (role === "Intern") {
      card += `<li class="list-items"><span>School: </span>${teamMembers[i].school}</li>
      </ul>
      </div>
      </div>
  </div> `;
    
}

    AllCards.push(card);
  }

  return AllCards.join("");
}

//render HTML
function renderHTML(teamHeader, teamMembers) {
  const header = teamHeader;
  const members = teamMembers;
  const cards = renderCards(members);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="#">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <link rel="stylesheet" href="./assets/style.css" />
  <title>Team Profile Generator 👷🏽👷🏿‍♀️</title>
</head>

  <body>

    <header>
      <h1>Meet the team - ${header}</h1> 
    </header>

    <main>
    
    ${cards}
    
    </main>

  </body>

</html>`;
}

module.exports = renderHTML;
