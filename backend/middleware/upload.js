const multer= require("multer")
const path= require("path")
const fs=require("fs")
const uploadDir = path.join('/tmp', "upload");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Store images in 'uploads' folder
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// Multer instance

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // Limit to 10MB
});

module.exports = upload;
