window.addEventListener("DOMContentLoaded", () => {
  projects([
    {
      image: "images/siddur-screenshot.png",
      title: "Siddur Torah Ohr, Chabad",
      description:
        "A Jewish Prayer app with over 27K monthly active users - displays relevant prayers based on location, date and time.",
      links: [
        {
          url:
            "https://apps.apple.com/us/app/siddur-torah-ohr-chabad/id1065612931",
          title: "app store",
        },
      ],
    },
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
});

const projects = list => {
  const listElements = list.map(el => {
    const links = el.links.map(link => {
      return `<a target="_blank" href="${link.url}" class="button small">${link.title}</a>`;
    });
    return `
      <article class="col-6 col-12-xsmall work-item">
				<h3>${el.title}</h3>
				<p>${el.description}</p>
        
        ${links.join(" | ")}
      </article>
      <br>
    `;
  });

  createElement("projects-content", listElements);
}

const createElement = (id, list) => {
  document.getElementById(id).innerHTML = list.join("");
}
