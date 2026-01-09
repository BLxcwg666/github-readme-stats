import { createVercelAdapter } from './vercel-adapter.mjs';
import statsHandler from '../../api/index.js';

export default createVercelAdapter(statsHandler);

export const config = {
  path: "/api"
};
