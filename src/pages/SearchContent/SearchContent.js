import React, { useState, useEffect } from 'react';
import FilterContainer from '../../components/Contents/FilterContainer';
import ToolbarContainer from '../../components/Contents/ToolbarContainer';
import MainContent from '../../components/Contents/MainContent';
import { contentAPI, mockupData } from '../../api';

function SearchContent() {
    const [grid, setGrid] = useState(true);

    const [sortby, setSortBy] = useState(mockupData.sortOptions[0]);
    const [perpage, setPerpage] = useState(mockupData.perpageOptions[0]);
    const [daterange, setDaterange] = useState(mockupData.dateOptions[0]);

    const [types, setTypes] = useState([]);
    const [centers, setCenters] = useState([]);
    const [topics, setTopics] = useState([]);

    const [typeOptions, setTypeOptions] = useState([]);
    const [centerOptions, setCenterOptions] = useState([]);
    const [topicOptions, setTopicOptions] = useState([]);

    const [contents, setContents] = useState([]);

    useEffect(() => {
        // default search params
        const params = {
            _format: 'json',
            keywords: 'health'
        };

        getContentTypes();
        getTopics();
        getCenters();
        getFilteredContents(params);
    }, []);

    useEffect(() => {
        setTypes([]);
        setTopics([]);
        setCenters([]);
    }, [typeOptions, topicOptions, centerOptions]);

    const getFilteredContents = async (params) => {
        let res = await contentAPI.fetchContents(params);
        if (res.status === 200) {
            // console.log('success', res);
            setContents(res.data);
        } else {
            console.log('error', res);
        }
    };

    const getContentTypes = async () => {
        let res = await contentAPI.fetchTypes();
        if (res.status === 200) {
            setTypeOptions(makeOptions(res.data));
        } else {
            console.log('error', res);
        }
    };

    const getTopics = async () => {
        let res = await contentAPI.fetchTopics();
        if (res.status === 200) {
            setTopicOptions(makeOptions(res.data));
        } else {
            console.log('error', res);
        }
    };

    const getCenters = async () => {
        let res = await contentAPI.fetchCenters();
        if (res.status === 200) {
            setCenterOptions(makeOptions(res.data));
        } else {
            console.log('error', res);
        }
    };

    const makeOptions = (options) => {
        return options.map((option) => ({ label: option, value: option }));
    };

    const handleViewChange = (mode) => {
        if (mode === 'grid') {
            setGrid(true);
        } else {
            setGrid(false);
        }
    };

    const handleSortbyChange = (value) => {
        setSortBy(value);
    };

    const handlePerpageChange = (value) => {
        setPerpage(value);
    };

    const handleApplyFilter = () => {
        let typesArray = types.map((type) => type.value);
        let topicsArray = topics.map((topic) => topic.value);
        let centersArray = centers.map((center) => center.value);

        let params = {
            types: typesArray,
            topics: topicsArray,
            centers: centersArray,
            sortby,
            perpage
        };

        console.log('params object', params);

        getFilteredContents(params);
    };

    const handleResetFilter = () => {
        setTypes([]);
        setCenters([]);
        setTopics([]);
        setDaterange(mockupData.dateOptions[0]);
    };

    const handleContentTypeChange = (types) => {
        setTypes(types);
    };

    const handleCenterChange = (centers) => {
        setCenters(centers);
    };

    const handleTopicChange = (topics) => {
        setTopics(topics);
    };

    const handleDateRangeChange = (range) => {
        console.log('range', range);
        setDaterange(range);
    };

    return (
        <div id="search-content">
            <div className="container">
                <ToolbarContainer
                    sortby={sortby}
                    perpage={perpage}
                    onSortbyChange={handleSortbyChange}
                    onPerpageChange={handlePerpageChange}
                    grid={grid}
                    onViewChange={handleViewChange}
                />
                <FilterContainer
                    typeOptions={typeOptions}
                    centerOptions={centerOptions}
                    topicOptions={topicOptions}
                    dateOptions={mockupData.dateOptions}
                    types={types}
                    centers={centers}
                    topics={topics}
                    dateRange={daterange}
                    onApplyFilter={handleApplyFilter}
                    onResetFilter={handleResetFilter}
                    onContentTypeChange={handleContentTypeChange}
                    onCenterChange={handleCenterChange}
                    onTopicChange={handleTopicChange}
                    onDateRangeChange={handleDateRangeChange}
                />
                <MainContent isGrid={grid} contents={contents} />
            </div>
        </div>
    );
}

export default SearchContent;
