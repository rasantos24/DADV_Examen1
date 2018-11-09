exports = module.exports = function(app, mongoose)
{
  var productSchema = new mongoose.Schema({
    sku: { type: Number },
    descricion: { type: String },
    marca: { type: String },
    no_estante: { type: Number }
  });

  mongoose.model('Product', productSchema);
}
