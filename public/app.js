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
    images: { a: "assets/checker-second-line-shadow-mixed.png", b: "assets/checker-bayou-chorus-hybrid.png", c: "assets/checker-bayou-chorus-cutouts.png" },
    options: {
      a: { name: "Second-Line Shadow", short: "One plywood figure + tonal mural", description: "A single dimensional parasol figure leads a barely-there procession painted directly on the wall. It borrows the mixed-media logic of New Orleans hospitality art programs while keeping the toile and checkerboard pattern visually dominant.", palette: ["#173f45", "#b76550", "#b49358", "#d9d0bd"] },
      b: { name: "Bayou Chorus — Three Pieces", short: "Three cutouts + hand-painted mural", description: "One Louisiana green tree frog and two dragonfly cutouts provide the dimensional highlights. Painted irises, marsh grass, water lines, and firefly dots carry the composition around the corner at substantially lower fabrication cost.", palette: ["#61952d", "#1d75a2", "#6551a2", "#df9d2e"] },
      c: { name: "Bayou Chorus", short: "Full cutout commission study", description: "A large Louisiana green tree frog, smaller jumping frogs, iris petals, dragonflies, cypress seeds, and firefly points move across the daybed wall and turn the corner. This is a placement and subject brief for a direct local-artist commission.", palette: ["#61952d", "#1d75a2", "#6551a2", "#df9d2e"] }
    },
    allRenderings: [
      { src: "assets/checker-second-line-shadow-mixed.png", label: "Second-Line Shadow", meta: "CastleDay / The Syd precedent study · One cutout + tonal mural", sourceUrl: "https://www.thesyd.com/" },
      { src: "assets/checker-bayou-chorus-hybrid.png", label: "Bayou Chorus — Three Pieces", meta: "Value study · Three cutouts + hand-painted mural" },
      { src: "assets/checker-bayou-chorus-cutouts.png", label: "Bayou Chorus", meta: "New Orleans cutout study · Zac Maras commission brief", sourceUrl: "https://www.staymarais.com/artist-spotlight-zac-maras" },
      { src: "assets/checker-early-bayou.png", label: "Blue Bayou Botanical — Alternate", meta: "Early study · Revised wallpaper wall" },
      { src: "assets/checker-a.jpg", label: "Poetic Louisiana", meta: "Round 01 · Botanical print" },
      { src: "assets/checker-b.jpg", label: "Graphic Modernist", meta: "Round 01 · Graphic print" },
      { src: "assets/checker-c.jpg", label: "Collected Archive", meta: "Round 01 · Framed grouping" },
      { src: "assets/checker-local-a.png", label: "River Darkroom", meta: "Round 02 · Hand-toned photography" },
      { src: "assets/checker-local-b.png", label: "Delta Patchwork", meta: "Round 02 · Stitched fiber art" },
      { src: "assets/checker-local-c.png", label: "Sediment Relief", meta: "Round 02 · Plaster and brass" },
      { src: "assets/checker-spatial-a.png", label: "River Skin", meta: "Round 03 · Wall-integrated fresco" },
      { src: "assets/checker-spatial-b.png", label: "Water Light", meta: "Round 03 · Cast-glass installation" },
      { src: "assets/checker-spatial-c.png", label: "Current Weave", meta: "Round 03 · Fiber-and-cane sculpture" },
      { src: "assets/checker-spatial-a-v2.png", label: "River Skin — Wraparound", meta: "Revision 01 · Both sides of headboard" },
      { src: "assets/checker-nola-beadwork.png", label: "Plume & Eye", meta: "Louisiana Round · Hand-beaded textile" },
      { src: "assets/checker-nola-beadwork-window.png", label: "Plume & Eye — Window Study", meta: "Louisiana Round · Linen Roman shade" },
      { src: "assets/checker-nola-beadwork-bahama.png", label: "Plume & Eye — Bahama Shade", meta: "Window study · Exterior tropical shutter" },
      { src: "assets/checker-nola-beadwork-cane.png", label: "Plume & Eye — Cane Shade", meta: "Window study · Woven natural cane" },
      { src: "assets/whereyart-callaloo-c105.png", label: "Callaloo — Andy Levin", meta: "Where Y’Art Works · 30 × 41 in print", sourceUrl: "https://whereyartworks.com/shop/andy-levin-callaloo/1632" }
    ],
    originals: ["7712","7713","7714","7715","7716"]
  },
  {
    id: "olive", number: "Room 02", name: "C204", description: "A cocooning green room with a king bed centered across the window, a solid upholstered headboard, and no console table. The generous open wall is the collection's clearest opportunity for one museum-scale, site-specific art focal point.",
    images: { a: "assets/olive-river-rail-sky-mixed.png", b: "assets/olive-roseate-waterline-hybrid.png", c: "assets/olive-roseate-flight-cutouts.png" },
    options: {
      a: { name: "River / Rail / Sky", short: "Oil panel + mural + found flood marker", description: "A compact working-river painting becomes the source for a quieter room-scale mural: its wake, industrial horizon and bridge line continue directly across the wall. One salvaged brass flood marker completes the installation.", palette: ["#536d78", "#b47a45", "#b49358", "#d9d0bd"] },
      b: { name: "Roseate Waterline", short: "Three cutouts + hand-painted mural", description: "One roseate spoonbill, one Louisiana iris, and one cypress-seed cluster supply the dimensional color. A painted waterline, marsh strokes, and coral sunset arc create the room-scale composition with only three fabricated pieces.", palette: ["#e76472", "#7753a1", "#147d9b", "#74933a"] },
      c: { name: "Roseate Flight", short: "Full cutout commission study", description: "Three oversized roseate spoonbills, Louisiana iris forms, cypress seeds, and rippling water shapes sweep across the wall as individually painted dimensional cutouts. This is a placement and subject brief for direct local-artist collaboration.", palette: ["#e76472", "#ef8ba0", "#146f9b", "#6e8b36"] }
    },
    allRenderings: [
      { src: "assets/olive-river-rail-sky-mixed.png", label: "River / Rail / Sky", meta: "CastleDay precedent study · Oil panel + extended mural + found brass", sourceUrl: "https://www.castledayretreats.com/art-program" },
      { src: "assets/olive-roseate-waterline-hybrid.png", label: "Roseate Waterline", meta: "Value study · Three cutouts + hand-painted mural" },
      { src: "assets/olive-roseate-flight-cutouts.png", label: "Roseate Flight", meta: "New Orleans color study · Zac Maras cutout commission brief", sourceUrl: "https://www.staymarais.com/artist-spotlight-zac-maras" },
      { src: "assets/olive-wet-season.png", label: "Wet Season", meta: "Color study · Reverse-painted salvaged window glass" },
      { src: "assets/olive-crescent-weather.png", label: "Crescent Weather", meta: "Color study · Monumental oil-and-wax painting" },
      { src: "assets/olive-garden-after-dark.png", label: "Garden After Dark", meta: "New Orleans color study · Direct artist-collaboration concept" },
      { src: "assets/olive-shotgun-color-archive.png", label: "Shotgun Color Archive", meta: "New Orleans color study · Salvaged architectural assemblage" },
      { src: "assets/olive-crescent-city-cloth.png", label: "Crescent City Cloth", meta: "New Orleans color study · Contemporary art-quilt commission" },
      { src: "assets/olive-mississippi-cut.png", label: "Mississippi Cut", meta: "Focal-point study · Backlit sinker-cypress relief" },
      { src: "assets/olive-tide-choir.png", label: "Tide Choir", meta: "Focal-point study · Louisiana-clay wall constellation" },
      { src: "assets/olive-storm-veil.png", label: "Storm Veil", meta: "Focal-point study · Palmetto, cane, copper + glass" },
      { src: "assets/olive-prelayout-marsh.png", label: "Louisiana Marsh — Pre-layout Study", meta: "Early rendering · Before bed revision" },
      { src: "assets/olive-a.jpg", label: "Poetic Louisiana", meta: "Round 01 · Atmospheric landscape" },
      { src: "assets/olive-b.jpg", label: "Graphic Modernist", meta: "Round 01 · Textile geometry" },
      { src: "assets/olive-c.jpg", label: "Collected Archive", meta: "Round 01 · Framed grouping" },
      { src: "assets/olive-working-river.png", label: "Working River", meta: "Louisiana Round · Oil and wax" },
      { src: "assets/olive-working-river-window.png", label: "Working River — Window Study", meta: "Revision 01 · Roman shade, spindle headboard" },
      { src: "assets/olive-working-river-bahama.png", label: "Working River — Bahama Shade", meta: "Revision 01 · Tropical shutter, spindle headboard" },
      { src: "assets/olive-working-river-cane.png", label: "Working River — Cane Shade", meta: "Revision 01 · Woven cane, spindle headboard" },
      { src: "assets/olive-a-solid.png", label: "Poetic Louisiana — Solid Headboard", meta: "Revision 02 · Queen-bed study" },
      { src: "assets/olive-b-solid.png", label: "Graphic Modernist — Solid Headboard", meta: "Revision 02 · Queen-bed study" },
      { src: "assets/olive-c-solid.png", label: "Collected Archive — Solid Headboard", meta: "Revision 02 · Queen-bed study" },
      { src: "assets/olive-working-river-solid.png", label: "Working River — Solid Headboard", meta: "Revision 02 · Queen-bed study" },
      { src: "assets/olive-working-river-window-solid.png", label: "Working River — Roman Shade", meta: "Revision 02 · Solid headboard" },
      { src: "assets/olive-working-river-bahama-solid.png", label: "Working River — Bahama Shade", meta: "Revision 02 · Solid headboard" },
      { src: "assets/olive-working-river-cane-solid.png", label: "Working River — Cane Shade", meta: "Revision 02 · Solid headboard" },
      { src: "assets/olive-a-king.png", label: "Poetic Louisiana — King Layout", meta: "Current plan · Solid headboard, no console" },
      { src: "assets/olive-b-king.png", label: "Graphic Modernist — King Layout", meta: "Current plan · Solid headboard, no console" },
      { src: "assets/olive-c-king.png", label: "Collected Archive — King Layout", meta: "Current plan · Solid headboard, no console" },
      { src: "assets/olive-working-river-king.png", label: "Working River — King Layout", meta: "Current plan · Solid headboard, no console" },
      { src: "assets/olive-working-river-roman-king.png", label: "Working River — Roman Shade", meta: "Current plan · King, no console" },
      { src: "assets/olive-working-river-bahama-king.png", label: "Working River — Bahama Shade", meta: "Current plan · King, no console" },
      { src: "assets/olive-working-river-cane-king.png", label: "Working River — Cane Shade", meta: "Current plan · King, no console" },
      { src: "assets/whereyart-manchac-c204.png", label: "Manchac Panoramic — Alan Zakem", meta: "Where Y’Art Works · 48 × 16 in metallic canvas", sourceUrl: "https://whereyartworks.com/shop/alan-zakem-manchac-panoramic/4951" }
    ],
    originals: ["7719","7720","7721","7722","7723","7724"]
  },
  {
    id: "teal", number: "Room 03", name: "C112", description: "A monochromatic teal jewel box. The broad wall above the solid headboard is the primary art plane; the narrow wall beside the bath stays empty so the doorway and saturated envelope can breathe.",
    images: { a: "assets/teal-migration-map-tufted.png", b: "assets/teal-heron-moonline-hybrid.png", c: "assets/teal-heron-blue-hour-cutouts.png" },
    options: {
      a: { name: "Migration Map", short: "Tufted Mississippi channels + painted trace", description: "One frameless textile relief abstracts historic Mississippi meanders and a Gulf migratory path through carved wool channels. Two fine painted lines let the map escape the object and inhabit the teal wall.", palette: ["#173f45", "#b76550", "#d0a231", "#d9d0bd"] },
      b: { name: "Heron Moonline", short: "Three cutouts + hand-painted mural", description: "One flying heron and two Louisiana iris cutouts give the wall depth, while a painted crescent, water currents, and sunset marks complete the composition. The result keeps the strongest silhouette with only three fabricated pieces.", palette: ["#285b93", "#7353a5", "#d9a22a", "#d06750"] },
      c: { name: "Heron at Blue Hour", short: "Full cutout commission study", description: "One great blue heron in low flight, Louisiana irises, cypress seeds, moons, and water ripples create a composed horizontal installation above the headboard. This is a spatial and subject brief for direct local-artist collaboration.", palette: ["#285b93", "#7353a5", "#d9a22a", "#d06750"] }
    },
    allRenderings: [
      { src: "assets/teal-migration-map-tufted.png", label: "Migration Map", meta: "CastleDay precedent study · Tufted textile + painted river trace", sourceUrl: "https://www.castledayretreats.com/art-program" },
      { src: "assets/teal-heron-moonline-hybrid.png", label: "Heron Moonline", meta: "Value study · Three cutouts + hand-painted mural" },
      { src: "assets/teal-heron-blue-hour-cutouts.png", label: "Heron at Blue Hour", meta: "New Orleans cutout study · Zac Maras commission brief", sourceUrl: "https://www.staymarais.com/artist-spotlight-zac-maras" },
      { src: "assets/teal-surface-current-cutouts.png", label: "Surface Current", meta: "New Orleans cutout study · Native Louisiana fish" },
      { src: "assets/teal-a.jpg", label: "Poetic Louisiana", meta: "Round 01 · Botanical print" },
      { src: "assets/teal-b.jpg", label: "Graphic Modernist", meta: "Round 01 · Geometric painting" },
      { src: "assets/teal-c.jpg", label: "Collected Archive", meta: "Round 01 · Framed pair" },
      { src: "assets/teal-crescent-brass.png", label: "Crescent Grid", meta: "Louisiana Round · Cast-brass relief" },
      { src: "assets/whereyart-river8-c112.png", label: "River #8 — Connor McManus", meta: "Where Y’Art Works · 12 × 24 in acrylic on canvas", sourceUrl: "https://whereyartworks.com/shop/connor-mcmanus-river-8/8844" },
      { src: "assets/teal-cypress-current-above-bed.png", label: "Cypress Current — Above Bed", meta: "Placement correction · Carved sinker-cypress relief · Side wall left empty" },
      { src: "assets/teal-reverse-painted-glass.png", label: "Night Water Glass", meta: "Above-bed study · Reverse-painted salvaged window glass" },
      { src: "assets/teal-ceramic-floodline.png", label: "Ceramic Floodline", meta: "Above-bed study · Eleven hand-built local-clay forms" },
      { src: "assets/teal-cane-current.png", label: "Cane Current", meta: "Above-bed study · River cane, palmetto, indigo + copper" },
      { src: "assets/teal-night-procession-beadwork.png", label: "Night Procession", meta: "New Orleans custom study · Direct artist-collaboration concept" },
      { src: "assets/teal-erato-impressions.png", label: "Erato Impressions", meta: "New Orleans custom study · Plaster casts sourced from the property" },
      { src: "assets/teal-second-line-score.png", label: "Second-Line Score", meta: "New Orleans custom study · Patinated-brass rhythm installation" }
    ],
    originals: ["7717","7718"]
  },
  {
    id: "terra", number: "Room 04", name: "C212", description: "Warm plaster tones and a patterned millwork niche create a layered envelope. The bed wall needs art with enough clarity to hold its own without competing.",
    images: { a: "assets/terra-cats-claw-april-mixed.png", b: "assets/terra-magnolia-moon-hybrid.png", c: "assets/terra-found-object-ledge.png" },
    options: {
      a: { name: "Cat's-Claw April", short: "Cottage mural + one cascading fiber vine", description: "A spare painted cottage and ironwork elevation sits quietly over the bed while one hand-knotted chartreuse-and-jute vine overtakes its corner. The installation adds tactility without competing with the room's botanical wallpaper.", palette: ["#b76550", "#8a8241", "#b49358", "#d9d0bd"] },
      b: { name: "Magnolia Moon", short: "Three cutouts + hand-painted mural", description: "One luna moth and two magnolia cutouts hover over a painted teal crescent, terracotta river bands, and gold pollen marks. The cream wall remains visible, allowing the focal point to coexist with the room's botanical wallpaper at a controlled fabrication cost.", palette: ["#325d63", "#b76550", "#d9d0bd", "#b49358"] },
      c: { name: "River Ledge", short: "One slim ledge + two secured found objects", description: "A narrow sinker-cypress ledge holds one small wetland oil and one pale found river object. Its modest scale keeps the bed wall collected and calm beside the botanical niche.", palette: ["#6c5440", "#a87958", "#d8cdb8", "#6e7773"] }
    },
    allRenderings: [
      { src: "assets/terra-cats-claw-april-mixed.png", label: "Cat's-Claw April", meta: "CastleDay precedent study · Painted cottage + hand-knotted fiber vine", sourceUrl: "https://www.castledayretreats.com/art-program" },
      { src: "assets/terra-magnolia-moon-hybrid.png", label: "Magnolia Moon", meta: "Value study · Three cutouts + hand-painted mural" },
      { src: "assets/terra-a.jpg", label: "Poetic Louisiana", meta: "Round 01 · Botanical diptych" },
      { src: "assets/terra-b.jpg", label: "Graphic Modernist", meta: "Round 01 · Geometric painting" },
      { src: "assets/terra-c.jpg", label: "Collected Archive", meta: "Round 01 · Framed grouping" },
      { src: "assets/terra-cypress-relief.png", label: "Cypress Knees & Heron", meta: "Louisiana Round · Carved sinker cypress" },
      { src: "assets/whereyart-magnolias-terra.png", label: "French Quarter Magnolias — Alex Demyan", meta: "Where Y’Art Works · 24 × 36 in canvas option", sourceUrl: "https://whereyartworks.com/shop/alex-demyan-french-quarter-magnolias/1714" },
      { src: "assets/terra-river-trace-relief.png", label: "River Trace", meta: "Quiet edit · Hand-cast tonal plaster relief" },
      { src: "assets/terra-bayou-grain-cypress.png", label: "Bayou Grain", meta: "Quiet edit · Carved sinker-cypress sculpture" },
      { src: "assets/terra-current-veil-fiber.png", label: "Current Veil", meta: "Quiet edit · River cane and palmetto fiber" },
      { src: "assets/terra-sediment-wash-limewash.png", label: "Sediment Wash", meta: "Quiet edit · Integrated tonal limewash" },
      { src: "assets/terra-small-nocturne.png", label: "Small Nocturne", meta: "Quiet edit · Original oil on linen · 16 × 20 in" },
      { src: "assets/terra-small-nocturne-9x12.png", label: "Tiny Nocturne", meta: "Quiet edit · Original oil on linen · 9 × 12 in" },
      { src: "assets/terra-two-small-nocturnes.png", label: "Two Small Nocturnes", meta: "Quiet edit · Unmatched original oils · 8 × 10 + 10 × 8 in" },
      { src: "assets/terra-found-oil-tintype.png", label: "Oil & Tintype", meta: "Found-object study · Wetland oil + hand-tinted photograph" },
      { src: "assets/terra-found-iron-fragment.png", label: "Iron Relic", meta: "Found-object study · Salvaged cast-iron architectural fragment" },
      { src: "assets/terra-found-object-ledge.png", label: "River Ledge", meta: "Found-object study · Sinker-cypress ledge + two secured objects" },
      { src: "assets/terra-river-memory-mural.png", label: "River Memory", meta: "Wall-integrated study · Full-bed-wall mineral limewash mural" },
      { src: "assets/terra-sgraffito-archive.png", label: "Sgraffito Archive", meta: "Wall-integrated study · Incised plaster + earth pigment" },
      { src: "assets/terra-courtyard-afterimage.png", label: "Courtyard Afterimage", meta: "Light-art study · Concealed rail + diffuse projected shadow" },
      { src: "assets/terra-palmetto-storm.png", label: "Palmetto Storm", meta: "Boundary study · Wall-to-ceiling cane, fiber, copper + glass sculpture" },
      { src: "assets/terra-storm-archive.png", label: "Storm Archive", meta: "Boundary study · Immersive bed-wall + ceiling mural" },
      { src: "assets/terra-river-light.png", label: "River Light", meta: "Boundary study · Projection-mapped evening installation" }
    ],
    originals: ["7727","7728","7732","7733","7734"]
  },
  {
    id: "peacock", number: "Room 05", name: "C215", description: "The blue headboard and dark botanical niche are already expressive. Art above the bed should bridge the cool architecture and coral textiles.",
    images: { a: "assets/peacock-a.jpg", b: "assets/peacock-b.jpg", c: "assets/peacock-c.jpg" },
    allRenderings: [
      { src: "assets/peacock-a.jpg", label: "Poetic Louisiana", meta: "Round 01 · Magnolia diptych" },
      { src: "assets/peacock-b.jpg", label: "Graphic Modernist", meta: "Round 01 · Abstract painting" },
      { src: "assets/peacock-c.jpg", label: "Collected Archive", meta: "Round 01 · Framed grouping" },
      { src: "assets/peacock-shotgun-quilt.png", label: "Shotgun Rhythm", meta: "Louisiana Round · Hand-quilted appliqué" },
      { src: "assets/whereyart-marching-band-c215.png", label: "Marching Band — Jason Van Pelt", meta: "Where Y’Art Works · Two 16.5 × 22 in prints", sourceUrl: "https://whereyartworks.com/shop/jason-van-pelt-marching-band-the-drummer/11146" }
    ],
    originals: ["7739","7740"]
  },
  {
    id: "ivory", number: "Room 06", name: "C217", description: "The calmest room in the set. The centered wall above the headboard can support a serene diptych, one statement work, or a compact archival grid.",
    images: { a: "assets/ivory-a.jpg", b: "assets/ivory-b.jpg", c: "assets/ivory-c.jpg" },
    allRenderings: [
      { src: "assets/ivory-a.jpg", label: "Poetic Louisiana", meta: "Round 01 · Wetland diptych" },
      { src: "assets/ivory-b.jpg", label: "Graphic Modernist", meta: "Round 01 · Textile geometry" },
      { src: "assets/ivory-c.jpg", label: "Collected Archive", meta: "Round 01 · Framed grouping" },
      { src: "assets/ivory-cyanotype-banners.png", label: "Garden Exposures", meta: "Louisiana Round · Linen cyanotype banners" },
      { src: "assets/whereyart-tree-of-life-c217.png", label: "Tree of Life (37) — Caroline Youngblood", meta: "Where Y’Art Works · Two 22 × 30 in panels", sourceUrl: "https://whereyartworks.com/shop/caroline-youngblood-tree-of-life-37/9103" }
    ],
    originals: ["7741","7742","7743"]
  },
  { id: "teal-built-in", number: "Room 07", name: "C103", description: "A newly separated room study defined by deep teal millwork. Its furniture plan and art program are ready to be developed as a distinct direction.", originals: ["7711"], sourceOnly: true },
  { id: "pale-blue-toile", number: "Room 08", name: "C208", description: "A second newly separated room with pale-blue built-ins and toile-lined millwork. It now has its own source page, independent from the checkerboard bedroom.", originals: ["7730","7731"], sourceOnly: true },
  { id: "terra-b", number: "Room 09", name: "C202", description: "A newly separated terracotta bedroom documented in its own source set. Its individual furniture plan and art direction can now be developed independently.", originals: ["7725","7726"], sourceOnly: true },
  { id: "terra-d", number: "Room 11", name: "C214", description: "A newly separated terracotta bedroom documented in its own source set. Its individual furniture plan and art direction can now be developed independently.", originals: ["7735","7736","7737"], sourceOnly: true }
];

