import PropTypes from 'prop-types';
import React from 'react';
import ContentCard from './ContentCard';
import ContentRow from './ContentRow';

export default function MainContent(props) {
    function renderCardView(contents) {
        return (
            <div className="row">
                {contents.map((content, index) => (
                    <div key={index} className="col-lg-3 col-sm-6 col-xs-12 mb-5 d-flex">
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
            <div className="d-flex">
                {props.isGrid ? renderCardView(props.contents) : renderListView(props.contents)}
            </div>
        );
    } else {
        return <div>Sorry, we can't find any contents</div>;
    }
}

MainContent.propTypes = {
    contents: PropTypes.array,
    isGrid: PropTypes.bool
};
