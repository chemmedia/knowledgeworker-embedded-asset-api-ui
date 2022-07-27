# Knowledgeworker Create Embedded Asset API - UI

A Javascript library to support native [Knowledgeworker Create](https://www.knowledgeworker.com/knowledgeworker-create/?utm_source=code&utm_campaign=embedded-asset-api) UI elements in rich content packages.

## Usage

This library is integrated into [knowledgeworker-embedded-asset-api](https://github.com/chemmedia/knowledgeworker-embedded-asset-api) by default and provides CSS variables, CSS classes and Javascript access for all important design params.\
For development and review purposes, there is a fallback to default colors, fonts, etc. if you start your asset outside Knowledgeworker Create.

### CSS Variables
If you use the [knowledgeworker-embedded-asset-api](https://github.com/chemmedia/knowledgeworker-embedded-asset-api), CSS variables are automatically added to your asset. They also stay up to date if the environment in Knowledgeworker Create changes, e.g. the background color changes.
See the list of available variables below, use them in your CSS as usual, e.g. `color: var(--kw-text-color);`.

```
--kw-text-color
--kw-headline-color
--kw-action-color
--kw-action-text-color
--kw-action-hover-color
--kw-action-disabled-color
--kw-background-color
--kw-feedback-positive-color
--kw-feedback-partial-positive-color
--kw-feedback-negative-color
--kw-feedback-solution-color
--kw-text-font-size
--kw-text-font-family
--kw-headline-font-family
--kw-headline-font-weight
--kw-button-border-radius
```

### CSS Classes
If you use the [knowledgeworker-embedded-asset-api](https://github.com/chemmedia/knowledgeworker-embedded-asset-api), CSS classes are automatically added to your asset. They also stay up to date if the environment in Knowledgeworker Create changes, e.g. the background color changes.
See the list of available classes below, use them as normal in your HTML.

```html
kw-paragraph - <p class="kw-paragraph">...</p>
kw-link - <a class="kw-link">...</a>
kw-headline2 - <h2 class="kw-headline2">...</h2>
kw-headline3 - <h3 class="kw-headline3">...</h3>
kw-headline4 - <h4 class="kw-headline4">...</h4>
kw-headline5 - <h5 class="kw-headline5">...</h5>
kw-headline6 - <h6 class="kw-headline6">...</h6>
kw-button-primary - <button class="kw-button-primary">...</button>
kw-button-secondary - <button class="kw-button-secondary">...</button>
```

Interactive Elements additionally support the disabled attribute to show they are currently not available.
```html
kw-link - <a class="kw-link" disabled>...</a>
kw-button-primary - <button class="kw-button-primary" disabled>...</button>
kw-button-secondary - <button class="kw-button-secondary" disabled>...</button>
```

### Javascript Access
If you use the [knowledgeworker-embedded-asset-api](https://github.com/chemmedia/knowledgeworker-embedded-asset-api) you can listen to the `onInitialize` and on `onDesignChanged` events to get an object with all available design params.
Initial design is provided via `onInitialize`; `onDesignChanged` is used in case the design changes later on.

Types:
```TypeScript
export interface FontFaces {
    name: string;
    sources: {
        src: string;
        format: FontType;
    }[];
    fontWeight: string | number;
    fontStyle: string;
}

export interface Design {
    textColor: string;
    headlineColor: string;
    actionColor: string;
    actionTextColor: string;
    actionHoverColor: string;
    actionDisabledColor: string;
    backgroundColor: string;
    feedbackPositiveColor: string;
    feedbackPartialPositiveColor: string;
    feedbackNegativeColor: string;
    feedbackSolutionColor: string;
    textFontSize: string;
    textFontFamily: string;
    headlineFontFamily: string;
    headlineFontWeight: string;
    buttonBorderRadius: string;
    fontFaces: FontFaces[];
}
```

Example:
```TypeScript
import { onInitialize, onDesignChanged } from 'knowledgeworker-embedded-asset-api';

onInitialize((configuration) => {
    // may use `configuration.design.textColor`
});

onDesignChanged((design) => {
    // may use `design.textColor`
});
```

## Versioning

We use the [SemVer](http://semver.org/) versioning system. For the available versions, please see the tags on this 
repository.

## Authors

 - Martin Kutter - [chemmedia AG](https://www.chemmedia.de/)

## Licence

This project is licensed under MIT licence. Please see [LICENSE](./LICENSE) file for more information.
