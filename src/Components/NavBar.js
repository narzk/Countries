import '../style/NavBar.css'
import Moon from '../icons/Moon'

function NavBar() {
  return (
    <div className="navBar">
      <div className="title-nav">Where in the world?</div>
      <div>Dark Mode <Moon/></div>
    </div>
  );
}
export default NavBar;
