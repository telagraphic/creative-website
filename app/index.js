import About from 'pages/About'
import Home from 'pages/Home'
import Detail from 'pages/Detail'
import Collections from 'pages/Collections'
import each from 'lodash/each'

class App {
  constructor () {
    this.createContent()
    this.createPages()
    this.addLinkListeners()
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
    this.page.show()
  }

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
      this.page.show()
    } else {
      console.log("Error")
    }

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
