const home = (req, res) => {
  res.render('index')
}

const aprendaKatakana = (req, res) => {
  res.render('aprenda-katakana')
}

module.exports = {
  home,
  aprendaKatakana
}