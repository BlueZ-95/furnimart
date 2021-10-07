export const Header = () => {
  return (
    <div className="header bg-gray-100 py-8">
      <div className="container mx-auto px-48">
        <div className="flex items-center justify-between">
          <div className="header__logo">
            <h1 className="text-3xl font-bold">
              <span className="text-green-500">Furni</span>mart
            </h1>
          </div>
          <ul className="header__navigation text-sm text-gray-700 font-medium">
            <li>HOME</li>
            <li>FEATURES</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>SHOP</li>
            <li>NEWS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
