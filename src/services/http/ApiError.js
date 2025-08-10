export default class ApiError extends Error {
    constructor(message, { status = null, code = 'UNKNOWN', details = null, cause } = {}) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.code = code;
        this.details = details;
        this.cause = cause;
    }
}