import About from 'pages/About'
import Home from 'pages/Home'
import Detail from 'pages/Detail'
import Collections from 'pages/Collections'
import Preloader from 'components/Preloader'
import each from 'lodash/each'

class App {
  constructor () {
    this.createContent()
    this.createPages()
    this.createPreloader()
    this.addLinkListeners()
    this.addEventListeners()

    this.update()
  }

  createPreloader () {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createContent() {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages() {
    this.pages = {
      home: new Home(),
      collections: new Collections(),
      detail: new Detail(),
      about: new About(),
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  onPreloaded() {
    this.preloader.destroy()
    this.onResize()
    this.page.show()
  }

  // events

  async onChange(url) {
    await this.page.hide()

    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')
      div.innerHTML = html
      const divContent = div.querySelector('.content')
      this.template = divContent.getAttribute('data-template')
      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML
      this.page = this.pages[this.template]

      this.page.create()

      this.onResize()

      this.page.show()
      this.addLinkListeners()
    } else {
      console.log("Error")
    }

  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }


  // loop

  update () {
    if (this.page && this.page.update) {
      this.page.update()
    }
    window.requestAnimationFrame(this.update.bind(this))
  }

  // listeners

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    each(links, link => {
      link.onclick = event => {
        const { href } = link

        event.preventDefault()

        this.onChange(href)
      }
    })
  }
}



new App()
