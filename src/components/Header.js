import React from 'react'
import styled from 'styled-components'
export default function Header({isopen,setisopen}) {
    const Open = ()=>{
     setisopen(!isopen)
    }
  return (
    <Headerstyled>
    <Head>
        <Bg>
      <Nav>
        <div className="leftnav">
            <img className='logo' src="../images/logo.svg" alt="" />
            <ul className={`${isopen?'activve':''}`} >
                <li>Product <span><img src="../images/icon-arrow-light.svg" alt="" /></span></li>
                <li>Company <span><img src="../images/icon-arrow-light.svg" alt="" /></span></li>
                <li>Contact <span><img src="../images/icon-arrow-light.svg" alt="" /></span></li>
            </ul>
        </div>
        <div className="rightnav ">
            <p>Login</p>
            <button>Sign Up</button>
        </div>
      </Nav>
     <div className="text">
     <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
      <div className="btn">
        <button>Start for Free</button>
        <button className='active'>Learn More</button>
      </div>
     </div>

     </Bg>
     <div onClick={Open} className="navbar-menu">
        <img src={`${isopen?"../images/icon-close.svg":"../images/icon-hamburger.svg"}`} alt="" />
        {/* <img src="../images/icon-close.svg" alt="" /> */}
     </div>
    </Head>
    <Designed>
        <h1>Designed for the future</h1>
        <div className="hero">
            <div className="items">
        <div className="content">
            <div className="items-text">
          <h2>Introducing an extensible editor</h2>
            <p>Blogr feature an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos , and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
            </div>
        </div>
        <div className="content">
            <div className="items-text">
          <h2>Robust content management</h2>
            <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow, With this functionality, you're in full control.</p>
            </div>
        </div>
        </div>
        <div className="pictures">
            {/* <img src="../images/bg-pattern-circles.svg" alt="" /> */}
            <img src="../images/illustration-editor-desktop.svg" alt="" />

        </div>
        </div>
    </Designed>
    </Headerstyled>
  )
}
// styled-components
const Headerstyled = styled.div`
`

const Head = styled.div`
background: linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));

/* background: linear-gradient(290deg, hsl(353deg 100% 62%) 0%, hsl(3deg 100% 67%) 40%, hsl(13deg 100% 72%) 100%); */
height: 100vh;
background-position: center;
background-size: cover;
background-repeat:no-repeat;
position: relative;
overflow-x:hidden;
overflow-y:hidden;
border-bottom-left-radius:10% ;
  


.imgbg{
    position: absolute;
    top: -225%;
    left: -42%;
}
.text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    h1{
        font-size: 2.8rem;
        color: hsl(0, 0%, 100%);
        opacity: 0.9;
        text-align: center;
        @media(max-width:630px){
        font-size: 2rem;

        }
    }
    p{
        margin-top:-0.5rem;
        margin-bottom:2rem;
        opacity: 0.9;
        text-align: center;

    }
    button{
        margin: 0.5rem;
        width: 9rem;
        height: 50px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        background-color: #fff;
        color: hsl(353, 100%, 62%);
        font-weight: bold;
        &:hover{
            background-color:hsl(355, 100%, 74%);
            transition: 0.3s ease-in;
            color: #fff;
        }
        
    }
    .active{
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
        &:hover{
            background-color: #fff;
            color: hsl(353, 100%, 62%);
            transition: 0.3s ease-in;
        }
    }
}
@media(max-width:870px){
padding-bottom: 3rem;
}

/* navbarmenu */
.navbar-menu{
    position: absolute;
    top: 4.5rem;
    right: 2rem;
   cursor: pointer;
   z-index: 10;
   @media(min-width:630px){
    display: none;
   }
}
`

const Nav = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
padding: 4rem 5rem;
font-family: 'Overpass', sans-serif; 
margin-bottom: 4rem;
.leftnav{
    display: flex;
    ul{
        display: flex;
        align-items: center;
        list-style: none;
        color: #fff;
        @media(max-width:870px){
            margin: 2rem 0rem;
            display: flex;
           
        }
        @media(max-width:630px){
                display: none;
 
        }
       
        li{
            margin-left: 2.5rem;
            font-weight: bold;
            opacity: 0.6;
            cursor: pointer;
        }
    }
    @media(max-width:870px){
flex-direction: column;
align-items: center;
justify-content: center;
margin:0rem;
}
@media(max-width:630px){
.activve{
    background-color: #000;
    top: 7rem;
    position: absolute;
    min-height: 400px;
    min-width: 270px;
    display: flex;
    z-index: 200;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
}
.logo{
    margin-right: 14rem;
    width: 4rem;
}
}

}
@media(max-width:870px){
flex-direction: column;
align-items: center;
justify-content: center;
margin:0rem;
}

.rightnav{
    display: flex;
    align-items: center;

    button{
        margin-left: 2rem;
        width: 8rem;
        height: 45px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        background-color: #fff;
        color: hsl(353, 100%, 62%);
        font-weight: bold;
        &:hover{
            background-color:hsl(355, 100%, 74%);
            transition: 0.3s ease-in;
            color: #fff;
        }
    }
    p{
        cursor: pointer;
        color: #fff;
        opacity: 0.6;
        font-weight: bold;
    }
    @media(max-width:630px){
       display: none;
    }
}
@media(max-width:870px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

    /* .show{
            height: 17rem;
            width: 20rem;
            background-color: #fff;
            z-index: 10;
            position: absolute;
            top: 4rem;
            display: flex;
            box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
          
        } */
`

const Designed = styled.div`
   
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4rem 0rem;
margin-bottom: 3rem;
h1{
    color: hsl(208, 49%, 24%);
    font-size: 2.3rem;
    /* text-shadow:1px 1px 10px rgba(0,0,0,0.1); */
    text-align: center;

}
h2{
    color: hsl(237, 23%, 32%);
}
.hero{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x:hidden;

    .pictures{
        flex: 1;
        width: 300px;
        img{
            width: 100%;
            margin-left:10rem;
        }
    }
    .items{
        flex: 1;
        padding-left:7rem;
        .content{
            padding-bottom: 2rem;
            p{
               line-height: 30px;
               color: hsl(207, 13%, 34%);
            }
        }
    }
    @media(max-width:804px){
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .pictures{
                img{
                    /* margin: 0; */
            margin-left:0rem;

                }
            }
        .items{
            padding: 2rem;
            text-align: center;
            h2{
                text-align: center;
            }
            
        }
        
    }
}
`



// background image

const Bg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('../images/bg-pattern-intro-desktop.svg');
    background-repeat: no-repeat;
    background-size: 220.5%;
    background-position-x: 21.3%;
    background-position-y: 53.16%;
`
