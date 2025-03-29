import chef_face from "./assets/chef_face.png"
import "./style/header.css"
export default function Header(){
    return(
        <header className="header">
            <img src={chef_face} alt="chef-face"/>
            <p>Chef Claude</p>
        </header>
    )
}