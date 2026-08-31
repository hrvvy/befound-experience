const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = __dirname, PORT = 8791;
const TYPES = {
  '.html':'text/html; charset=utf-8', '.jpg':'image/jpeg', '.jpeg':'image/jpeg',
  '.png':'image/png', '.mp4':'video/mp4', '.webm':'video/webm', '.svg':'image/svg+xml',
  '.css':'text/css', '.js':'text/javascript', '.vtt':'text/vtt',
  '.md':'text/markdown; charset=utf-8', '.ico':'image/x-icon',
};
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/' || p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, path.normalize(p).replace(/^[\/]+/, ''));
  if (!file.startsWith(ROOT)) { res.writeHead(403).end('forbidden'); return; }

  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, {'Content-Type':'text/plain'}).end('not found'); return; }
    const type = TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const base = { 'Content-Type': type, 'Cache-Control': 'no-store', 'Accept-Ranges': 'bytes' };

    // Byte ranges. Without these a <video> cannot be scrubbed, and Safari
    // refuses to play at all: it opens with a range request and treats a 200
    // as a server that cannot stream.
    const range = req.headers.range;
    if (range) {
      const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
      if (m) {
        let start = m[1] === '' ? null : parseInt(m[1], 10);
        let end   = m[2] === '' ? null : parseInt(m[2], 10);
        if (start === null) { start = st.size - end; end = st.size - 1; }   // suffix range
        if (end === null || end >= st.size) end = st.size - 1;
        if (isNaN(start) || start > end || start < 0) {
          res.writeHead(416, {'Content-Range': 'bytes */' + st.size}).end();
          return;
        }
        res.writeHead(206, Object.assign({}, base, {
          'Content-Range': `bytes ${start}-${end}/${st.size}`,
          'Content-Length': end - start + 1,
        }));
        fs.createReadStream(file, { start, end }).pipe(res);
        return;
      }
    }
    res.writeHead(200, Object.assign({}, base, { 'Content-Length': st.size }));
    fs.createReadStream(file).pipe(res);
  });
}).listen(PORT, '127.0.0.1', () => console.log('serving ' + ROOT + ' on http://127.0.0.1:' + PORT));
