"use strict";(()=>{var e={};e.id=834,e.ids=[834],e.modules={5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},1428:e=>{e.exports=import("axios")},6762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},3131:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>d,default:()=>u,routeModule:()=>l});var n=a(9947),o=a(325),i=a(6762),c=a(915),s=e([c]);c=(s.then?(await s)():s)[0];let u=(0,i.M)(c,"default"),d=(0,i.M)(c,"config"),l=new n.PagesAPIRouteModule({definition:{kind:o.A.PAGES_API,page:"/api/callback",pathname:"/api/callback",bundlePath:"",filename:""},userland:c});r()}catch(e){r(e)}})},915:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>i});var n=a(1428),o=e([n]);n=(o.then?(await o)():o)[0];let c=process.env.SPOTIFY_CLIENT_SECRET;async function i(e,t){let{code:a,state:r}=e.query;if(!a)return t.status(400).json({error:"Authorization code is missing"});let o={headers:{Authorization:`Basic ${Buffer.from(`0b1d22bc96ae4f7eba48b4122b495c35:${c}`).toString("base64")}`,"Content-Type":"application/x-www-form-urlencoded"}};try{let{access_token:e,refresh_token:r,expires_in:i}=(await n.default.post("https://accounts.spotify.com/api/token",{code:a,redirect_uri:"http://localhost:3000/api/callback",grant_type:"authorization_code"},o)).data;t.setHeader("Set-Cookie",`access_token=${e}; HttpOnly; Path=/;`),t.redirect("/")}catch(e){console.error(e),t.status(500).json({error:"Failed to obtain access token"})}}r()}catch(e){r(e)}})},325:(e,t)=>{var a;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(a||(a={}))},9947:(e,t,a)=>{e.exports=a(5600)}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=t(t.s=3131);module.exports=a})();