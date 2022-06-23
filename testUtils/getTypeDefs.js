const { fetchTypeDefs } = require('apollo-mocked-provider');

(() => {
  fetchTypeDefs({ uri: 'http://localhost:7002' });
})();
