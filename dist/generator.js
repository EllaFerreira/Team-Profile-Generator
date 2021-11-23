function renderCards(theTeam) {
  const Cards = [];

  //looping
  for (let i = 0; i < theTeam.legth; i++) {
    let name = theTeam[i].name;
    let id = theTeam[i].id;
    let email = theTeam[i].email;
    let role = theTeam[i].role;

    let card = `
    <div class="columns is-centered" style="padding: 2rem">
                <div class="column">
                    <div class="card">
                        <div class="card-content">
                                  <p class="title is-4">${name}</p>
                                    <p class="subtitle is-6">@${role}</p>
                                  <div class="content">
                                <ul>
                                <li class="list-group-item"><span>Employee ID: </span>${id}</li>
                                <li class="list-group-item"><span>Email: </span><a href="mailto:${email}">${email}</a></li>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>`;

    //adding if statements to be able to display the right card for the right role

    if (role === "Manager") {
      card +
        -`<li class="list-items"><span>Office Number: </span>${theTeam[i].office}</li>
              </ul>
              </div>`;
    }
    if (role === "Enginner") {
      card +
        -`<li class="list-items"><span>GitHub: </span><a href='https://github.com/${theTeam[i].gitHub}' target='_blank'></li>
              </ul>
              </div>`;
    }
    if (role === "Intern") {
      card +
        -`<li class="list-items"><span>School: </span>${theTeam[i].school}</li>
              </ul>
              </div>`;
    }
    Cards.push(card);
  }

  return Cards.join("");
}

//render HTML
function renderHTML(theHeader, theTeam) {
  const header = theHeader;
  const team = theTeam;
  const showCards = renderCards(team);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <link rel="stylesheet" href="./assets/style.css" />
  <title>Team Profile Generator 👷🏽👷🏿‍♀️</title>
</head>

  <body>

    <header>
      <h1>Meet the team - ${header}</h1> 
    </header>

    <main>${showCards}</main>

  </body>

</html>`;
}

module.exports = renderHTML;
