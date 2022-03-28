import * as React from "react";
import { Tooltip } from "@chakra-ui/react";

const MuseumMap = (props) => (
  <svg
    id="museumMap"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 998.92 869.78"
    role="group"
    {...props}
  >
    <title id="map-title">Museum map</title>
    <desc id="map-description">
      An svg map showing the locations of exhibits within the museum. Below this
      element there is an accessible list of exhibits you can visit online.
    </desc>

    {/* Entrance and Shop - no interaction */}
    <path
      className="no-svg-click"
      style={{
        fill: "#bbb",
      }}
      d="M998.92 869.78V692.99h-38.54v-15.28h38.54V376.5H855.39v301.21h41.2v15.28H725.16v105.85h130.23v70.94h143.53z"
    />
    <text
      transform="matrix(1.06 0 0 1 857.87 768.75)"
      style={{
        fontFamily: "MyriadPro-Regular,Myriad Pro",
        fontSize: 24,
      }}
    >
      Entrance
    </text>
    <text
      transform="matrix(1.06 0 0 1 903.99 554.5)"
      style={{
        fontFamily: "MyriadPro-Regular,Myriad Pro",
        fontSize: 24,
      }}
    >
      Shop
    </text>

    {/* Main Hall - no interaction */}
    <path
      className="no-svg-click"
      style={{
        fill: "#bbb",
      }}
      d="M524.49 376.5v300.12h305.65V376.5l-305.65 5.46"
    />
    <text
      transform="matrix(1.06 0 0 1 630.83 541.63)"
      style={{
        fontFamily: "MyriadPro-Regular,Myriad Pro",
        fontSize: 24,
      }}
    >
      Main Hall
    </text>

    <g role="list" className="interactable-path-list">
      {/* Exhibition 1 - interactable */}
      <Tooltip hasArrow labe="Exhibit 1 - Space Theme">
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
              d="M372.99 485.64v315.39h332.23V694.08H495.25V485.64H372.99z"
            />
            <text
              transform="matrix(1.0 0 0 1 425 735)"
              style={{
                fontFamily: "MyriadPro-Regular,Myriad Pro",
                fontSize: 24,
              }}
            >
              Space, the final frontier
            </text>
            <text
              transform="matrix(1.0 0 0 1 425 780)"
              style={{
                fontFamily: "MyriadPro-Regular,Myriad Pro",
                fontSize: 24,
              }}
            >
              (Exhibition 1)
            </text>

            <title id="exhibition1-title">Exhibition 1</title>
            <desc id="exhibition1-description">
              Space themed exhibit with rockets, boosters, science fiction and
              more.
            </desc>
          </a>
        </g>
      </Tooltip>

      {/* Exhibition 2 - interactable */}
      <g role="listitem">
        <a
          href="/exhibition-2"
          aria-labelledby="exhibition2-title exhibition2-description"
        >
          <path
            style={{
              fill: "#fff",
            }}
            d="M0 631.51h352.61v169.52H0z"
          />
          <text
            transform="matrix(1.06 0 0 1 84.38 734.36)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 36,
            }}
          >
            Exhibition 2
          </text>
          <title id="exhibition2-title">Exhibition 2</title>
          <desc id="exhibition2-description">
            Click here to enter the Space Themed exhibit
          </desc>
        </a>
      </g>

      {/* Exhibition 3 - interactable */}
      <g role="listitem">
        <a
          href="/exhibition-3"
          aria-labelledby="exhibition3-title exhibition3-description"
        >
          <path
            style={{
              fill: "#fff",
            }}
            d="M0 484.54v139.69h352.61V484.54H252.05V317.57h18.61V470.9h81.95V127.68h-80.62v144.06h-23.92V110.59h104.54V0H0v113.5h105.87v371.04H0z"
          />
          <text
            transform="matrix(1.06 0 0 1 105.55 566.11)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 24,
            }}
          >
            Exhibition 3a
          </text>
          <text
            transform="matrix(1.06 0 0 1 107.7 70.03)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 24,
            }}
          >
            Exhibition 3b
          </text>
          <text
            transform="matrix(0 -1.06 1 0 323.43 362.32)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 24,
            }}
          >
            Exhibition 3c
          </text>
          <text
            transform="matrix(0 -1.06 1 0 192.76 391.31)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 36,
            }}
          >
            Exhibition 3
          </text>
          <title id="exhibition3-title">Exhibition 3</title>
          <desc id="exhibition3-description">
            Click here to enter the Space Themed exhibit
          </desc>
        </a>
      </g>

      {/* Exhibition 4 - interactable */}
      <g role="listitem">
        <a
          href="/exhibition-4"
          aria-labelledby="exhibition4-title exhibition4-description"
        >
          {" "}
          <path
            style={{
              fill: "#fff",
            }}
            d="M372.99 5.46h332.23V113.5H372.99z"
          />
          <text
            transform="matrix(1.06 0 0 1 456.05 70.03)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 36,
            }}
          >
            Exhibition 4
          </text>
          <title id="exhibition4-title">Exhibition 4</title>
          <desc id="exhibition4-description">
            Click here to enter the Space Themed exhibit
          </desc>
        </a>
      </g>

      {/* Exhibition 5 - interactable */}
      <g role="listitem">
        <a
          href="/exhibition-5"
          aria-labelledby="exhibition5-title exhibition5-description"
        >
          {" "}
          <path
            style={{
              fill: "#fff",
            }}
            d="M372.99 127.68h127.58v341.58H372.99z"
          />
          <text
            transform="matrix(0 -1.06 1 0 450.48 388.41)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 36,
            }}
          >
            Exhibition 5
          </text>
          <title id="exhibition5-title">Exhibition 5</title>
          <desc id="exhibition5-description">
            Click here to enter the Space Themed exhibit
          </desc>
        </a>
      </g>

      {/* Exhibition 6 - interactable */}
      <g role="listitem">
        <a
          href="/exhibition-6"
          aria-labelledby="exhibition6-title exhibition6-description"
        >
          {" "}
          <path
            style={{
              fill: "#fff",
            }}
            d="M524.49 127.68v234.64h305.65V245H705.22V127.68H524.49z"
          />
          <text
            transform="matrix(1.06 0 0 1 580.28 303.69)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 36,
            }}
          >
            Exhibition 6
          </text>
          <title id="exhibition6-title">Exhibition 6</title>
          <desc id="exhibition6-description">
            Click here to enter the Space Themed exhibit
          </desc>
        </a>
      </g>

      {/* Exhibition 7 - interactable */}
      <g role="listitem">
        <a
          href="/exhibition-7"
          aria-labelledby="exhibition7-title exhibition7-description"
        >
          {" "}
          <path
            style={{
              fill: "#fff",
            }}
            d="M725.16 9.82h273.76v349.22h-142.2V229.18H725.16V9.82z"
          />
          <text
            transform="matrix(1.06 0 0 1 775.23 151.44)"
            style={{
              fontFamily: "MyriadPro-Regular,Myriad Pro",
              fontSize: 36,
            }}
          >
            Exhibition 7
          </text>
          <title id="exhibition7-title">Exhibition 7</title>
          <desc id="exhibition7-description">
            Click here to enter the Space Themed exhibit
          </desc>
        </a>
      </g>
    </g>
  </svg>
);

export default MuseumMap;
