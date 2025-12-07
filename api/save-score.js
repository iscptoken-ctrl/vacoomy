let ranking = [];

export default function handler(req, res) {
  if(req.method === "POST"){
    const { score } = req.body;
    if(typeof score === "number"){
      ranking.push(score);
      ranking.sort((a,b)=>b-a);
      ranking = ranking.slice(0,10);
      return res.status(200).json({ success:true });
    }
    return res.status(400).json({ success:false, message:"Score missing" });
  }
  res.status(405).json({ success:false });
}
