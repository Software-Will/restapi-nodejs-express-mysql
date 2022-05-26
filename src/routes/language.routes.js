import { Router } from 'express'
import { methods as languageController } from '../controllers/language.controller'

const router = Router();

//Rutas
router.get('/', languageController.getLanguages); //SEL
router.get('/:id', languageController.getLanguage); //GET 
router.post('/', languageController.addLanguage); //INSERT
router.put('/:id', languageController.updateLanguage); //UPDATE
router.delete('/:id', languageController.deleteLanguage); //DELETE

export default router;