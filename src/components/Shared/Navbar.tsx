import { IoSunnyOutline } from 'react-icons/io5';
import { RiMoonClearFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { toggleLanguage } from '@/state/Slices/language';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/state/context/theme-provider';
import { Link } from 'react-router-dom';
// import { events } from '@/locales/en';
import { activities } from '@/locales/ar';
import events from '@/locales/ar/events';
import React from 'react';
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.arabic);
  const { setTheme, theme } = useTheme();
  const eventKeys = Object.keys(events) as Array<keyof typeof events>;
  const activityKeys = Object.keys(activities) as Array<keyof typeof activities>;
  const handleToggleLanguage = (language: boolean) => {
    dispatch(toggleLanguage());
    !language ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
  };

  return (
    <nav className='relative flex h-[12vh] w-full items-center justify-between px-5  md:px-10'>
      <Link to='/'>
        <img
          src={`${theme == 'light' ? '/icons/logos/light/logoLight.png' : '/icons/logos/dark/logoDark.png'}`}
          className='w-14 md:w-24'
        />
      </Link>
      <div className='hidden h-full md:flex md:text-sm lg:text-lg'>
        <Link to='/' className='flex h-full items-center hover:opacity-70 md:px-2 lg:px-4'>
          {t('nav:menu:home')}
        </Link>
        <Link to='/aboutus' className='flex h-full items-center hover:opacity-70 md:px-2 lg:px-4'>
          {t('nav:menu:aboutus')}
        </Link>
        <DropdownMenu dir={language ? 'rtl' : 'ltr'}>
          <DropdownMenuTrigger>
            <div className='flex h-full cursor-pointer items-center hover:opacity-70 md:px-2 lg:px-4'>
              {t('nav:menu:upComingEvents')}
              <IoMdArrowDropdown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {eventKeys.map((value, index) => (
              <React.Fragment key={index}>
                <DropdownMenuItem asChild>
                  <Link to={`events/${value}`}>{t(`${value}:title`)}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu dir={language ? 'rtl' : 'ltr'}>
          <DropdownMenuTrigger>
            <div className='flex h-full cursor-pointer items-center hover:opacity-70 md:px-2 lg:px-4'>
              {t('nav:menu:activities')}
              <IoMdArrowDropdown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {activityKeys.map((value, index) => (
              <React.Fragment key={index}>
                <DropdownMenuItem asChild>
                  <Link to={`activity/${value}`}>{t(`activities:${value}:title`)}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to='/contactus' className='flex h-full items-center hover:opacity-70 md:px-2 lg:px-4'>
          {t('nav:menu:contactus')}
        </Link>
        <Link to='/images' className='flex h-full items-center hover:opacity-70 md:px-2 lg:px-4'>
          {t('nav:menu:images')}
        </Link>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <div className='cursor-pointer'>
            {theme === 'light' ? (
              <IoSunnyOutline onClick={() => setTheme('dark')} />
            ) : (
              <RiMoonClearFill onClick={() => setTheme('light')} />
            )}
          </div>
          <hr className='w-6 rotate-90 border-foreground' />
          <div className='relative flex cursor-pointer items-center'>
            <Switch onCheckedChange={() => handleToggleLanguage(language)} />
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
              <DropdownMenuItem asChild>
                <Link to='/' className={`w-full cursor-pointer`}>
                  {t('nav:menu:home')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to='/aboutus' className={`w-full cursor-pointer`}>
                  {t('nav:menu:aboutus')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <div className={`w-full cursor-pointer`}> {t('nav:menu:upComingEvents')}</div>{' '}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {eventKeys.map((value, index) => (
                      <React.Fragment key={index}>
                        <DropdownMenuItem asChild>
                          <Link to={`events/${value}`} className={`w-full cursor-pointer`}>
                            {t(`${value}:title`)}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </React.Fragment>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <div className={`w-full cursor-pointer`}> {t('nav:menu:activities')}</div>{' '}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {activityKeys.map((value, index) => (
                      <React.Fragment key={index}>
                        <DropdownMenuItem asChild>
                          <Link to={`activity/${value}`} className={`w-full cursor-pointer`}>
                            {t(`activities:${value}:title`)}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </React.Fragment>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to='/contactus' className={`w-full cursor-pointer`}>
                  {t('nav:menu:contactus')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to='/images' className={`w-full cursor-pointer`}>
                  {t('nav:menu:images')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
