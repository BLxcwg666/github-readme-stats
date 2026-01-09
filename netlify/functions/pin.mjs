import { createVercelAdapter } from './vercel-adapter.mjs';
import pinHandler from '../../api/pin.js';

export default createVercelAdapter(pinHandler);

export const config = {
  path: "/api/pin"
};
