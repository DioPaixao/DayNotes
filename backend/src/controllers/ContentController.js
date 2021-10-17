const Annotations = require('../models/AnnotationData')
const { update } = require('./PriorityController')

module.exports = {

    async update(req,res){

        const { id } = req.params

        const { notes } = req.body

        const annotation = await Annotations.findOne({ _id: id })

        if(notes){ // Se notes for true... ou seja tiver um conteudo, vai atualizar com uma nova notes
            annotation.notes = notes

            await annotation.save()
        }

        return  res.json({annotation})

    }

}