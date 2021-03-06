import Component from 'classes/Component'
import each from 'lodash/each'
import GSAP from 'gsap'
import { split } from 'utils/text'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        numberText: '.preloader__number__text',
        images: document.querySelectorAll('img')
      }
    })

    split({
      element: this.elements.title,
      expression: '<br>'
    })

    split({
      element: this.elements.title,
      expression: '<br>'
    })

    this.elements.titleSpans = document.querySelectorAll('span span')

    this.length = 0

    this.createLoader()
  }

  createLoader () {
    each(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')
    })
  }

  onAssetLoaded(image) {
    this.length += 1
    const percent = this.length / this.elements.images.length
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded () {
    return new Promise((resolve) => {
      this.animateOut = GSAP.timeline({
        delay: 1
      })

      this.animateOut.to(this.elements.titleSpans, {
        duration: 0.25,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      })

      this.animateOut.to(this.elements.numberText, {
        duration: 0.25,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      }, '-=1.4')

      this.animateOut.to(this.element, {
        scaleY: 0,
        ease: 'expo.out',
        duration: 1.5,
        transformOrigin: '100% 100%'
      }, '-=1')

      this.animateOut.call(_ => {
        this.emit('completed')
      })
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
