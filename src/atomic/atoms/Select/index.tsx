import React, { useState } from "react";
import { styled } from "config/theme";
import { media } from "config/mixins";
import ReactSelect from "react-select";
import { ReactComponent as Arrow } from "icons/arrow_drop_down.svg";

export interface SelectProps {
  className?: string;
  defaultValue?: any;
  onChange(data: any): void;
  options: { value: any; label: string }[];
  name?: string;
  placeholder?: string;
}

const SelectComponent = ({
  className,
  options,
  defaultValue,
  name,
  placeholder,
  onChange,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <ReactSelect
      defaultValue={options?.find((option) => option.value === defaultValue)}
      isClearable
      className={`${className} select`}
      classNamePrefix="select-inner"
      value={selectedOption}
      onChange={(data) => {
        onChange(data?.value);
        setSelectedOption(data);
      }}
      options={options}
      name={name}
      autosize
      placeholder={placeholder}
      components={{ DropdownIndicator: () => <Arrow /> }}
    />
  );
};

export const Select = styled(SelectComponent)`
  width: 100px;
  .select-inner {
    &__control {
      height: 45px;
      border: 1px solid ${(props) => props.theme.colors.mercury};
    }
  }
  .select-inner__indicator-separator {
    display: none;
  }
  .select-inner__indicators {
    margin-right: 12px;
  }

  ${media.tablet`
    width: 150px;
  `}
`;
