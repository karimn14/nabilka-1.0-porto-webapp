# Design Guidelines for Engineering Portfolio Website

## Design Approach
**Reference-Based**: Drawing from professional engineering and tech portfolios with focus on **dark navy engineering aesthetic** - sophisticated, technical, and modern.

## Color Palette
- **Background**: `#0A192F` (Deep Navy)
- **Accent Blue**: `#007BFF` / `#64FFDA` (Bright Blue / Cyan)
- **Surface/Cards**: `#112240` (Lighter Navy)
- **Borders**: `#1E3A8A` (Medium Blue)
- **Text**: `#E6F1FF` (Light Blue-White)

## Typography
- **Font Family**: Inter or Montserrat, sans-serif
- **Hierarchy**: 
  - Hero headlines: Bold, large (text-5xl to text-6xl)
  - Section titles: Semi-bold (text-3xl to text-4xl)
  - Body text: Regular weight (text-base to text-lg)
  - Tech badges: Small (text-sm)
- **Color**: Primary text in `#E6F1FF` with subtle hierarchy through opacity variations

## Layout System
**Spacing Scale**: Consistent use of Tailwind units - `py-16`, `px-8`, `gap-8` as primary spacing rhythm
- **Container**: `max-w-6xl mx-auto` for central content constraint
- **Section Padding**: Vertical `py-16`, horizontal `px-8`
- **Card Spacing**: `gap-6` to `gap-8` between elements
- **Internal Padding**: Cards use `p-6` consistently

## Page-Specific Layouts

### Home Page
- Full-viewport hero section with centered content
- Headline, 2-3 line bio, two prominent CTAs (View Portfolio, Download CV)
- Footer with horizontally aligned social icons
- Optional subtle animated gradient/particle background (pure CSS)
- Clean, focused composition with generous negative space

### Experience Page
- Responsive grid: Single column mobile → Two columns desktop (`grid-cols-1 md:grid-cols-2`)
- 6 role cards with consistent card treatment
- Each card: Company/role title, dates, 2-3 bullet points of responsibilities

### Portfolio Page
- Responsive grid: Single column mobile → Two columns tablet → Three columns desktop (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- 5 project cards featuring:
  - Placeholder image area (16:9 aspect ratio, `h-48`)
  - Project title
  - 60-word description
  - Tech stack badges in pill format
- "Download Full Portfolio" CTA below grid

### Learning Journey Page
- Vertical stack or grid of 3 expandable cards
- Each card represents a learning topic with expand/collapse functionality
- Clean card design with hover lift effect

### Contact Page
- Centered contact form with Name, Email, Message fields
- Form styling consistent with card treatment
- Submit button with hover states
- Inline social icons below form
- Copyright footer

## Component Library

### Navigation
- Fixed/sticky header with logo and page links
- Smooth transitions between pages
- Active state indication for current page
- Horizontal layout desktop, hamburger menu mobile

### Cards
- **Base Style**: `rounded-xl bg-[#112240] border border-[#1E3A8A]`
- **Padding**: `p-6`
- **Hover State**: Subtle shadow lift (`hover:shadow-lg`) and scale (`hover:scale-[1.02]`)
- **Transition**: Smooth all properties

### Buttons
- Primary CTA: Filled with accent color, white text
- Secondary: Outlined with accent border
- Consistent padding: `px-6 py-3`
- Rounded corners: `rounded-lg`
- Hover: Subtle glow/brightness increase

### Tech Stack Badges
- Pill shape: `rounded-full`
- Background: `bg-[#1E3A8A]`
- Text: `text-[#64FFDA]`
- Size: Small (`text-sm`)
- Padding: `px-3 py-1`

### Form Inputs
- Consistent treatment: `rounded-lg p-3 w-full bg-[#1E293B] border border-[#1E3A8A]`
- Focus state with accent border glow
- Placeholder text in muted color

## Responsive Behavior
- **Mobile-first approach**: Stack all grids to single column on small screens
- **Breakpoints**: 
  - `sm:` 640px - Two columns for project grid
  - `md:` 768px - Two columns for experience grid
  - `lg:` 1024px - Three columns for project grid
- **Horizontal padding scales**: `px-4` mobile → `px-8` desktop
- All cards and sections reflow smoothly with no horizontal scroll

## Visual Effects & Animation
- Subtle fade/slide animations using Framer Motion on page transitions
- Card hover effects: Shadow and scale transforms
- Smooth transitions on all interactive elements
- Minimal, purposeful motion - no distracting animations

## Content Treatment
- **Images**: 16:9 aspect ratio with `object-cover`
- **Placeholder images**: Dark background (`bg-[#1E293B]`) with centered icon/text
- **Whitespace**: Generous spacing between sections for breathing room
- **Alignment**: All content centers within `max-w-6xl` container
- **No empty space**: Every section filled purposefully with clean vertical rhythm

## Accessibility & UX
- Semantic HTML structure (`main`, `section`, `article`, `header`, `footer`)
- Clear visual hierarchy through size and spacing
- High contrast text on dark backgrounds
- Consistent interactive element styling
- Touch-friendly button and link sizes (minimum 44px height)

## Images
**Hero Section**: No large hero image - clean typographic hero with optional animated gradient background
**Portfolio Projects**: Each project card includes a placeholder image area (16:9, h-48) for project screenshots/visuals
**Other Pages**: No decorative images - focus on content and clean layout