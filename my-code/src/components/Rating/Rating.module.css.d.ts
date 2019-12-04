declare namespace RatingModuleCssModule {
  export interface IRatingModuleCss {
    container: string;
    imdb: string;
    imdbRatingContainer: string;
    logo: string;
    rotten: string;
    rottingRatingContainer: string;
  }
}

declare const RatingModuleCssModule: RatingModuleCssModule.IRatingModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: RatingModuleCssModule.IRatingModuleCss;
};

export = RatingModuleCssModule;
