import * as amqp from 'amqplib/callback_api'
import { default as config } from '../config'

let instance

class Connect {

  constructor(queue) {
    amqp.connect(config.rabbit.host, (e, conn) => {
      console.log(e)
      this.conn = conn
      this.queue = queue
      this.ch = {}
      this._createChannel(this.conn)
    })
  }

  _createChannel(conn) {
    this.conn.createChannel((e, ch) => {
      this.queue.forEach(function (val) {
        ch.assertQueue(val, { durable: false })
      })
      this.ch = ch
    })
  }

  sendToQueue(queue, data) {
    this.ch.sendToQueue(queue, new Buffer(JSON.stringify(data)))
  }

  static getInstance(queue) {
    if (!Connect.instance) {
      Connect.instance = new Connect(queue)
    }
    return Connect.instance
  }
}

let RabbitConnect
export default RabbitConnect = Connect.getInstance
