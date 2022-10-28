import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Footerstyled>
      <img src="../images/logo.svg" alt="" />
      <div className="product">
        <h6>Product</h6>
        <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
        </ul>
      </div>
      <div className="product">
      <h6>Company</h6>

      <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
      </div>
      <div className="product">
      <h6>Connect</h6>

      <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
        </ul>
      </div>
    </Footerstyled>
  )
}
// styled-components

const Footerstyled = styled.div`
border-top-right-radius:100px;
color: #fff;
background-color: hsl(240, 10%, 16%);
display: flex;
align-items: flex-start;
justify-content: space-around;
padding: 4rem 0rem;
@media(max-width:660px){
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul{
    li{
      margin: 0.5rem;
    }
  }
}
ul{
    list-style: none;
    li{
        margin: 0.9rem;
        /* opacity: 0.7; */
        color: hsl(240, 2%, 79%);
      cursor: pointer;
    }
    
}
.product{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h6 {
      font-size: 1rem;
    }
}
`