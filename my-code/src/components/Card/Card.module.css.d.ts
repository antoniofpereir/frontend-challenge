declare namespace CardModuleCssModule {
  export interface ICardModuleCss {
    container: string;
    title: string;
  }
}

declare const CardModuleCssModule: CardModuleCssModule.ICardModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardModuleCssModule.ICardModuleCss;
};

export = CardModuleCssModule;
