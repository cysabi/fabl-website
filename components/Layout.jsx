const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-fabl-indigo-dark h-16 py-1 w-full flex items-center gap-2 px-2">
        <img src="/FABL_IconLogo.svg" className="h-full aspect-square" />
        <img src="/FABL_TextLogo.svg" className="h-full py-2 hidden sm:block" />
      </div>
      {children}
    </>
  );
};
export default Layout;
