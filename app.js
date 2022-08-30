const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4001acdc'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]


// NOTE Display Fragile Packages
function drawPackages() {

  let packageCards = document.getElementById('package-Cards')
  let template = ''

  packages.forEach(package => {

    if (package.isFragile) {
      template += ` 
      <div class="card fs-3 bg-dark text-light">Fragile Package</div>
      <div class="card fs-5 bg-dark text-light mb-3 mt-1">Recipient: ${package.to} Priority: ${package.priorityLevel} 
      Weight: ${package.weight} UPC: ${package.trackingNumber}</div> `
    }
  })

  // @ts-ignore
  packageCards.innerHTML = template
}

// NOTE Display Non Fragile Packages
function drawSturdyPackages() {
  let packageCards = document.getElementById('package-Cards2')
  let template = ''

  packages.forEach(package => {

    if (!package.isFragile) {
      template += ` 
      <div class="card fs-3 bg-dark text-light">Non Fragile Package</div>
      <div class="card fs-5 bg-dark text-light mb-3 mt-1">Recipient: ${package.to} Priority: ${package.priorityLevel} 
      Weight: ${package.weight} UPC: ${package.trackingNumber}</div> `
    }
  })

  // @ts-ignore
  packageCards.innerHTML = template
}


// NOTE This is to filter by Express
function drawExpressPackages() {
  let packageCards = document.getElementById('boxExpress')
  let template = ''

  packages.forEach(package => {

    if (package.priorityLevel == 'express') {
      template += ` 
      <div class="card fs-3 bg-dark text-light mt-3 multi-collapse collapse show">Express Packages</div>
      <div class="card fs-5 bg-dark text-light mb-3 mt-1 multi-collapse collapse show">Recipient: ${package.to} Priority: 
      Weight: ${package.weight} UPC: ${package.trackingNumber} Fragile?: ${package.isFragile}</div> `
    }
  })

  // @ts-ignore
  packageCards.innerHTML = template
}


// NOTE This is to filter by Standard
function drawStandardPackages() {
  let packageCards = document.getElementById('boxStandard')
  let template = ''

  packages.forEach(package => {

    if (package.priorityLevel == 'standard') {
      template += ` 
      <div class="card fs-3 bg-dark text-light mt-3 multi-collapse collapse show">Standard Packages</div>
      <div class="card fs-5 bg-dark text-light mb-3 mt-1 multi-collapse collapse show">Recipient: ${package.to}
      Weight: ${package.weight} UPC: ${package.trackingNumber} Fragile?: ${package.isFragile}</div> `
    }
  })

  // @ts-ignore
  packageCards.innerHTML = template
}


// NOTE This is to filter by Free
function drawFreePackages() {
  let packageCards = document.getElementById('boxFree')
  let template = ''

  packages.forEach(package => {

    if (package.priorityLevel == 'free') {
      template += ` 
      <div class="card fs-3 bg-dark text-light mt-3 multi-collapse collapse show">Free Packages</div>
      <div class="card fs-5 bg-dark text-light mb-3 mt-1 justify-content-center multi-collapse collapse show">Recipient: ${package.to} 
      Weight: ${package.weight} UPC: ${package.trackingNumber} Fragile?: ${package.isFragile}</div> `
    }
  })




  // @ts-ignore
  packageCards.innerHTML = template
}



// drawSturdyPackages()
// drawPackages()