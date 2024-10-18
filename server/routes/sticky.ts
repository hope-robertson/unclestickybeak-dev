import { Router } from 'express'

import * as db from '../db/sticky.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const sticky = await db.getAllStickyBeaks()

    res.json({ sticky: sticky.map((sticky) => sticky.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
