// Custom Reusable Response Function
const Response = (res, success, message = null, status, data = null) => {
  return res.status(status).json({
    success: success,
    message: message ? message : undefined,
    data: data ? data : undefined,
  });
};

module.exports = Response;
