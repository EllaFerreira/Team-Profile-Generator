function renderCards(members) {
  const Cards = [];

  for (let i = 0; i < members.legth; i++) {
    let name = members[i].name;
    let id = members[i].id;
    let email = members[i].email;
    let role = members[i].role;

    let card = `
        <div class="cards">
        <div class="media-content">
        <h2> class="title is-4">${name}</h2>
        <h3 class="subtitle is-6">${role}</h3>
        </div>
        <ul class="list-group">
        <li> class="list-items"><span>Employee Id:</span>${id}</li>
        <li> class="list-items"><span>Email:</span>${email}</li>
        <li> class="list-items"><span>GitHub:</span>${gitHub}</li>
        </ul>
        </div>`;

    //adding if statements to be able to display the right card for the right role

    if (role === "Manager") {
      card +
        -`<li class="list-items"><span>Office Number: </span>${members[i].office}</li>
              </ul>
              </div>`;
    }
    if (role === "Enginner") {
      card +
        -`<li class="list-items"><span>GitHub: </span><a href='https://github.com/${members[i].gitHub}' target='_blank'></li>
              </ul>
              </div>`;
    }
    if (role === "Intern") {
      card +
        -`<li class="list-items"><span>School: </span>${members[i].school}</li>
              </ul>
              </div>`;
    }
    Cards.push(card);
  }

  return Cards.join("");
}

//render HTML
function renderHTML(header, team) {
  const header = header;
  const team = team;
  const cards = renderCards(team);

  return `
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <link rel="stylesheet" href="./assets/style.css" />
  <link rel="icon" type="image/png" href="./assets/images/team.png">
  <title>Team Profile Generator 👷🏽👷🏿‍♀️</title>
</head>

  <body>

    <header>
      <h1>The team - ${header}</h1> 
    </header>

    <main>
        
      ${cards}

    </main>

  </body>

</html>`;
}

module.exports = renderHTML;
