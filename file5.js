const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files');
for(i=0;i<5;i++)
{
   fs.writeFileSync(dirpath+"/hello"+i+".txt",'a simple txt file');
}