declare namespace MoviePreviewModuleCssModule {
  export interface IMoviePreviewModuleCss {
    container: string;
    heart: string;
    overlay: string;
    previewImg: string;
    textContainer: string;
  }
}

declare const MoviePreviewModuleCssModule: MoviePreviewModuleCssModule.IMoviePreviewModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MoviePreviewModuleCssModule.IMoviePreviewModuleCss;
};

export = MoviePreviewModuleCssModule;
