const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste } = require('../helpers/db-validators');

const { 
        usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch} = require('../controllers/user');



const router= Router();

////////////////////////////////////////////////////////////////////////////
router.get('/',usuariosGet)




///////////////////////////////////////////////////////////////////////////
router.put('/:id', usuariosPut)





//////////////////////////////////////////////////////////////////////////// ///

router.post('/',[   // [MIDDLEWARES - 'camposDelBody que quiero validar' ]
    check('nombre', 'El nombre es OBLIGATORIO..').not().isEmpty(),
    check('password', 'El password no es valido').isLength({min:6}),
    check('correo', 'El correo no es valido..').isEmail(),
    check('correo').custom(emailExiste),
   
    // check('rol', ' No es un rol VALIDO').isIn(['ADMIN_ROLE','USER_ROLE']),
   
    check('rol').custom( esRoleValido ),   //check('rol').custom( (rol) => esRoleValido(rol) ),
    validarCampos
],usuariosPost)


router.delete('/',usuariosDelete)

router.patch('/',usuariosPatch)


module.exports= router;






