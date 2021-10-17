const Annotations = require('../models/AnnotationData')

module.exports = {

    async read(req,res){
        const annotationList = await Annotations.find();

        return res.json(annotationList)
    },

    async create(req,res){
        const { title, notes, priority } = req.body // Requerir do corpo da requisição

        if(!notes || !title){
            return res.status(400).json({
                error: "Necessario um título/anotação"
            })
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        })

        return res.json(annotationCreated)
    },

    async delete(req,res){
        const { id } = req.params;

        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id }) // Vai deletar o _id la do mongodb que tenha o id igual ao id passado no params
        if(annotationDeleted){
            return res.json(annotationDeleted)
        }

        return res.status(401).json({ error: 'Não foi encontrado o registro para deletar!' })
    }
}