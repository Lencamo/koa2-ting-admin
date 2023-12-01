const { UPLOAD_PATH } = require('../../config/dotenv.js')
const multer = require('@koa/multer')

const upload = multer({
  dest: UPLOAD_PATH
})

const uploadFileHandle = upload.single('avatar')

module.exports = {
  uploadFileHandle
}
