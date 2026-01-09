import { createVercelAdapter } from './vercel-adapter.mjs';
import topLangsHandler from '../../api/top-langs.js';

export default createVercelAdapter(topLangsHandler);

export const config = {
  path: "/api/top-langs"
};
