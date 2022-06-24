import React from "react";

const QuickExplore = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="all-tab"
            data-toggle="tab"
            href="#all"
            role="tab"
            aria-controls="all"
            aria-selected="true"
          >
            All
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="art-tab"
            data-toggle="tab"
            href="#art"
            role="tab"
            aria-controls="art"
            aria-selected="false"
          >
            Art
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="photo-tab"
            data-toggle="tab"
            href="#photo"
            role="tab"
            aria-controls="photo"
            aria-selected="false"
          >
            Photography
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="games-tab"
            data-toggle="tab"
            href="#games"
            role="tab"
            aria-controls="games"
            aria-selected="false"
          >
            Games
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="metaverses-tab"
            data-toggle="tab"
            href="#metaverses"
            role="tab"
            aria-controls="metaverses"
            aria-selected="false"
          >
            Metaverses
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="music-tab"
            data-toggle="tab"
            href="#music"
            role="tab"
            aria-controls="music"
            aria-selected="false"
          >
            Music
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="memes-tab"
            data-toggle="tab"
            href="#memes"
            role="tab"
            aria-controls="memes"
            aria-selected="false"
          >
            Memes
          </a>
        </li>
      </ul>
      <button className="btn-primary-outline-big mt-0 d-mobile-none quick-explore-filter-buton">
        View All
      </button>
    </>
  );
};

export default QuickExplore;
