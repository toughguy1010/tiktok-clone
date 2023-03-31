import classNames from "classnames/bind";
import styles from "../Sidebar/Sidebar.module.scss"
function Sidebar() {
    const cx = classNames.bind(styles)
    return ( 
        <aside className={cx('wrapper')}>
                <h1>sidebar</h1>
        </aside>
     );
}

export default Sidebar;