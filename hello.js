
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>Xin chào!</h1>
        <h2>Giới thiệu Node.js và MongoDB</h2>
        <p>Họ tên: Rah Lan Thiên</p>
        <p>Lớp: CNTT18A</p>
        <p>Đây là bài thực hành Node.js đầu tiên của tôi.</p>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
