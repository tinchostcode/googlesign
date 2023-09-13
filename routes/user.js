const {Router} = require('express');
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch} = require('../controllers/user');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router= Router();

router.get('/',usuariosGet)

router.put('/:id', usuariosPut)


router.post('/',[
    check('nombre', 'El nombre es OBLIGATORIO..').not().isEmpty(),
    check('password', 'El password no es valido').isLength({min:6}),
    check('correo', 'El correo no es valido..').isEmail(),
    check('rol', ' No es un rol VALIDO').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
],usuariosPost)


router.delete('/',usuariosDelete)

router.patch('/',usuariosPatch)


module.exports= router;






