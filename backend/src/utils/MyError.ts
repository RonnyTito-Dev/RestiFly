// 📂 backend\src\utils\errors.ts

type statusCodeType = number;
type messageType = string;
type contentType = any;

export default class MyError extends Error {
    statusCode: statusCodeType;
    content?: contentType;

    // Constructor
    private constructor(message: messageType, statusCode: statusCodeType, content: contentType) {
        super(message);
        this.statusCode = statusCode;
        this.content = content;
    }

    // Error personalizado
    static custom(message: messageType, statusCode: statusCodeType, content: contentType = null) {
        return new MyError(message, statusCode, content);
    }

    // Error BadRequest
    static badRequest(message: messageType, content: contentType = null) {
        return new MyError(message, 400, content);
    }

    // Validation Error
    static validation(message: messageType, content: contentType = null) {
        return new MyError(message, 400, content);
    }

    // No Autorizado
    static unauthorized(message: messageType, content: contentType = null) {
        return new MyError(message, 401, content);
    }

    // Sin Permisos
    static forbiddden(message: messageType, content: contentType = null) {
        return new MyError(message, 403, content);
    }

    // Recurso no encontrado
    static notFound(message: messageType, content: contentType = null) {
        return new MyError(message, 404, content);
    }

    // Conflicto (duplicado)
    static conflict(message: messageType, content: contentType = null) {
        return new MyError(message, 409, content);
    }

    // Error Interno (fallo del server)
    static internal(message: messageType, content: contentType = null) {
        return new MyError(message, 500, content);
    }
}
