import React from 'react';
// import styled from 'styled-components'





function LogoImage(){
<main>
  <div class="wrapper">
    <article class="flow">
      <h1>The <code>flex</code> property</h1>
      <figure class="callout">
        <p>
          Change the value of the <code>flex</code> property to see how this changes the way the items behave.
        </p>
      </figure>
      <div class="controls">
        <label>
          Flex value
          <select id="switcher">
            <option value="initial">initial</option>
            <option value="auto">auto</option>
            <option value="1">1</option>
            <option value="none">none</option>
          </select>
        </label>
      </div>
      <div class="container" id="container">
        <div class="box">Item One</div>
        <div class="box">Item two</div>
        <div class="box">A larger item three</div>
      </div>
    </article>
  </div>
</main>
}
export default LogoImage