const roomOrder = ["C112", "C105", "C103", "C204", "C202", "C208", "C212", "C214", "C215", "C217"];
rooms.sort((a, b) => roomOrder.indexOf(a.name) - roomOrder.indexOf(b.name));

let activeRoom = rooms[0].id;
let activeDirection = "a";
let collectionDirection = "a";
let viewMode = "focus";
let archiveView = "renderings";
let lightboxItems = [];
let lightboxIndex = 0;
const state = JSON.parse(localStorage.getItem("erato-direction-state") || "{}");
const $ = (id) => document.getElementById(id);

function roomState(id) {
  const current = state[id] || {};
  const resetForSpatialStudy = id === "checker" && current.conceptRevision !== "spatial-v3";
  state[id] = {
    shortlist: resetForSpatialStudy ? [] : (Array.isArray(current.shortlist) ? current.shortlist : (current.favorite ? [current.direction || "a"] : [])),
    note: current.note || "",
    direction: resetForSpatialStudy ? "a" : (current.direction || "a"),
    frame: resetForSpatialStudy ? "Integrated / frameless" : (current.frame || "Dark walnut"),
    scale: current.scale || "Balanced",
    conceptRevision: id === "checker" ? "spatial-v3" : current.conceptRevision
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
  archiveView = rooms.find((room) => room.id === id).sourceOnly ? "originals" : "renderings";
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
  $("lightbox-source").hidden = !item.sourceUrl;
  $("lightbox-source").href = item.sourceUrl || "#";
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
  $("rendering-jump").hidden = Boolean(room.sourceOnly);
  $("rendering-jump-count").textContent = renderingItems(room).length;
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
$("rendering-jump").addEventListener("click", () => {
  archiveView = "renderings";
  renderArchive(rooms.find((room) => room.id === activeRoom));
  $("archive-heading").scrollIntoView({ behavior: "smooth", block: "start" });
});
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
