import { CratesList, CratesPanel } from '@/widgets/crates/ui';

const CratesPage = () => {
  return (
    <section className='section min-h-[calc(100vh-76px-48px)] bg-main'>
      <CratesPanel />
      <div className='container'>
        <div className=''>
          <CratesList />
        </div>
      </div>
    </section>
  );
};

export default CratesPage;
