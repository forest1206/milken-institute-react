import React, { useState, useRef } from "react";
import Select from "react-select";
// import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function FilterDropdown({
  value,
  options,
  title,
  isDateSelect,
  onChange,
}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectRef = useRef(null);

  function handleClick(e) {
    setMenuIsOpen(!menuIsOpen);
    if (!selectRef) {
      return menuIsOpen ? selectRef.focus() : selectRef.blur();
    }
  }

  function handleChange(options) {
    onChange(options);
    setMenuIsOpen(false);
    if (!selectRef) {
      selectRef.blur();
    }
  }

  return (
    <div>
      <div
        className="d-flex justify-content-between"
        onClick={() => handleClick()}
      >
        {title}
        {menuIsOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <Select
        ref={selectRef}
        // defaultValue={value}
        value={value}
        onChange={(options) => handleChange(options)}
        options={options}
        menuIsOpen={menuIsOpen}
        isMulti={isDateSelect ? false : true}
        components={{ DropdownIndicator: () => null }}
      />
    </div>
  );
}
