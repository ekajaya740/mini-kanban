import clsx from 'clsx';
import PropTypes from 'prop-types'; // ES6
import { twMerge } from 'tailwind-merge';

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  bordered: PropTypes.bool,
  fullWidth: PropTypes.bool,
  asLink: PropTypes.bool,
  href: PropTypes.string,
  color: PropTypes.string,
  usePadding: PropTypes.bool,
  noBg: PropTypes.bool,
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
    noBg,
  } = props;

  if (asLink) {
    return (
      <a
        href={href}
        className={clsx(
          'underline w-full items-center justify-center inline-flex text-sm py-1 text-nowrap',
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
      className={twMerge(
        clsx(
          'inline-flex text-sm gap-2 items-center justify-center text-nowrap bg-slate-600 text-white rounded-md px-3 py-2',
          {
            'bg-transparent px-0 py-0 text-black': noBg,
            border: bordered,
            'px-4': usePadding,
            'w-full justify-center': fullWidth,
            'bg-success text-white': color === 'success',
            'bg-error text-white': color === 'error',
          }
        )
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
