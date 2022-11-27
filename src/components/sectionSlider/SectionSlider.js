import './sectionSlider.scss';
import { forwardRef } from 'react';

const SectionSlider = forwardRef(({onNext, onPrev, slideIndex, setSlideIndex, setOffset, offset, width, sliders}, ref) => {

  return(
    <div className='slider'>
       <div ref={ref} style={{overflow: 'hidden'}} className="slider__window">
        <div style={{width: `${100 * sliders.length + '%'}`, transition: '0.7s all', transform: `translateX(-${offset}px)`}} className="slider__field">
          {
          sliders.map(({src, descr, alt},i) => {
            return(
              <div style={{width: width}} key={i} className="slider__item">
                <h1 className="slider__title">{descr}</h1>
                <div style={{width: width}} className="slider__slidewrap1">
                  <img src={src} alt={alt} />
                </div>
             </div>
            )
          })
          }
        </div>

        <div className="slider__trigwrap">

            <div onClick={() => onPrev()} className="slider__prev">
              &lt;
            </div>
            <div style={{color: '#FFFFFF'}}  className="slider__current">{slideIndex}</div>
            /
            <div style={{color: '#FFFFFF', opacity: '0.5'}} className="slider__total">{sliders.length}</div>
            <div onClick={() => onNext()} className="slider__next">
              &gt;
            </div>
        </div>

         <div className="slider__subtem">
         {
          sliders.map(({src, descr, alt}, i) => {
            return(
              <div key = {i}  style={{border: slideIndex === i + 1 ? '1px solid #FF7534': null}} onClick={() => {setSlideIndex(i + 1); setOffset(width * i)} } className="slider__blockthem">
                <div className="slider__wrapimg">
                <img src={src} alt={alt} />
              </div>
              <div className="slider__descr">
                  {descr}
              </div>
            </div>
            )
          })
         }
          </div>
        </div>
       </div>
  )
})
export default SectionSlider;
