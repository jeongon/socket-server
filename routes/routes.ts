import { Router, Request, Response} from 'express';




function buildPost(de:string ,cuerpo:string,res:Response, id:string =''){
    console.log(`de: ${de} cuerpo:${cuerpo}, id:${id}`);
    res.json({
            ok:true,
            mensaje: "todo ok por POST",
            id

    });
}


const router = Router();

router.get('/mensajes',(req:Request,res:Response)=>{
    
    console.log("va por getttttt");

    res.json({
            ok:true,
            mensaje: "todo ok"


    });

})


router.post('/mensajes',(req:Request,res:Response)=>{
    console.log("va por postttttt");
    var  cuerpo:string =req.body.cuerpo;
    var  de:string  =req.body.de;
    
    buildPost(cuerpo,de,res);


})

router.post('/mensajes/:id',(req:Request,res:Response)=>{
    console.log("va por postttttt2");
    var  cuerpo:string =req.body.cuerpo;
    var  de:string  =req.body.de;
    var  id:string = req.params.id;
    
    buildPost(cuerpo,de,res,id);
    

})


export default router;