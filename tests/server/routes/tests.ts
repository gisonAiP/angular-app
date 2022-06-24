/*
 * Copyright 2022 Motorola Solutions, Inc.
 * All Rights Reserved.
 * Motorola Solutions Confidential Restricted
 */

import express from 'express';

const testsRouter = express.Router();

testsRouter.post('/reset', (req, res) => {
  return res.status(200).json({});
});

export {
  testsRouter
};
