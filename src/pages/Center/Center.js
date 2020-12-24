import React, { useState, useEffect } from 'react';
import CenterCard from '../../components/Centers/CenterCard';
import CentersList from '../../components/Centers/CentersList';
import _ from 'lodash';
import { contentAPI } from '../../api';

function Center() {
    const [centers, setCenters] = useState([]);
    const [selectedIdx, setSelectedIdx] = useState(0);

    useEffect(() => {
        getCentersData();
    }, []);

    const handleMouseEnter = _.debounce((id) => {
        setSelectedIdx(id);
    }, 200);

    const getCentersData = async () => {
        let res = await contentAPI.fetchCentersData();
        if (res.status === 200) {
            const array = res.data.map((center, index) => ({
                id: index,
                ...center
            }));
            setCenters(array);
        } else {
            console.log('error', res);
        }
    };

    return (
        <div id="center">
            <div className="container">
                <h2 className="d-block text-center my-4">Our centers</h2>
                <div className="row">
                    <div className="col-md-5">
                        {centers && (
                            <CentersList
                                centers={centers}
                                selectedIdx={selectedIdx}
                                onMouseEnter={handleMouseEnter}
                            />
                        )}
                    </div>
                    <div className="col-md-7">
                        {centers && centers.length > 0 && (
                            <CenterCard center={centers[selectedIdx]} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Center;
