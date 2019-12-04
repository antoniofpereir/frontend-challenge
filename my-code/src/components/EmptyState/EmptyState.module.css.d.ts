declare namespace EmptyStateModuleCssModule {
  export interface IEmptyStateModuleCss {
    container: string;
    emptyImg: string;
  }
}

declare const EmptyStateModuleCssModule: EmptyStateModuleCssModule.IEmptyStateModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: EmptyStateModuleCssModule.IEmptyStateModuleCss;
};

export = EmptyStateModuleCssModule;
