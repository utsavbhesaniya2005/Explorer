import React from 'react'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import Login from '../login/Login'
import { useState } from 'react'

const Header = () => {

    // eslint-disable-next-line no-unused-vars
    let [menuItems, setMenuItems] = useState(['Home','About','Gallery','Contact','Blog','Shop']);   

    return(
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="row items-center justify-between">
                        <Logo />
                        <Menu listItems={menuItems} />
                        <Login />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )

}

export default Header;


// class Header extends React.Component{

//     constructor() {
        
//         super();
//         this.state = {
//             menus : ['Home','About','Gallery','Contact','Blog','Shop']
//         }
//     }

//     render(){
//         return(
//             <>
//                 <header>
//                   <div className="container">
//                       <div className="row items-center justify-between">
//                           <Logo />
//                           <Menu menu={this.state.menus} />
//                           <Login />
//                       </div>
//                   </div>
//                 </header>
//             </>
//         )
//     }
    
// }
// export default Header;