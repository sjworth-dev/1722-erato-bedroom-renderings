const directions = {
  a: {
    letter: "A", name: "Poetic Louisiana", short: "Painterly & lyrical",
    description: "Atmospheric wetlands and expressive botanicals give the room a quiet sense of place without leaning into literal tourism imagery.",
    palette: ["#173f45", "#d9d2c4", "#6b8490", "#b69a66"],
    collection: "The most transportive direction: soft, atmospheric, and unmistakably connected to the Louisiana landscape."
  },
  b: {
    letter: "B", name: "Graphic Modernist", short: "Bold & architectural",
    description: "A stronger contemporary counterpoint using simplified geometry, controlled contrast, and shapes that echo river bends, rhythm, and ironwork.",
    palette: ["#173f45", "#f1eadc", "#a95745", "#bb8b3e"],
    collection: "The clearest hotel identity: crisp, memorable, and able to hold its own against the rooms’ strong color and pattern."
  },
  c: {
    letter: "C", name: "Collected Archive", short: "Layered & storied",
    description: "A refined grouping of botanical, landscape, and architectural studies brings the intimacy of a thoughtfully collected New Orleans residence.",
    palette: ["#604b38", "#e6dcc8", "#76808a", "#a77b52"],
    collection: "The most residential direction: layered, intimate, and varied enough to make every room feel individually collected."
  }
};

const rooms = [
  {
    id: "checker",
    number: "Room 01",
    name: "C105",
    description: "Checkerboard floor, dark-wood platform beds, and a sculptural toile backdrop. This spatial-art study treats the daybed wall as architecture rather than a place for conventionally framed work.",
    images: { a: "assets/checker-spatial-a.png", b: "assets/checker-spatial-b.png", c: "assets/checker-spatial-c.png" },
    options: {
      a: { name: "River Skin", short: "Wall-integrated limewash fresco", description: "Translucent mineral washes, tide lines, and soft drips spread directly across the plaster. The work has no object edge: it turns the wall itself into an atmospheric study of river sediment and summer rain.", palette: ["#ddd5c6", "#92999a", "#5d676b", "#a38b72"] },
      b: { name: "Water Light", short: "Cast-glass light installation", description: "An organic constellation of hand-cast glass lenses and subtle concealed light scatters watery reflections across the room. Individual pieces suggest current and salvaged material without forming a picture.", palette: ["#e5dfd0", "#8a9b91", "#56666a", "#b69054"] },
      c: { name: "Current Weave", short: "Fiber-and-cane soft sculpture", description: "Indigo cord, palmetto fiber, river cane, and oxidized copper move diagonally across the wall and corner as a monumental open weave—part net, part current, and fully spatial.", palette: ["#152b40", "#a68958", "#c9b895", "#584b3d"] }
    },
    allRenderings: [
      { src: "assets/checker-a.jpg", label: "Poetic Louisiana", meta: "Round 01 · Botanical print" },
      { src: "assets/checker-b.jpg", label: "Graphic Modernist", meta: "Round 01 · Graphic print" },
      { src: "assets/checker-c.jpg", label: "Collected Archive", meta: "Round 01 · Framed grouping" },
      { src: "assets/checker-local-a.png", label: "River Darkroom", meta: "Round 02 · Hand-toned photography" },
      { src: "assets/checker-local-b.png", label: "Delta Patchwork", meta: "Round 02 · Stitched fiber art" },
      { src: "assets/checker-local-c.png", label: "Sediment Relief", meta: "Round 02 · Plaster and brass" },
      { src: "assets/checker-spatial-a.png", label: "River Skin", meta: "Round 03 · Wall-integrated fresco" },
      { src: "assets/checker-spatial-b.png", label: "Water Light", meta: "Round 03 · Cast-glass installation" },
      { src: "assets/checker-spatial-c.png", label: "Current Weave", meta: "Round 03 · Fiber-and-cane sculpture" }
    ],
    originals: ["7712","7713","7714","7715","7716"]
  },
  { id: "olive", number: "Room 02", name: "C204", description: "A cocooning green room with the bed deliberately centered across the window. The console wall can carry either one immersive work or a collected grouping.", images: { a: "assets/olive-a.jpg", b: "assets/olive-b.jpg", c: "assets/olive-c.jpg" }, originals: ["7719","7720","7721","7722","7723","7724"] },
  { id: "teal", number: "Room 03", name: "C112", description: "A monochromatic jewel box. The narrow wall beside the bath is the room’s single art moment, so the work can be warmer and more concentrated.", images: { a: "assets/teal-a.jpg", b: "assets/teal-b.jpg", c: "assets/teal-c.jpg" }, originals: ["7717","7718"] },
  { id: "terra", number: "Room 04", name: "Terracotta Botanical A", description: "Warm plaster tones and a patterned millwork niche create a layered envelope. The bed wall needs art with enough clarity to hold its own without competing.", images: { a: "assets/terra-a.jpg", b: "assets/terra-b.jpg", c: "assets/terra-c.jpg" }, originals: ["7725","7726"] },
  { id: "peacock", number: "Room 05", name: "C215", description: "The blue headboard and dark botanical niche are already expressive. Art above the bed should bridge the cool architecture and coral textiles.", images: { a: "assets/peacock-a.jpg", b: "assets/peacock-b.jpg", c: "assets/peacock-c.jpg" }, originals: ["7739","7740"] },
  { id: "ivory", number: "Room 06", name: "C217", description: "The calmest room in the set. The centered wall above the headboard can support a serene diptych, one statement work, or a compact archival grid.", images: { a: "assets/ivory-a.jpg", b: "assets/ivory-b.jpg", c: "assets/ivory-c.jpg" }, originals: ["7741","7742","7743"] },
  { id: "teal-built-in", number: "Room 07", name: "C103", description: "A newly separated room study defined by deep teal millwork. Its furniture plan and art program are ready to be developed as a distinct direction.", originals: ["7711"], sourceOnly: true },
  { id: "pale-blue-toile", number: "Room 08", name: "C208", description: "A second newly separated room with pale-blue built-ins and toile-lined millwork. It now has its own source page, independent from the checkerboard bedroom.", originals: ["7730","7731"], sourceOnly: true },
  { id: "terra-b", number: "Room 09", name: "Terracotta Botanical B", description: "A newly separated terracotta bedroom documented in its own source set. Its individual furniture plan and art direction can now be developed independently.", originals: ["7727","7728"], sourceOnly: true },
  { id: "terra-c", number: "Room 10", name: "Terracotta Botanical C", description: "A newly separated terracotta bedroom documented in its own source set. Its individual furniture plan and art direction can now be developed independently.", originals: ["7732","7733","7734"], sourceOnly: true },
  { id: "terra-d", number: "Room 11", name: "Terracotta Botanical D", description: "A newly separated terracotta bedroom documented in its own source set. Its individual furniture plan and art direction can now be developed independently.", originals: ["7735","7736","7737"], sourceOnly: true }
];

