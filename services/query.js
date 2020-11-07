require("dotenv").config();

const { search } = require("../helpers/database");

const searchPartieTerm = async(politicalParty, topic) => {
  return await search(politicalParty, topic);
}

module.exports = { searchPartieTerm };