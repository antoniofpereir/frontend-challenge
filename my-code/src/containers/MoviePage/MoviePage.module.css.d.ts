declare namespace MoviePageModuleCssModule {
  export interface IMoviePageModuleCss {
    bottomCards: string;
    cardsContainer: string;
    contentContainer: string;
    informationContainer: string;
    poster: string;
    ratingContainer: string;
  }
}

declare const MoviePageModuleCssModule: MoviePageModuleCssModule.IMoviePageModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MoviePageModuleCssModule.IMoviePageModuleCss;
};

export = MoviePageModuleCssModule;
