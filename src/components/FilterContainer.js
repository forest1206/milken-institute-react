import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
// import FilterWrapper from "./FilterWrapper";
import FilterDropdown from "./FilterDropdown";

export default function FilterContainer(props) {
  const [open, setOpen] = useState(false);

  const {
    typeOptions,
    centerOptions,
    topicOptions,
    dateOptions,
    types,
    centers,
    topics,
    dateRange,
    onApplyFilter,
    onResetFilter,
    onContentTypeChange,
    onCenterChange,
    onTopicChange,
    onDateRangeChange,
  } = props;

  console.log("FilterContainer", types, centers);
  function renderFilters() {
    return (
      <div>
        <div className="row my-4">
          <div className=" col-sm-6 col-lg-3">
            <FilterDropdown
              value={types}
              title={"CONTENT TYPES"}
              options={typeOptions}
              onChange={onContentTypeChange}
            />
          </div>
          <div className=" col-sm-6 col-lg-3">
            <FilterDropdown
              value={centers}
              title={"CENTERS AND PROGRAMS"}
              options={centerOptions}
              onChange={onCenterChange}
            />
          </div>
          <div className=" col-sm-6 col-lg-3">
            <FilterDropdown
              value={topics}
              title={"Topics"}
              options={topicOptions}
              onChange={onTopicChange}
            />
          </div>
          <div className=" col-sm-6 col-lg-3">
            <FilterDropdown
              isDateSelect
              value={dateRange}
              title={"REFINE BY DATE"}
              options={dateOptions}
              onChange={onDateRangeChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className=" d-flex justify-content-end">
              <button className="btn btn-warning mr-3" onClick={onApplyFilter}>
                APPLY FILTERS
              </button>
              <button className="btn btn-danger" onClick={onResetFilter}>
                Reset All Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-4">
      <div className="d-flex justify-content-end">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-secondary "
          aria-controls="filter-collapse"
          aria-expanded={open}
        >
          {open ? "HIDE ADVANCED FILTERS" : "SHOW ADVANCED FILTERS"}
        </button>
      </div>

      <Collapse in={open}>
        <div id="filter-collapse">{renderFilters()}</div>
      </Collapse>
    </div>
  );
}
