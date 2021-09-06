export interface InviewPortType {
  distanceFromEnd: number;
  callback: () => void;
  target: HTMLElement;
}

const checkInViewIntersectionObserver = ({
  target,
  distanceFromEnd,
  callback,
}: InviewPortType) => {
  const _funCallback = (entries: any, _observer: any) => {
    entries.map((entry: any) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  };

  // _checkBrowserSupport-----
  if (typeof window.IntersectionObserver === "undefined") {
    console.error(
      "window.IntersectionObserver === undefined! => Your Browser is Notsupport"
    );
    return;
  }
  const options = {
    root: null,
    rootMargin: `${distanceFromEnd}px 0px`,
    threshold: 0,
  };
  const observer = new IntersectionObserver(_funCallback, options);
  target && observer.observe(target);
};

export default checkInViewIntersectionObserver;
