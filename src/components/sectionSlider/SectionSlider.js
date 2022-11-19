import './sectionSlider.scss';
import slide1 from '../../image/slide1.png';
import subslide1 from '../../image/subslide1.png';
import slide2 from '../../image/slide2.png';
import slide3 from '../../image/slide3.png';
import slide4 from '../../image/slide4.jpg';
import { useState, useEffect } from 'react';

const SectionSlider = () => {
const [slideIndex, setSlideIndex] = useState(1);
const [offset, setOffset] = useState(0);
const [width, setWidth] = useState(1350);
const [subBlock, setSubBlock] = useState([
  {src: subslide1, descr: 'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...', alt: 'slide1'},
  {src: slide2, descr: 'Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження', alt: 'slide2' },
  {src: slide3, descr: 'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини', alt: 'slide3'},
  {src: slide4, descr: 'Сейм Латвії визнав рф країною-спонсором тероризму', alt: 'slide4'},
])
const [sliders, setSliders] = useState([
  {src: slide1, descr: 'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...', alt: 'slide1'},
  {src: slide2, descr: 'Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження', alt: 'slide2' },
  {src: slide3, descr: 'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини', alt: 'slide3'},
  {src: slide4, descr: 'Сейм Латвії визнав рф країною-спонсором тероризму', alt: 'slide4'}
])

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

  return(
    <div className='slider'>
       <div style={{overflow: 'hidden'}} className="slider__window">
        <div style={{width: `${100 * sliders.length + '%'}`, transition: '0.7s all', transform: `translateX(-${offset}px)`}} className="slider__field">
          {
          sliders.map(({src, descr, alt},i) => {
            return(
              <div key={i} className="slider__item">
                <h1 className="slider__title">{descr}</h1>
                <div className="slider__slidewrap1">
                  <img src={src} alt={alt} />
                </div>
             </div>
            )
          })
          }
        </div>

        <div className="slider__trigwrap">

            <div onClick={() => onPrev()} style={{color: '#FFFFFF', opacity: '0.5'}} className="slider__prev">
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
          subBlock.map(({src, descr, alt}, i) => {
            return(
              <div key = {i}  style={{border: slideIndex === i + 1 ? '1px solid red': null}} onClick={() => {setSlideIndex(i + 1); setOffset(width * i)} } className="slider__blockthem">
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
}
export default SectionSlider;