import { Box } from '@chakra-ui/react';

function IconLabel(props) {
  const { icon, label, ...otherProps } = props;

  return (
    <Box display='inline-flex' gap='2' alignItems='center' {...otherProps}>
      {icon} {label}
    </Box>
  );
}

export default IconLabel;