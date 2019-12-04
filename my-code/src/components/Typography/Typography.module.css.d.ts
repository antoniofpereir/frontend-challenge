declare namespace TypographyModuleCssModule {
  export interface ITypographyModuleCss {
    active: string;
    bold1: string;
    default: string;
    disabled: string;
    highlight: string;
    medium1: string;
    medium2: string;
    negative: string;
    regular1: string;
    secondary: string;
  }
}

declare const TypographyModuleCssModule: TypographyModuleCssModule.ITypographyModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TypographyModuleCssModule.ITypographyModuleCss;
};

export = TypographyModuleCssModule;
