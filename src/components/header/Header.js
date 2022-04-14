import {useState} from "react"; 
import { NavLink,useHistory } from "react-router-dom";
import style from "./Header.module.css"
import logo from "../../logo/logo.png"
import  MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
const Header = ()=>{
    const [searchTitle, setSearchTitle] = useState("");
    const history = useHistory();
    const [valid, setValid] = useState(false);
    const onChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
          setValid(true);
          setSearchTitle(event.target.value);
        } else {
          setValid(false);
        }
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (valid) {
            searchTitle && history.push({
                pathname:'/search',
                search:`?keyword=${searchTitle}`,
            });
        }
    };
    let classBtn = "search-icon";
    if (!valid) {
        classBtn = "disable-btn";
    }
    return (
        <div className={style['header-main-container']}>
            <div className={style['header']}>
                <div className={style["logo"]}>
                    <MenuOutlinedIcon className={style["header-menu-icon"]}/>
                    <NavLink to="/">
                        <img className={style['logo-img']} src={logo} alt="logo" />
                    </NavLink>
                </div>
                {/* Search Bar...... */}
                <form onSubmit={onSubmitHandler} className={style['header-search-bar']}>
                    <div  className={style['search-form']}>
                        <input
                            className={style['search-input']}
                            type="text"
                            onChange={onChangeHandler}
                            placeholder="Search Videos"
                        />
                    </div>
                    <button  type='submit' className={style[`${classBtn}`]}>
                        <SearchIcon className={style['search-bar-icon']}/>
                    </button>
                </form>
               <div className={style["nav-links"]}>
                    <ul>
                        <li>
                            <NavLink to="/" className={style["nav-link"]}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                        <NavLink
                            activeClassName={style["active-nav-link"]}
                            className={style["nav-link"]}
                            to="/news"
                        >
                            <span className={style["live-icon"]}> &#9679; </span>
                            Live News
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;