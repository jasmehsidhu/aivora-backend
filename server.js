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
      { role: "user", content: req.body.message+'---Prompt ends here. To answer this, dont use any markdowns and answer normally without telling me that you did not or u wont use them, i dont need any spec message other than the topic' }
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
