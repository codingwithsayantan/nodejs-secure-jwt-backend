const handleResponse = (res, statusCode, message = "Success", data) =>
  res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300,
    message,
    dataset: data ?? {},
  });

module.exports = { handleResponse };
