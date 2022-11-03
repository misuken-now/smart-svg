# smart-svg

This is a SVG fast display library made of Sass with coloring support.

View the [demo](https://misuken-now.github.io/smart-svg/storybook/)

<img width="50%" src="https://user-images.githubusercontent.com/6824728/199705108-f14a3eb7-faec-40b3-9325-b508b892b121.png">

# Highlight

- 🏖 **Easy to use**： Just call Mixin
- 🛠 **Flexible**: Supports SVG color (single color) and gradient control and shape decoration
- 🚀 **Performance**: Very fast display
- 😊 **Brevity**: Reduces various costs because it can be completed only with CSS
- ⭐ **Convenient**: Can be used for pseudo-elements (with some restrictions)

| Function                                           | smart-svg | [react-sass-inlinesvg] | [react-inlinesvg] |
| -------------------------------------------------- | --------- |------------------------| ----------------- |
| Specify SVG in Sass                                | ✅         | ✅                      | ❌                |
| Specify SVG in JSX                                 | ❌         | ✅                      | ✅                |
| Style control for individual child elements in SVG | ❌         | ✅                      | ✅                |
| SVG coloring                                       | ✅         | ✅                      | ✅                |
| Circular and rectangular supports                  | ✅         | ✅                      | ❌                |
| SVG display for pseudo-elements                    | ✅         | ❌                      | ❌                |
| Use outside of React                               | ✅         | ❌                      | ❌                |
| IE11 Support                                       | ❌         | ✅                      | ✅                |
| performance                                        | A+        | A                      | C                 |

# Usage

```
npm install smart-svg
```

or

```
yarn add smart-svg
```

Write the following in the Sass file and apply the class name to the element.

```
@use "smart-svg";

.icon {
    @include smart-svg.show("https://cdn.svgporn.com/logos/react.svg", 1em);
}

.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: .5ex;

    &::before {
        @include smart-svg.show-with-pseudo("https://cdn.svgporn.com/logos/react.svg", 1em);
    }
}

// React sample code.
// import classNames from "path/to.scss";
// <span className={classNames.icon} /> // Apply to span elements, not svg elements.
// <button className={classNames.button}>push</button>
```

# API

[keyword arguments]: https://sass-lang.com/documentation/at-rules/mixin#keyword-arguments
[demo code]: ./demo/demo.stories.module.scss

Use the four mixins applied by smart-svg to specify the SVG resource and any options.

| Mixin                             | Description                   |
| --------------------------------- | ----------------------------- |
| `show($url, $options...)`         | Plain SVG                     |
| `show-circle($url, $options...)`  | SVG enclosed in a circle      |
| `show-square($url, $options...)`  | SVG enclosed in a rectangle   |
| `show-paseudo($url, $options...)` | Plain SVG for pseudo-elements |

Arguments after `$fill-color` can be specified with Sass's [Keyword Arguments] for simplicity.  
Please refer to [demo code] for an example.

```
@use "smart-svg";

.icon1 {
    @include smart-svg.show(
        // URL or Base64(Data URI scheme) or var(--url)
        "https://cdn.svgporn.com/logos/react.svg",
        // $size        // Alias to $width and $height          - Default null
        // $fill-color, // SVG fill color                       - Default null
        // $fill-image, // SVG fill image(ex. linear-gradation) - Default null
        // $display,    // CSS Property                         - Default inline-block
        // $width,      // CSS Property                         - Default $size
        // $height,     // CSS Property                         - Default $size
    );
}

.icon2 {
    @include smart-svg.show-circle(/* arguments is alias of show-square() with $border-radius 50% */);
}

.icon3 {
    @include smart-svg.show-square(
        // URL or Base64(Data URI scheme) or var(--url)
        "https://cdn.svgporn.com/logos/react.svg",
        // $size              // Alias to $width and $height          - Default null
        // $background-color, // Shape background color               - Default null
        // $fill-color,       // SVG fill color                       - Default null
        // $background-image, // Shape image(ex. linear-gradation)    - Default null
        // $fill-image,       // SVG fill image(ex. linear-gradation) - Default null
        // $border-radius,    // CSS Property                         - Default 25%
        // $display,          // CSS Property                         - Default inline-block
        // $ratio,            // Ratio of element size to SVG         - Default 1.4
        // $width,            // CSS Property                         - Default $size
        // $height,           // CSS Property                         - Default $size
        // $svg-size,         // Alias to $svg-width and $svg-height  - Default null
        // $svg-width,        // SVG width                            - Default $svg-size
        // $svg-height,       // SVG height                           - Default $svg-size
        // $border-style,     // CSS Property                         - Default null
        // $border-width,     // CSS Property                         - Default null
        // $border-color,     // CSS Property                         - Default null
    );
}

.with-icon {
    &::before,
    &::after {
        @include smart-svg.show-with-pseudo(/* arguments is alias of show() */);
    }
}
```

# Demo

How to check the operation in the storybook.

```
git clone git@github.com:misuken-now/smart-svg.git
cd smart-svg
yarn
yarn start
```

# Browser Support

Available on browsers that support mask-image.
IE11 is not supported.

# Notes

Please note the following when using it.

- `show-circle()` `show-square()` `show-with-pusedo()` cannot be applied to `<svg>` elements.
  - Because pseudo-elements of `<svg>` elements are not visible.
- CSS cannot be specified for child elements within an `<svg>` element (partial coloring or partial animation is not allowed).
  - Because the element does not exist in the DOM.
- When applied to a pseudo-element (`show-with-pseudo()`), background color and border cannot be specified.
  - Because pseudo-elements cannot be used inside pseudo-elements.

# LICENSE

[@misuken-now/smart-svg](https://github.com/misuken-now/smart-svg)・MIT
