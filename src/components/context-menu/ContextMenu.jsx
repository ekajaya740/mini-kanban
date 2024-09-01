export default function ContextMenu(props) {
  const { isOpen } = props;
  return (
    <div
      className={`absolute } z-50 bg-white rounded-md shadow-md ${
        isOpen ? 'block' : 'hidden'
      }`}>
      <ul className='py-2'>
        {/* {options.map((option, index) => ( */}
        <li className='px-4 py-2 hover:bg-gray-100'>
          {/* {option.label} */}aab
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
}
