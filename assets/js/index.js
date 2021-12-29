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
    }
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
