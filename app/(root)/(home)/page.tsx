import SearchForm from "@/components/SearchForm";

const Page = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Next Pro Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      Filters
    </main>
  );
};

export default Page;