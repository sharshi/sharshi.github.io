window.addEventListener("DOMContentLoaded", () => {
  menuList(["Projects", "Skills", "Contact"]);
  projects([
    {
      image: "images/wh-screenshot.png",
      title: "Web Hunt",
      description:
        "Web Hunt, is a single page web application inspired by Product Hunt. It allow creators to share their products and receive feedback from developers and tech enthusiasts.",
      links: [
        {
          url: "https://webhunt.dev",
          title: "live",
        },
        {
          url: "https://github.com/sharshi/Web-Hunt",
          title: "github",
        },
      ],
    },
    {
      image: "images/morning-dash-screenshot.png",
      title: "Morning Dash",
      description:
        "Morning Dash is your day at a glance. See local weather, your commute, and calendar events all in one place.",
      links: [
        {
          url: "https://themorningdash.herokuapp.com/",
          title: "live",
        },
        {
          url: "https://github.com/sharshi/Morning-Dash",
          title: "github",
        },
      ],
    },
    {
      image: "images/siddur-screenshot.png",
      title: "Siddur Torah Ohr, Chabad",
      description:
        "A Jewish Prayer app with over 22K MAU - displays relevant prayers based on location, date and time.",
      links: [
        {
          url:
            "https://apps.apple.com/us/app/siddur-torah-ohr-chabad/id1065612931",
          title: "app store",
        },
      ],
    },
    {
      image: "images/tidy-albatross-screenshot.png",
      title: "Tidy Albatross",
      description:
        "An endless runner game where users help an Albatross clean a beach.",
      links: [
        {
          url: "http://tidyalbatross.com",
          title: "live",
        },
        {
          url: "https://github.com/sharshi/TidyAlbatross",
          title: "github",
        },
      ],
    },
  ]);
  skills([
    {
      class: "react",
      image: "images/skills/react.svg",
      title: "React"
    },
    {
      class: "javascript",
      image: "images/skills/javascript.svg",
      title: "JavaScript"
    },
    {
      class: "ruby",
      image: "images/skills/ruby.svg",
      title: "Ruby"
    },
    {
      class: "rails",
      image: "images/skills/rails.svg",
      title: "Rails"
    },
    {
      class: "mongodb",
      image: "images/skills/mongodb.svg",
      title: "MongoDB"
    },
    {
      class: "postgresql",
      image: "images/skills/sql.svg",
      title: "SQL"
    },
    {
      class: "git",
      image: "images/skills/git.svg",
      title: "Git"
    },
    {
      class: "firebase",
      image: "images/skills/firebase.svg",
      title: "Firebase"
    },
    {
      class: "xcode",
      image: "images/skills/xcode.svg",
      title: "Xcode"
    },
    {
      class: "html5",
      image: "images/skills/html5.svg",
      title: "HTML5"
    },
    {
      class: "css3",
      image: "images/skills/css3.svg",
      title: "CSS3"
    },
    {
      class: "postgresql",
      image: "images/skills/postgresql.svg",
      title: "PostgreSQL"
    },
    {
      class: "redux",
      image: "images/skills/redux.svg",
      title: "Redux"
    },
    {
      class: "google-maps",
      image: "images/skills/googlemaps.svg",
      title: "Google Maps Transit API"
    },
    {
      class: "node-js",
      image: "images/skills/node-dot-js.svg",
      title: "NodeJS"
    },
    {
      class: "aws",
      image: "images/skills/amazonaws.svg",
      title: "AWS"
    }
  ]);
});

function menuList(list) {
  const listElements = list.map(el => {
    return `<li>
      <a href="#${el.toLowerCase()}" class="col-12-xsmall button">
        ${el}
      </a>
    </li>`;
  });

  createElement("menu-list", listElements);
}

function projects(list) {
  const listElements = list.map(el => {
    const links = el.links.map(link => {
      return `<a target="_blank" href="${link.url}" class="button small">${link.title}</a>`;
    });
    return `<article class="col-6 col-12-xsmall work-item">
					<a href="${el.image}" class="image fit thumb"><img
							src="${el.image}" alt="" /></a>
					<h3>${el.title}</h3>
					<p>${el.description}</p>
          <br>
          ${links.join("")}
				</article>`;
  });

  createElement("projects-content", listElements);
}

function skills(list) {
  const listElements = list.map(el => {
    return `<div class="col-3 col-12-xsmall mxwdth ${el.class}">
					<img src="${el.image}" alt="${el.title}">
					<p>${el.title}</p>
				</div>`;
  });

  createElement("skills-content", listElements);
}

const createElement = (list, id) => {
  document.getElementById(id).innerHTML = list.join('');
}