// Bind prefix to log levels
const log = console.log.bind(null, "[LOG]");
const info = console.info.bind(null, "[INFO]");
const warn = console.warn.bind(null, "[WARN]");
const error = console.error.bind(null, "[ERROR]");

export default { log, info, warn, error };
