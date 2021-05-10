"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var uuid_1 = require("uuid");
var path_1 = __importDefault(require("path"));
var storage = multer_1.default.diskStorage({
    destination: path_1.default.resolve('../src/assets/imagenes'),
    filename: function (req, file, cb) {
        cb(null, uuid_1.v4() + path_1.default.extname(file.originalname));
    }
});
exports.default = multer_1.default({ storage: storage });
//# sourceMappingURL=multer.js.map