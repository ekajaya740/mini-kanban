import clsx from 'clsx';
import PropTypes from 'prop-types'; // ES6

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  bordered: PropTypes.bool,
  fullWidth: PropTypes.bool,
  asLink: PropTypes.bool,
  href: PropTypes.string,
  color: PropTypes.string,
  usePadding: PropTypes.bool,
};

export default function Button(props) {
  const {
    children,
    onClick,
    bordered,
    fullWidth,
    href,
    asLink,
    color,
    usePadding,
  } = props;

  if (asLink) {
    return (
      <a
        href={href}
        className={clsx(
          'underline w-full items-center justify-center inline-flex text-sm py-1',
          {
            'px-4': usePadding,
          }
        )}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={clsx('inline-flex space-x-2 text-sm items-center py-1', {
        border: bordered,
        'px-4': usePadding,
        'w-full justify-center': fullWidth,
        'bg-success text-white': color === 'success',
      })}
      onClick={onClick}>
      {children}
    </button>
  );
}
