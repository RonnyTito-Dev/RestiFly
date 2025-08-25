// 📂 backend\src\utils\errors.ts

type typeType = 'warning' | 'error';
type statusCodeType = number;
type messageType = string;
type dataType = any;

export default class MyError extends Error {
    statusCode: statusCodeType;
    type: typeType;
    data?: dataType;

    // Constructor
    private constructor(message: messageType, statusCode: statusCodeType, type: typeType, data: dataType) {
        super(message);
        this.statusCode = statusCode;
        this.type = type;
        this.data = data;
    }

    // Error personalizado
    static custom(message: messageType, statusCode: statusCodeType, type: typeType, data: dataType = null) {
        return new MyError(message, statusCode, type, data);
    }

    // Error BadRequest
    static badRequest(message: messageType, data: dataType = null) {
        return new MyError(message, 400, 'warning', data);
    }

    // Validation Error
    static validation(message: messageType, data: dataType = null) {
        return new MyError(message, 400, 'warning', data);
    }

    // No Autorizado
    static unauthorized(message: messageType, data: dataType = null) {
        return new MyError(message, 401, 'error', data);
    }

    // Sin Permisos
    static forbiddden(message: messageType, data: dataType = null) {
        return new MyError(message, 403, 'error', data);
    }

    // Recurso no encontrado
    static notFound(message: messageType, data: dataType = null) {
        return new MyError(message, 404, 'warning', data);
    }

    // Conflicto (duplicado)
    static conflict(message: messageType, data: dataType = null) {
        return new MyError(message, 409, 'warning', data);
    }

    // Error Interno (fallo del server)
    static internal(message: messageType, data: dataType = null) {
        return new MyError(message, 500, 'error', data);
    }
}
