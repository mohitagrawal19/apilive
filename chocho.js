const http=require('http');
function datacontrol(req,resp)
{
    resp.write("<h1>Mohit Agrawal</h1>")
    resp.end();
}
http.createServer(datacontrol).listen(4501)