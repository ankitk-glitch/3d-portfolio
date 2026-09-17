import os
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# ─── Color Palette (Blueprint Dark) ─────────────────────────────────────────
OBSIDIAN    = RGBColor(6, 8, 15)         # #06080F
DARK_CARD   = RGBColor(12, 16, 26)       # #0C101A
MID_CARD    = RGBColor(16, 22, 38)       # #101626
BLUE_400    = RGBColor(96, 165, 250)     # #60A5FA
BLUE_500    = RGBColor(59, 130, 246)     # #3B82F6
BLUE_800    = RGBColor(30, 58, 138)      # #1E3A8A
WHITE       = RGBColor(255, 255, 255)
OFF_WHITE   = RGBColor(226, 232, 240)    # #E2E8F0
SLATE_400   = RGBColor(148, 163, 184)    # #94A3B8
SLATE_500   = RGBColor(100, 116, 139)    # #64748B
EMERALD     = RGBColor(52, 211, 153)     # #34D399
AMBER       = RGBColor(251, 191, 36)     # #FBBF24

BASE = "/Users/ankitkumar/.gemini/antigravity/scratch/bim-portfolio"

IMGS = {
    "ortho":     f"{BASE}/public/assets/portfolio/modern_house_orthographic_3d.png",
    "floor":     f"{BASE}/public/assets/drawings/floor_plan.jpg",
    "upper":     f"{BASE}/public/assets/portfolio/3_Architectural_Floorplan_3D.jpg",
    "section":   f"{BASE}/public/assets/drawings/section_drawing.jpg",
    "elevation": f"{BASE}/public/assets/drawings/elevation_drawing.jpg",
    "axon":      f"{BASE}/public/assets/drawings/axonometric_exploded.jpg",
    "physics":   f"{BASE}/public/assets/drawings/energy_audit_comparison.jpg",
    "p1":        f"{BASE}/public/assets/portfolio/1_Single_Family_Home_LOD200.jpg",
    "p2":        f"{BASE}/public/assets/portfolio/2_Multi_Story_Residential_LOD300.jpg",
}

W = Inches(13.333)
H = Inches(7.5)

def rgb(r, g, b): return RGBColor(r, g, b)

def solid_bg(slide, color=OBSIDIAN):
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, W, H)
    bg.fill.solid()
    bg.fill.fore_color.rgb = color
    bg.line.fill.background()
    return bg

def add_rect(slide, x, y, w, h, fill, alpha=None, no_line=True):
    s = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    s.fill.solid()
    s.fill.fore_color.rgb = fill
    if no_line:
        s.line.fill.background()
    else:
        s.line.color.rgb = fill
    return s

def tb(slide, x, y, w, h):
    return slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))

def add_para(tf, text, size, bold=False, color=OFF_WHITE, space_before=0, align=PP_ALIGN.LEFT, name="Helvetica Neue"):
    p = tf.add_paragraph()
    p.text = text
    p.font.size = Pt(size)
    p.font.bold = bold
    p.font.color.rgb = color
    p.font.name = name
    if space_before:
        p.space_before = Pt(space_before)
    p.alignment = align
    return p

def add_label_pill(slide, x, y, text):
    """Blueprint blue micro-label pill"""
    bg = add_rect(slide, x, y, len(text)*0.068 + 0.3, 0.28, BLUE_800)
    t = tb(slide, x + 0.08, y + 0.03, len(text)*0.068 + 0.1, 0.22)
    tf = t.text_frame
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(8)
    p.font.bold = True
    p.font.color.rgb = BLUE_400
    p.font.name = "Helvetica Neue"
    return bg

def add_corner_mark(slide, text="THE RIBHUS · theribhus.com"):
    t = tb(slide, 0.35, 7.05, 4.5, 0.3)
    tf = t.text_frame
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(7.5)
    p.font.color.rgb = SLATE_500
    p.font.name = "Helvetica Neue"

    t2 = tb(slide, 8.8, 7.05, 4.2, 0.3)
    tf2 = t2.text_frame
    p2 = tf2.paragraphs[0]
    p2.text = "Revit 2024  ·  ArchiCAD  ·  IFC4  ·  LOD 300"
    p2.font.size = Pt(7.5)
    p2.font.color.rgb = SLATE_500
    p2.font.name = "Helvetica Neue"
    p2.alignment = PP_ALIGN.RIGHT

def blueprint_accent_line(slide, y=1.28):
    """Thin blue glowing divider"""
    line = add_rect(slide, 0.35, y, 12.633, 0.016, BLUE_500)
    return line

def section_tag(slide, x, y, label):
    """Uppercase monospace category label"""
    t = tb(slide, x, y, 4.0, 0.25)
    tf = t.text_frame
    p = tf.paragraphs[0]
    p.text = label
    p.font.size = Pt(8)
    p.font.bold = True
    p.font.color.rgb = BLUE_400
    p.font.name = "Helvetica Neue"
    return t

def picture_if_exists(slide, key, x, y, width=None, height=None):
    path = IMGS.get(key)
    if path and os.path.exists(path):
        kw = {}
        if width:  kw["width"]  = Inches(width)
        if height: kw["height"] = Inches(height)
        pic = slide.shapes.add_picture(path, Inches(x), Inches(y), **kw)
        return pic
    return None

