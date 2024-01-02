import './Header.css'

function Header() {
  return (
    <>
    
            <div className="container">
            <nav class="nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About Author</a>
              <a className="nav-link" href="#">About this Project</a>
              <div className="right-icons"> 
           <i className="fa-brands fa-instagram"></i>
           </div>
           </nav>
           
           </div>

    </>
  )
}

export default Header