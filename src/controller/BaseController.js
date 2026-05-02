class BaseController {
  static handleError(res, error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message });
  }

  static async handleNotFound(res, data) {
    if (!data) {
      return res.status(404).json({ message: "Resource not found" });
    }
    return null;
  }

  static validateRequiredFields(req, res, fields) {
    const missing = [];
    for (const field of fields) {
      if (!req.body[field]) {
        missing.push(field);
      }
    }
    if (missing.length > 0) {
      res.status(400).json({ message: `Missing required fields: ${missing.join(", ")}` });
      return false;
    }
    return true;
  }

  static paginate(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    return { page, limit, offset };
  }

  static success(res, data, status = 200) {
    return res.status(status).json(data);
  }

  static created(res, data) {
    return res.status(201).json(data);
  }

  static noContent(res) {
    return res.status(204).send();
  }
}

export default BaseController;