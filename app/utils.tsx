/* eslint max-len: 0 */

interface RefObject<T>{
    readonly current: T | null
}

export const scroll = ({ elemRef, direction, width = undefined } : {elemRef : RefObject<HTMLDivElement>; direction?: string, width ?: number | undefined}) => {
  if (elemRef.current) {
    const scrollWidth = width || elemRef.current.clientWidth;
    elemRef.current.scrollBy({
      left: direction === 'left' ? scrollWidth : -scrollWidth,
      top: 0,
      behavior: 'smooth',
    });
  }
};

export const getRandomNumber = (min : number, max : number, step : number) => Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
