// Global Color Configuration
// Change colors here and they'll update everywhere in the app

export const colors = {
  palette: {
    deep: '#09637E',
    primary: '#088395',
    muted: '#7AB2B2',
    pale: '#EBF4F6',
  },

  // Primary Colors
  primary: {
    dark: 'bg-[#09637E]',
    light: 'bg-[#EBF4F6]',
    text: 'text-[#09637E]',
    border: 'border-[#7AB2B2]',
    hover: 'hover:bg-[#088395]',
  },

  // Accent Colors
  accent: {
    main: 'bg-[#088395]',
    hover: 'hover:bg-[#09637E]',
    text: 'text-[#088395]',
    light: 'bg-[#7AB2B2]/25',
    lightText: 'text-[#EBF4F6]',
    lightBorder: 'text-[#7AB2B2]',
  },

  // Header
  header: {
    bg: 'bg-[#09637E]',
    text: 'text-white',
    activeLink: 'text-[#EBF4F6]',
    hoverLink: 'hover:text-[#7AB2B2]',
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
    primary: 'border-[#7AB2B2]',
  },

  // Background Colors
  bg: {
    page: 'bg-[#EBF4F6]',
    card: 'bg-white',
    section: 'bg-white',
    sectionAlt: 'bg-[#EBF4F6]',
    modal: 'bg-black/50',
  },

  // Form Colors
  form: {
    inputBg: 'bg-white',
    inputBorder: 'border-[#7AB2B2]',
    inputFocus: 'focus:border-[#088395] focus:ring-1 focus:ring-[#088395]',
    labelText: 'text-[#09637E]',
    buttonPrimary: 'bg-[#088395] hover:bg-[#09637E]',
  },

  // Button Colors
  button: {
    primary: 'bg-[#088395] text-white hover:bg-[#09637E]',
    secondary: 'border-[#7AB2B2] bg-white text-[#09637E] hover:bg-[#EBF4F6]',
    dark: 'bg-[#09637E] text-white hover:bg-[#088395]',
  },

  // Modal Colors
  modal: {
    bg: 'bg-white',
    headerBg: 'bg-[#EBF4F6]',
    headerText: 'text-[#09637E]',
    headerBorder: 'border-[#7AB2B2]',
    closeBtn: 'text-[#088395] hover:text-[#09637E]',
  },

  // Category/Tags
  category: {
    activeBg: 'bg-[#7AB2B2]/30',
    activeText: 'text-[#09637E]',
    inactiveBg: 'hover:bg-[#EBF4F6]',
    inactiveText: 'text-slate-600',
  },

  // Gradients
  gradient: {
    hero: 'bg-[linear-gradient(160deg,#09637E,#088395)]',
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
