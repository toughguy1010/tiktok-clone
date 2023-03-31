import Sidebar from "./Sidebar";
import Header from "../components/Header";
import styles from '../DefaultLayout/DefaulLayout.module.scss';
import classNames from "classnames/bind";
function DefaultLayout({children}) {
    const cx = classNames.bind(styles)
    return (  
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;