import express from 'express';

const app =express();

app.use(express.json());
const members: any[] = [
    {id:1, name: "Nada", committee: "Technical", email: "nadaKhattab98@gmail.com"},
    {id:2, name: "Alaa", committee: "HR", email: "nadaKhattab98@gmail.com"},
    {id:3, name: "Omar", committee: "FR", email: "nadaKhattab98@gmail.com"}, 
    {id:4, name: "Hazem", committee: "Training", email: "nadaKhattab98@gmail.com"},
    {id:5, name: "Karim", committee: "Events", email: "nadaKhattab98@gmail.com"},
    {id:6, name: "Chantal", committee: "Technical", email: "nadaKhattab98@gmail.com"},    
     
];



app.get('/',(req,res)=> {
    res.send('Hello');
})
app.get('/api/members',(req,res)=> {
    res.send(members);
})
app.get('/api/members/:id',(req,res)=> {
   let mem = members.find(m=>m.id===parseInt(req.params.id));
   if(!mem) res.status(404).send('The is no member in acmASCIS with such an id ');
   res.send(mem);
})

app.post('/api/members',(req,res)=> {
    let member = {
        id: members.length+1,
        name: req.body.name,
        committee: req.body.committee,
        email: req.body.email

    };
    members.push(member);
    res.send(member);
})

app.put('/api/members/:id',(req,res)=> {
    let mem = members.find(m=>m.id===parseInt(req.params.id));
    if(!mem) res.status(404).send('The is no member in acmASCIS with such an id ');
    mem.name = req.body.name;
    mem.committee = req.body.committee;
    mem.email = req.body.email;
    res.send(mem);
})

app.delete('/api/members/:id',(req,res)=> {
    let mem = members.find(m=>m.id===parseInt(req.params.id));
   if(!mem) res.status(404).send('The is no member in acmASCIS with such an id ');
   const index = members.indexOf(mem);
   members.splice(index,1);

   res.send(mem);

})

app.listen(5000, ()=> console.log("Server is running"));