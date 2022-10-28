import React from 'react'
import styled from 'styled-components'
export default function Container() {
  return (
    <Content>
      <State>
<div className="state">
    <img src="../images/illustration-phones.svg" alt="" />
    <div className="text-state">
        <h1>State of the Art Infrastructure</h1>
        <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly. no matter where your readers are, keeping your site competitive.</p>
    </div>
</div>
      </State>
      <Laptop>
        <div className="laptop">
    <img src="../images/illustration-laptop-desktop.svg" alt="" />
       <div className="items">
        <h1>Free, open, simple</h1>
        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
        <h1>Powerful tooling</h1>
        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
       </div>
        </div>
      </Laptop>
    </Content>
  )
}
// styled-components


const Content = styled.div`
@media(max-width:804px){

  margin-bottom: 20rem;
}
`
const State = styled.div`
height: 100vh;
margin-bottom:4rem;
@media(max-width:804px){
margin-bottom:9rem;

}

.state{
    background-color:  hsl(237, 23%, 32%);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 25rem;
    border-bottom-left-radius:9rem;
    border-top-right-radius:9rem;
    color: #fff;
    .text-state{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      h1{
        font-size: 2.3rem;
      }
      p{
        line-height: 30px;
        opacity: 0.8;
      }
    }
    @media(max-width:804px){
      flex-direction: column;
      margin-bottom: 10rem;
      img{
        width: 16rem;
      }
      .text-state{
        text-align: center;
        padding: 0rem 2rem;
        h1{
          font-size: 1.8rem;
        }
        p{
          font-size: 15px;
        }
      }
    }
}
`
const Laptop = styled.div`
height: 100vh;
.laptop{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 300px;
       flex: 1;
       position: relative;
       left: -14%;
       @media(max-width:804px){
        left: 5%;
       }
    }
    .items{
        flex: 1;
        padding: 0rem 2rem;

        p{
          line-height: 30px;
         color: hsl(207, 13%, 34%);
        }
        h1{
    color: hsl(208, 49%, 24%);

        }
    }
    @media(max-width:804px){
      
        flex-direction: column;
        .items{
          padding: 0rem 3rem;
         text-align: center;

        }
       
     
    }
}

`