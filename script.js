
const altphd_1 = document.getElementById('lphd_1')
const apdalt_1 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  altphd_1.append(wrapper)
}

const altTrig_1 = document.getElementById('altbtn_1')
if (altTrig_1) {
    altTrig_1.addEventListener('click', () => {
    apdalt_1('Success!!!, Your product is saved to the cart.', 'success')
  })
}





const altphd_2 = document.getElementById('lphd_2')
const apdalt_2 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  altphd_2.append(wrapper)
}

const altTrig_2 = document.getElementById('altbtn_2')
if (altTrig_2) {
    altTrig_2.addEventListener('click', () => {
    apdalt_2('Success!!!, Your product is saved to the cart.', 'success')
  })
}



const altphd_3 = document.getElementById('lphd_3')
const apdalt_3 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  altphd_3.append(wrapper)
}

const altTrig_3 = document.getElementById('altbtn_3')
if (altTrig_3) {
    altTrig_3.addEventListener('click', () => {
    apdalt_3('Success!!!, Your product is saved to the cart.', 'success')
  })
}



const altphd_4 = document.getElementById('lphd_4')
const apdalt_4 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  altphd_4.append(wrapper)
}

const altTrig_4 = document.getElementById('altbtn_4')
if (altTrig_4) {
    altTrig_4.addEventListener('click', () => {
    apdalt_4('Success!!!, Your product is saved to the cart.', 'success')
  })
}


function paynow(){
    alert("Payment Successful!");
}


function catergorysw(){
  alert ("Go To Catergory Smart watches. This is a demo msg.")
}
function catergoryhp(){
  alert ("Go To Catergory Headphones. This is a demo msg.")
}
function catergorygp(){
  alert ("Go To Catergory Game pads. This is a demo msg.")
}
function catergorycd(){
  alert ("Go To Catergory Camera drones. This is a demo msg.")
}


function registernow(){
  alert("Registeration Successful");
}