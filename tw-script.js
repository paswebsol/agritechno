const answers={
services:"Yɛde drone spraying, afifideɛ hwɛdeɛ, afuo mapi ne nhwehwɛmu, AI mmoa afifideɛ nhwehwɛmu, nnɔbaeɛ a ɛyɛ pɛpɛɛpɛ ne afuo drone nteteeɛ ma.",
booking:"Wubetumi abooke denam +233 245 606 400 so afrɛ, email tetsolos@gmail.com, anaa fa service request form a ɛwɔ Contact krataafa no so. Ka wo afuo beaeɛ, afifideɛ, ne afuo kɛseɛ ne dwumadie a wopɛ ho asɛm.",
spraying:"Yɛyɛ drone spraying ho nhyehyɛeɛ sɛnea afifideɛ no, afuo tebea, wim tebea, nnuru a wɔama ho kwan ne ahobammɔ mmara teɛ. Yɛhwɛ beaeɛ no ansa na yɛayɛ adwuma na yɛkora dwumadie ho nsɛm.",
monitoring:"Yɛfa mfonini a drone twa no so hwɛ afifideɛ mu nsakraeɛ ne mmeaeɛ a ebia ɛhia sɛ wɔhwɛ no yie wɔ afuo no mu. Drone flight a wɔyɛ no mpɛn pii betumi aboa ma yɛde bere mu tebea ahyɛ nsɛntɔn.",
mapping:"Aane. Yebetumi aboaboa aerial data ano ama afuo ahyeɛ, afuo mmeaeɛ, nnɔbaeɛ blocks, adwuma nhyehyɛeɛ ne mfonini mu nkrataa.",
contact:"Telefon/WhatsApp: +233 245 606 400. Email: tetsolos@gmail.com. Wubetumi nso de Contact krataafa no service request form no adi dwuma."
};
function toggleBolt(){document.querySelector(".bolt-wrap").classList.toggle("open")}
function addBolt(text,cls="bot-msg"){const c=document.getElementById("boltChat");const d=document.createElement("div");d.className=cls;d.textContent=text;c.appendChild(d);c.scrollTop=c.scrollHeight}
document.querySelectorAll(".bolt-choices button").forEach(b=>b.addEventListener("click",()=>{addBolt(b.textContent,"user-msg");addBolt(answers[b.dataset.answer])}));
function boltFreeText(){
 const i=document.getElementById("boltInput"), q=i.value.trim(); if(!q)return;
 addBolt(q,"user-msg"); i.value="";
 const s=q.toLowerCase();
 let a="Mɛtumi aboa wo wɔ nnwuma, booking, drone spraying, afifideɛ hwɛdeɛ, mapping anaa contact ho. Paw button a ɛwɔ soro no mu biako.";
 if(s.includes("dwuma")||s.includes("service")||s.includes("nnwuma"))a=answers.services;
 else if(s.includes("book")||s.includes("booking")||s.includes("price")||s.includes("cost"))a=answers.booking;
 else if(s.includes("spray")||s.includes("nnuru"))a=answers.spraying;
 else if(s.includes("hwɛ")||s.includes("pest")||s.includes("yare"))a=answers.monitoring;
 else if(s.includes("map")||s.includes("mapping")||s.includes("nhwehwɛmu"))a=answers.mapping;
 else if(s.includes("telefon")||s.includes("email")||s.includes("contact")||s.includes("whatsapp"))a=answers.contact;
 setTimeout(()=>addBolt(a),180);
}
(function(){
 const slides=[...document.querySelectorAll(".drone-slide")];
 const dots=[...document.querySelectorAll(".slider-dot")];
 const prev=document.querySelector(".slider-arrow.prev");
 const next=document.querySelector(".slider-arrow.next");
 if(!slides.length)return;
 let current=0,timer;
 function show(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle("active",i===current));dots.forEach((d,i)=>d.classList.toggle("active",i===current))}
 function restart(){clearInterval(timer);timer=setInterval(()=>show(current+1),5000)}
 prev?.addEventListener("click",()=>{show(current-1);restart()});
 next?.addEventListener("click",()=>{show(current+1);restart()});
 dots.forEach((d,i)=>d.addEventListener("click",()=>{show(i);restart()}));
 restart();
})();
document.documentElement.lang='tw';
