declare namespace AddButtonModuleCssModule {
  export interface IAddButtonModuleCss {
    container: string;
    heart: string;
  }
}

declare const AddButtonModuleCssModule: AddButtonModuleCssModule.IAddButtonModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AddButtonModuleCssModule.IAddButtonModuleCss;
};

export = AddButtonModuleCssModule;
