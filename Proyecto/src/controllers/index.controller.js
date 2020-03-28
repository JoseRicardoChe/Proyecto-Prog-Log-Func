const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('/estadistica/graficas');
};
module.exports = indexCtrl;