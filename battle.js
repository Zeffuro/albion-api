const request = require("albion-api-zeff/request")

module.exports = async (battleId) => {
    const results = await request(
      `battles/${battleId}`
    )
    return results
}
