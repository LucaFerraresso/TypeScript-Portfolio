const Navbar = () => {
  return (
    <div className="top-0 flex flex-row justify-between items-center  text-white h-16 px-8">
      <div className="text-2xl font-bold">Logo</div>
      <div className="flex gap-4">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};
export default Navbar;
