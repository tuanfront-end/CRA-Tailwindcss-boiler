import React, {
  FC,
  ImgHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import checkInViewIntersectionObserver from "utils/isInViewPortIntersectionObserver";
import placeholderLarge from "images/placeholder-large.png";
import placeholderLargeDark from "images/placeholder-large-dark.png";

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  className = "object-cover w-full h-full",
  ...args
}) => {
  let isMounted = false;
  const _containerRef = useRef(null);
  let _imageEl: HTMLImageElement | null = null;

  const [__src, set__src] = useState(placeholderLarge);

  const _initActions = async () => {
    const body = document.querySelector("body");
    if (body?.classList.contains("dark")) {
      set__src(placeholderLargeDark);
    }
    _checkInViewPort();
  };

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current as any,
      distanceFromEnd: 0,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      return _handleImageLoaded();
    }
    _imageEl = new Image();
    if (_imageEl) {
      _imageEl.src = src;
      _imageEl.addEventListener("load", _handleImageLoaded);
    }
  };

  const _handleImageLoaded = () => {
    if (!isMounted) return;
    set__src(src);
  };

  useEffect(() => {
    isMounted = true;
    _initActions();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className={`nc-NcImage ${containerClassName}`}
      data-nc-id="NcImage"
      ref={_containerRef}
    >
      {__src ? (
        <img src={__src} className={className} alt={alt} {...args} />
      ) : (
        <div
          className={`${className} bg-neutral-200 dark:bg-neutral-6000`}
        ></div>
      )}
    </div>
  );
};

export default NcImage;
