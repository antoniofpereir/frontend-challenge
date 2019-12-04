declare namespace PageModuleCssModule {
  export interface IPageModuleCss {
    container: string;
    innerContainer: string;
    logo: string;
  }
}

declare const PageModuleCssModule: PageModuleCssModule.IPageModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageModuleCssModule.IPageModuleCss;
};

export = PageModuleCssModule;
