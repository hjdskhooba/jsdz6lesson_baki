const ROOT = document.getElementById('root')
ROOT.style.cssText=`
text-align: center;
`

const body = document.querySelector('body');
body.style.cssText=`
background-color: #7EC780;
`

const btn1 = document.createElement ('button')
ROOT.append(btn1)
btn1.textContent = 'Show modal 1'
btn1.style.cssText = `
padding: 0 25px;
margin: 0 55px 0 48px;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
font-size: 14px;
font-weight: 600;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer; 
position: relative;
top: 25px;
`
const btn2 = document.createElement ('button')
ROOT.append(btn2)
btn2.textContent = 'Show modal 2'
btn2.style.cssText = `
padding: 0 25px;
margin: 0 55px 0 48px;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
font-size: 14px;
font-weight: 600;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer; 
position: relative;
top: 25px;
`
const btn3 = document.createElement ('button')
ROOT.append(btn3)
btn3.textContent = 'Show modal 3'
btn3.style.cssText = `
padding: 0 25px;
margin: 0 55px 0 48px;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
font-size: 14px;
font-weight: 600;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer; 
position: relative;
top: 25px;
`

const modal = document.createElement('div')
modal.style.cssText = `
text-align: left;
justify-content: space-between;
width: 100vw;
height: 100vh;
display: flex;
justify-content: ;
background-color: #00000060;
position: fixed;
top: 0;
left: 0;
`

modal.addEventListener('click', (event)=>{
    if (event.target === modal) {
        modal.remove(modal);
    }
});

const modalWindow = document.createElement ('div')
modalWindow.innerHTML = `
<h1>I'm modal window 😍</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempore dolore repellat! Dicta, consectetur dolorum doloribus magni soluta culpa, consequatur dolore iure facilis eaque commodi ea laborum incidunt adipisci excepturi cumque, quasi neque nemo. Praesentium veniam, excepturi distinctio laborum saepe aut unde. Velit nemo quod repellat porro ab assumenda, tempore aspernatu.</p>`

modalWindow.style.cssText = `
padding: 10px 20px 30px;
width: 1050px;
height: 150px;
background-color: white;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

modal.append(modalWindow);


btn1.addEventListener('click', ()=> {
ROOT.append(modal);
console.log('clicked');
}
)

btn2.addEventListener('click', ()=> {
ROOT.append(modal)
console.log('clicked');
}
);

btn3.addEventListener('click', ()=> {
ROOT.append(modal);
console.log('clicked');
}
)

const closeWindow = document.createElement('button');
closeWindow.textContent="X";
closeWindow.style.cssText=`
cursor: pointer;
transform: translate(1027.5px, -160px);
background-color: red;
font-size: 20px;
width: 33px;
height: 23px;
`
closeWindow.addEventListener('click', ()=>{
    modal.remove(modal);
})

modalWindow.append(closeWindow);

ROOT.show(modal);
ROOT.append(modal);


