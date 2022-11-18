const multer = require('multer');

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        console.log('storage');
        cb(null, './uploads')
    },
})

const upload = multer({ storage });

module.exports = {
    upload
}