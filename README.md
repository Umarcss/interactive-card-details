# Interactive Card Details Form

A beautiful and interactive credit card details form built as a solution to the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/interactive-card-details-form-ApEajFZ1x). This project features a real-time card preview that updates as users type their information, with comprehensive form validation and a smooth user experience.

![Interactive Card Details Form](./design/desktop-design.jpg)

## 🚀 Features

- **Real-time Card Preview**: See your card details update instantly as you type
- **Form Validation**: Comprehensive validation with helpful error messages
  - Cardholder name validation (letters only)
  - Card number format validation (numbers only, 16 digits)
  - Expiration date validation (MM/YY format)
  - CVC validation (3-4 digits)
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Interactive States**:
  - Focus states with gradient borders
  - Error states with red borders and messages
  - Success state with thank you screen
- **Accessibility**: Semantic HTML and proper form labeling
- **Smooth Animations**: Transitions and visual feedback throughout

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Media queries
- **SASS/SCSS**: Preprocessor for organized styling
- **JavaScript (Vanilla)**: Form validation and real-time updates
- **Google Fonts**: Space Grotesk font family

## 📁 Project Structure

```
interactive-card-details-form/
│
├── css/
│   ├── style.css          # Compiled CSS
│   └── style.css.map      # Source map
│
├── sass/
│   └── style.scss         # SASS source file
│
├── js/
│   └── script.js          # JavaScript functionality
│
├── images/
│   ├── bg-card-back.png   # Back card background
│   ├── bg-card-front.png  # Front card background
│   ├── bg-main-desktop.png # Desktop background
│   ├── bg-main-mobile.png  # Mobile background
│   ├── card-logo.svg       # Card logo
│   ├── icon-complete.svg   # Success icon
│   └── favicon-32x32.png   # Favicon
│
├── design/
│   ├── desktop-design.jpg
│   ├── mobile-design.jpg
│   ├── active-states.jpg
│   ├── complete-state-desktop.jpg
│   └── complete-state-mobile.jpg
│
├── index.html              # Main HTML file
├── style-guide.md          # Design style guide
└── README.md               # Project documentation
```

## 🎨 Design Specifications

### Colors

**Primary:**
- Linear gradient (active input border): `hsl(249, 99%, 64%)` to `hsl(278, 94%, 30%)`
- Error red: `hsl(0, 100%, 66%)`

**Neutral:**
- White: `hsl(0, 100%, 100%)`
- Light gray: `hsl(270, 3%, 87%)`
- Medium gray: `hsl(212, 12%, 71%)`
- Dark purple: `hsl(278, 68%, 11%)`

### Typography

- **Font Family**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Font Weight**: 500
- **Font Size**: 18px (body copy)

### Layout

- **Mobile**: 375px
- **Desktop**: 1440px (responsive from 320px+)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interactive-card-details-frontend-mentor-challenge-main
```

2. Open the project:
   - Simply open `index.html` in your browser, or
   - Use a local server like Live Server in VS Code, or
   - Run a simple HTTP server:
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

3. If you want to work with SASS:
```bash
# Install SASS (if not already installed)
npm install -g sass

# Watch for changes
sass sass/style.scss css/style.css --watch
```

## 💻 Usage

1. **Enter Cardholder Name**: Type the cardholder's name (letters and spaces only)
2. **Enter Card Number**: Input 16 digits (spaces are automatically formatted)
3. **Enter Expiration Date**: 
   - MM: Month (01-12)
   - YY: Year (21-35)
4. **Enter CVC**: Input 3-4 digit security code
5. **Submit**: Click "Confirm" to validate and submit the form

The card preview updates in real-time as you type in each field.

## ✨ Features in Detail

### Real-time Updates
- Card number is automatically formatted with spaces
- All fields update the card preview instantly
- Placeholder values show when fields are empty

### Validation
- **Cardholder Name**: Must contain at least 3 characters, letters and spaces only
- **Card Number**: Must be exactly 16 digits, numbers only
- **Expiration Date**: 
  - Month: 01-12
  - Year: 21-35
- **CVC**: 3-4 digits

### Error Handling
- Clear error messages for each invalid field
- Red border indicators for errors
- Errors clear automatically when corrected
- Form won't submit until all fields are valid

### Success State
- Beautiful thank you screen after successful submission
- Option to continue and reset the form

## 📱 Responsive Breakpoints

- **Mobile**: Default styles (< 900px)
- **Tablet**: 420px - 899px
- **Desktop**: 900px+
  - 992px: Medium desktop adjustments
  - 1100px: Large desktop optimizations

## 🎯 Challenges Solved

- ✅ Real-time card preview updates
- ✅ Form validation with helpful error messages
- ✅ Responsive design for all screen sizes
- ✅ Accessible form with proper labels
- ✅ Smooth animations and transitions
- ✅ Error state management
- ✅ Success state with form reset capability

## 📝 Notes

- This project uses vanilla JavaScript - no frameworks or libraries required
- The design matches the Frontend Mentor specifications exactly
- All images are provided by Frontend Mentor
- The form does not actually submit data - it's a front-end only solution


**Note**: This is a practice project. The form does not actually process payment information - it's purely for demonstration purposes.

