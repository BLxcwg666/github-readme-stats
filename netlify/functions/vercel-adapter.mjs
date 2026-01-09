/**
 * Vercel to Netlify adapter
 * Converts Netlify's Web Standard Request to Vercel-style (req, res) pattern
 */

export function createVercelAdapter(handler) {
  return async (request) => {
    const url = new URL(request.url);
    const query = Object.fromEntries(url.searchParams.entries());

    // Create a mock Vercel-style request object
    const req = {
      query,
      headers: Object.fromEntries(request.headers.entries()),
      method: request.method,
      url: request.url,
    };

    // Create a mock Vercel-style response object
    const headers = new Map();
    let statusCode = 200;
    let body = '';

    const res = {
      setHeader: (name, value) => {
        headers.set(name, value);
      },
      send: (content) => {
        body = content;
        return body;
      },
      status: (code) => {
        statusCode = code;
        return res;
      },
    };

    // Call the original Vercel handler
    await handler(req, res);

    // Convert to Web Standard Response
    const responseHeaders = {};
    headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    return new Response(body, {
      status: statusCode,
      headers: responseHeaders,
    });
  };
}
