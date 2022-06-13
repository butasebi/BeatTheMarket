import { Box } from '@chakra-ui/react';

function IconLabel(props) {
  const { icon, label } = props;

  return (
    <Box display='flex' gap='2' alignItems='center'>
      {icon} {label}
    </Box>
  );
}

export default IconLabel;