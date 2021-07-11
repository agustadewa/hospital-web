import {Menu, Transition} from '@headlessui/react'
import Link from 'next/link'

function ProfileDisplay({initial}) {
  return <div className="p-3 m-2 rounded-full h-8 w-8 flex items-center justify-center shadow-sm tracking-wide text-gray-600 ring-1 ring-gray-600
          hover:ring-2 hover:ring-gray-600 hover:cursor-pointer hover:text-gray-700">
    {initial}
  </div>;
}

function ProfileMenu({profileProps, authProps}) {
  const renderProfileDisplayMenu = () => <>
    <span>{profileProps?.name ? profileProps.name : "-"}</span>
    <Menu.Button>
      <ProfileDisplay initial={profileProps?.initial ? profileProps.initial : "-"}/>
    </Menu.Button>
  </>

  const renderLoginButton = () => <>
    <div className="my-3 hover:font-medium">
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  </>;

  return <>
    <Menu>

      {authProps?.isAuthorized ? renderProfileDisplayMenu() : renderLoginButton()}

      <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
        <Menu.Items static className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <div className="px-4 py-3">
            <p className="text-sm leading-5">Signed in as</p>
            <p className="text-sm font-medium leading-5 text-gray-900 truncate">
              {profileProps?.email ? profileProps.email : "no email"}
            </p>
          </div>

          <div className="py-1">
            <Menu.Item>
              <a href="#account-settings"
                 className={`hover:bg-gray-100 hover:text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}>
                Account settings
              </a>
            </Menu.Item>
          </div>

          <Menu.Item>
            <a href="#sign-out" className={`hover:bg-red-100 hover:text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}>
              Sign out
            </a>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  </>
}

export function NavBar({profileProps}) {
  return <header className="z-50 sticky top-0 bg-white border-b-2 backdrop-filter backdrop-blur-xl bg-opacity-60">
    <div className="container mx-auto flex justify-between">
      <Link href="/"><a className="flex items-center font-medium text-xl">Agusta Hospital</a></Link>

      <div className="flex items-center">

        <div className="relative">
          <ProfileMenu profileProps={profileProps}/>
        </div>

      </div>
    </div>
  </header>;
}
