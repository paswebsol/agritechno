
const answers={
services:"We provide Drone Spraying, Crop Monitoring, Farm Mapping & Surveying, AI-Assisted Crop Diagnostics, Precision Agriculture and Agricultural Drone Training.",
booking:"You can book by calling +233 245 606 400, emailing tetsolos@gmail.com, or using the service-request form on the Contact page. Include your farm location, crop, acreage and preferred service.",
spraying:"Drone spraying is planned around the crop, field conditions, weather, approved agricultural inputs and safe operating procedures. We assess the site before an operation and keep service records.",
monitoring:"We capture aerial imagery to observe crop variability and areas that may need closer field inspection. Repeat flights can help compare crop condition over time.",
mapping:"Yes. We can plan aerial data collection for farm boundaries, field areas, plantation blocks, operational planning and visual documentation.",
contact:"Phone/WhatsApp: +233 245 606 400. Email: tetsolos@gmail.com. You can also use the Contact page to send a service request."
};
function toggleBolt(){document.querySelector(".bolt-wrap").classList.toggle("open")}
function addBolt(text,cls="bot-msg"){const c=document.getElementById("boltChat");const d=document.createElement("div");d.className=cls;d.textContent=text;c.appendChild(d);c.scrollTop=c.scrollHeight}
document.querySelectorAll(".bolt-choices button").forEach(b=>b.addEventListener("click",()=>{addBolt(b.textContent,"user-msg");addBolt(answers[b.dataset.answer])}));
function boltFreeText(){
 const i=document.getElementById("boltInput"), q=i.value.trim(); if(!q)return;
 addBolt(q,"user-msg"); i.value="";
 const s=q.toLowerCase();
 let a="I can help with services, booking, drone spraying, crop monitoring, mapping or contact details. Try one of the buttons above.";
 if(s.includes("service")||s.includes("offer"))a=answers.services;
 else if(s.includes("book")||s.includes("quote")||s.includes("price")||s.includes("cost"))a=answers.booking;
 else if(s.includes("spray"))a=answers.spraying;
 else if(s.includes("monitor")||s.includes("pest")||s.includes("disease"))a=answers.monitoring;
 else if(s.includes("map")||s.includes("survey")||s.includes("acre"))a=answers.mapping;
 else if(s.includes("phone")||s.includes("email")||s.includes("contact")||s.includes("whatsapp"))a=answers.contact;
 setTimeout(()=>addBolt(a),180);
}

// Front-page drone photo slider
(function(){
  const slides=[...document.querySelectorAll(".drone-slide")];
  const dots=[...document.querySelectorAll(".slider-dot")];
  const prev=document.querySelector(".slider-arrow.prev");
  const next=document.querySelector(".slider-arrow.next");
  if(!slides.length)return;
  let current=0,timer;
  function show(n){
    current=(n+slides.length)%slides.length;
    slides.forEach((s,i)=>s.classList.toggle("active",i===current));
    dots.forEach((d,i)=>d.classList.toggle("active",i===current));
  }
  function restart(){clearInterval(timer);timer=setInterval(()=>show(current+1),5000)}
  prev?.addEventListener("click",()=>{show(current-1);restart()});
  next?.addEventListener("click",()=>{show(current+1);restart()});
  dots.forEach((d,i)=>d.addEventListener("click",()=>{show(i);restart()}));
  restart();
})();
