import { createVercelAdapter } from './vercel-adapter.mjs';
import gistHandler from '../../api/gist.js';

export default createVercelAdapter(gistHandler);

export const config = {
  path: "/api/gist"
};
