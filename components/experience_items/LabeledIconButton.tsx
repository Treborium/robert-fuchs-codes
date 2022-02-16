import { As, Box, Icon, Link, Text } from '@chakra-ui/react';
import { ExperienceItemsStyles } from './styles';

export interface LabeledIconButtonProps {
  label: string;
  icon: As<JSX.Element>;
  onOpen: () => void;
}

export const LabeledIconButton: React.FC<LabeledIconButtonProps> = (props) => {
  const { label, icon, onOpen } = props;

  return (
    <Link onClick={onOpen}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Icon as={icon} {...ExperienceItemsStyles.icon} />
        <Text {...ExperienceItemsStyles.label}>{label}</Text>
      </Box>
    </Link>
  );
};
