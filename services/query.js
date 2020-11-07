require("dotenv").config();

const { search } = require("../helpers/database");

const searchPartieTerm = async(partie, term) => {
  return await search(partie, term);
}

module.exports = { searchPartieTerm };