
// eslint-disable-next-line react/prop-types
const Menu = ({listItems}) => {
    
    return(

        <>
            <div className="col-7">
                <nav>
                    <ul>
                        <li>
                                {
                                    // eslint-disable-next-line react/prop-types
                                    listItems.map( (menu) =>
                                        <a key={menu}>{menu}</a>
                                    )
                                }
                        </li>
                    </ul>
                </nav>
            </div>
        </>

    )

}

export default Menu;