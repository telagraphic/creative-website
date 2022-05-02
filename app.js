require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const logger = require('morgan')
const errorHandler = require('errorHandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const UAParser = require('ua-parser-js')

const path = require('path')
const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const initApi = req => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_TOKEN,
    req
  })
}

const handleLinkResolver = doc => {
  // console.log('link resolver', doc)
  if (doc.type == 'product' ) return `/detail/${doc.slug}`
  if (doc.type == 'about' ) return '/about'
  if (doc.type == 'collections' ) return '/collections'
  return '/'
}

app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent']);

  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';

  res.locals.Link = handleLinkResolver
  res.locals.PrismicDOM = PrismicDOM

  res.locals.Numbers = index => {
    return index == 0 ? 'One' : index == 1 ? 'Two' : index == 2 ? 'Three' : index == 3 ? 'Four' : ''
  }
  next()
})

const handleRequest = async api => {
  const meta = await api.getSingle('meta')
  const navigation = await api.getSingle('navigation')
  const preloader = await api.getSingle('preloader')

  // update meta in prismic with fields
  return {
    meta,
    navigation,
    preloader
  }
}

app.get('/', async (req, res) => {
  const api = await initApi(req)
  const defaults = await handleRequest(api)
  const home = await api.getSingle('home')

  const {results: collections } = await api.query(Prismic.Predicates.at('document.type', 'collection'), {
    fetchLinks: 'product.image'
  })

  // console.log(defaults.navigation.data.list)

  res.render('pages/home', {
    ...defaults,
    collections,
    home
  })
})

app.get('/about', async (req, res) => {
  const api = await initApi(req)
  const about = await api.getSingle('about')
  const defaults = await handleRequest(api)

  // console.log(about.data.body[1].primary.description)

  res.render('pages/about', {
    ...defaults,
    about
  })
})

app.get('/detail/:uid', async (req, res) => {
  const api = await initApi(req)
  const defaults = await handleRequest(api)
  const product = await api.getByUID('product', req.params.uid, {
    fetchLinks: 'collection.title'
  })

  res.render('pages/detail', {
    ...defaults,
    product

  })
})

app.get('/collections', async (req, res) => {
  const api = await initApi(req)
  const defaults = await handleRequest(api)
  const home = await api.getSingle('home')
  const {results: collections } = await api.query(Prismic.Predicates.at('document.type', 'collection'), {
    fetchLinks: 'product.image'
  })

  res.render('pages/collection', {
    ...defaults,
    collections,
    home
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
