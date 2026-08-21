const directions = {
  a: {
    name: "Poetic Louisiana",
    short: "Painterly & lyrical",
    description: "Atmospheric wetlands and expressive botanicals give the room a quiet sense of place without leaning into literal tourism imagery.",
    palette: ["#173f45", "#d9d2c4", "#6b8490", "#b69a66"],
  },
  b: {
    name: "Graphic Modernist",
    short: "Bold & architectural",
    description: "A stronger contemporary counterpoint using simplified geometry, controlled contrast, and shapes that echo river bends, rhythm, and ironwork.",
    palette: ["#173f45", "#f1eadc", "#a95745", "#bb8b3e"],
  },
  c: {
    name: "Collected Archive",
    short: "Layered & storied",
    description: "A refined grouping of botanical, landscape, and architectural studies brings the intimacy of a thoughtfully collected New Orleans residence.",
    palette: ["#604b38", "#e6dcc8", "#76808a", "#a77b52"],
  },
};

const rooms = [
  {
    id: "checker", number: "Room 01", name: "Blue Toile",
    description: "Checkerboard floor, dark-wood platform beds, and a sculptural toile backdrop. Art belongs on the daybed wall as a clean counterpoint.",
    images: { a: "/assets/checker-a.jpg", b: "/assets/checker-b.jpg", c: "/assets/checker-c.jpg" },
  },
  {
    id: "olive", number: "Room 02", name: "Olive Window",
    description: "A cocooning green room with the bed deliberately centered across the window. The console wall can carry either one immersive work or a collected grouping.",
    images: { a: "/assets/olive-a.jpg", b: "/assets/olive-b.jpg", c: "/assets/olive-c.jpg" },
  },
  {
    id: "teal", number: "Room 03", name: "Deep Teal",
    description: "A monochromatic jewel box. The narrow wall beside the bath is the room’s single art moment, so the work can be warmer and more concentrated.",
    images: { a: "/assets/teal-a.jpg", b: "/assets/teal-b.jpg", c: "/assets/teal-c.jpg" },
  },
  {
    id: "terra", number: "Room 04", name: "Terracotta Botanical",
    description: "Warm plaster tones and a patterned millwork niche create a layered envelope. The bed wall needs art with enough clarity to hold its own without competing.",
    images: { a: "/assets/terra-a.jpg", b: "/assets/terra-b.jpg", c: "/assets/terra-c.jpg" },
  },
  {
    id: "peacock", number: "Room 05", name: "Peacock Blue",
    description: "The blue headboard and dark botanical niche are already expressive. Art above the bed should bridge the cool architecture and coral textiles.",
    images: { a: "/assets/peacock-a.jpg", b: "/assets/peacock-b.jpg", c: "/assets/peacock-c.jpg" },
  },
  {
    id: "ivory", number: "Room 06", name: "Ivory & Green",
    description: "The calmest room in the set. The centered wall above the headboard can support a serene diptych, one statement work, or a compact archival grid.",
    images: { a: "/assets/ivory-a.jpg", b: "/assets/ivory-b.jpg", c: "/assets/ivory-c.jpg" },
  },
];

let activeRoom = rooms[0].id;
let activeDirection = "a";
let viewMode = "focus";
const state = JSON.parse(localStorage.getItem("erato-direction-state") || "{}");
const $ = (id) => document.getElementById(id);
const roomNav = $("room-nav");
const directionTabs = $("direction-tabs");

function roomState(id) {
  const current = state[id] || {};
  state[id] = {
    shortlist: Array.isArray(current.shortlist) ? current.shortlist : (current.favorite ? [current.direction || "a"] : []),
    note: current.note || "",
    direction: current.direction || "a",
    frame: current.frame || "Dark walnut",
    scale: current.scale || "Balanced",
  };
  return state[id];
}

function save(message = "Saved just now in this browser.") {
  localStorage.setItem("erato-direction-state", JSON.stringify(state));
  $("save-status").textContent = message;
  updateDecisionCount();
}

function updateDecisionCount() {
  const count = rooms.reduce((total, room) => total + roomState(room.id).shortlist.length, 0);
  $("decision-count").textContent = count;
}

function renderNav() {
  roomNav.innerHTML = rooms.map((room) => {
    const count = roomState(room.id).shortlist.length;
    return `<button class="room-button ${room.id === activeRoom ? "active" : ""}" data-room="${room.id}">
      <strong>${room.name}</strong><small>${room.number}${count ? ` · ${count} shortlisted` : ""}</small>
    </button>`;
  }).join("");
  roomNav.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    activeRoom = button.dataset.room;
    activeDirection = roomState(activeRoom).direction;
    render();
  }));
}

function renderTabs() {
  const saved = roomState(activeRoom);
  directionTabs.innerHTML = Object.entries(directions).map(([id, option]) => `
    <button class="direction-tab ${id === activeDirection ? "active" : ""} ${saved.shortlist.includes(id) ? "shortlisted" : ""}" data-direction="${id}">
      ${option.name}
    </button>`).join("");
  directionTabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => selectDirection(button.dataset.direction)));
}

function selectDirection(id) {
  activeDirection = id;
  roomState(activeRoom).direction = id;
  save();
  render();
}

function toggleShortlist(id = activeDirection) {
  const shortlist = roomState(activeRoom).shortlist;
  const index = shortlist.indexOf(id);
  if (index >= 0) shortlist.splice(index, 1);
  else shortlist.push(id);
  save();
  render();
}

