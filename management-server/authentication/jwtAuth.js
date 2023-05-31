import bcrypt from 'bcrypt';
import HttpStatusCode from 'http-status-codes';
import User from '../database/models/user';
import * as _ from 'lodash';
import logger from '../logging/logger';
import jwt from 'jsonwebtoken';
const checkPermissions = (req, res, validPermissions, done) => {
  const found = req.user.permissions.some((permission) =>
    validPermissions.includes(permission),
  );
  if (found) {
    done();
  } else {
    logger.verbose('User doesnt have necessary permission to access this.');
    return res
      .status(HttpStatusCode.FORBIDDEN)
      .send(
        'Permission denied for the user. User doesnt have necessary permission to access this',
      );
  }
};

const authenticateUser = (req, res, next) => {
  const token = req.session.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
