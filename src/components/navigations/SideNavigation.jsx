import Logo from '../../assets/logo.svg';

export default function SideNavigation() {
  return (
    <aside className='w-16 h-screen flex justify-center items-start py-5 bg-[#2F3136] min-w-fit px-2'>
      <img src={Logo} alt='Logo' width={45} height={45} />
    </aside>
  );
}
