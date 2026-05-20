// Global Color Configuration
// Change colors here and they'll update everywhere in the app

export const colors = {
  // Primary Colors
  primary: {
    dark: 'bg-purple-900',
    light: 'bg-purple-50',
    text: 'text-purple-900',
    border: 'border-purple-300',
    hover: 'hover:bg-purple-800',
  },

  // Accent Colors
  accent: {
    main: 'bg-orange-600',
    hover: 'hover:bg-orange-700',
    text: 'text-orange-600',
    light: 'bg-orange-200',
    lightText: 'text-orange-300',
    lightBorder: 'text-orange-400',
  },

  // Header
  header: {
    bg: 'bg-purple-900',
    text: 'text-white',
    activeLink: 'text-orange-400',
    hoverLink: 'hover:text-orange-300',
  },

  // Text Colors
  text: {
    primary: 'text-slate-900',
    secondary: 'text-slate-700',
    muted: 'text-slate-600',
    light: 'text-slate-500',
    lighter: 'text-slate-400',
  },

  // Border Colors
  border: {
    light: 'border-slate-200',
    medium: 'border-slate-300',
    primary: 'border-purple-300',
  },

  // Background Colors
  bg: {
    page: 'bg-purple-50',
    card: 'bg-white',
    section: 'bg-white',
    sectionAlt: 'bg-purple-50',
    modal: 'bg-black/50',
  },

  // Form Colors
  form: {
    inputBg: 'bg-white',
    inputBorder: 'border-purple-300',
    inputFocus: 'focus:border-orange-500 focus:ring-1 focus:ring-orange-500',
    labelText: 'text-purple-900',
    buttonPrimary: 'bg-orange-600 hover:bg-orange-700',
  },

  // Button Colors
  button: {
    primary: 'bg-orange-600 text-white hover:bg-orange-700',
    secondary: 'border-purple-300 bg-white text-purple-700 hover:bg-purple-50',
    dark: 'bg-purple-900 text-white hover:bg-purple-800',
  },

  // Modal Colors
  modal: {
    bg: 'bg-white',
    headerBg: 'bg-purple-50',
    headerText: 'text-purple-900',
    headerBorder: 'border-purple-200',
    closeBtn: 'text-purple-600 hover:text-purple-800',
  },

  // Category/Tags
  category: {
    activeBg: 'bg-orange-200',
    activeText: 'text-orange-900',
    inactiveBg: 'hover:bg-purple-100',
    inactiveText: 'text-slate-600',
  },

  // Gradients
  gradient: {
    hero: 'bg-[linear-gradient(160deg,#4a2c5e,#6b3d7f)]',
  },

  // Shadow
  shadow: {
    card: 'shadow-sm',
    modal: 'shadow-xl',
  },
}

// Helper function to combine Tailwind classes
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
