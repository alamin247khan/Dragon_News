import logo from '../assets/logo.png';

function Header() {
  const currentTime = new Date().toLocaleString();

  return (
    <div className="text-center mt-5">
      <img
        src={logo}
        alt="Logo"
        className="h-12 mx-auto mb-2 block"
      />
      <p className="mb-2 text-lg font-medium text-gray-700">Journalism Without Fear or Favour</p>
      <p className="mb-2 text-sm text-gray-500">{currentTime}</p>
    </div>
  );
}

export default Header;