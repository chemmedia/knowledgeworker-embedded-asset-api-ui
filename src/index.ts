export type FontType = 'woff' | 'woff2' | 'truetype' | 'opentype' | 'embedded-opentype' | 'svg';

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

export const defaultDesign: Design = {
    textColor: '#000',
    headlineColor: '#000',
    actionColor: '#E8398E',
    actionTextColor:'#fff',
    actionHoverColor: 'rgb(235,87,159)',
    actionDisabledColor: '#939393',
    backgroundColor: '#fff',
    feedbackPositiveColor: '#008c14',
    feedbackPartialPositiveColor: 'rgb(135, 135, 135)',
    feedbackNegativeColor: '#c80000',
    feedbackSolutionColor: '#ebaf0b',
    textFontSize: '18px',
    textFontFamily: 'Hind, Arial, sans-serif',
    headlineFontFamily: 'Hind, Arial, sans-serif',
    headlineFontWeight: '300',
    buttonBorderRadius: '0',
    fontFaces: [
        {
            name: 'Hind',
            sources: [{
                src: require('./hind-light-webfont.woff2'),
                format: 'woff2',
            }],
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        {
            name: 'Hind',
            sources: [{
                src: require('./hind-medium-webfont.woff2'),
                format: 'woff2',
            }],
            fontWeight: 'bold',
            fontStyle: 'normal',
        },
    ],
};

export const getFontFaces = ({ fontFaces }: Design) => fontFaces
    .map(fontFace => `
        @font-face {
            font-family: '${fontFace.name}';
            src: ${fontFace.sources.map(source => `url("${source.src}") format("${source.format}")`).join(',')};
            font-weight: ${fontFace.fontWeight};
            font-style: ${fontFace.fontStyle};
            font-display: block;
        }
    `).join('');

export const getCssVariables = ({
    textColor,
    headlineColor,
    actionColor,
    actionTextColor,
    actionHoverColor,
    actionDisabledColor,
    backgroundColor,
    feedbackPositiveColor,
    feedbackPartialPositiveColor,
    feedbackNegativeColor,
    feedbackSolutionColor,
    textFontSize,
    textFontFamily,
    headlineFontFamily,
    headlineFontWeight,
    buttonBorderRadius,
}: Design) => `
    :root {
        --kw-text-color: ${textColor};
        --kw-headline-color: ${headlineColor};
        --kw-action-color: ${actionColor};
        --kw-action-text-color: ${actionTextColor};
        --kw-action-hover-color: ${actionHoverColor};
        --kw-action-disabled-color: ${actionDisabledColor};
        --kw-background-color: ${backgroundColor};
        --kw-feedback-positive-color: ${feedbackPositiveColor};
        --kw-feedback-partial-positive-color: ${feedbackPartialPositiveColor};
        --kw-feedback-negative-color: ${feedbackNegativeColor};
        --kw-feedback-solution-color: ${feedbackSolutionColor};
        --kw-text-font-size: ${textFontSize};
        --kw-text-font-family: ${textFontFamily};
        --kw-headline-font-family: ${headlineFontFamily};
        --kw-headline-font-weight: ${headlineFontWeight};
        --kw-button-border-radius: ${buttonBorderRadius};
    }
`;

const minifyStyleString = (styleString: string) => styleString.replace(/( {2,}|\n)/g, '');

export const getStyles = (design: Design) => minifyStyleString(`
    ${getFontFaces(design)}
    
    ${getCssVariables(design)}
    
    .kw-paragraph,
    .kw-link {
        font-family: var(--kw-text-font-family);
        font-size: var(--kw-text-font-size);
        font-weight: 300;
        line-height: 1.6em;
        color: var(--kw-text-color);
    }
    
    .kw-paragraph a,
    .kw-link {
        text-decoration: none;
        color: var(--kw-action-color);
        cursor: pointer;
    }
    
    .kw-paragraph a:not([disabled]):hover,
    .kw-link:not([disabled]):hover {
        color: var(--kw-action-hover-color);
    }
    
    .kw-paragraph a[disabled],
    .kw-link[disabled] {
      color: var(--kw-action-disabled-color);
      cursor: not-allowed;
    }
    
    .kw-headline2,
    .kw-headline3,
    .kw-headline4,
    .kw-headline5,
    .kw-headline6 {
        font-family: var(--kw-headline-font-family);
        font-weight: var(--kw-headline-font-weight);
        line-height: 1.2em;
        color: var(--kw-headline-color);
    }
    
    .kw-headline2 {
        font-size: 32px;
    }
    
    .kw-headline3 {
        font-size: 28px;
    }
    
    .kw-headline4 {
        font-size: 24px;
    }
    
    .kw-headline5 {
        font-size: 20px;
        line-height: 1.3em;
    }
    
    .kw-headline6 {
        font-size: 18px;
        font-weight: bold;
    }
    
    .kw-button-primary,
    .kw-button-secondary {
        font-family: var(--kw-text-font-family);
        font-size: var(--kw-text-font-size);
        font-weight: 300;
        line-height: 1.6em;
        background: var(--kw-action-color);
        color: var(--kw-action-text-color);
        border: none;
        text-decoration: none;
        display: inline-block;
        padding: 7px 20px;
        box-shadow: 0 0 2px rgba(0, 0, 0, .3);
        cursor: pointer;
        transition: box-shadow 100ms ease-out;
        appearance: none;
        border-radius: var(--kw-button-border-radius);
    }
    
    .kw-button-primary:not([disabled]):hover {
        background: var(--kw-action-hover-color);
        color: var(--kw-action-text-color);
        box-shadow: 0 0 5px rgba(0, 0, 0, .6);
    }

    .kw-button-primary[disabled] {
        background: var(--kw-action-disabled-color);
        cursor: not-allowed;
        box-shadow: none;
    }

    .kw-button-primary:focus {
        outline: 2px solid var(--kw-action-hover-color);
    }
    
    .kw-button-secondary {
        background-color: transparent;
        color: var(--kw-action-color);
        box-shadow: none;
        outline: 1.5px solid var(--kw-action-color);
        outline-offset: -1px;
    }

    .kw-button-secondary[disabled] {
        color: var(--kw-action-disabled-color);
        background-color: transparent;
        cursor: not-allowed;
        outline-color: var(--kw-action-disabled-color);
    }

    .kw-button-secondary:not([disabled]):hover {
        color: var(--kw-action-hover-color);
        outline-color: var(--kw-action-hover-color);
        background: transparent !important;
        box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    }
`);