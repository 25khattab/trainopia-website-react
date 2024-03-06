import { IoSunnyOutline } from 'react-icons/io5';
import { RiMoonClearFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Switch } from '@/components/ui/switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAppSelector, useAppDispatch } from '@/state/hooks';
import { toggleLanguage } from '@/state/Slices/language';
import { toggleTheme } from '@/state/Slices/theme';
import { useTranslation } from 'react-i18next';
import { nav } from '@/locales/ar';
import { useTheme } from '@/state/context/theme-provider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation('nav');
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.arabic);
  const { setTheme, theme } = useTheme();

  const handleToggleLanguage = (language: boolean) => {
    dispatch(toggleLanguage());
    !language ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
  };
  const handleToggletheme = () => {
    dispatch(toggleTheme());
  };

  // const dropDownKeys = Object.keys(nav.dropDownMenu) as Array<keyof typeof nav.dropDownMenu>;
  const menuKeys = Object.keys(nav.menu) as Array<keyof typeof nav.menu>;
  return (
    <nav className='flex h-[10vh] w-full items-center justify-between px-5 md:px-10'>
      <Link to='/'>
        <img src='icons/logo.png' className='w-24 md:w-14 lg:w-24 ' />
      </Link>
      <div className=' hidden  h-full md:flex md:text-sm lg:text-lg '>
        {menuKeys.map((key) => (
          <Link
            key={key}
            to={key == 'home' ? '/' : `/${key}`}
            className='flex h-full  items-center hover:opacity-70 md:px-2 lg:px-4  '
          >
            {t(`menu.${key}`)}
          </Link>
        ))}
      </div>
      <div className='flex items-center   '>
        <div className='flex items-center'>
          <div onClick={handleToggletheme} className='cursor-pointer '>
            {theme === 'light' ? (
              <IoSunnyOutline onClick={() => setTheme('dark')} />
            ) : (
              <RiMoonClearFill onClick={() => setTheme('light')} />
            )}
          </div>
          <hr className='w-6 rotate-90 border-foreground ' />
          <div className='relative flex cursor-pointer items-center  '>
            <Switch onCheckedChange={() => handleToggleLanguage(language)} className='' />
            {language ? (
              <p className='pointer-events-none absolute left-0 mx-1 text-xs'>Ar</p>
            ) : (
              <p className='pointer-events-none absolute left-0 mx-1 text-xs text-background'>En</p>
            )}
          </div>
        </div>
        <div className='flex px-6 md:hidden'>
          <DropdownMenu dir={language ? 'rtl' : 'ltr'}>
            <DropdownMenuTrigger>
              <RxHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {menuKeys.map((key) => (
                <DropdownMenuItem key={key} asChild className=''>
                  <Link key={key} to={key == 'home' ? '/' : `/${key}`} className={`w-full cursor-pointer   `}>
                    {t(`menu.${key}`)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
