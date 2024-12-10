import Icon from 'react-native-vector-icons/FontAwesome'; // Escolha uma fonte de ícones que preferir

const DifficultyIcon = ({ level, trancado }) => {
  const getIconByLevel = (level) => {
    switch (level.toLowerCase()) {
      case 'facil':
        return 'smile-o';
      case 'medio':
        return 'meh-o';
      case 'dificil':
        return 'frown-o';
      default:
        return 'question-circle-o';
    }
  };

  const getColorByLevel = (level) => {
    switch (level.toLowerCase()) {
      case 'facil':
        return 'green';
      case 'medio':
        return 'orange';
      case 'dificil':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Icon
      name={'smile-o'}
      size={50}
      color={trancado ? '#ddd' : getColorByLevel(level)}
    />
  );
};

export default DifficultyIcon;
