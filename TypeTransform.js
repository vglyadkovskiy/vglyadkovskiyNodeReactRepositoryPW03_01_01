const stream = require("stream");

class TypeTransform extends stream.Transform {
   constructor() {
      super({objectMode: true});
     
   }
   _transform(chunk, encoding, callback) {
      let res = chunk.split("\r\n").join().split(" ").join().toLowerCase();
      this.push(res);
      callback();
   } 
}

module.exports = TypeTransform;
