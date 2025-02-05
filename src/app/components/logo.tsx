const Logo = () => (
    <div className={`flex flex-col lg:flex-row items-center gap-[2px]`}>
        <img 
            src="/whiteLogo.png" 
            alt="Golden Media Nigeria Logo" 
            className="w-36 h-auto" // Adjust the size of the logo as needed
        />
        <span className="text-xl font-bold font-aeonik text-white">Golden Media NG</span>
    </div>
);

export default Logo;