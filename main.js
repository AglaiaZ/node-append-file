// 追加模式写文件
var fs = require('fs');
var str = '这是我追加的数据';

// 方法一
// a+:以读取追加模式打开文件，如果文件不存在则创建
fs.open('input.txt', 'a+', function (err, fd) {
    if (err) {
        return console.log(err);
    }
    fs.writeFile(fd, str, function (err) {
        if (err) {
            return console.log(err);
        }
    });
});

// 方法二

var fileData = fs.readFileSync('input.txt').toString();
var writeStream = fs.createWriteStream('input.txt');

writeStream.write(fileData + str);
