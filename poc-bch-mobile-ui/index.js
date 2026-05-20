const core = require('poc-bch-mobile-core');

module.exports = {
  renderComponent: () => {
    return `[Renderizando UI] - Info del core: ${core.getCoreVersion()}`;
  }
};
