import React from 'react';

const navBar = () => {
  return (
    <div class="nav">
        <h1>SafePassGenerator</h1>
        <ul class="ul">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#contact">Contact US</a></li>
        </ul>
    </div>
  )
}

export default navBar