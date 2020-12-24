import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { FaThLarge, FaList } from 'react-icons/fa';

const sortOptions = ['Relavance', 'Date', 'Name', 'ContentType'];
const perpageOptions = [20, 40, 60];

export default function ToolbarContainer({
    sortby,
    perpage,
    grid,
    onSortbyChange,
    onPerpageChange,
    onViewChange
}) {
    return (
        <div id="toolbar" className="d-flex justify-content-end my-4">
            <div className="d-inline mx-3">
                <label htmlFor="sortby">Sort by:</label>
                <select
                    name="sortby"
                    value={sortby}
                    onChange={(e) => onSortbyChange(e.target.value)}>
                    {sortOptions.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div className="d-inline mx-3">
                <label htmlFor="perpage">Results per page:</label>
                <select
                    name="perpage"
                    value={perpage}
                    onChange={(e) => onPerpageChange(e.target.value)}>
                    {perpageOptions.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div className="d-flex mx-3">
                <div
                    className={classnames(
                        'view-btn',
                        ' justify-content-center',
                        'align-items-center',
                        { disabled: !grid }
                    )}
                    onClick={() => onViewChange('grid')}>
                    <FaThLarge />
                </div>
                <div
                    className={classnames(
                        'view-btn',
                        ' justify-content-center',
                        'align-items-center',
                        { disabled: grid }
                    )}
                    onClick={() => onViewChange('list')}>
                    <FaList />
                </div>
            </div>
        </div>
    );
}

ToolbarContainer.propTypes = {
    grid: PropTypes.any,
    onPerpageChange: PropTypes.func,
    onSortbyChange: PropTypes.func,
    onViewChange: PropTypes.func,
    perpage: PropTypes.any,
    sortby: PropTypes.any
};
