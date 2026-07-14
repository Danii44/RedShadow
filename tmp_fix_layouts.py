from pathlib import Path
import re

root = Path('src/app/dark')
menu_file = Path('src/data/MenuRenderer/menu-dark.ts')

# Update menu to simple main navigation
menu_text = menu_file.read_text(encoding='utf-8')
new_menu = '''export const darkMenu: MenuItem[] = [
    { id: 1, type: "dropdown", label: "Home", href: "/" },
    { id: 2, type: "dropdown", label: "About Us", href: "/about-us" },
    { id: 3, type: "dropdown", label: "Portfolio", href: "/portfolio" },
    { id: 4, type: "dropdown", label: "Services", href: "/service" },
    { id: 5, type: "dropdown", label: "Contact", href: "/contact-us" },
];
'''
menu_text = re.sub(r'export const darkMenu: MenuItem\[\] = \[.*?\];\s*\Z', new_menu, menu_text, flags=re.S)
menu_file.write_text(menu_text, encoding='utf-8')

# Update layouts
footer_imports = [
    (r'import BrandingStudioFooter from "@/layouts/footers/BrandingStudioFooter";', 'import StudioFooter from "@/layouts/footers/Footer";'),
    (r'import CreativeAgencyFooter from "@/layouts/footers/CreativeAgencyFooter";', 'import StudioFooter from "@/layouts/footers/Footer";'),
    (r'import ModernAgencyFooter from "@/layouts/footers/ModernAgencyFooter";', 'import StudioFooter from "@/layouts/footers/Footer";'),
    (r'import MotionGraphicFooter from "@/layouts/footers/MotionGraphicFooter";', 'import StudioFooter from "@/layouts/footers/Footer";'),
    (r'import PersonalPortfolioFooter from "@/layouts/footers/PersonalPortfolioFooter";', 'import StudioFooter from "@/layouts/footers/Footer";'),
    (r'import ShopFooter from "@/layouts/footers/ShopFooter";', 'import StudioFooter from "@/layouts/footers/Footer";'),
]
header_imports = [
    (r'import PageHeader from "@/layouts/headers/PageHeader";', 'import StudioHeader from "@/layouts/headers/Header";'),
    (r'import ShopHeader from "@/layouts/headers/ShopHeader";', 'import StudioHeader from "@/layouts/headers/Header";'),
]

for layout_file in root.rglob('layout.tsx'):
    text = layout_file.read_text(encoding='utf-8')
    orig = text
    for old, new in footer_imports + header_imports:
        text = re.sub(old, new, text)
    text = re.sub(r'<PageHeader[^>]*\/>', '<StudioHeader />', text)
    text = re.sub(r'<ShopHeader[^>]*\/>', '<StudioHeader />', text)
    text = re.sub(r'<BrandingStudioFooter[^>]*\/>', '<StudioFooter />', text)
    text = re.sub(r'<CreativeAgencyFooter[^>]*\/>', '<StudioFooter />', text)
    text = re.sub(r'<ModernAgencyFooter[^>]*\/>', '<StudioFooter />', text)
    text = re.sub(r'<MotionGraphicFooter[^>]*\/>', '<StudioFooter />', text)
    text = re.sub(r'<PersonalPortfolioFooter[^>]*\/>', '<StudioFooter />', text)
    text = re.sub(r'<ShopFooter[^>]*\/>', '<StudioFooter />', text)
    if text != orig:
        layout_file.write_text(text, encoding='utf-8')
        print('Updated', layout_file)
