const app=require("express");
const modules=require("../models/course");
const {route}=require("express/lib/application");
const router=app.Router();
router.get("/",async (req,res)=>{
   try{
    const courses=await modules.find();
   res.json(courses);
   }catch(err){
    res.json(err)
   }
});
router.get("/:courseId",async (req,res)=>{
    const courseId=req.params.courseId;
    try{
        const c=await modules.findById(courseId);
        res.json(c);
    }catch(error){
        res.json(error);
    }
});
router.post("/", async (req, res) => {
    try {
        console.log("Received request body:", req.body);

        const coursed = await modules.create(req.body);
        res.json(coursed);
    } catch (error) {
        console.error("Error creating course:", error.message);
        res.json(error);
    }
});


module.exports=router;