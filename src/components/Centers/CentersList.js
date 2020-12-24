import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

export default function CentersList({ centers, selectedIdx, onMouseEnter }) {
    console.log('centers', centers);
    console.log(' selectedIdx', selectedIdx);
    return (
        <div id="centers-list" className="centers-list-container td-flex flex-column p-2">
            <h4>CENTERS AND PRACTICE AREAS</h4>
            {centers.map((center, index) => (
                <div
                    key={index}
                    className={classnames('center-list-item', 'd-flex', 'p-4', {
                        selected: selectedIdx === center.id
                    })}
                    onMouseEnter={() => onMouseEnter(center.id)}>
                    {center.name}
                </div>
            ))}
        </div>
    );
}

CentersList.propTypes = {
    centers: PropTypes.array,
    onMouseEnter: PropTypes.func,
    selectedIdx: PropTypes.any
};
