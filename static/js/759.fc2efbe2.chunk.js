"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[759],{716:function(e,t,n){n.r(t);var r=n(885),o=n(791),s=n(760),i=n(184);t.default=function(){var e=(0,o.useState)([{option:"Eat"},{option:"Sleep"},{option:"Code"}]),t=(0,r.Z)(e,2),n=t[0],l=t[1],a=(0,o.useState)(""),u=(0,r.Z)(a,2),c=u[0],d=u[1],x=(0,o.useState)(!1),p=(0,r.Z)(x,2),f=p[0],h=p[1],m=(0,o.useState)(0),b=(0,r.Z)(m,2),j=b[0],v=b[1];return(0,i.jsxs)("div",{className:"flex justify-center",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)(s.Wheel,{mustStartSpinning:f,prizeNumber:j,data:n,backgroundColors:["#6D7E85","#243638"],textColors:["#FFFFFF"],onStopSpinning:function(){h(!1),alert("The result is "+n[j].option)}}),(0,i.jsx)("button",{type:"button",onClick:function(){v(Math.floor(Math.random()*n.length)),h(!0)},className:"bg-textSecondary text-textPrimary px-1 w-20 rounded self-center",children:"Spin"})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center px-4",children:[(0,i.jsx)("div",{className:"h-80 w-72 bg-textPrimary rounded text-textSecondary overflow-y-auto",children:n.map((function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"px-2 py-0.5 flex flex-row justify-between",children:[(0,i.jsx)("h1",{children:e.option}),(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)("button",{type:"button",onClick:function(){return function(e){var t=n.filter((function(t){return t!==e}));l(t)}(e)},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})})]})})}))}),(0,i.jsxs)("form",{onSubmit:function(e){if(c.match(/^[\S]+$/)){var t=n;t.push({option:c}),console.log(t),l(t)}else alert("Your input is not valid!");d(""),e.preventDefault()},className:"pt-4",children:[(0,i.jsx)("input",{className:"px-1 border rounded-md",type:"text",value:c,onChange:function(e){return d(e.target.value)}}),(0,i.jsx)("button",{className:"px-1 mx-2 border-textPrimary text-textPrimary rounded-md border-2",children:"Submit"})]})]})]})}}}]);
//# sourceMappingURL=759.fc2efbe2.chunk.js.map