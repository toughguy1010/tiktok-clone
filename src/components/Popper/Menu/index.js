import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.moduel.scss";
import { Wrapper as PopperWrapper } from "../index";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    console.log(items);
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0 , 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
