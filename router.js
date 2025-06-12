const express = require('express');
const datosHenesis = require('./DatoHenesis')

const router = express.Router();

router.get('/', (req, res) => {
      res.json(datosHenesis)
})

router.get('/:nombre',(req, res) => {
    const nombre = req.params.nombre
    const cualidad = datosHenesis.find(cualidad => cualidad.nombre === nombre)

    if(cualidad === undefined) {
        res.status(404)
        return res.json({ mensaje:`La cualidad ${nombre} no esta incluida`})
    }

     res.json(cualidad)

})

module.exports = router

