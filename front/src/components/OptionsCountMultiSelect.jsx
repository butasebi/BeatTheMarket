import { chakraComponents, Select } from 'chakra-react-select';

const ValueContainer = ({ children, ...props }) => {
  let [values, input] = children;
  if (Array.isArray(values)) {
    const plural = values.length === 1 ? '' : 's';
    if (values.length < input.props.options.length) {
      values = `${values.length} option${plural} selected`;
    } else {
      values = 'All options selected';
    }
  }

  return (
    <chakraComponents.ValueContainer {...props}>
      {values}
      {input}
    </chakraComponents.ValueContainer>
  );
};

function OptionsCountMultiSelect(props) {
  return (
    <Select
      isMulti
      placeholder='Select some dataset categories...'
      closeMenuOnSelect={false}
      selectedOptionStyle='check'
      hideSelectedOptions={false}
      components={{ ValueContainer }}
      {...props}
    />
  );
}

export default OptionsCountMultiSelect;