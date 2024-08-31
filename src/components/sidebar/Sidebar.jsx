import imgUrl from '../../assets/logo.svg';

export default function Sidebar() {
  return (
    <div className='h-dvh fixed left-0 py-5 px-[11px] bg-[#2F3136] w-fit'>
      <img src={imgUrl} alt='Logo' />
    </div>
  );
}
