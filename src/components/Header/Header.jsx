import logo from "../../../img/logo.png"


function Header() {
  return (
    <nav className="bg-white" style={{padding: "20px 0" }}>
    <div className="container flex justify-between items-center">
        <div className="text-gray-800 text-xl font-bold">
           <img src={logo} alt="logo" className="w-60 h-20" />
        </div>
        <div className="space-x-4">
          <ul className="flex space-x-4 text-gray-800 font-bold text-xl gap-20.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
    </div>
</nav>
  )
}

export default Header