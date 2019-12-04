declare namespace MovieSearchModuleCssModule {
  export interface IMovieSearchModuleCss {
    container: string;
    listContainer: string;
  }
}

declare const MovieSearchModuleCssModule: MovieSearchModuleCssModule.IMovieSearchModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MovieSearchModuleCssModule.IMovieSearchModuleCss;
};

export = MovieSearchModuleCssModule;
