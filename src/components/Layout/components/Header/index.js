import classNames from "classnames/bind";
import styles from "../Header/Header.module.scss";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";
import { useState, useEffect } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setsearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setsearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx("search-result")} {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon className={cx("loading")} icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>action</div>
      </div>
    </header>
  );
}

export default Header;
