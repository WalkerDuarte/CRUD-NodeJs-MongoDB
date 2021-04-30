const mongoose = require('mongoose');
const Produtos = mongoose.model('Produtos');

var classLog = "\n-------------------------------------------------\n produtoController -> "

module.exports = {
    async insert (req, res){
        console.log(classLog + "insert() :");
        const produtos = await Produtos.create(req.body);
        console.log(produtos)
        return res.json(produtos);
    },

    async select (req, res) {
        console.log(classLog + "select() :");
        const { page } = req.query;
        const produtos = await Produtos.paginate({}, { page, limit: 1000});
        return res.json(produtos);
    },

    async buscaPorId (req, res){
        console.log(classLog + "buscaPorId() :");
        const produtos = await Produtos.findById(req.params.id);
        console.log(req.params.id)
        return res.json(produtos);
    },

    async update (req, res){
        console.log(classLog + "update() :");
        const produtos = await Produtos.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(produtos);
    },

    async delete (req, res){
        console.log(classLog + "delete() :");
        await Produtos.findByIdAndRemove(req.params.id);
        return res.send();
    }
}