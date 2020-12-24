/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import MultiSelect from './MultiSelect';

const FilterMultiSelect = ({ value, options, title, onChange }) => {
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
            <div className="d-flex justify-content-between" onClick={handleClick}>
                {title}
                {menuIsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <MultiSelect
                ref={selectRef}
                // defaultValue={value}
                value={value}
                onChange={(options) => handleChange(options)}
                options={options}
                menuIsOpen={menuIsOpen}
            />
        </div>
    );
};

FilterMultiSelect.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.array,
    title: PropTypes.string,
    value: PropTypes.string
};

export default FilterMultiSelect;
