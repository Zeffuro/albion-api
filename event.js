const request = require("./request")

module.exports = async (eventId) => {
    const results = await request(
      `events/${eventId}`
    )
    return results
}
