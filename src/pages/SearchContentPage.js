import React, { useState } from "react";
import FilterContainer from "../components/FilterContainer";
import ToolbarContainer from "../components/ToolbarContainer";
import MainContent from "../components/MainContent";
import {
  typeOptions,
  centerOptions,
  dateOptions,
  topicOptions,
  contents,
  sortOptions,
  perpageOptions,
} from "./../api/mockup";

function SearchContentPage() {
  const [grid, setGrid] = useState(true);

  const [sortby, setSortBy] = useState(sortOptions[0]);
  const [perpage, setPerpage] = useState(perpageOptions[0]);

  const [types, setTypes] = useState([typeOptions[0]]);
  const [centers, setCenters] = useState([centerOptions[0]]);
  const [topics, setTopics] = useState([topicOptions[0]]);
  const [daterange, setDaterange] = useState(dateOptions[0]);

  function handleViewChange(mode) {
    console.log("mode", mode);
    if (mode === "grid") {
      setGrid(true);
    } else {
      setGrid(false);
    }
  }

  const handleSortbyChange = (value) => {
    setSortBy(value);
  };

  const handlePerpageChange = (value) => {
    setPerpage(value);
  };

  const handleApplyFilter = () => {
    console.log("types", types);
    console.log("centers", centers);
    console.log("topics", topics);
    console.log("daterange", daterange);
    console.log("sortby", sortby);
    console.log("perpage", perpage);
  };

  const handleResetFilter = () => {
    setTypes([typeOptions[0]]);
    setCenters([centerOptions[0]]);
    setTopics([topicOptions[0]]);
    setDaterange(dateOptions[0]);
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
    console.log("range", range);
    setDaterange(range);
  };

  return (
    <div>
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
        dateOptions={dateOptions}
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
  );
}

export default SearchContentPage;
