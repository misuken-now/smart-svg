import React from "react";
import classNames from "./demo.stories.module.scss";

exports.default = {};

const defaultFragment = (
  <>
    <span className={classNames.plane} /> &nbsp;
    <span className={classNames.planeFill} /> &nbsp;
    <span className={classNames.planeGradation} />
  </>
);
const backgroundFragment = (
  <>
    <span className={classNames.circle} />
    &nbsp;
    <span className={classNames.circleFill} />
    &nbsp;
    <span className={classNames.circleGradation} />
  </>
);
const gradationFragment = (
  <>
    <span className={classNames.square} />
    &nbsp;
    <span className={classNames.squareFill} />
    &nbsp;
    <span className={classNames.squareGradation} />
  </>
);
const borderFragment = (
  <>
    <span className={classNames.circleBorder} />
    &nbsp;
    <span className={classNames.circleFillBorder} />
    &nbsp;
    <span className={classNames.circleGradationBorder} />
    <br />
    <span className={classNames.squareBorder} />
    &nbsp;
    <span className={classNames.squareFillBorder} />
    &nbsp;
    <span className={classNames.squareGradationBorder} />
  </>
);
const pseudoFragment = (
  <>
    <span className={classNames.pseudo}>← ::before is fill & ::after is gradation →</span>
  </>
);
exports.All = {
  render: () => (
    <>
      <section>
        <h1>Plane & Fill & Gradation</h1>
        {defaultFragment}
      </section>
      <section>
        <h1>+ Background</h1>
        {backgroundFragment}
      </section>
      <section>
        <h1>+ Gradation</h1>
        {gradationFragment}
      </section>
      <section>
        <h1>+ Border</h1>
        {borderFragment}
      </section>
      <section>
        <h1>Pseudo Element</h1>
        {pseudoFragment}
      </section>
    </>
  ),
};

const SampleCode = (props) => {
  return <pre {...props} style={{ backgroundColor: "#eee", padding: 16 }} />;
};

exports.Default = {
  storyName: "Plane & Fill & Gradation",
  render: () => (
    <>
      {defaultFragment}
      <SampleCode>
        {`
@use "smart-svg";

// Svg gradation
$fill-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(205, 103, 153) 100%);

.plane {
    @include smart-svg.show("https://cdn.svgporn.com/logos/svg.svg", 56px);
}

.plane-fill {
    @include smart-svg.show("https://cdn.svgporn.com/logos/react.svg", 56px, #000);
}

.plane-gradation {
    @include smart-svg.show("https://cdn.svgporn.com/logos/sass.svg", 56px, $fill-image: $fill-image);
}
    `.trim()}
      </SampleCode>
    </>
  ),
};

exports.Background = {
  render: () => (
    <>
      {backgroundFragment}
      <SampleCode>
        {`
@use "smart-svg";

// Svg gradation
$fill-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(205, 103, 153) 100%);

.circle {
    @include smart-svg.show-circle("https://cdn.svgporn.com/logos/svg.svg", 56px, #ddd);
}

.circle-fill {
    @include smart-svg.show-circle("https://cdn.svgporn.com/logos/react.svg", 56px, #ddd, #000);
}

.circle-gradation {
    @include smart-svg.show-circle("https://cdn.svgporn.com/logos/sass.svg", 56px, #ddd, $fill-image: $fill-image);
}
    `.trim()}
      </SampleCode>
    </>
  ),
};

exports.Gradation = {
  render: () => (
    <>
      {gradationFragment}
      <SampleCode>
        {`
@use "smart-svg";

// Shape background gradation
$background-image: linear-gradient(180deg, #eee 0%, #888 100%);
// Svg gradation
$fill-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(205, 103, 153) 100%);

.square {
    @include smart-svg.show-square("https://cdn.svgporn.com/logos/svg.svg", 56px, $background-image: $background-image);
}

.square-fill {
    @include smart-svg.show-square("https://cdn.svgporn.com/logos/react.svg", 56px, $background-image: $background-image, $fill-color: #000);
}

.square-gradation {
    @include smart-svg.show-square("https://cdn.svgporn.com/logos/sass.svg", 56px, $background-image: $background-image, $fill-image: $fill-image);
}
    `.trim()}
      </SampleCode>
    </>
  ),
};

exports.Border = {
  render: () => (
    <>
      {borderFragment}
      <SampleCode>
        {`
@use "smart-svg";

// Shape background gradation
$background-image: linear-gradient(180deg, #eee 0%, #888 100%);
// Svg gradation
$fill-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(205, 103, 153) 100%);

.circle-border {
    @include smart-svg.show-circle("https://cdn.svgporn.com/logos/svg.svg", 56px, #ddd, $border-width: 4px);
}

.circle-fill-border {
    @include smart-svg.show-circle("https://cdn.svgporn.com/logos/react.svg", 56px, #ddd, #000, $border-width: 4px);
}

.circle-gradation-border {
    @include smart-svg.show-circle("https://cdn.svgporn.com/logos/sass.svg", 56px, #ddd, $fill-image: $fill-image, $border-width: 4px);
}

.square-border {
    @include smart-svg.show-square("https://cdn.svgporn.com/logos/svg.svg", 56px, $background-image: $background-image, $border-width: 4px);
}

.square-fill-border {
    @include smart-svg.show-square("https://cdn.svgporn.com/logos/react.svg", 56px, $background-image: $background-image, $fill-color: #000, $border-width: 4px);
}

.square-gradation-border {
    @include smart-svg.show-square("https://cdn.svgporn.com/logos/sass.svg", 56px, $background-image: $background-image, $fill-image: $fill-image, $border-width: 4px);
}
    `.trim()}
      </SampleCode>
    </>
  ),
};


exports.Pseudo = {
  render: () => (
    <>
      {pseudoFragment}
      <SampleCode>
        {`
@use "smart-svg";

// Svg gradation
$fill-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(205, 103, 153) 100%);

.pseudo {
    &::before {
        @include smart-svg.show-pseudo("https://cdn.svgporn.com/logos/react.svg", 48px, #000);
    }
    &::after {
        @include smart-svg.show-pseudo("https://cdn.svgporn.com/logos/sass.svg", 48px, $fill-image: $fill-image);
    }
}
    `.trim()}
      </SampleCode>
    </>
  ),
};