let activeRoom = rooms[0].id;
let activeDirection = "a";
let collectionDirection = "a";
let viewMode = "focus";
let archiveView = "originals";
let lightboxItems = [];
let lightboxIndex = 0;
const state = JSON.parse(localStorage.getItem("erato-direction-state") || "{}");
const $ = (id) => document.getElementById(id);

function roomState(id) {
  const current = state[id] || {};
  const resetForSpatialStudy = id === "checker" && current.conceptRevision !== "spatial-v2";
  state[id] = {
    shortlist: resetForSpatialStudy ? [] : (Array.isArray(current.shortlist) ? current.shortlist : (current.favorite ? [current.direction || "a"] : [])),
    note: current.note || "",
    direction: resetForSpatialStudy ? "a" : (current.direction || "a"),
    frame: resetForSpatialStudy ? "Integrated / frameless" : (current.frame || "Dark walnut"),
    scale: current.scale || "Balanced",
    conceptRevision: id === "checker" ? "spatial-v2" : current.conceptRevision
  };
  return state[id];
}

function isComplete(id) {
  const saved = roomState(id);
  return saved.shortlist.length > 0 || saved.note.trim().length > 0;
}

function roomImage(room, direction = "a") {
  return room.sourceOnly ? `assets/originals/IMG_${room.originals[0]}.jpg` : room.images[direction];
}

function optionFor(room, id) {
  return { ...directions[id], ...(room.options?.[id] || {}) };
}

function save(message = "Saved locally") {
  localStorage.setItem("erato-direction-state", JSON.stringify(state));
  $("save-status").textContent = message;
  updateProgress();
}

