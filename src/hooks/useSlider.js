import { useState } from "react";

export const useSlider = (index, offs, widt) => {
  
  const [slideIndex, setSlideIndex] = useState(index);
  const [offset, setOffset] = useState(offs);
  const [width, setWidth] = useState(widt);
  const [sliders, setSliders] = useState([])

  const onNext = () => {

    if (offset == width * (sliders.length - 1)) {
      setOffset(0)
    } else {
      setOffset( offset => offset += width)
    }

    if (slideIndex == sliders.length) {
      setSlideIndex(1)
    }else{
      setSlideIndex(slideIndex => slideIndex + 1)
    }
  
  }
  
  const onPrev = () => {

    if (offset == 0) {
      setOffset(width * (sliders.length - 1))
    } else {
      setOffset( offset => offset -= width)
    }
  
    if (slideIndex == 1) {
      setSlideIndex(sliders.length)
    }else{
      setSlideIndex(slideIndex => slideIndex - 1)
    }
  }

  return{onNext, onPrev, slideIndex, setSlideIndex, setOffset, offset, width, sliders, setSliders}
}