var express = require('express');
var mutipart = require('connect-multiparty'); //文件上传中间件
var mutipartMiddeware = mutipart();
var app = express();

app.use(mutipart({ uploadDir: './file' }));  //设置上传文件存放的地址
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log("server started on http://localhost:" + app.get('port') + '...');
});

app.use('/', express.static('../dist'))
app.use('/file', express.static('file')); // 设置访问静态文件的路径

app.get('/', function (req, res) {
    res.type('text/html');
    res.sendfile('../../dist/index.html');
});

app.post('/upload', mutipartMiddeware, function (req, res) {
    res.json({
        status: 0, 
        message: "success!",
        "data": req.files.file
    });
});