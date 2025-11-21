const statusConfig = {
  available: {
    dot: 'bg-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/30',
    border: 'border-emerald-100 dark:border-emerald-800',
    text: 'text-emerald-700 dark:text-emerald-300',
    pulse: 'bg-emerald-400'
  },
  unavailable: {
    dot: 'bg-red-500',
    bg: 'bg-red-50 dark:bg-red-900/30',
    border: 'border-red-100 dark:border-red-800',
    text: 'text-red-700 dark:text-red-300',
    pulse: 'hidden' // No pulsa si no estás disponible
  },
  preorder: {
    dot: 'bg-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/30',
    border: 'border-amber-100 dark:border-amber-800',
    text: 'text-amber-700 dark:text-amber-300',
    pulse: 'bg-amber-400'
  }
};

export default statusConfig;
