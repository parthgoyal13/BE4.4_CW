const mongoose=require ("mongoose");
 
const StudentSchema=new mongoose.Schema({
  studentRegistrtionNumber:String,
  studentID: String,
  studentName:String,
  fatherGuardianName:String,
  emergencyContact:Number,
  studentProfileImageUrl:String,
});

const Student=mongoose.model("Student",StudentSchema);
module.exports=Student;