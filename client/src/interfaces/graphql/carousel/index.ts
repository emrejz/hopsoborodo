export interface ICarouselListElement {
  isItemActive: boolean;
  mainTitle: string;
  title: string;
  desc: string;
  buttonText: string;
  img: string;
  backImg: string;
  iconImg: string;
  mobileBC: string;
  path: string;
}
export interface ICarousel {
  mainTitle: string;
  list: Array<ICarouselListElement>;
}
export interface ICarouselQuery {
  getCarousel: Array<{ mainTitle: string; list: Array<ICarouselListElement> }>;
}