# ─────────────────────────────────────────────────────────────────────────────
def create_presentation():
    prs = Presentation()
    prs.slide_width  = W
    prs.slide_height = H
    blank = prs.slide_layouts[6]

    # =========================================================================
    # SLIDE 01: CINEMATIC COVER  (full-bleed image + diagonal overlay)
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    # Full-bleed orthographic image (right 60%)
    picture_if_exists(s, "ortho", 4.8, 0.0, width=8.533)

    # Diagonal dark overlay on left  (simulated with a wide left rect)
    ov = add_rect(s, 0, 0, 7.2, 7.5, OBSIDIAN)

    # Blue vertical accent stripe
    add_rect(s, 0.35, 0, 0.05, 7.5, BLUE_500)

    # Blueprint grid lines (horizontal stripes)
    for i in range(8):
        add_rect(s, 0.4, i * 0.93, 6.5, 0.01, rgb(59, 130, 246))

    # Studio label
    section_tag(s, 0.55, 0.45, "THE RIBHUS  ·  BIM ARCHITECTURAL ATELIER  ·  theribhus.com")

    blueprint_accent_line(s, y=0.78)

    # Giant headline
    t1 = tb(s, 0.45, 1.0, 6.5, 2.8)
    tf1 = t1.text_frame
    tf1.word_wrap = True
    p = tf1.paragraphs[0]
    p.text = "Modern House:"
    p.font.size = Pt(54)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"

    add_para(tf1, "A Study in Minimalism", 28, bold=True, color=BLUE_400, space_before=2)
    add_para(tf1, "BIM-Driven Design  ·  Full Project", 15, color=OFF_WHITE, space_before=6)

    blueprint_accent_line(s, y=4.15)

    # 3 spec pills
    specs = [
        ("Platform", "Autodesk Revit 2024"),
        ("Standard", "LOD 300 · DIN EN 12831"),
        ("Delivery", "24 – 48 h · No MEP"),
    ]
    for i, (k, v) in enumerate(specs):
        x = 0.45 + i * 2.1
        t = tb(s, x, 4.28, 2.0, 0.65)
        tf = t.text_frame
        tf.word_wrap = True
        p0 = tf.paragraphs[0]
        p0.text = k.upper()
        p0.font.size = Pt(7.5)
        p0.font.bold = True
        p0.font.color.rgb = BLUE_400
        p0.font.name = "Helvetica Neue"
        add_para(tf, v, 9.5, bold=True, color=WHITE)

    # Description
    t3 = tb(s, 0.45, 5.1, 6.4, 1.5)
    tf3 = t3.text_frame
    tf3.word_wrap = True
    p = tf3.paragraphs[0]
    p.text = (
        "European BIM production studio converting scanned paper drawings, "
        "PDF blueprints & 2D CAD surveys into production-ready Revit (.rvt) "
        "and ArchiCAD (.pln) architectural models for architects, real-estate "
        "planners, and Energieberater across the EU."
    )
    p.font.size = Pt(9.5)
    p.font.color.rgb = SLATE_400
    p.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 02: SPATIAL BRIEF — split dark/light
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    # Right panel (light)
    add_rect(s, 6.5, 0, 6.833, 7.5, rgb(248, 250, 255))

    # Left dark content
    section_tag(s, 0.55, 0.38, "02  ·  PROJECT BRIEF  ·  A-000")
    blueprint_accent_line(s, y=0.72)

    t = tb(s, 0.55, 0.85, 5.6, 1.2)
    tf = t.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Executive Brief &\nSpatial Zoning Strategy"
    p.font.size = Pt(28)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"

    desc = tb(s, 0.55, 2.15, 5.6, 0.8)
    tf_d = desc.text_frame
    tf_d.word_wrap = True
    p = tf_d.paragraphs[0]
    p.text = (
        "Development of an efficient spatial layout and refined exterior character. "
        "The project balances a fluid floor plan across private and social zones, "
        "integrating high-end amenities with distinct material selections."
    )
    p.font.size = Pt(10)
    p.font.color.rgb = SLATE_400
    p.font.name = "Helvetica Neue"

    # 3 pillars
    pillars = [
        ("01", "Strategic Spatial Zoning",
         "Optimized floor plan separating 4 master bedrooms from a spacious open-concept studio living area with double-height volume."),
        ("02", "Material & Facade Detail",
         "Anthracite metal cladding, natural cedar timber battens, triple-pane structural curtain walls — precisely modeled in BIM."),
        ("03", "Landscape & Water Features",
         "Curated site with infinity pool, sunken fire pit lounge, decorative water features — all included in the 3D model scope."),
    ]
    for i, (num, title, body) in enumerate(pillars):
        y = 3.1 + i * 1.3
        add_rect(s, 0.55, y, 0.04, 0.85, BLUE_500)
        num_t = tb(s, 0.68, y, 0.45, 0.28)
        p_num = num_t.text_frame.paragraphs[0]
        p_num.text = num
        p_num.font.size = Pt(9)
        p_num.font.bold = True
        p_num.font.color.rgb = BLUE_400
        p_num.font.name = "Helvetica Neue"

        t_title = tb(s, 1.22, y, 4.8, 0.3)
        p_t = t_title.text_frame.paragraphs[0]
        p_t.text = title
        p_t.font.size = Pt(11)
        p_t.font.bold = True
        p_t.font.color.rgb = WHITE
        p_t.font.name = "Helvetica Neue"

        t_body = tb(s, 1.22, y + 0.32, 4.8, 0.85)
        tf_b = t_body.text_frame
        tf_b.word_wrap = True
        p_b = tf_b.paragraphs[0]
        p_b.text = body
        p_b.font.size = Pt(9)
        p_b.font.color.rgb = SLATE_400
        p_b.font.name = "Helvetica Neue"

    # Right panel: BIM Quantities on alabaster
    t_qto = tb(s, 6.8, 0.5, 6.2, 0.4)
    p = t_qto.text_frame.paragraphs[0]
    p.text = "KEY PROJECT QUANTITIES  ·  BIM TAKEOFF"
    p.font.size = Pt(9)
    p.font.bold = True
    p.font.color.rgb = rgb(30, 58, 138)
    p.font.name = "Helvetica Neue"

    blueprint_accent_line(s, y=1.0)
    # Override line color with dark blue on light bg
    acc = add_rect(s, 6.8, 1.0, 5.9, 0.016, BLUE_800)

    metrics = [
        ("Plot / Site Area",           "840.0 m²"),
        ("Gross Floor Area (BGF)",      "342.5 m²"),
        ("Net Usable Area (NRF)",       "278.4 m²"),
        ("Heated Gross Volume (Ve)",    "965.0 m³"),
        ("Envelope Surface Area (A)",   "612.0 m²"),
        ("Compactness Ratio (A/Ve)",    "0.63 m⁻¹"),
        ("Exterior Glazing Area",       "118.4 m²  (WWR 32%)"),
        ("Energy Standard",             "Passivhaus / KfW 40"),
        ("Regulated Standard",          "DIN EN 12831, DIN 277, GEG 2024"),
    ]
    for j, (lbl, val) in enumerate(metrics):
        y = 1.15 + j * 0.67
        # Row bg alternating
        row_fill = rgb(240, 245, 255) if j % 2 == 0 else rgb(248, 250, 255)
        add_rect(s, 6.8, y, 5.9, 0.62, row_fill)

        tl = tb(s, 6.95, y + 0.1, 3.6, 0.42)
        p = tl.text_frame.paragraphs[0]
        p.text = lbl
        p.font.size = Pt(9)
        p.font.color.rgb = rgb(71, 85, 105)
        p.font.name = "Helvetica Neue"

        tv = tb(s, 10.0, y + 0.1, 2.5, 0.42)
        p2 = tv.text_frame.paragraphs[0]
        p2.text = val
        p2.font.size = Pt(9.5)
        p2.font.bold = True
        p2.font.color.rgb = rgb(30, 58, 138)
        p2.alignment = PP_ALIGN.RIGHT
        p2.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 03: ORTHOGRAPHIC 3D VIEW — full-bleed with floating overlay
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    # Full bleed image
    picture_if_exists(s, "ortho", 0, 0, width=9.5)

    # Right overlay panel
    add_rect(s, 9.5, 0, 3.833, 7.5, DARK_CARD)
    add_rect(s, 9.5, 0, 0.05, 7.5, BLUE_500)  # left accent stripe

    section_tag(s, 9.65, 0.38, "03  ·  3D ARCHITECTURAL VIEW  ·  A-001")
    acc_l = add_rect(s, 9.65, 0.68, 3.3, 0.016, BLUE_800)

    t_title = tb(s, 9.65, 0.82, 3.5, 1.2)
    tf = t_title.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Orthographic\n3D Axonometric"
    p.font.size = Pt(24)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"
    add_para(tf, "Model View", 14, color=BLUE_400, space_before=2)

    items = [
        ("View",        "Orthographic Axon (30°/60°)"),
        ("Platform",    "Autodesk Revit 2024"),
        ("LOD",         "LOD 300 Design Dev."),
        ("Envelope",    "Watertight Thermal Shell"),
        ("Site",        "Pool, Hardscape, Greenroof"),
        ("Output",      ".rvt + .pln + IFC4"),
    ]
    for i, (k, v) in enumerate(items):
        y = 2.2 + i * 0.78
        add_rect(s, 9.65, y, 3.3, 0.68, rgb(16, 22, 38))
        tk = tb(s, 9.78, y + 0.08, 0.85, 0.25)
        p = tk.text_frame.paragraphs[0]
        p.text = k.upper()
        p.font.size = Pt(7)
        p.font.bold = True
        p.font.color.rgb = BLUE_400
        p.font.name = "Helvetica Neue"
        tv2 = tb(s, 9.78, y + 0.32, 3.1, 0.3)
        p2 = tv2.text_frame.paragraphs[0]
        p2.text = v
        p2.font.size = Pt(9)
        p2.font.bold = True
        p2.font.color.rgb = OFF_WHITE
        p2.font.name = "Helvetica Neue"

    # Bottom watermark
    add_rect(s, 0, 6.8, 9.5, 0.7, OBSIDIAN)
    wm = tb(s, 0.3, 6.88, 9.0, 0.35)
    p = wm.text_frame.paragraphs[0]
    p.text = "Modern House: A Study in Minimalism  ·  Autodesk Revit 2024  ·  THE RIBHUS"
    p.font.size = Pt(8.5)
    p.font.color.rgb = SLATE_500
    p.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 04: FLOOR PLANS — two-column split
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    section_tag(s, 0.55, 0.28, "04  ·  FLOOR PLANS  ·  A-101 / A-102")
    blueprint_accent_line(s, y=0.6)

    t_h = tb(s, 0.55, 0.72, 8.5, 0.55)
    tf_h = t_h.text_frame
    p = tf_h.paragraphs[0]
    p.text = "Ground Floor + Upper Level Plans  ·  Scale 1:100"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"

    # Ground floor image (left)
    picture_if_exists(s, "floor", 0.35, 1.42, width=6.2)

    # Upper floor image (right)
    picture_if_exists(s, "upper", 6.8, 1.42, width=6.1)

    # Bottom stats bar (dark)
    add_rect(s, 0, 6.4, 13.333, 0.75, DARK_CARD)
    stats_row = [
        ("Ground BGF", "185.2 m²"),
        ("Double-Height Living", "64.8 m²  (5.8m)"),
        ("Upper BGF", "157.3 m²"),
        ("Master Bedroom 01", "28.5 m²  + ensuite"),
        ("Green Roof Terrace", "88.0 m²"),
        ("DIN Standard", "DIN 1356 / DIN 277"),
    ]
    for i, (k, v) in enumerate(stats_row):
        x = 0.4 + i * 2.15
        tk = tb(s, x, 6.46, 2.0, 0.22)
        p = tk.text_frame.paragraphs[0]
        p.text = k.upper()
        p.font.size = Pt(7)
        p.font.bold = True
        p.font.color.rgb = BLUE_400
        p.font.name = "Helvetica Neue"
        tv = tb(s, x, 6.68, 2.0, 0.28)
        p2 = tv.text_frame.paragraphs[0]
        p2.text = v
        p2.font.size = Pt(9.5)
        p2.font.bold = True
        p2.font.color.rgb = WHITE
        p2.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 05: SECTIONS & ELEVATIONS — side-by-side
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    section_tag(s, 0.55, 0.28, "05  ·  SECTIONS & ELEVATIONS  ·  A-201 / A-301")
    blueprint_accent_line(s, y=0.6)

    t_h = tb(s, 0.55, 0.72, 8.5, 0.55)
    tf_h = t_h.text_frame
    p = tf_h.paragraphs[0]
    p.text = "Building Sections & Facade Elevations"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"

    # Section (left half)
    picture_if_exists(s, "section", 0.35, 1.42, width=6.0)
    # Section label
    add_rect(s, 0.35, 1.42, 1.4, 0.32, DARK_CARD)
    lbl = tb(s, 0.45, 1.48, 1.2, 0.2)
    p = lbl.text_frame.paragraphs[0]
    p.text = "SECTION  A-201"
    p.font.size = Pt(7.5)
    p.font.bold = True
    p.font.color.rgb = BLUE_400
    p.font.name = "Helvetica Neue"

    # Elevation (right half)
    picture_if_exists(s, "elevation", 6.65, 1.42, width=6.0)
    add_rect(s, 6.65, 1.42, 1.55, 0.32, DARK_CARD)
    lbl2 = tb(s, 6.75, 1.48, 1.4, 0.2)
    p2 = lbl2.text_frame.paragraphs[0]
    p2.text = "ELEVATION  A-301"
    p2.font.size = Pt(7.5)
    p2.font.bold = True
    p2.font.color.rgb = BLUE_400
    p2.font.name = "Helvetica Neue"

    # Bottom data bar
    add_rect(s, 0, 6.4, 13.333, 0.75, DARK_CARD)
    datum = [
        ("Floor-to-Floor",  "3.30 m"),
        ("Ground Ceiling",  "2.85 m"),
        ("Level 1 Ceiling", "2.70 m"),
        ("Facade",          "Zinc RAL 7016 + Cedar"),
        ("Glazing Uw",      "0.78 W/m²K (Triple)"),
        ("Scale",           "1:100"),
    ]
    for i, (k, v) in enumerate(datum):
        x = 0.4 + i * 2.15
        tk = tb(s, x, 6.46, 2.0, 0.22)
        p = tk.text_frame.paragraphs[0]
        p.text = k.upper()
        p.font.size = Pt(7)
        p.font.bold = True
        p.font.color.rgb = BLUE_400
        p.font.name = "Helvetica Neue"
        tv = tb(s, x, 6.68, 2.0, 0.28)
        p2 = tv.text_frame.paragraphs[0]
        p2.text = v
        p2.font.size = Pt(9.5)
        p2.font.bold = True
        p2.font.color.rgb = WHITE
        p2.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 06: EXPLODED AXONOMETRIC — full bleed + dark panel
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    picture_if_exists(s, "axon", 0, 0, width=8.8)

    # Overlay panel
    add_rect(s, 8.8, 0, 4.533, 7.5, DARK_CARD)
    add_rect(s, 8.8, 0, 0.05, 7.5, BLUE_500)

    section_tag(s, 9.0, 0.38, "06  ·  BIM HIERARCHY  ·  A-401")
    add_rect(s, 9.0, 0.68, 3.9, 0.016, BLUE_800)

    t_title = tb(s, 9.0, 0.82, 3.9, 1.0)
    tf = t_title.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "3D Exploded\nAxonometric"
    p.font.size = Pt(24)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"
    add_para(tf, "4-Tier BIM Assembly", 13, color=BLUE_400, space_before=2)

    tiers = [
        ("T4 · Roof Deck",    EMERALD,  "Sedum greenroof, drainage mat, parapet."),
        ("T3 · Upper Level",  BLUE_400, "4 master suites, cantilevered balconies."),
        ("T2 · Ground Floor", BLUE_400, "RC columns, curtain glass, double garage."),
        ("T1 · Sub-Structure",AMBER,    "Foundation slab, pool basin, topography."),
    ]
    for i, (tier_name, accent, desc) in enumerate(tiers):
        y = 2.1 + i * 1.3
        add_rect(s, 9.0, y, 3.9, 1.15, MID_CARD)
        add_rect(s, 9.0, y, 0.03, 1.15, accent)

        t_tn = tb(s, 9.12, y + 0.1, 3.6, 0.28)
        p = t_tn.text_frame.paragraphs[0]
        p.text = tier_name
        p.font.size = Pt(10.5)
        p.font.bold = True
        p.font.color.rgb = accent
        p.font.name = "Helvetica Neue"

        t_td = tb(s, 9.12, y + 0.42, 3.6, 0.65)
        tf_d = t_td.text_frame
        tf_d.word_wrap = True
        p2 = tf_d.paragraphs[0]
        p2.text = desc
        p2.font.size = Pt(9)
        p2.font.color.rgb = SLATE_400
        p2.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 07: BUILDING PHYSICS — dark thermal data
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    section_tag(s, 0.55, 0.28, "07  ·  BUILDING PHYSICS  ·  A-501  ·  DIN EN 12831")
    blueprint_accent_line(s, y=0.6)

    t_h = tb(s, 0.55, 0.72, 8.5, 0.55)
    p = t_h.text_frame.paragraphs[0]
    p.text = "Thermal Envelope & Energy Audit Calculation"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"

    # Energy audit image (left)
    picture_if_exists(s, "physics", 0.35, 1.42, width=6.9)

    # Right data panel
    add_rect(s, 7.5, 1.42, 5.45, 5.3, DARK_CARD)

    physics = [
        ("Exterior Wall U-Value",    "0.16 W/m²K",  "Passivhaus standard — triple mineral wool"),
        ("Roof Deck U-Value",        "0.12 W/m²K",  "PIR rigid foam — 220mm"),
        ("Ground Slab U-Value",      "0.18 W/m²K",  "EPS perimeter insulation"),
        ("Window Assembly (Uw)",     "0.78 W/m²K",  "Triple-pane Argon glass"),
        ("Envelope Area (A)",        "612.0 m²",     "Watertight thermal boundary"),
        ("Heated Volume (Ve)",       "965.0 m³",     "Per DIN EN 12831"),
        ("Energy Standard",          "KfW 40",       "Passivhaus level performance"),
    ]
    for i, (k, v, note) in enumerate(physics):
        y = 1.55 + i * 0.72
        row_bg = MID_CARD if i % 2 == 0 else rgb(12, 16, 26)
        add_rect(s, 7.5, y, 5.45, 0.68, row_bg)
        # Key
        tk = tb(s, 7.65, y + 0.07, 2.2, 0.24)
        p = tk.text_frame.paragraphs[0]
        p.text = k.upper()
        p.font.size = Pt(7)
        p.font.bold = True
        p.font.color.rgb = BLUE_400
        p.font.name = "Helvetica Neue"
        # Note
        tn = tb(s, 7.65, y + 0.34, 2.2, 0.28)
        p2 = tn.text_frame.paragraphs[0]
        p2.text = note
        p2.font.size = Pt(7.5)
        p2.font.color.rgb = SLATE_500
        p2.font.name = "Helvetica Neue"
        # Value
        tv = tb(s, 10.2, y + 0.12, 2.55, 0.42)
        p3 = tv.text_frame.paragraphs[0]
        p3.text = v
        p3.font.size = Pt(13)
        p3.font.bold = True
        p3.font.color.rgb = EMERALD
        p3.alignment = PP_ALIGN.RIGHT
        p3.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 08: QTO SCHEDULES — dark data table
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    section_tag(s, 0.55, 0.28, "08  ·  BIM QTO  ·  A-601  ·  MASSENERMITTLUNG")
    blueprint_accent_line(s, y=0.6)

    t_h = tb(s, 0.55, 0.72, 8.5, 0.55)
    p = t_h.text_frame.paragraphs[0]
    p.text = "Revit Quantities Takeoff & Material Schedules"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"

    picture_if_exists(s, "p1", 0.35, 1.42, width=5.5)

    # QTO table header
    add_rect(s, 6.1, 1.42, 6.8, 0.45, BLUE_800)
    th_cols = [("Component / Material", 2.8), ("Quantity", 1.0), ("Scope Note", 2.8)]
    xc = 6.25
    for col_name, col_w in th_cols:
        tc = tb(s, xc, 1.48, col_w, 0.3)
        p = tc.text_frame.paragraphs[0]
        p.text = col_name.upper()
        p.font.size = Pt(8)
        p.font.bold = True
        p.font.color.rgb = WHITE
        p.font.name = "Helvetica Neue"
        xc += col_w + 0.05

    schedules = [
        ("Concrete C30/37 Volume",  "142.6 m³",   "Foundation, RC cols & slabs"),
        ("Exterior Wall Surface",   "372.0 m²",   "Gross thermal boundary"),
        ("Glazing & Curtain Walls", "118.4 m²",   "WWR: 32% high solar gain"),
        ("Mineral Wool Insulation", "372.0 m²",   "160mm rigid (λ = 0.032)"),
        ("Roof Waterproofing",      "176.0 m²",   "2-layer bituminous"),
        ("Scheduled Openings",      "28 items",   "Full door & window schedule"),
        ("Interior Drywall",        "485.0 m²",   "Non-bearing acoustic walls"),
        ("Steel Framing",           "12.4 t",     "Cantilevered balcony frames"),
    ]
    for i, (item, qty, note) in enumerate(schedules):
        y = 1.9 + i * 0.62
        bg = DARK_CARD if i % 2 == 0 else MID_CARD
        add_rect(s, 6.1, y, 6.8, 0.58, bg)
        # Item name
        ti = tb(s, 6.25, y + 0.1, 2.75, 0.35)
        p = ti.text_frame.paragraphs[0]
        p.text = item
        p.font.size = Pt(9)
        p.font.color.rgb = OFF_WHITE
        p.font.name = "Helvetica Neue"
        # Qty
        tq = tb(s, 9.05, y + 0.1, 1.05, 0.35)
        p2 = tq.text_frame.paragraphs[0]
        p2.text = qty
        p2.font.size = Pt(9.5)
        p2.font.bold = True
        p2.font.color.rgb = BLUE_400
        p2.alignment = PP_ALIGN.RIGHT
        p2.font.name = "Helvetica Neue"
        # Note
        tn = tb(s, 10.15, y + 0.1, 2.65, 0.35)
        p3 = tn.text_frame.paragraphs[0]
        p3.text = note
        p3.font.size = Pt(8.5)
        p3.font.color.rgb = SLATE_400
        p3.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 09: MULTI-FAMILY REFERENCE
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    picture_if_exists(s, "p2", 0, 0, width=8.5)
    add_rect(s, 8.5, 0, 4.833, 7.5, DARK_CARD)
    add_rect(s, 8.5, 0, 0.05, 7.5, BLUE_500)

    section_tag(s, 8.65, 0.38, "09  ·  MULTI-FAMILY REFERENCE  ·  A-701")
    add_rect(s, 8.65, 0.68, 4.3, 0.016, BLUE_800)

    t_title = tb(s, 8.65, 0.82, 4.3, 1.1)
    tf = t_title.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Urban Multi-Story\nResidential Reference"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"
    add_para(tf, "European Multi-Family BIM", 12, color=BLUE_400, space_before=3)

    multi_items = [
        ("Typology",     "Urban Multi-Story Residential"),
        ("Storeys",      "4 Floors + Underground Parking"),
        ("Total GFA",    "1,120 m²"),
        ("Units",        "12 Residential Apartments"),
        ("Zones",        "12 DIN EN 12831 Thermal Zones"),
        ("Platform",     "Revit 2024 / OpenBIM IFC4"),
        ("Delivery",     "48 Hours"),
        ("MEP Scope",    "Pure Architectural — No MEP"),
    ]
    for i, (k, v) in enumerate(multi_items):
        y = 2.15 + i * 0.63
        row_bg = MID_CARD if i % 2 == 0 else DARK_CARD
        add_rect(s, 8.65, y, 4.3, 0.58, row_bg)
        tk = tb(s, 8.8, y + 0.1, 1.5, 0.25)
        p = tk.text_frame.paragraphs[0]
        p.text = k.upper()
        p.font.size = Pt(7)
        p.font.bold = True
        p.font.color.rgb = BLUE_400
        p.font.name = "Helvetica Neue"
        tv = tb(s, 10.35, y + 0.1, 2.5, 0.35)
        p2 = tv.text_frame.paragraphs[0]
        p2.text = v
        p2.font.size = Pt(9)
        p2.font.bold = True
        p2.font.color.rgb = WHITE
        p2.alignment = PP_ALIGN.RIGHT
        p2.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 10: PRICING — 3 column cards on dark bg
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    # Blueprint glow at top center (simulated with semi-transparent rect)
    add_rect(s, 3.2, 0, 7.0, 0.8, rgb(12, 28, 68))

    section_tag(s, 0.55, 0.28, "10  ·  COMMERCIAL SCOPE  ·  FEES-01")
    blueprint_accent_line(s, y=0.6)

    t_h = tb(s, 0.55, 0.72, 12.0, 0.55)
    tf_h = t_h.text_frame
    p = tf_h.paragraphs[0]
    p.text = "Transparent, Complexity-Based Pricing"
    p.font.size = Pt(24)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"
    add_para(tf_h, "Every model priced according to GFA, geometry & LOD — no bundles, no surprises.", 10, color=SLATE_400, space_before=3)

    cards = [
        ("Single-Family\nResidential", "€180\n– €290", "24 – 48 Hours", [
            "Up to 250 m² BGF",
            "LOD 200/300 Arch. Shell",
            "Watertight energy envelope",
            "Revit (.rvt) or ArchiCAD (.pln)",
            "OpenBIM (.ifc) + 2D PDF",
            "1 revision included",
        ], False),
        ("Multi-Story\n& Complex", "€450\n– €950+", "48 – 72 Hours", [
            "250 m² – 1,200+ m² BGF",
            "Multi-family, mixed-use",
            "Thermal zone per DIN EN 12831",
            "Revit system families / GDL",
            "QTO schedules included",
            "2 revisions included",
        ], True),
        ("Dedicated\nStudio Retainer", "€1,500\n/month", "Guaranteed 24h", [
            "External BIM production pod",
            "8–15 models/month",
            "Priority 24h queue",
            "Shared templates & standards",
            "Direct Slack/Teams channel",
            "Ideal for Energieberater",
        ], False),
    ]
    for i, (title, price, ta, feats, popular) in enumerate(cards):
        x = 0.35 + i * 4.3
        card_color = rgb(20, 30, 60) if popular else DARK_CARD
        card_border = BLUE_500 if popular else rgb(30, 40, 70)
        add_rect(s, x, 1.55, 4.0, 5.7, card_color)
        # top accent
        add_rect(s, x, 1.55, 4.0, 0.06, BLUE_500 if popular else rgb(30, 40, 70))

        if popular:
            pill = tb(s, x + 0.7, 1.35, 2.6, 0.28)
            p_pill = pill.text_frame.paragraphs[0]
            p_pill.text = "★  Most Requested by Energieberater"
            p_pill.font.size = Pt(7.5)
            p_pill.font.bold = True
            p_pill.font.color.rgb = BLUE_400
            p_pill.font.name = "Helvetica Neue"
            p_pill.alignment = PP_ALIGN.CENTER

        t_tt = tb(s, x + 0.2, 1.68, 3.6, 0.55)
        tf_tt = t_tt.text_frame
        tf_tt.word_wrap = True
        p = tf_tt.paragraphs[0]
        p.text = title
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = WHITE
        p.font.name = "Helvetica Neue"

        t_pr = tb(s, x + 0.2, 2.28, 3.6, 0.75)
        tf_pr = t_pr.text_frame
        p = tf_pr.paragraphs[0]
        p.text = price
        p.font.size = Pt(26)
        p.font.bold = True
        p.font.color.rgb = BLUE_400
        p.font.name = "Helvetica Neue"

        t_ta = tb(s, x + 0.2, 3.12, 3.6, 0.3)
        p = t_ta.text_frame.paragraphs[0]
        p.text = f"⏱ Turnaround: {ta}"
        p.font.size = Pt(8.5)
        p.font.color.rgb = SLATE_400
        p.font.name = "Helvetica Neue"

        add_rect(s, x + 0.2, 3.48, 3.6, 0.012, BLUE_800)

        for j, feat in enumerate(feats):
            y = 3.6 + j * 0.55
            t_f = tb(s, x + 0.2, y, 3.6, 0.45)
            tf_f = t_f.text_frame
            tf_f.word_wrap = True
            p = tf_f.paragraphs[0]
            p.text = f"✓  {feat}"
            p.font.size = Pt(8.5)
            p.font.color.rgb = OFF_WHITE if popular else SLATE_400
            p.font.name = "Helvetica Neue"

    # Footnote
    fn = tb(s, 0.55, 7.1, 12.2, 0.28)
    p = fn.text_frame.paragraphs[0]
    p.text = "All models: watertight IFC · native Revit/ArchiCAD · DIN EN 12831 / GEG 2024 / DIN 277 compliant"
    p.font.size = Pt(8.5)
    p.font.color.rgb = SLATE_500
    p.alignment = PP_ALIGN.CENTER
    p.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 11: HOW TO ORDER — process steps
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    section_tag(s, 0.55, 0.28, "11  ·  HOW TO ORDER  ·  PROCESS")
    blueprint_accent_line(s, y=0.6)

    t_h = tb(s, 0.55, 0.72, 8.5, 0.55)
    p = t_h.text_frame.paragraphs[0]
    p.text = "3-Step Production Process"
    p.font.size = Pt(28)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = "Helvetica Neue"

    sub = tb(s, 0.55, 1.38, 8.5, 0.35)
    p = sub.text_frame.paragraphs[0]
    p.text = "From scanned blueprints to a production-ready BIM model in 24–48 hours."
    p.font.size = Pt(11)
    p.font.color.rgb = SLATE_400
    p.font.name = "Helvetica Neue"

    steps = [
        ("01", "SEND YOUR DRAWINGS",
         "Upload scanned blueprints, PDF plans, 2D DWG files, or hand-survey sketches to contact@theribhus.com. "
         "Any format accepted — we handle the cleanup."),
        ("02", "RECEIVE FIXED-PRICE QUOTE",
         "Within 2–4 hours, we review your drawings and send a detailed fixed-fee quote based on GFA, "
         "geometry complexity, and required LOD. No hourly billing."),
        ("03", "GET YOUR BIM MODEL (24–48h)",
         "Your production-ready Revit (.rvt), ArchiCAD (.pln), and OpenBIM (.ifc) files are delivered "
         "via secure transfer link within 24–48 hours. DIN EN 12831 compliant."),
    ]
    for i, (num, title, body) in enumerate(steps):
        y = 2.05 + i * 1.65
        # Card
        add_rect(s, 0.35, y, 12.633, 1.45, DARK_CARD)
        add_rect(s, 0.35, y, 0.06, 1.45, BLUE_500)

        t_num = tb(s, 0.55, y + 0.1, 0.6, 0.55)
        p = t_num.text_frame.paragraphs[0]
        p.text = num
        p.font.size = Pt(28)
        p.font.bold = True
        p.font.color.rgb = BLUE_500
        p.font.name = "Helvetica Neue"

        t_tt = tb(s, 1.3, y + 0.12, 3.5, 0.32)
        p = t_tt.text_frame.paragraphs[0]
        p.text = title
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = WHITE
        p.font.name = "Helvetica Neue"

        t_bd = tb(s, 1.3, y + 0.5, 11.3, 0.82)
        tf_bd = t_bd.text_frame
        tf_bd.word_wrap = True
        p = tf_bd.paragraphs[0]
        p.text = body
        p.font.size = Pt(9.5)
        p.font.color.rgb = SLATE_400
        p.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # =========================================================================
    # SLIDE 12: CLOSING SLIDE — full obsidian, editorial
    # =========================================================================
    s = prs.slides.add_slide(blank)
    solid_bg(s, OBSIDIAN)

    # Blue vertical stripe accent
    add_rect(s, 0, 0, 0.07, 7.5, BLUE_500)

    # Grid lines
    for i in range(12):
        add_rect(s, 0.07, i * 0.62, 13.263, 0.008, rgb(59, 130, 246))

    section_tag(s, 0.55, 0.35, "12  ·  CONTACT  ·  THE RIBHUS")
    blueprint_accent_line(s, y=0.7)

    # Main CTA
    t_cta = tb(s, 0.55, 1.0, 9.5, 2.4)
    tf_cta = t_cta.text_frame
    tf_cta.word_wrap = True
    p = tf_cta.paragraphs[0]
    p.text = "THE RIBHUS"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = BLUE_400
    p.font.name = "Helvetica Neue"

    add_para(tf_cta, "Ready to convert your\n2D plans into 3D BIM?", 42, bold=True, color=WHITE, space_before=6)

    t_desc = tb(s, 0.55, 3.6, 9.0, 0.8)
    tf_d = t_desc.text_frame
    tf_d.word_wrap = True
    p = tf_d.paragraphs[0]
    p.text = (
        "Send your scanned blueprints, PDF drawings, or DWG surveys. "
        "We deliver production-ready ArchiCAD (.pln) and Revit (.rvt) models "
        "in 24–48 hours. Strictly architectural — no MEP overhead."
    )
    p.font.size = Pt(12)
    p.font.color.rgb = SLATE_400
    p.font.name = "Helvetica Neue"

    blueprint_accent_line(s, y=4.55)

    contact_items = [
        ("Email",     "contact@theribhus.com"),
        ("Website",   "theribhus.com"),
        ("Portfolio", "ankitk-glitch.github.io/3d-portfolio"),
        ("Region",    "Germany · Austria · Switzerland · EU"),
        ("Formats",   "Revit (.rvt) · ArchiCAD (.pln) · IFC4 · DWG"),
    ]
    for i, (k, v) in enumerate(contact_items):
        x = 0.55 + (i % 3) * 4.1
        y = 4.7 + (i // 3) * 1.0
        tk = tb(s, x, y, 3.8, 0.25)
        p = tk.text_frame.paragraphs[0]
        p.text = k.upper()
        p.font.size = Pt(8)
        p.font.bold = True
        p.font.color.rgb = BLUE_400
        p.font.name = "Helvetica Neue"
        tv = tb(s, x, y + 0.28, 3.8, 0.4)
        p2 = tv.text_frame.paragraphs[0]
        p2.text = v
        p2.font.size = Pt(11)
        p2.font.bold = True
        p2.font.color.rgb = WHITE
        p2.font.name = "Helvetica Neue"

    add_corner_mark(s)

    # ─── Save ────────────────────────────────────────────────────────────────
    out1 = f"{BASE}/public/Modern_House_BIM_Portfolio_The_Ribhus.pptx"
    out2 = f"{BASE}/Modern_House_BIM_Portfolio_The_Ribhus.pptx"
    prs.save(out1)
    prs.save(out2)
    print(f"✅  Saved → {out1}")
    print(f"✅  Saved → {out2}")

if __name__ == "__main__":
    create_presentation()
