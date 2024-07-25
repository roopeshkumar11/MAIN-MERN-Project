
// import File from "../modals/file.js"


// export   const uploadImage= async(req,res)=>{
//     const fileobj={
//         path:req.file.path,
//         name:req.file.originalname
//     }
// try{
// let file= await File.create({fileobj})

//  res.status(200).json({path:`http://localhost:8000/file/${file._id}`})
// }
// catch(error){
//     console.log(error.message)
//     res.status(500).json({error:error.message})
// }

// }
import File from "../modals/file.js"; // Ensure the correct path to the model

export const uploadImage = async (req, res) => {
  const fileobj = {
    path: req.file.path,
    name: req.file.originalname
  };

  try {
    // Create a new File document with the properties from fileobj
    let file = await File.create(fileobj);

    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const downloadimg=async(req,res)=>{
    try{
    const file= await   File.findById(req.params.fileId)
     file.downloadcontent++
     await file.save();
     res.download(file.path,file.name)
    }
    catch(error){
console.error(error.message)
return response.status(500).josn({error:error.message})
    }

}