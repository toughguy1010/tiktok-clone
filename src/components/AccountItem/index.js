import classNames from "classnames/bind";
import styles from "../AccountItem/AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/images";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src={images.avatar}
        alt="ten"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
