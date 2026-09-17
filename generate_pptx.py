import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def create_presentation():
    prs = Presentation()
    # 16:9 widescreen
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Colors
    c_dark = RGBColor(15, 23, 42)        # Slate 950 #0F172A
    c_card_dark = RGBColor(30, 41, 59)   # Slate 800 #1E293B
    c_light_bg = RGBColor(248, 250, 252) # Slate 50 #F8FAFC
    c_white = RGBColor(255, 255, 255)
    c_blue = RGBColor(37, 99, 235)       # Blue 600 #2563EB
    c_blue_light = RGBColor(239, 246, 255)
    c_gray_text = RGBColor(100, 116, 139) # Slate 500
    c_dark_text = RGBColor(15, 23, 42)
    c_border = RGBColor(226, 232, 240)
    c_emerald = RGBColor(5, 150, 105)

    base_dir = "/Users/ankitkumar/.gemini/antigravity/scratch/bim-portfolio"
    
    img_ortho = os.path.join(base_dir, "public/assets/portfolio/modern_house_orthographic_3d.png")
    img_floor = os.path.join(base_dir, "public/assets/drawings/floor_plan.jpg")
    img_upper = os.path.join(base_dir, "public/assets/portfolio/3_Architectural_Floorplan_3D.jpg")
    img_section = os.path.join(base_dir, "public/assets/drawings/section_drawing.jpg")
    img_elevation = os.path.join(base_dir, "public/assets/drawings/elevation_drawing.jpg")
    img_axon = os.path.join(base_dir, "public/assets/drawings/axonometric_exploded.jpg")
    img_physics = os.path.join(base_dir, "public/assets/drawings/energy_audit_comparison.jpg")
    img_p1 = os.path.join(base_dir, "public/assets/portfolio/1_Single_Family_Home_LOD200.jpg")
    img_p2 = os.path.join(base_dir, "public/assets/portfolio/2_Multi_Story_Residential_LOD300.jpg")

    def add_header(slide, title, category, sheet_code):
        # Header text
        tb = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(9.5), Inches(0.9))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        
        p0 = tf.paragraphs[0]
        p0.text = f"THE RIBHUS BIM STUDIO  •  {category.upper()}  •  DWG NO: {sheet_code}"
        p0.font.size = Pt(10)
        p0.font.bold = True
        p0.font.color.rgb = c_blue
        p0.font.name = "Arial"

        p1 = tf.add_paragraph()
        p1.text = title
        p1.font.size = Pt(22)
        p1.font.bold = True
        p1.font.color.rgb = c_dark_text
        p1.font.name = "Arial"

        # Right Studio Tag
        rtb = slide.shapes.add_textbox(Inches(10.2), Inches(0.4), Inches(2.3), Inches(0.7))
        rtf = rtb.text_frame
        rtf.word_wrap = True
        p_r = rtf.paragraphs[0]
        p_r.text = "theribhus.com\nRevit 2024 • LOD 300"
        p_r.font.size = Pt(10)
        p_r.font.name = "Arial"
        p_r.font.color.rgb = c_gray_text
        p_r.alignment = PP_ALIGN.RIGHT

        # Rule line
        line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.35), Inches(11.733), Inches(0.02))
        line.fill.solid()
        line.fill.fore_color.rgb = c_border
        line.line.color.rgb = c_border

    def add_footer(slide, sheet_num, total_sheets=12):
        line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.9), Inches(11.733), Inches(0.01))
        line.fill.solid()
        line.fill.fore_color.rgb = c_border
        line.line.color.rgb = c_border

        tb = slide.shapes.add_textbox(Inches(0.8), Inches(6.95), Inches(11.733), Inches(0.4))
        tf = tb.text_frame
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        p.text = f"Modern House: A Study in Minimalism  |  Autodesk Revit BIM Model  |  Page {sheet_num:02d} of {total_sheets:02d}"
        p.font.size = Pt(9)
        p.font.color.rgb = c_gray_text
        p.font.name = "Arial"

    # =========================================================================
    # SLIDE 1: COVER SLIDE (DARK ELEGANT ARCHITECTURAL THEME)
    # =========================================================================
    s1 = prs.slides.add_slide(blank_layout)
    bg1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = c_dark
    bg1.line.color.rgb = c_dark

    # Left content box
    tb = s1.shapes.add_textbox(Inches(0.9), Inches(1.0), Inches(5.8), Inches(5.5))
    tf = tb.text_frame
    tf.word_wrap = True

    p = tf.paragraphs[0]
    p.text = "THE RIBHUS  •  theribhus.com"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = c_blue
    p.font.name = "Arial"

    p2 = tf.add_paragraph()
    p2.text = "Modern House:"
    p2.font.size = Pt(44)
    p2.font.bold = True
    p2.font.color.rgb = c_white
    p2.font.name = "Arial"
    p2.space_before = Pt(10)

    p3 = tf.add_paragraph()
    p3.text = "A Study in Minimalism | BIM Driven Design\nFull Project Documentation Set"
    p3.font.size = Pt(16)
    p3.font.bold = True
    p3.font.color.rgb = RGBColor(148, 163, 184)
    p3.font.name = "Arial"
    p3.space_before = Pt(6)

    p4 = tf.add_paragraph()
    p4.text = (
        "Complete architectural BIM modeling portfolio. Converts 2D scans, sketches, "
        "and CAD files into production-ready Autodesk Revit (.rvt) and ArchiCAD (.pln) "
        "models with watertight thermal envelopes for European architects and Energieberater."
    )
    p4.font.size = Pt(11)
    p4.font.color.rgb = RGBColor(203, 213, 225)
    p4.font.name = "Arial"
    p4.space_before = Pt(18)

    p5 = tf.add_paragraph()
    p5.text = (
        "• Authoring Platform: Autodesk Revit 2024 + OpenBIM IFC4\n"
        "• Specification Level: LOD 300 (Strictly No MEP Overhead)\n"
        "• Compliance: DIN EN 12831, DIN 277, GEG 2024\n"
        "• Turnaround: 24 – 48 Hours"
    )
    p5.font.size = Pt(10)
    p5.font.color.rgb = RGBColor(148, 163, 184)
    p5.font.name = "Arial"
    p5.space_before = Pt(16)

    # Right Image
    if os.path.exists(img_ortho):
        s1.shapes.add_picture(img_ortho, Inches(7.0), Inches(1.0), width=Inches(5.5))

    # Bottom Tagline
    tb_bot = s1.shapes.add_textbox(Inches(0.9), Inches(6.8), Inches(11.5), Inches(0.4))
    tf_bot = tb_bot.text_frame
    p_bot = tf_bot.paragraphs[0]
    p_bot.text = "Confidential Portfolio Presentation  •  The Ribhus  •  info@theribhus.com  •  https://ankitk-glitch.github.io/3d-portfolio/"
    p_bot.font.size = Pt(9)
    p_bot.font.color.rgb = RGBColor(100, 116, 139)
    p_bot.font.name = "Arial"

    # =========================================================================
    # SLIDE 2: PROJECT OVERVIEW & SPATIAL ZONING
    # =========================================================================
    s2 = prs.slides.add_slide(blank_layout)
    add_header(s2, "Executive Brief & Spatial Zoning Strategy", "Project Brief", "A-000")
    add_footer(s2, 2)

    # Narrative Card (Left)
    card_l = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.6), Inches(6.8), Inches(5.1))
    card_l.fill.solid()
    card_l.fill.fore_color.rgb = c_light_bg
    card_l.line.color.rgb = c_border

    tb_l = s2.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(6.2), Inches(4.7))
    tf_l = tb_l.text_frame
    tf_l.word_wrap = True

    p = tf_l.paragraphs[0]
    p.text = "Modern Minimalist Residence: Space Planning & Architecture"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = c_dark_text
    p.font.name = "Arial"

    p_desc = tf_l.add_paragraph()
    p_desc.text = (
        "Development of an efficient spatial layout and refined exterior character. "
        "The project balances a fluid floor plan across private and social zones, "
        "integrating high-end functional amenities with distinct material selections."
    )
    p_desc.font.size = Pt(11)
    p_desc.font.color.rgb = c_gray_text
    p_desc.space_before = Pt(8)

    pillars = [
        ("Strategic Spatial Zoning", "Optimized floor plan separating 4 independent master bedrooms from a spacious, open-concept studio living area with double-height volume."),
        ("Material & Facade Detail", "Sharp architectural geometries wrapped in premium charcoal metal cladding, natural cedar timber battens, and triple-pane structural curtain walls."),
        ("Landscape & Water Features", "Curated site design integrating lush greenery with an infinity swimming pool, sunken fire pit lounge, and decorative water features.")
    ]

    for title, desc in pillars:
        pt = tf_l.add_paragraph()
        pt.text = f"■  {title}"
        pt.font.size = Pt(11)
        pt.font.bold = True
        pt.font.color.rgb = c_blue
        pt.space_before = Pt(12)

        pd = tf_l.add_paragraph()
        pd.text = desc
        pd.font.size = Pt(10)
        pd.font.color.rgb = c_dark_text
        pd.space_before = Pt(2)

    # Right Card: Quantities & Performance Data
    card_r = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.9), Inches(1.6), Inches(4.6), Inches(5.1))
    card_r.fill.solid()
    card_r.fill.fore_color.rgb = c_dark
    card_r.line.color.rgb = c_dark

    tb_r = s2.shapes.add_textbox(Inches(8.2), Inches(1.9), Inches(4.0), Inches(4.5))
    tf_r = tb_r.text_frame
    tf_r.word_wrap = True

    pr_title = tf_r.paragraphs[0]
    pr_title.text = "Key Project Quantities (BIM Takeoff)"
    pr_title.font.size = Pt(13)
    pr_title.font.bold = True
    pr_title.font.color.rgb = c_white

    metrics = [
        ("Plot / Site Area", "840.0 m²"),
        ("Gross Floor Area (BGF)", "342.5 m²"),
        ("Net Usable Area (NRF)", "278.4 m²"),
        ("Heated Gross Volume (Ve)", "965.0 m³"),
        ("Envelope Surface Area (A)", "612.0 m²"),
        ("Compactness Ratio (A/Ve)", "0.63 m⁻¹"),
        ("Exterior Glazing Area", "118.4 m² (WWR: 32%)"),
        ("Energy Standard", "Passivhaus / KfW 40")
    ]

    for label, val in metrics:
        p_row = tf_r.add_paragraph()
        p_row.text = f"{label}:  {val}"
        p_row.font.size = Pt(10)
        p_row.font.color.rgb = RGBColor(226, 232, 240)
        p_row.space_before = Pt(9)

    # =========================================================================
    # SLIDE 3: BOARD 01 - ORTHOGRAPHIC 3D AXONOMETRIC VIEW
    # =========================================================================
    s3 = prs.slides.add_slide(blank_layout)
    add_header(s3, "Orthographic 3D Axonometric Model View", "Architectural 3D", "A-001")
    add_footer(s3, 3)

    if os.path.exists(img_ortho):
        s3.shapes.add_picture(img_ortho, Inches(0.8), Inches(1.55), width=Inches(8.5))

    # Right info panel
    card_s3 = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.5), Inches(1.55), Inches(3.0), Inches(5.15))
    card_s3.fill.solid()
    card_s3.fill.fore_color.rgb = c_light_bg
    card_s3.line.color.rgb = c_border

    tb_s3 = s3.shapes.add_textbox(Inches(9.7), Inches(1.75), Inches(2.6), Inches(4.7))
    tf_s3 = tb_s3.text_frame
    tf_s3.word_wrap = True
    p = tf_s3.paragraphs[0]
    p.text = "Sheet Specification"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = c_dark_text

    items_s3 = [
        ("Camera Type", "Orthographic Axonometric (30°/60°)"),
        ("BIM Authoring", "Autodesk Revit 2024"),
        ("Model LOD", "LOD 300 (Design Development)"),
        ("Site Hardscape", "Driveway, Pergola, Pool Deck"),
        ("Landscape Detail", "Intensive Sedum Green Roof"),
        ("Thermal Perimeter", "Watertight Envelope Shell")
    ]
    for lbl, v in items_s3:
        p_it = tf_s3.add_paragraph()
        p_it.text = f"{lbl}:\n{v}"
        p_it.font.size = Pt(9)
        p_it.font.color.rgb = c_gray_text
        p_it.space_before = Pt(10)

    # =========================================================================
    # SLIDE 4: BOARD 02 - GROUND FLOOR & SITE PLAN (1:100)
    # =========================================================================
    s4 = prs.slides.add_slide(blank_layout)
    add_header(s4, "Ground Floor & Master Site Plan (Scale 1:100)", "Floor Plans", "A-101")
    add_footer(s4, 4)

    if os.path.exists(img_floor):
        s4.shapes.add_picture(img_floor, Inches(0.8), Inches(1.55), width=Inches(8.0))

    card_s4 = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.0), Inches(1.55), Inches(3.5), Inches(5.15))
    card_s4.fill.solid()
    card_s4.fill.fore_color.rgb = c_light_bg
    card_s4.line.color.rgb = c_border

    tb_s4 = s4.shapes.add_textbox(Inches(9.2), Inches(1.75), Inches(3.1), Inches(4.7))
    tf_s4 = tb_s4.text_frame
    tf_s4.word_wrap = True
    p = tf_s4.paragraphs[0]
    p.text = "Ground Floor Programming"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = c_dark_text

    items_s4 = [
        ("Gross Floor Area (BGF)", "185.2 m²"),
        ("Double-Height Living", "64.8 m² (5.8m ceiling)"),
        ("Dining & Kitchen Island", "38.2 m²"),
        ("Guest Bedroom Suite", "22.4 m² (with ensuite)"),
        ("Double Garage", "38.0 m²"),
        ("Terrace & Pool Deck", "92.5 m²"),
        ("DIN Compliance", "DIN 1356 & DIN 277")
    ]
    for lbl, v in items_s4:
        p_it = tf_s4.add_paragraph()
        p_it.text = f"• {lbl}: {v}"
        p_it.font.size = Pt(9)
        p_it.font.color.rgb = c_gray_text
        p_it.space_before = Pt(8)

    # =========================================================================
    # SLIDE 5: BOARD 03 - UPPER LEVEL & GREEN ROOF PLAN
    # =========================================================================
    s5 = prs.slides.add_slide(blank_layout)
    add_header(s5, "Upper Floor & Intensive Green Roof Terrace (Scale 1:100)", "Floor Plans", "A-102")
    add_footer(s5, 5)

    if os.path.exists(img_upper):
        s5.shapes.add_picture(img_upper, Inches(0.8), Inches(1.55), width=Inches(8.0))

    card_s5 = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.0), Inches(1.55), Inches(3.5), Inches(5.15))
    card_s5.fill.solid()
    card_s5.fill.fore_color.rgb = c_light_bg
    card_s5.line.color.rgb = c_border

    tb_s5 = s5.shapes.add_textbox(Inches(9.2), Inches(1.75), Inches(3.1), Inches(4.7))
    tf_s5 = tb_s5.text_frame
    tf_s5.word_wrap = True
    p = tf_s5.paragraphs[0]
    p.text = "Upper Level Programming"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = c_dark_text

    items_s5 = [
        ("Gross Floor Area (BGF)", "157.3 m²"),
        ("Master Bedroom 01", "28.5 m² (Ensuite + Walk-in)"),
        ("Bedroom Suites 02, 03, 04", "18.2 m² each (Independent)"),
        ("Central Gallery Lounge", "24.0 m² overlooking foyer"),
        ("Green Roof Terrace", "88.0 m² (Sedum roof)"),
        ("Clear Ceiling Height", "2.70 m finished")
    ]
    for lbl, v in items_s5:
        p_it = tf_s5.add_paragraph()
        p_it.text = f"• {lbl}: {v}"
        p_it.font.size = Pt(9)
        p_it.font.color.rgb = c_gray_text
        p_it.space_before = Pt(8)

    # =========================================================================
    # SLIDE 6: BOARD 04 & 05 - SECTIONS & ELEVATIONS
    # =========================================================================
    s6 = prs.slides.add_slide(blank_layout)
    add_header(s6, "Architectural Building Sections & Exterior Facade Elevations", "Sections & Elevations", "A-201 / A-301")
    add_footer(s6, 6)

    # Left: Section
    if os.path.exists(img_section):
        s6.shapes.add_picture(img_section, Inches(0.8), Inches(1.55), width=Inches(5.7))

    # Right: Elevation
    if os.path.exists(img_elevation):
        s6.shapes.add_picture(img_elevation, Inches(6.8), Inches(1.55), width=Inches(5.7))

    # Bottom Callout Bar
    bar_s6 = s6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(5.85), Inches(11.733), Inches(0.85))
    bar_s6.fill.solid()
    bar_s6.fill.fore_color.rgb = c_light_bg
    bar_s6.line.color.rgb = c_border

    tb_bar = s6.shapes.add_textbox(Inches(1.0), Inches(5.95), Inches(11.3), Inches(0.65))
    tf_bar = tb_bar.text_frame
    tf_bar.word_wrap = True
    p = tf_bar.paragraphs[0]
    p.text = (
        "Technical Datum: Floor-to-Floor 3.30m  |  Clear Heights: 2.85m Ground, 2.70m Level 1  |  "
        "Facade: Anthracite Zinc Standing-Seam Cladding (RAL 7016) + Cedar Siding  |  "
        "Glazing: Triple Insulated Argon (Ug = 0.5 W/m²K, Uw = 0.78 W/m²K)"
    )
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = c_dark_text

    # =========================================================================
    # SLIDE 7: BOARD 06 - 3D EXPLODED AXONOMETRIC (MODEL ASSEMBLY)
    # =========================================================================
    s7 = prs.slides.add_slide(blank_layout)
    add_header(s7, "3D Exploded Axonometric & Model Assembly Hierarchy", "BIM Hierarchy", "A-401")
    add_footer(s7, 7)

    if os.path.exists(img_axon):
        s7.shapes.add_picture(img_axon, Inches(0.8), Inches(1.55), width=Inches(7.8))

    card_s7 = s7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.8), Inches(1.55), Inches(3.7), Inches(5.15))
    card_s7.fill.solid()
    card_s7.fill.fore_color.rgb = c_light_bg
    card_s7.line.color.rgb = c_border

    tb_s7 = s7.shapes.add_textbox(Inches(9.0), Inches(1.75), Inches(3.3), Inches(4.7))
    tf_s7 = tb_s7.text_frame
    tf_s7.word_wrap = True
    p = tf_s7.paragraphs[0]
    p.text = "4-Tier BIM Hierarchy"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = c_dark_text

    tiers = [
        ("Tier 4: Roof Deck", "Extensive green roof garden, sedum layer, drainage mat, parapet capping."),
        ("Tier 3: Upper Level", "4 master suites, lightweight drywall partitions, cantilevered balconies."),
        ("Tier 2: Ground Floor", "Reinforced concrete columns, floor-to-ceiling glass curtain walls, double garage."),
        ("Tier 1: Sub-Structure", "Frost-protected foundation slab, site topography, swimming pool basin.")
    ]
    for t_name, t_desc in tiers:
        pt = tf_s7.add_paragraph()
        pt.text = f"▲  {t_name}"
        pt.font.size = Pt(10)
        pt.font.bold = True
        pt.font.color.rgb = c_blue
        pt.space_before = Pt(8)

        pd = tf_s7.add_paragraph()
        pd.text = t_desc
        pd.font.size = Pt(9)
        pd.font.color.rgb = c_gray_text

    # =========================================================================
    # SLIDE 8: BOARD 07 - BUILDING PHYSICS & DIN EN 12831 AUDIT
    # =========================================================================
    s8 = prs.slides.add_slide(blank_layout)
    add_header(s8, "Building Physics & Thermal Envelope Calculation (DIN EN 12831)", "Building Physics", "A-501")
    add_footer(s8, 8)

    if os.path.exists(img_physics):
        s8.shapes.add_picture(img_physics, Inches(0.8), Inches(1.55), width=Inches(7.8))

    card_s8 = s8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.8), Inches(1.55), Inches(3.7), Inches(5.15))
    card_s8.fill.solid()
    card_s8.fill.fore_color.rgb = c_dark
    card_s8.line.color.rgb = c_dark

    tb_s8 = s8.shapes.add_textbox(Inches(9.0), Inches(1.75), Inches(3.3), Inches(4.7))
    tf_s8 = tb_s8.text_frame
    tf_s8.word_wrap = True
    p = tf_s8.paragraphs[0]
    p.text = "Thermal Envelope Metrics"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = c_white

    physics_items = [
        ("Exterior Wall U-Value", "0.16 W/m²K (Passiv standard)"),
        ("Roof Deck U-Value", "0.12 W/m²K (PIR rigid foam)"),
        ("Ground Slab U-Value", "0.18 W/m²K (EPS perimeter)"),
        ("Window Assembly Uw", "0.78 W/m²K (Triple glazed)"),
        ("Envelope Area (A)", "612.0 m² watertight shell"),
        ("Gross Heated Volume", "965.0 m³"),
        ("Simulation Software", "Solar-Computer / Hottgenroth")
    ]
    for lbl, v in physics_items:
        p_it = tf_s8.add_paragraph()
        p_it.text = f"{lbl}:\n{v}"
        p_it.font.size = Pt(9)
        p_it.font.color.rgb = RGBColor(203, 213, 225)
        p_it.space_before = Pt(7)

    # =========================================================================
    # SLIDE 9: BOARD 08 - REVIT QUANTITIES TAKEOFF (QTO)
    # =========================================================================
    s9 = prs.slides.add_slide(blank_layout)
    add_header(s9, "Revit BIM Quantities Takeoff & Component Schedules", "BIM QTO", "A-601")
    add_footer(s9, 9)

    # Left: Project Photo 1
    if os.path.exists(img_p1):
        s9.shapes.add_picture(img_p1, Inches(0.8), Inches(1.55), width=Inches(6.0))

    # Right: Detailed Takeoff Table
    tb_table = s9.shapes.add_textbox(Inches(7.1), Inches(1.55), Inches(5.4), Inches(5.15))
    tf_tab = tb_table.text_frame
    tf_tab.word_wrap = True

    p = tf_tab.paragraphs[0]
    p.text = "Automated Material Schedules (Massenermittlung)"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = c_dark_text

    schedules = [
        ("Concrete C30/37 Volume", "142.6 m³", "Foundation, RC columns & slabs"),
        ("Exterior Wall Surface", "372.0 m²", "Gross exterior thermal boundary"),
        ("Glazing & Curtain Walls", "118.4 m²", "WWR: 32% high solar gain glass"),
        ("Mineral Wool Insulation", "372.0 m²", "160mm rigid insulation (λ = 0.032)"),
        ("Roof Waterproofing", "176.0 m²", "2-layer bituminous waterproofing"),
        ("Scheduled Openings", "28 Items", "Full Revit door & window schedule"),
        ("Interior Drywall Slabs", "485.0 m²", "Non-bearing acoustic partition walls")
    ]

    for item, qty, note in schedules:
        pi = tf_tab.add_paragraph()
        pi.text = f"■ {item}:  {qty}"
        pi.font.size = Pt(10)
        pi.font.bold = True
        pi.font.color.rgb = c_blue
        pi.space_before = Pt(7)

        pn = tf_tab.add_paragraph()
        pn.text = f"   Scope: {note}"
        pn.font.size = Pt(9)
        pn.font.color.rgb = c_gray_text

    # =========================================================================
    # SLIDE 10: URBAN MULTI-STORY REFERENCE (BOARD 09)
    # =========================================================================
    s10 = prs.slides.add_slide(blank_layout)
    add_header(s10, "Urban Multi-Story Residential Portfolio Reference", "Multi-Family BIM", "A-701")
    add_footer(s10, 10)

    if os.path.exists(img_p2):
        s10.shapes.add_picture(img_p2, Inches(0.8), Inches(1.55), width=Inches(7.2))

    card_s10 = s10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.3), Inches(1.55), Inches(4.2), Inches(5.15))
    card_s10.fill.solid()
    card_s10.fill.fore_color.rgb = c_light_bg
    card_s10.line.color.rgb = c_border

    tb_s10 = s10.shapes.add_textbox(Inches(8.5), Inches(1.75), Inches(3.8), Inches(4.7))
    tf_s10 = tb_s10.text_frame
    tf_s10.word_wrap = True
    p = tf_s10.paragraphs[0]
    p.text = "Multi-Family Residential Scope"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = c_dark_text

    multi_items = [
        ("Typology", "Urban Multi-Story Residential Building"),
        ("Storeys Count", "4 Storeys + Subterranean Parking"),
        ("Total GFA (BGF)", "1,120.0 m²"),
        ("Units Count", "12 Residential Apartments"),
        ("Thermal Zones", "12 Separate DIN EN 12831 Zones"),
        ("BIM Authoring", "Revit 2024 / OpenBIM IFC4"),
        ("Turnaround Time", "48 Hours Delivery"),
        ("MEP Scope", "Strictly Pure Architectural (No MEP)")
    ]
    for lbl, v in multi_items:
        p_it = tf_s10.add_paragraph()
        p_it.text = f"• {lbl}: {v}"
        p_it.font.size = Pt(9)
        p_it.font.color.rgb = c_gray_text
        p_it.space_before = Pt(7)

    # =========================================================================
    # SLIDE 11: PRICING & PRODUCTION PACKAGES
    # =========================================================================
    s11 = prs.slides.add_slide(blank_layout)
    add_header(s11, "Transparent, Complexity-Based Production Pricing", "Commercial Scope", "FEES-01")
    add_footer(s11, 11)

    cards_data = [
        ("Single-Family & Small Residential", "€180 – €290", "24 – 48 Hours", [
            "Up to 250 m² Gross Floor Area (BGF)",
            "LOD 200 / 300 Architectural Shell",
            "Watertight envelope for energy audit",
            "Native ArchiCAD (.pln) or Revit (.rvt)",
            "OpenBIM (.ifc) + 2D PDF Drawing Output",
            "1 revision round included"
        ], False),
        ("Multi-Story & Complex Residential", "€450 – €950+", "48 – 72 Hours", [
            "250 m² to 1,200+ m² Gross Floor Area",
            "Multi-family, mixed-use, commercial",
            "Full thermal zone separation per DIN EN 12831",
            "Detailed Revit system families / ArchiCAD GDL",
            "QTO component schedules included",
            "2 revision rounds included"
        ], True),
        ("Dedicated Studio Retainer", "From €1,500 / mo", "Guaranteed 24h", [
            "Continuous external BIM production pod",
            "8–15 models per month included",
            "Priority queue with guaranteed 24h delivery",
            "Shared templates, titleblocks & layer standards",
            "Direct Slack / Teams communication channel",
            "Ideal for high-volume Energieberater"
        ], False)
    ]

    left_pos = [Inches(0.8), Inches(4.8), Inches(8.8)]
    for i, (p_title, p_price, p_time, feats, is_pop) in enumerate(cards_data):
        card = s11.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left_pos[i], Inches(1.6), Inches(3.7), Inches(5.1))
        card.fill.solid()
        if is_pop:
            card.fill.fore_color.rgb = c_dark
            card.line.color.rgb = c_blue
            card.line.width = Pt(2)
        else:
            card.fill.fore_color.rgb = c_light_bg
            card.line.color.rgb = c_border

        tb = s11.shapes.add_textbox(left_pos[i] + Inches(0.25), Inches(1.8), Inches(3.2), Inches(4.7))
        tf = tb.text_frame
        tf.word_wrap = True

        p0 = tf.paragraphs[0]
        p0.text = p_title
        p0.font.size = Pt(11)
        p0.font.bold = True
        p0.font.color.rgb = c_white if is_pop else c_dark_text

        p_pr = tf.add_paragraph()
        p_pr.text = p_price
        p_pr.font.size = Pt(18)
        p_pr.font.bold = True
        p_pr.font.color.rgb = c_blue if not is_pop else RGBColor(96, 165, 250)
        p_pr.space_before = Pt(4)

        p_tm = tf.add_paragraph()
        p_tm.text = f"Turnaround: {p_time}"
        p_tm.font.size = Pt(9)
        p_tm.font.color.rgb = RGBColor(148, 163, 184) if is_pop else c_gray_text
        p_tm.space_before = Pt(2)

        for f in feats:
            pf = tf.add_paragraph()
            pf.text = f"✓ {f}"
            pf.font.size = Pt(9)
            pf.font.color.rgb = RGBColor(226, 232, 240) if is_pop else c_dark_text
            pf.space_before = Pt(6)

    # =========================================================================
    # SLIDE 12: STUDIO CONTACT & HOW TO ORDER
    # =========================================================================
    s12 = prs.slides.add_slide(blank_layout)
    bg12 = s12.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg12.fill.solid()
    bg12.fill.fore_color.rgb = c_dark
    bg12.line.color.rgb = c_dark

    tb_end = s12.shapes.add_textbox(Inches(1.5), Inches(1.5), Inches(10.333), Inches(4.5))
    tf_end = tb_end.text_frame
    tf_end.word_wrap = True

    p0 = tf_end.paragraphs[0]
    p0.text = "THE RIBHUS  •  BIM ARCHITECTURAL POD"
    p0.font.size = Pt(12)
    p0.font.bold = True
    p0.font.color.rgb = c_blue
    p0.font.name = "Arial"

    p1 = tf_end.add_paragraph()
    p1.text = "Ready to convert your 2D plans into 3D BIM models?"
    p1.font.size = Pt(28)
    p1.font.bold = True
    p1.font.color.rgb = c_white
    p1.space_before = Pt(10)

    p2 = tf_end.add_paragraph()
    p2.text = (
        "Send your scanned blueprints, PDF drawings, or DWG surveys. "
        "We deliver production-ready ArchiCAD (.pln) and Revit (.rvt) models in 24–48 hours."
    )
    p2.font.size = Pt(13)
    p2.font.color.rgb = RGBColor(203, 213, 225)
    p2.space_before = Pt(12)

    p3 = tf_end.add_paragraph()
    p3.text = (
        "✉️ Email: contact@theribhus.com  |  info@theribhus.com\n"
        "🌐 Website: https://theribhus.com\n"
        "📂 Live Portfolio: https://ankitk-glitch.github.io/3d-portfolio/\n"
        "📍 Production Pods: Germany, Austria, Switzerland, European Union\n"
        "⚡ Deliverables: Autodesk Revit (.rvt), ArchiCAD (.pln), OpenBIM (.ifc), AutoCAD (.dwg)"
    )
    p3.font.size = Pt(11)
    p3.font.color.rgb = RGBColor(148, 163, 184)
    p3.space_before = Pt(20)

    out_file = os.path.join(base_dir, "public/Modern_House_BIM_Portfolio_The_Ribhus.pptx")
    prs.save(out_file)
    print(f"SUCCESS: Saved presentation to {out_file}")

    # Also copy to workspace root
    root_out = os.path.join(base_dir, "Modern_House_BIM_Portfolio_The_Ribhus.pptx")
    prs.save(root_out)
    print(f"SUCCESS: Saved copy to {root_out}")

if __name__ == "__main__":
    create_presentation()