function renderCompare(room) {
  const saved = roomState(room.id);
  $("compare-stage").innerHTML = Object.entries(directions).map(([id, option]) => `
    <article class="compare-card">
      <img src="${room.images[id]}" alt="${room.name} — ${option.name}">
      <div class="compare-card-body">
        <div class="compare-card-title"><h3>${option.name}</h3><span>${saved.shortlist.includes(id) ? "♥" : ""}</span></div>
        <p>${option.short}</p>
        <div class="compare-card-actions">
          <button class="primary" data-focus="${id}">View large</button>
          <button data-shortlist="${id}">${saved.shortlist.includes(id) ? "Remove" : "Shortlist"}</button>
        </div>
      </div>
    </article>`).join("");
  $("compare-stage").querySelectorAll("[data-focus]").forEach((button) => button.addEventListener("click", () => {
    viewMode = "focus";
    selectDirection(button.dataset.focus);
  }));
  $("compare-stage").querySelectorAll("[data-shortlist]").forEach((button) => button.addEventListener("click", () => toggleShortlist(button.dataset.shortlist)));
}

function render() {
  const room = rooms.find((item) => item.id === activeRoom);
  const choice = directions[activeDirection];
  const saved = roomState(room.id);
  renderNav();
  renderTabs();
  renderCompare(room);
  $("room-kicker").textContent = room.number;
  $("room-title").textContent = room.name;
  $("room-description").textContent = room.description;
  $("hero-image").src = room.images[activeDirection];
  $("hero-image").alt = `${room.name} bedroom — ${choice.name} art direction`;
  $("image-option").textContent = choice.name;
  $("image-caption").textContent = choice.short;
  $("direction-name").textContent = choice.name;
  $("direction-description").textContent = choice.description;
  $("palette").innerHTML = choice.palette.map((color) => `<span class="swatch" style="background:${color}" title="${color}"></span>`).join("");
  $("room-note").value = saved.note;
  $("frame-choice").value = saved.frame;
  $("scale-choice").value = saved.scale;
  const selected = saved.shortlist.includes(activeDirection);
  $("favorite-button").classList.toggle("active", selected);
  $("favorite-button").setAttribute("aria-pressed", selected);
  $("favorite-button").textContent = selected ? "♥ Shortlisted" : "♡ Shortlist option";
  $("visual-stage").classList.toggle("hidden", viewMode === "compare");
  $("compare-stage").classList.toggle("active", viewMode === "compare");
  $("focus-view").classList.toggle("active", viewMode === "focus");
  $("compare-view").classList.toggle("active", viewMode === "compare");
  updateDecisionCount();
}

function summaryText() {
  return rooms.map((room) => {
    const saved = roomState(room.id);
    const picks = saved.shortlist.length ? saved.shortlist.map((id) => directions[id].name).join(", ") : "No option shortlisted";
    return `${room.number} — ${room.name}\nShortlist: ${picks}\nFrame: ${saved.frame}\nArt presence: ${saved.scale}\nNotes: ${saved.note || "—"}`;
  }).join("\n\n");
}

function escapeHTML(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function openDrawer() {
  $("decision-summary").innerHTML = rooms.map((room) => {
    const saved = roomState(room.id);
    const picks = saved.shortlist.length ? saved.shortlist.map((id) => directions[id].name).join(", ") : "No option shortlisted";
    return `<article class="summary-card"><h3>${room.name}</h3><p><strong>Shortlist:</strong> ${picks}</p><p><strong>Frame:</strong> ${saved.frame} · <strong>Presence:</strong> ${saved.scale}</p><p class="${saved.note ? "" : "empty"}">${saved.note ? escapeHTML(saved.note) : "No refinement note yet."}</p></article>`;
  }).join("");
  $("drawer-backdrop").hidden = false;
  requestAnimationFrame(() => $("decision-drawer").classList.add("open"));
  $("decision-drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  $("decision-drawer").classList.remove("open");
  $("decision-drawer").setAttribute("aria-hidden", "true");
  setTimeout(() => { $("drawer-backdrop").hidden = true; }, 240);
}

$("favorite-button").addEventListener("click", () => toggleShortlist());
$("focus-view").addEventListener("click", () => { viewMode = "focus"; render(); });
$("compare-view").addEventListener("click", () => { viewMode = "compare"; render(); });
$("review-button").addEventListener("click", openDrawer);
$("close-drawer").addEventListener("click", closeDrawer);
$("drawer-backdrop").addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeDrawer(); });

let noteTimer;
$("room-note").addEventListener("input", (event) => {
  roomState(activeRoom).note = event.target.value;
  $("save-status").textContent = "Saving…";
  clearTimeout(noteTimer);
  noteTimer = setTimeout(save, 250);
});

$("frame-choice").addEventListener("change", (event) => { roomState(activeRoom).frame = event.target.value; save(); });
$("scale-choice").addEventListener("change", (event) => { roomState(activeRoom).scale = event.target.value; save(); });

$("copy-summary").addEventListener("click", async () => {
  await navigator.clipboard.writeText(summaryText());
  $("copy-summary").textContent = "Copied";
  setTimeout(() => { $("copy-summary").textContent = "Copy summary"; }, 1400);
});

$("download-summary").addEventListener("click", () => {
  const blob = new Blob([summaryText()], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "1722-erato-art-direction-notes.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});

render();
