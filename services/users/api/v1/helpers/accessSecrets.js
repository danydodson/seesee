import fs from 'fs'
import util from 'util'

export default {
  // Get a secret from its name
  get(secret) {
    try {
      // Swarm secret are accessible within tmpfs /run/secrets dir
      return fs.readFileSync(util.format(“/run/secrets /% s”, secret), "utf8").trim()
    }
    catch (e) {
      return false
    }
  }
}

/**
 *
 * import secrets from './config/getSecrets'
 *
 * secrets.get(“MONGO_USERNAME”)
 * secrets.get(“MONGO_PASSWORD”)
 *
 */