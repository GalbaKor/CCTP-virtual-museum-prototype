import * as React from "react";

const MuseumMapTest = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1347 749"
    {...props}
    id="museumMap"
    aria-describedby="Museum map graphic"
    role="group"
  >
    <title id="map-title">Museum map</title>
    <desc id="map-description">
      An svg map showing the locations of exhibits within the museum. Below this
      element there is an accessible list of exhibits you can visit online.
    </desc>

    <g role="list">
      <g role="listitem">
        <a
          href="/exhibition-1"
          aria-labelledby="exhibition1-title exhibition1-description"
        >
          <path
            aria-describedby="Exhibit 1"
            id="exhibit1"
            role="button"
            style={{
              fill: "#fff",
            }}
            d="M.5.5h498.9v748H.5z"
          >
            <title id="exhibition1-title">Exhibition 1</title>
            <desc id="exhibition1-description">
              Click here to enter the Space Themed exhibit
            </desc>
          </path>
        </a>
      </g>
    </g>

    <path d="M498.9 1v747H1V1h497.9m1-1H0v749h499.9V0Z" />
    <g role="listitem">
      <a
        href="/exhibition-2"
        aria-labelledby="exhibition2-title exhibition2-description"
      >
        <path
          style={{
            fill: "#fff",
          }}
          d="M509.49.5h837.01v281.79H509.49z"
        />
        <title id="exhibition2-title">Exhibition 2</title>
        <desc id="exhibition2-description">
          Click here to enter the 2nd exhibit
        </desc>
      </a>
    </g>

    <path d="M1346 1v280.79H510V1h836m1-1H509v282.79h838V0Z" />

    <g role="listitem">
      <a
        href="/exhibition-3"
        aria-labelledby="exhibition3-title exhibition3-description"
      >
        <path
          style={{
            fill: "#fff",
          }}
          d="M509.49 296.02h413.46V748.5H509.49z"
        />
        <title id="exhibition3-title">Exhibition 3</title>
        <desc id="exhibition3-description">
          Click here to enter the 3re exhibit
        </desc>
      </a>
    </g>

    <path d="M922.45 296.52V748H510V296.52h412.45m1-1H509V749h414.45V295.52Z" />

    <g role="listitem">
      <a
        href="/exhibition-4"
        aria-labelledby="exhibition4-title exhibition4-description"
      >
        <path
          style={{
            fill: "#fff",
          }}
          d="M933.04 296.02h413.46V748.5H933.04z"
        />
        <title id="exhibition4-title">Exhibition 4</title>
        <desc id="exhibition4-description">
          Click here to enter the 4th exhibit
        </desc>
      </a>
    </g>

    <path d="M1346 296.52V748H933.54V296.52H1346m1-1H932.54V749H1347V295.52Z" />
  </svg>
);

export default MuseumMapTest;
