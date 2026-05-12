// Theme configuration
export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      900: '#1e3a8a'
    },
    purple: {
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed'
    },
    pink: {
      400: '#f472b6',
      500: '#ec4899'
    },
    gray: {
      300: '#d1d5db',
      400: '#9ca3af',
      900: '#111827'
    }
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)',
    text: 'linear-gradient(135deg, #a78bfa, #f472b6, #a78bfa)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  }
};
