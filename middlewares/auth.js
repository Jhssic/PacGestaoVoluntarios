import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  if (req.session?.token) {
    try {
      jwt.verify(req.session?.token, process.env.JWT_SECRET);
      return next();
    } catch (err) {
      res.redirect('/login');
    }
  } else {
      res.redirect('/login');
  }
};

export default authMiddleware;
