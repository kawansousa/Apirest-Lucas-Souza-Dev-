import { Router } from "express";
/* import { StatusCodes } from 'http-status-codes'; */
import { CidedesController } from './../controllers';

const router = Router()

router.get('/', (req, res) => {
  return res.send('Hello wolrd')
})

router.post('/cidades', CidedesController.create)
router.post('/cidades', CidedesController.create)
router.post('/cidades', CidedesController.create)
router.post('/cidades', CidedesController.create)

export { router } 