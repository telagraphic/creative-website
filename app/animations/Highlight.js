import Animation from 'classes/Animation'
import GSAP from 'gsap'
import each from 'lodash/each'
import { calculate, split } from 'utils/text'


export default class Highlight extends Animation {
  constructor ({ element, elements }) {
    super({element, elements})

  }

  animateIn () {

    this.timeLineIn = GSAP.timeline({
      delay: 0.5
    })

    this.timeLineIn.fromTo(this.element, {
      autoAlpha: 0,
      scale: 1.2,
    }, {
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      duration: 1
    })

  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

}
