import express from 'express'
import { getCountries, getCountry, getCountryByCode, getCountryByRegion } from '../controllers/countries.controller.js'

const router = express.Router()

router.get('/', getCountries)

router.get('/region/:region', getCountryByRegion)

router.get('/code/:id', getCountryByCode)

router.get('/:id', getCountry)


export default router