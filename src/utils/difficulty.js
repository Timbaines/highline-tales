export const getDifficultyColor = (difficulty = '') => {
  const d = String(difficulty).toLowerCase().trim();
  switch (d) {
    case 'easy':
      return '#3DCF8E';
    case 'moderate':
      return '#FFBF00';
    case 'hard':
      return '#F75F5F';
    default:
      return '#3DCF8E';
  }
};
