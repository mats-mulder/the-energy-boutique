<template>
  <div>
    <div class="menu-holder">
      <div class="menu-btn-holder">
        <svg class="menu-btn" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect class="menu-dash" x="5.44434" width="36.5556" height="2.33333" rx="1.16667" fill="white"/>
          <rect class="menu-dash" x="0.777832" y="9.33331" width="41.2222" height="2.33333" rx="1.16667" fill="white"/>
          <rect class="menu-dash" x="15.5557" y="18.6667" width="26.4444" height="2.33333" rx="1.16667" fill="white"/>
        </svg>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>

body{
  overflow-x: hidden;
}

:root {
  --curry: #DCAC00;
  --oxford: #031D44;
  --indigo: #253E63;
  --timberwolf: #DED9D3;
  --silver: #BBB7AB;
  --brown: #524B38;
}

h1{
  font-family: 'Arapey', serif;
  font-size: 5.5rem;
  color: white;
}

h4{
  font-family: 'Lora', serif;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

h5{
  font-family: 'Lora', serif;
  font-weight: bold;
  color: white;
  font-size: 1.1rem;
}

p{
  font-family: 'Lora', serif;
  color: white;
}


.menu-holder{
  position: fixed;
  width: 100vw;
  z-index: 500;
}

.menu-btn-holder{
  position: absolute;
  right: 30px;
  top: 20px;
  background-color: var(--indigo);
  border-radius: 500px;
  height: 60px;
  width: 60px;
  transition-duration: 200ms;
}

.menu-btn-holder:hover{
  transform: scale(0.9);
  background-color: var(--curry);
}

.menu-btn:hover{
  cursor: pointer;
}

.menu-btn{
  padding-top: 40%;
  padding-left: 20%;
}


</style>