let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  $("toast").textContent = message;
  $("toast").classList.add("show");
  toastTimer = setTimeout(() => $("toast").classList.remove("show"), 1800);
}

function updateProgress() {
  const decisions = rooms.reduce((sum, room) => sum + roomState(room.id).shortlist.length, 0);
  const complete = rooms.filter((room) => isComplete(room.id)).length;
  $("decision-count").textContent = decisions;
  $("rooms-shaped").textContent = complete;
  $("progress-fill").style.width = `${(complete / rooms.length) * 100}%`;
}

function renderNav() {
  $("room-nav").innerHTML = rooms.map((room) => {
    const saved = roomState(room.id);
    return `<button class="room-button ${room.id === activeRoom ? "active" : ""}" data-room="${room.id}">
      <img class="room-thumb" src="${roomImage(room, saved.direction)}" alt="">
      <span class="room-button-copy"><strong>${room.name}</strong><small>${room.number}${saved.shortlist.length ? ` · ${saved.shortlist.length} saved` : ""}</small></span>
      <span class="room-status ${isComplete(room.id) ? "complete" : ""}" aria-label="${isComplete(room.id) ? "Room shaped" : "No decision yet"}">✓</span>
    </button>`;
  }).join("");
  $("room-nav").querySelectorAll("[data-room]").forEach((button) => button.addEventListener("click", () => selectRoom(button.dataset.room)));
}

function renderTabs() {
  const room = rooms.find((item) => item.id === activeRoom);
  const saved = roomState(activeRoom);
  $("direction-tabs").innerHTML = Object.keys(directions).map((id) => {
    const option = optionFor(room, id);
    return `
    <button class="direction-tab ${id === activeDirection ? "active" : ""}" data-direction="${id}" aria-pressed="${id === activeDirection}">
      <span class="direction-letter">${option.letter}</span>
      <span class="direction-copy"><strong>${option.name}</strong><small>${option.short}</small></span>
      <span class="direction-heart">${saved.shortlist.includes(id) ? "♥" : ""}</span>
    </button>`;
  }).join("");
  $("direction-tabs").querySelectorAll("[data-direction]").forEach((button) => button.addEventListener("click", () => selectDirection(button.dataset.direction)));
}

