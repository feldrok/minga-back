const error404 = (req, res, next) => {
  return res.status(404).json({
      success: false,
      response: `Ruta ${req.url} metodo ${req.method} no implementada`
  })
}

export default error404