import { useState } from "react";

export const useSlider = (index, offs, widt, promoWidth) => {
  
  const [slideIndex, setSlideIndex] = useState(index);
  const [offset, setOffset] = useState(offs);
 /*  const [width, setWidth] = useState(widt); */
  const [sliders, setSliders] = useState([])
  const [promosliders, setPromoSliders] = useState([]);
  const [promooffset, setPromoOffset] = useState(0);
  /* const [promoWidth, setPromoWidth] = useState(285); */
  const onNext = () => {

    if (offset == widt * (sliders.length - 1)) {
      setOffset(0)
    } else {
      setOffset( offset => offset += widt)
    }

    if (slideIndex == sliders.length) {
      setSlideIndex(1)
    }else{
      setSlideIndex(slideIndex => slideIndex + 1)
    }
  
  }
  
  const onPrev = () => {

    if (offset == 0) {
      setOffset(widt * (sliders.length - 1))
    } else {
      setOffset( offset => offset -= widt)
    }
  
    if (slideIndex == 1) {
      setSlideIndex(sliders.length)
    }else{
      setSlideIndex(slideIndex => slideIndex - 1)
    }
  }

  const onPromoNext = () => {

    if (promooffset == /* promoWidth */ 285 * (promosliders.length - 3)) {
      setPromoOffset(0)
    } else {
      setPromoOffset( promooffset => promooffset += /* promoWidth */ 285)
    }
  }

  const onPromoPrev = () => {

    if (promooffset == /* promoWidth */ 0) {
      setPromoOffset(285 * (promosliders.length - 3))
    } else {
      setPromoOffset( promooffset => promooffset -= /* promoWidth */ 285)
    }
  }
  return{onNext, onPrev, slideIndex, setSlideIndex, setOffset, offset, widt, sliders, setSliders, onPromoNext, promooffset, promosliders, setPromoSliders, onPromoPrev }
}