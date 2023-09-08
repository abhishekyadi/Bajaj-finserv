const express=require('express')
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('Bajaj Hii I am abhishek kumar')
})
app.get('/bfhl',(req,res)=>{
  res.status(200).json({operation_code:1})
})
app.post('/bfhl',(req,res)=>{
  const {data}=req.body
  // segregating the numbers from data
  let numbers=[]
  for(let i=0;i<data.length;i++){
    if(!isNaN(data[i])){
      numbers.push(data[i])
    }
  }
  //filtering the alphabets
  let alphabets=data.filter(alp=>!numbers.includes(alp))
  //finding the highest alphabet
  let highest_alphabet=alphabets.sort()
  res.json({is_success:true,user_id:"Abhishek_Kumar_01032002",email:"ak5703@srmist.edu.in",roll_number:"RA2011003010456",numbers,alphabets,highest_alphabet:[highest_alphabet[highest_alphabet.length-1]]})
})
app.listen(8000,()=>{
  console.log('server starting....')
})