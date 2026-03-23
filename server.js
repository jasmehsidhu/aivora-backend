import express from 'express';
import cors from 'cors'
import axios from 'axios'
const app=express()
const PORT=1000
app.use(cors())
app.use(express.json())
app.listen(PORT,()=>{
    console.log('Server Started')
})


app.post('/request',async(req,res)=>{
 var response=await axios.post("https://chatgpt-42.p.rapidapi.com/conversationgpt4-2",
     {
    messages: [
      { role: "user", content: req.body.message+'-- this was the prompt---Output specs- keep the response breifer than usual, avoid using any anusual sign like *|# etc. Respond in plain text without markdown formatting. And dont just tell me explicitly tha you did it even in any greeting prompt,just dont tell me that u removed itit' }
    ],
    system_prompt: "",
    temperature: 0.9,
    top_k: 5,
    top_p: 0.9,
    max_tokens: 256,
    web_access: false
  },{
     headers: {
      "x-rapidapi-key": "a19cdfeeb8msh8c508eb8c35c4bep1a4dbajsncf0e2939bd86",
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json"
    }
  }
   )
    res.json({response:response.data.result})
})
