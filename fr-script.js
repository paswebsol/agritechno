const answers={
services:"Nous proposons la pulvérisation par drone, le suivi des cultures, la cartographie et les relevés d’exploitation, les diagnostics des cultures assistés par IA, l’agriculture de précision et la formation aux drones agricoles.",
booking:"Vous pouvez réserver en appelant le +233 245 606 400, par e-mail à tetsolos@gmail.com, ou en utilisant le formulaire de demande sur la page Contact. Indiquez la localisation de l’exploitation, la culture, la superficie et le service souhaité.",
spraying:"Nous planifions la pulvérisation par drone selon la culture, l’état de la parcelle, les conditions météorologiques, les produits autorisés et les exigences de sécurité. Nous vérifions le site avant l’intervention et conservons un rapport des opérations.",
monitoring:"Nous utilisons des images aériennes pour observer les variations des cultures et repérer les zones qui peuvent nécessiter une inspection plus approfondie. Des vols répétés peuvent aider à comparer l’état des cultures au fil du temps.",
mapping:"Oui. Nous pouvons collecter et organiser des données aériennes pour les limites des parcelles, les zones de culture, les blocs de plantation, la planification des opérations et la documentation visuelle.",
contact:"Téléphone/WhatsApp : +233 245 606 400. E-mail : tetsolos@gmail.com. Vous pouvez également utiliser le formulaire de demande sur la page Contact."
};
function toggleBolt(){document.querySelector(".bolt-wrap").classList.toggle("open")}
function addBolt(text,cls="bot-msg"){const c=document.getElementById("boltChat");const d=document.createElement("div");d.className=cls;d.textContent=text;c.appendChild(d);c.scrollTop=c.scrollHeight}
document.querySelectorAll(".bolt-choices button").forEach(b=>b.addEventListener("click",()=>{addBolt(b.textContent,"user-msg");addBolt(answers[b.dataset.answer])}));
function boltFreeText(){
 const i=document.getElementById("boltInput"), q=i.value.trim(); if(!q)return;
 addBolt(q,"user-msg"); i.value="";
 const s=q.toLowerCase();
 let a="Je peux vous aider avec les services, la réservation, la pulvérisation par drone, le suivi des cultures, la cartographie ou le contact.";
 if(s.includes("service")||s.includes("offre"))a=answers.services;
 else if(s.includes("réserv")||s.includes("reservation")||s.includes("devis")||s.includes("prix")||s.includes("coût"))a=answers.booking;
 else if(s.includes("pulvér")||s.includes("spray"))a=answers.spraying;
 else if(s.includes("suivi")||s.includes("ravageur")||s.includes("maladie"))a=answers.monitoring;
 else if(s.includes("cartograph")||s.includes("relevé")||s.includes("acre"))a=answers.mapping;
 else if(s.includes("téléphone")||s.includes("email")||s.includes("e-mail")||s.includes("contact")||s.includes("whatsapp"))a=answers.contact;
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
document.documentElement.lang='fr';
document.documentElement.setAttribute('translate','no');
document.documentElement.classList.add('notranslate');
document.body?.setAttribute('translate','no');
document.body?.classList.add('notranslate');
// Prevent browser/Google automatic translation from replacing the French site with English.
try { localStorage.setItem('ata-language','fr'); } catch(e) {}

