import { NavbarItems } from '@/widgets/lib/consts/NavbarItems';

const Footer = () => {
  return (
    <section className='section bg-substrate h-[48px]'>
      <div className='container'>
        <div className='flex justify-between items-center py-[11px]'>
          <p className='text-textSecondary text-md'>Copyright &copy; Skincash.ru</p>
          <ul className='flex gap-16'>
            {NavbarItems.map(({ title, id }) => (
              <li key={id}>
                <span className='text-textSecondary text-md font-normal'>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
