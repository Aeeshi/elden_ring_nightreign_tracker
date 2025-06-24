fetch("progress_nightreign.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("characters-container");
    data.forEach((char) => {
      const completed = char.defeated_nightlords.filter(Boolean).length;
      const percent = ((completed / char.total) * 100).toFixed(1);

      const div = document.createElement("div");
      div.className = "character";
      div.innerHTML = `
        <h2>${char.name}</h2>
        <div class="progress-bar-wrapper">
          <div class="progress-bar-fill" style="width: ${percent}%;">${percent}%</div>
        </div>
        <p>${completed} / ${char.total} Nightlords defeated</p>
        <ul class="nightlords">
          ${char.nightlords.map((n, i) => `
            <li>
              <input type="checkbox" id="${char.name}-${i}" ${char.defeated_nightlords[i] ? "checked" : ""} disabled />
              <label for="${char.name}-${i}">${n}</label>
            </li>
          `).join("")}
        </ul>
      `;
      container.appendChild(div);
    });
  });