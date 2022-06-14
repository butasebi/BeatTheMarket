import { chakraComponents, Select } from 'chakra-react-select';

const ValueContainer = ({ children, ...props }) => {
  let [values, input] = children;

  // Count the number of options (the data may be split into options groups)
  let optionsCount = 0;
  for (const option of input.props.options) {
    if (option.options) {
      optionsCount += option.options.length;
    } else {
      optionsCount += 1;
    }
  }

  if (Array.isArray(values)) {
    const plural = values.length === 1 ? '' : 's';
    if (values.length < optionsCount) {
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
      closeMenuOnSelect={false}
      selectedOptionStyle='check'
      hideSelectedOptions={false}
      components={{ ValueContainer }}
      {...props}
    />
  );
}

export default OptionsCountMultiSelect;