function selectRoom(id) {
  activeRoom = id;
  activeDirection = roomState(id).direction;
  viewMode = "focus";
  archiveView = "originals";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeRoom(step) {
  const index = rooms.findIndex((room) => room.id === activeRoom);
  selectRoom(rooms[(index + step + rooms.length) % rooms.length].id);
}

function selectDirection(id) {
  activeDirection = id;
  roomState(activeRoom).direction = id;
  save();
  render();
}

function toggleShortlist(id = activeDirection) {
  const room = rooms.find((item) => item.id === activeRoom);
  const option = optionFor(room, id);
  const shortlist = roomState(activeRoom).shortlist;
  const index = shortlist.indexOf(id);
  if (index >= 0) {
    shortlist.splice(index, 1);
    toast(`${option.name} removed from shortlist`);
  } else {
    shortlist.push(id);
    toast(`${option.name} saved for this room`);
  }
  save();
  render();
}

function renderCompare(room) {
  if (room.sourceOnly) {
    $("compare-stage").innerHTML = "";
    return;
  }
  const saved = roomState(room.id);
  $("compare-stage").innerHTML = Object.keys(directions).map((id) => {
    const option = optionFor(room, id);
    return `
    <article class="compare-card">
      <div class="compare-card-image"><img src="${room.images[id]}" alt="${room.name} — ${option.name}"><span class="compare-badge">${option.letter}</span></div>
      <div class="compare-card-body">
        <div class="compare-card-title"><h3>${option.name}</h3><span class="direction-heart">${saved.shortlist.includes(id) ? "♥" : ""}</span></div>
        <p>${option.short}</p>
        <div class="compare-card-actions"><button class="primary" data-focus="${id}">View large</button><button data-shortlist="${id}">${saved.shortlist.includes(id) ? "Remove" : "Save option"}</button></div>
      </div>
    </article>`;
  }).join("");
  $("compare-stage").querySelectorAll("[data-focus]").forEach((button) => button.addEventListener("click", () => {
    viewMode = "focus";
    selectDirection(button.dataset.focus);
  }));
  $("compare-stage").querySelectorAll("[data-shortlist]").forEach((button) => button.addEventListener("click", () => toggleShortlist(button.dataset.shortlist)));
}

function renderCollection() {
  $("collection-tabs").innerHTML = Object.entries(directions).map(([id, option]) => `<button class="collection-tab ${id === collectionDirection ? "active" : ""}" data-collection-direction="${id}">${option.letter} · ${option.name}</button>`).join("");
  $("collection-grid").innerHTML = rooms.map((room) => `<button class="collection-card" data-collection-room="${room.id}"><img src="${roomImage(room, collectionDirection)}" alt="${room.name}${room.sourceOnly ? " — original condition" : ` — ${optionFor(room, collectionDirection).name}`}"><span>${room.number} · ${room.name}${room.sourceOnly ? " · Source only" : ""}</span></button>`).join("");
  $("collection-summary").textContent = directions[collectionDirection].collection;
  $("collection-tabs").querySelectorAll("[data-collection-direction]").forEach((button) => button.addEventListener("click", () => {
    collectionDirection = button.dataset.collectionDirection;
    renderCollection();
  }));
  $("collection-grid").querySelectorAll("[data-collection-room]").forEach((button) => button.addEventListener("click", () => {
    closeCollection();
    selectRoom(button.dataset.collectionRoom);
    selectDirection(collectionDirection);
  }));
}

function originalItems(room) {
  return room.originals.map((number, index) => ({
    src: `assets/originals/IMG_${number}.jpg`,
    label: `${room.name} · Existing condition`,
    meta: `Original ${String(index + 1).padStart(2, "0")} / ${String(room.originals.length).padStart(2, "0")}`
  }));
}

function renderingItems(room) {
  if (room.sourceOnly) return [];
  if (room.allRenderings) return room.allRenderings;
  return Object.keys(directions).map((id) => {
    const direction = optionFor(room, id);
    return {
      src: room.images[id],
      label: direction.name,
      meta: `${direction.letter} · Concept rendering`
    };
  });
}

function archiveItems(room) {
  return archiveView === "renderings" ? renderingItems(room) : originalItems(room);
}

function renderSourceStrip(room) {
  const items = originalItems(room);
  $("source-photo-count").textContent = items.length;
  $("source-strip-grid").innerHTML = items.slice(0, 4).map((item, index) => `
    <button class="source-thumb" data-source-index="${index}" type="button">
      <img src="${item.src}" alt="${item.label}"><span>Original ${String(index + 1).padStart(2, "0")}</span>
    </button>`).join("");
  $("source-strip-grid").querySelectorAll("[data-source-index]").forEach((button) => button.addEventListener("click", () => {
    lightboxItems = items;
    openLightbox(Number(button.dataset.sourceIndex));
  }));
}

function renderArchive(room) {
  if (room.sourceOnly) archiveView = "originals";
  const renderings = renderingItems(room);
  lightboxItems = archiveItems(room);
  $("original-count").textContent = room.originals.length;
  $("rendering-count").textContent = renderings.length;
  $("rendering-tab").disabled = room.sourceOnly;
  $("archive-description").textContent = archiveView === "originals"
    ? `${room.originals.length} source photograph${room.originals.length === 1 ? "" : "s"} document${room.originals.length === 1 ? "s" : ""} the room${room.sourceOnly ? " before its first rendering study" : ", its millwork, and adjoining spaces"}.`
    : `${renderings.length} rendering${renderings.length === 1 ? "" : "s"} across every completed concept round, labeled by medium and sequence.`;
  $("archive-tabs").querySelectorAll("[data-archive-view]").forEach((button) => button.classList.toggle("active", button.dataset.archiveView === archiveView));
  $("archive-grid").innerHTML = lightboxItems.map((item, index) => `
    <button class="archive-card" data-archive-index="${index}" type="button">
      <img src="${item.src}" alt="${item.label}">
      <span class="archive-caption"><span>${item.label}</span><small>${item.meta}</small></span>
    </button>`).join("");
  $("archive-grid").querySelectorAll("[data-archive-index]").forEach((button) => button.addEventListener("click", () => openLightbox(Number(button.dataset.archiveIndex))));
}

function updateLightbox() {
  const item = lightboxItems[lightboxIndex];
  if (!item) return;
  $("lightbox-image").src = item.src;
  $("lightbox-image").alt = item.label;
  $("lightbox-label").textContent = item.label;
  $("lightbox-position").textContent = `${lightboxIndex + 1} / ${lightboxItems.length} · ${item.meta}`;
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  $("image-lightbox").classList.add("open");
  $("image-lightbox").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  $("image-lightbox").classList.remove("open");
  $("image-lightbox").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function changeLightbox(step) {
  lightboxIndex = (lightboxIndex + step + lightboxItems.length) % lightboxItems.length;
  updateLightbox();
}

function openCollection() {
  collectionDirection = activeDirection;
  renderCollection();
  $("collection-backdrop").hidden = false;
  requestAnimationFrame(() => $("collection-modal").classList.add("open"));
  $("collection-modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCollection() {
  $("collection-modal").classList.remove("open");
  $("collection-modal").setAttribute("aria-hidden", "true");
  setTimeout(() => { $("collection-backdrop").hidden = true; }, 220);
  document.body.style.overflow = "";
}

function applyCollection() {
  rooms.filter((room) => !room.sourceOnly).forEach((room) => { roomState(room.id).direction = collectionDirection; });
  activeDirection = collectionDirection;
  save();
  closeCollection();
  render();
  toast(`${directions[collectionDirection].name} set across the six rendered rooms`);
}

function render() {
  const room = rooms.find((item) => item.id === activeRoom);
  const roomIndex = rooms.indexOf(room);
  const choice = optionFor(room, activeDirection);
  const saved = roomState(room.id);
  renderNav();
  renderTabs();
  renderCompare(room);
  renderArchive(room);
  renderSourceStrip(room);
  $("room-total").textContent = rooms.length;
  $("source-room-notice").hidden = !room.sourceOnly;
  $("main-panel").classList.toggle("source-room", Boolean(room.sourceOnly));
  $("room-position").textContent = `Bedroom ${String(roomIndex + 1).padStart(2, "0")} / ${String(rooms.length).padStart(2, "0")}`;
  $("room-kicker").textContent = room.number;
  $("room-title").textContent = room.name;
  $("room-description").textContent = room.description;
  $("hero-image").src = roomImage(room, activeDirection);
  $("hero-image").alt = room.sourceOnly ? `${room.name} — original condition` : `${room.name} bedroom — ${choice.name} art direction`;
  $("image-option").textContent = room.sourceOnly ? "Original condition" : choice.name;
  $("image-caption").textContent = room.sourceOnly ? "Awaiting first art-direction renderings" : choice.short;
  $("direction-name").textContent = choice.name;
  $("direction-description").textContent = choice.description;
  $("palette").innerHTML = choice.palette.map((color) => `<span class="swatch" style="background:${color}" title="${color}"></span>`).join("");
  $("room-note").value = saved.note;
  $("frame-choice").value = saved.frame;
  $("scale-choice").value = saved.scale;
  const selected = !room.sourceOnly && saved.shortlist.includes(activeDirection);
  $("stage-shortlist").classList.toggle("active", selected);
  $("stage-shortlist").setAttribute("aria-pressed", selected);
  $("stage-shortlist").textContent = selected ? "♥ Saved to shortlist" : "♡ Save this direction";
  $("visual-stage").classList.toggle("hidden", viewMode === "compare");
  $("compare-stage").classList.toggle("active", viewMode === "compare");
  $("focus-view").classList.toggle("active", viewMode === "focus");
  $("compare-view").classList.toggle("active", viewMode === "compare");
  const next = rooms[(roomIndex + 1) % rooms.length];
  $("next-room-title").textContent = roomIndex === rooms.length - 1 ? "Return to the first room" : `Continue to ${next.name}`;
  updateProgress();
}

function summaryText() {
  return rooms.map((room) => {
    const saved = roomState(room.id);
    if (room.sourceOnly) return `${room.number} — ${room.name}\nStatus: Source room added; art-direction renderings pending\nOriginal photographs: ${room.originals.length}`;
    const picks = saved.shortlist.length ? saved.shortlist.map((id) => optionFor(room, id).name).join(", ") : "No option shortlisted";
    return `${room.number} — ${room.name}\nWorking view: ${optionFor(room, saved.direction).name}\nShortlist: ${picks}\nFrame: ${saved.frame}\nArt presence: ${saved.scale}\nNotes: ${saved.note || "—"}`;
  }).join("\n\n");
}

function escapeHTML(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function openDrawer() {
  $("decision-summary").innerHTML = rooms.map((room) => {
    const saved = roomState(room.id);
    if (room.sourceOnly) return `<article class="summary-card"><div class="summary-card-heading"><h3>${room.name}</h3><small>Source room</small></div><p><strong>Status:</strong> Art-direction renderings pending</p><p>${room.originals.length} original photograph${room.originals.length === 1 ? "" : "s"} added.</p></article>`;
    const picks = saved.shortlist.length ? saved.shortlist.map((id) => optionFor(room, id).name).join(", ") : "No option shortlisted";
    return `<article class="summary-card"><div class="summary-card-heading"><h3>${room.name}</h3><small>${optionFor(room, saved.direction).name}</small></div><p><strong>Shortlist:</strong> ${picks}</p><p><strong>Frame:</strong> ${saved.frame} · <strong>Presence:</strong> ${saved.scale}</p><p class="${saved.note ? "" : "empty"}">${saved.note ? escapeHTML(saved.note) : "No refinement note yet."}</p></article>`;
  }).join("");
  $("drawer-backdrop").hidden = false;
  requestAnimationFrame(() => $("decision-drawer").classList.add("open"));
  $("decision-drawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  $("decision-drawer").classList.remove("open");
  $("decision-drawer").setAttribute("aria-hidden", "true");
  setTimeout(() => { $("drawer-backdrop").hidden = true; }, 240);
  document.body.style.overflow = "";
}

async function copySummary() {
  const text = summaryText();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  toast("Decision notes copied");
}

$("stage-shortlist").addEventListener("click", () => toggleShortlist());
$("focus-view").addEventListener("click", () => { viewMode = "focus"; render(); });
$("compare-view").addEventListener("click", () => { viewMode = "compare"; render(); });
$("previous-room").addEventListener("click", () => changeRoom(-1));
$("next-room").addEventListener("click", () => changeRoom(1));
$("next-room-large").addEventListener("click", () => changeRoom(1));
$("collection-button").addEventListener("click", openCollection);
$("close-collection").addEventListener("click", closeCollection);
$("collection-backdrop").addEventListener("click", closeCollection);
$("apply-collection").addEventListener("click", applyCollection);
$("review-button").addEventListener("click", openDrawer);
$("close-drawer").addEventListener("click", closeDrawer);
$("drawer-backdrop").addEventListener("click", closeDrawer);
$("view-all-originals").addEventListener("click", () => {
  archiveView = "originals";
  renderArchive(rooms.find((room) => room.id === activeRoom));
  $("archive-heading").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("archive-tabs").querySelectorAll("[data-archive-view]").forEach((button) => button.addEventListener("click", () => {
  archiveView = button.dataset.archiveView;
  renderArchive(rooms.find((room) => room.id === activeRoom));
}));
$("close-lightbox").addEventListener("click", closeLightbox);
$("image-lightbox").addEventListener("click", (event) => { if (event.target === $("image-lightbox")) closeLightbox(); });
$("previous-image").addEventListener("click", () => changeLightbox(-1));
$("next-image").addEventListener("click", () => changeLightbox(1));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closeLightbox(); closeCollection(); closeDrawer(); }
  if ($("image-lightbox").classList.contains("open") && event.key === "ArrowLeft") changeLightbox(-1);
  if ($("image-lightbox").classList.contains("open") && event.key === "ArrowRight") changeLightbox(1);
});

let noteTimer;
$("room-note").addEventListener("input", (event) => {
  roomState(activeRoom).note = event.target.value;
  $("save-status").textContent = "Saving…";
  clearTimeout(noteTimer);
  noteTimer = setTimeout(save, 250);
});
$("frame-choice").addEventListener("change", (event) => { roomState(activeRoom).frame = event.target.value; save(); });
$("scale-choice").addEventListener("change", (event) => { roomState(activeRoom).scale = event.target.value; save(); });
$("copy-summary").addEventListener("click", copySummary);
$("download-summary").addEventListener("click", () => {
  const blob = new Blob([summaryText()], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "1722-erato-art-direction-decision-book.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});

render();
