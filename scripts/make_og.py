from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

root = Path(__file__).resolve().parents[1]
canvas = Image.new("RGB", (1200, 630), "#173f45")
draw = ImageDraw.Draw(canvas)
serif = ImageFont.truetype("/System/Library/Fonts/NewYork.ttf", 56)
sans = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 20)
small = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 14)

draw.text((56, 52), "Erato Art Direction Lab", font=serif, fill="#f2eee6")
draw.text((59, 124), "1722 ERATO HOTEL VILLAS  ·  THREE DIRECTIONS / SIX BEDROOMS", font=small, fill="#c8bba7")

files = ["checker-a.jpg", "checker-b.jpg", "checker-c.jpg"]
labels = ["POETIC LOUISIANA", "GRAPHIC MODERNIST", "COLLECTED ARCHIVE"]
for index, (filename, label) in enumerate(zip(files, labels)):
    image = Image.open(root / "public" / "assets" / filename).convert("RGB")
    image = ImageOps.fit(image, (338, 338), method=Image.Resampling.LANCZOS)
    x = 56 + index * 374
    y = 192
    canvas.paste(image, (x, y))
    draw.text((x, 548), label, font=small, fill="#f2eee6")

draw.text((57, 587), "COMPARE  ·  SHORTLIST  ·  LEAVE NOTES", font=sans, fill="#c87a5d")
canvas.save(root / "public" / "og.jpg", quality=90)
