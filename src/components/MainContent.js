import React from "react";
import ContentCard from "./Content/ContentCard";
import ContentRow from "./Content/ContentRow";

export default function MainContent(props) {
  function renderCardView(contents) {
    return (
      <div className="row">
        {contents.map((content, index) => (
          <div key={index} className="col-lg-3 col-sm-6 col-xs-12 mb-3">
            <ContentCard
              id={content.uuid}
              image={content.url}
              type={content.type}
              title={content.label}
              text={content.search_api_excerpt}
            />
          </div>
        ))}
      </div>
    );
  }

  function renderListView(contents) {
    return (
      <div className="d-flex flex-column">
        {contents.map((content, index) => (
          <div key={index}>
            <ContentRow
              id={content.uuid}
              image={content.url}
              type={content.type}
              title={content.label}
              text={content.search_api_excerpt}
            />
          </div>
        ))}
      </div>
    );
  }

  if (props.contents && props.contents.length > 0) {
    return (
      <div>
        {props.isGrid
          ? renderCardView(props.contents)
          : renderListView(props.contents)}
      </div>
    );
  } else {
    return <div>Sorry, can't find any contents</div>;
  }
}
