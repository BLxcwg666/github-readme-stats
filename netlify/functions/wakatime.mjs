import { createVercelAdapter } from './vercel-adapter.mjs';
import wakatimeHandler from '../../api/wakatime.js';

export default createVercelAdapter(wakatimeHandler);

export const config = {
  path: "/api/wakatime"
};
