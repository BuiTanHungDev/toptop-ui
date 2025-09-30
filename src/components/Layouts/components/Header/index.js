import classNames from 'classnames/bind';
import Styles from './header.module.scss';

const cx = classNames.bind(Styles);
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            {/* Logo */}
            {/* seacr */}
        </div>
    </header>
}

export default Header;
