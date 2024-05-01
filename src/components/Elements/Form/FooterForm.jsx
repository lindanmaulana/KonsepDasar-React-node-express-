const FooterForm = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="absolute bottom-2 right-0 w-[860px] flex justify-between px-8">
        <p className="w-[236px] text-[14px] text-[#5867DD] ">
          © 2023 | All rights reserved
        </p>
        <ul className="flex gap-x-8 text-[14px] text-[#5867DD] ">
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Legal</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterForm;
